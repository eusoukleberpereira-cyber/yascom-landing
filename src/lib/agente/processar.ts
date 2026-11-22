import "server-only";
import { transcreverAudio } from "./audio";
import { config } from "./config";
import {
  atualizarConversa,
  gravarMensagemCliente,
  gravarMensagemIA,
  listarMensagens,
  marcarEncaminhada,
  obterConversa,
  respostasNasUltimas24h,
  ultimaMensagemCliente,
  type Conversa,
} from "./db";
import type { MensagemRecebida } from "./filtros";
import { RespostaIndisponivel, responder, type Encaminhamento } from "./ia";
import { enviarTexto, mostrarDigitando } from "./uazapi";

/** Máximo de respostas da IA por número em 24 h (protege contra enxurrada). */
const LIMITE_RESPOSTAS_24H = 30;

/** Tempo de espera para juntar mensagens picadas ("oi" / "tudo bem?" / ...). */
const ESPERA_MS = 8000;

/** Só se o modelo principal e o reserva falharem. Neutra: o cliente não vê erro. */
const MENSAGEM_DE_ERRO = "Recebemos sua mensagem. O Kleber entrará em contato em breve.";

const TIPOS_DE_MIDIA: Record<string, string> = {
  ImageMessage: "uma imagem",
  VideoMessage: "um vídeo",
  DocumentMessage: "um arquivo",
  DocumentWithCaptionMessage: "um arquivo",
  StickerMessage: "uma figurinha",
  ContactMessage: "um contato",
  LocationMessage: "uma localização",
};

const esperar = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Converte a mensagem recebida em texto (transcreve áudio). */
async function textoDaMensagem(m: MensagemRecebida): Promise<{ texto: string; tipo: string }> {
  if (m.tipo === "AudioMessage") {
    try {
      const transcricao = await transcreverAudio(m.whatsappId);
      if (transcricao) return { texto: transcricao, tipo: "audio" };
    } catch (erro) {
      console.error("[agente] falha ao transcrever áudio", erro);
    }
    return {
      texto: "[o cliente enviou um áudio que não deu para entender; peça para escrever]",
      tipo: "audio",
    };
  }
  if (m.texto) return { texto: m.texto, tipo: "texto" };
  const midia = TIPOS_DE_MIDIA[m.tipo] ?? `um conteúdo do tipo ${m.tipo}`;
  return { texto: `[o cliente enviou ${midia}]`, tipo: m.tipo };
}

/**
 * Os campos do aviso vêm da conversa com um desconhecido: tira links e
 * quebras de linha e limita o tamanho, para ninguém usar o aviso como golpe.
 */
function limpar(campo: string): string {
  return campo
    .replace(/(https?:\/\/|www\.)\S+/gi, "[link removido]")
    .replace(/\b[a-z0-9-]+\.(xyz|com|net|org|br|io|app|link|info|site|online|top)(\/\S*)?\b/gi, "[link removido]")
    .replace(/[*_~`]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);
}

function avisoParaKleber(c: Conversa, dados: Encaminhamento): string {
  const d = {
    nome: limpar(dados.nome),
    empresa: limpar(dados.empresa),
    interesse: limpar(dados.interesse),
    necessidade: limpar(dados.necessidade),
  };
  return [
    "🔔 *Novo cliente pelo site*",
    "",
    `*Nome:* ${d.nome}`,
    `*Empresa:* ${d.empresa}`,
    `*Interesse:* ${d.interesse}`,
    `*Precisa de:* ${d.necessidade}`,
    "",
    `Chamar: https://wa.me/${c.telefone}`,
  ].join("\n");
}

async function avisarKleberDeErro(c: Conversa, motivo: string): Promise<void> {
  await enviarTexto(
    config.kleberWhatsapp,
    `⚠️ A IA não conseguiu responder um contato (${motivo}).\nChamar: https://wa.me/${c.telefone}`,
  ).catch((e) => console.error("[agente] falha ao avisar o Kleber do erro", e));
}

/** Fluxo completo de uma mensagem recebida. */
export async function processarMensagem(m: MensagemRecebida): Promise<void> {
  const { texto, tipo } = await textoDaMensagem(m);
  const conversa = await obterConversa(m.telefone, m.nomeWhatsapp);
  const nova = await gravarMensagemCliente({
    conversaId: conversa.id,
    texto,
    tipo,
    whatsappId: m.whatsappId,
  });
  if (!nova) {
    console.info(`[agente] repetida: conversa ${conversa.id}`);
    return;
  }

  // Espera o cliente terminar de escrever. Se chegou outra mensagem depois
  // desta, quem responde é o processamento daquela.
  await esperar(ESPERA_MS);
  if ((await ultimaMensagemCliente(conversa.id)) !== m.whatsappId) {
    console.info(`[agente] aguardando mais mensagens: conversa ${conversa.id}`);
    return;
  }

  if ((await respostasNasUltimas24h(conversa.id)) >= LIMITE_RESPOSTAS_24H) {
    console.warn(`[agente] limite diário atingido: conversa ${conversa.id}`);
    return;
  }

  await mostrarDigitando(m.telefone);
  const atual = await obterConversa(m.telefone, m.nomeWhatsapp);
  const historico = await listarMensagens(atual.id);

  let resposta: string;
  try {
    resposta = await responder(
      historico,
      {
        status: atual.status,
        nomeWhatsapp: atual.nome_whatsapp,
        nome: atual.nome,
        empresa: atual.empresa,
        necessidade: atual.necessidade,
      },
      {
        encaminhar: async (dados) => {
          const primeiraVez = await marcarEncaminhada(atual.id, dados);
          if (!primeiraVez) return "Esta conversa já tinha sido encaminhada. Não avise de novo.";
          await enviarTexto(config.kleberWhatsapp, avisoParaKleber(atual, dados));
          console.info(`[agente] encaminhada ao Kleber: conversa ${atual.id}`);
          return "Aviso enviado ao Kleber. Agora escreva a despedida curta para a pessoa.";
        },
        marcarNaoCliente: async (motivo) => {
          await atualizarConversa(atual.id, { status: "nao_cliente", necessidade: motivo });
          console.info(`[agente] não cliente: conversa ${atual.id} (${motivo})`);
          return "Marcado. Escreva uma resposta educada e curta para a pessoa.";
        },
      },
    );
  } catch (erro) {
    const motivo = erro instanceof RespostaIndisponivel ? erro.message.slice(0, 160) : "erro da IA";
    console.error("[agente] IA não respondeu", erro);
    await enviarTexto(m.telefone, MENSAGEM_DE_ERRO);
    await gravarMensagemIA(atual.id, MENSAGEM_DE_ERRO);
    await avisarKleberDeErro(atual, motivo);
    return;
  }

  await enviarTexto(m.telefone, resposta);
  await gravarMensagemIA(atual.id, resposta);
  console.info(`[agente] respondida: conversa ${atual.id}`);
}
