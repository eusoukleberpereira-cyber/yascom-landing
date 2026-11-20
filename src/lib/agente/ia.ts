import "server-only";
import Anthropic from "@anthropic-ai/sdk";
import { PROMPT_FIXO, contextoDaConversa, type ContextoConversa } from "./prompt";
import type { Mensagem } from "./db";

const MODELO = "claude-haiku-5-5";

const INTERESSES = [
  "Agente de IA",
  "CRM Personalizado",
  "IA + CRM Integrados",
  "API Oficial WhatsApp Business",
  "Automações de Tarefas Internas",
  "Processamento de Documentos",
  "Reunião Estratégica",
  "Ainda não sabe",
] as const;

const FERRAMENTAS: Anthropic.Tool[] = [
  {
    name: "encaminhar_para_kleber",
    description:
      "Passa o contato para o Kleber, que recebe um aviso no WhatsApp pessoal e chama a pessoa. Use quando já souber nome, empresa e o que a pessoa precisa. Use uma única vez por conversa.",
    strict: true,
    input_schema: {
      type: "object",
      additionalProperties: false,
      properties: {
        nome: { type: "string", description: "Nome da pessoa" },
        empresa: { type: "string", description: "Nome da empresa (ou o que a pessoa disser)" },
        necessidade: {
          type: "string",
          description: "O que a pessoa precisa, em uma frase curta",
        },
        interesse: { type: "string", enum: [...INTERESSES] },
      },
      required: ["nome", "empresa", "necessidade", "interesse"],
    },
  },
  {
    name: "marcar_nao_cliente",
    description:
      "Marca a conversa como não sendo de um cliente (emprego, vendedor, pessoa física, spam). O Kleber não é avisado.",
    strict: true,
    input_schema: {
      type: "object",
      additionalProperties: false,
      properties: { motivo: { type: "string", description: "Motivo em poucas palavras" } },
      required: ["motivo"],
    },
  },
];

export type Encaminhamento = {
  nome: string;
  empresa: string;
  necessidade: string;
  interesse: string;
};

export type Acoes = {
  /** Executa o encaminhamento; retorna o texto do resultado para a IA. */
  encaminhar: (dados: Encaminhamento) => Promise<string>;
  marcarNaoCliente: (motivo: string) => Promise<string>;
};

export class RespostaIndisponivel extends Error {}

let cliente: Anthropic | null = null;
const anthropic = () => (cliente ??= new Anthropic());

/** Junta o histórico em turnos alternados (cliente → user, IA → assistant). */
function montarMensagens(historico: Mensagem[]): Anthropic.MessageParam[] {
  const msgs: Anthropic.MessageParam[] = [];
  for (const m of historico) {
    const role = m.papel === "cliente" ? "user" : "assistant";
    const ultima = msgs.at(-1);
    if (ultima && ultima.role === role && typeof ultima.content === "string") {
      ultima.content += `\n${m.texto}`;
    } else {
      msgs.push({ role, content: m.texto });
    }
  }
  while (msgs[0]?.role === "assistant") msgs.shift();
  return msgs;
}

/**
 * Gera a próxima resposta da IA. Executa as ferramentas que ela chamar e
 * devolve o texto final para enviar ao cliente.
 */
export async function responder(
  historico: Mensagem[],
  contexto: ContextoConversa,
  acoes: Acoes,
): Promise<string> {
  const messages = montarMensagens(historico);
  if (messages.length === 0) throw new RespostaIndisponivel("histórico vazio");

  const system: Anthropic.TextBlockParam[] = [
    { type: "text", text: PROMPT_FIXO, cache_control: { type: "ephemeral" } },
    { type: "text", text: contextoDaConversa(contexto) },
  ];

  for (let volta = 0; volta < 4; volta++) {
    const resposta = await anthropic().messages.create({
      model: MODELO,
      max_tokens: 2048,
      output_config: { effort: "low" },
      system,
      tools: FERRAMENTAS,
      messages,
    });

    if (resposta.stop_reason === "refusal") {
      throw new RespostaIndisponivel(`recusa: ${resposta.stop_details?.category ?? "?"}`);
    }

    const texto = resposta.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text.trim())
      .filter(Boolean)
      .join("\n");

    if (resposta.stop_reason !== "tool_use") {
      if (!texto) throw new RespostaIndisponivel(`sem texto (${resposta.stop_reason})`);
      return texto;
    }

    messages.push({ role: "assistant", content: resposta.content });
    const resultados: Anthropic.ToolResultBlockParam[] = [];
    for (const bloco of resposta.content) {
      if (bloco.type !== "tool_use") continue;
      try {
        const entrada = bloco.input as Record<string, string>;
        const conteudo =
          bloco.name === "encaminhar_para_kleber"
            ? await acoes.encaminhar({
                nome: entrada.nome,
                empresa: entrada.empresa,
                necessidade: entrada.necessidade,
                interesse: entrada.interesse,
              })
            : bloco.name === "marcar_nao_cliente"
              ? await acoes.marcarNaoCliente(entrada.motivo)
              : "Ferramenta desconhecida.";
        resultados.push({ type: "tool_result", tool_use_id: bloco.id, content: conteudo });
      } catch (erro) {
        console.error("[agente] erro na ferramenta", bloco.name, erro);
        resultados.push({
          type: "tool_result",
          tool_use_id: bloco.id,
          content: "Erro ao executar. Diga à pessoa que o Kleber vai entrar em contato.",
          is_error: true,
        });
      }
    }
    messages.push({ role: "user", content: resultados });
  }
  throw new RespostaIndisponivel("ferramentas em excesso");
}
