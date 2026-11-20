import "server-only";
import { telefoneComparavel, telefoneDoJid, type WebhookUazapi } from "./uazapi";

/** Corta textos gigantes (o WhatsApp aceita até ~65 mil caracteres). */
const LIMITE_TEXTO = 1500;

export type MensagemRecebida = {
  whatsappId: string;
  telefone: string;
  nomeWhatsapp: string | null;
  texto: string;
  tipo: string;
};

export type ResultadoFiltro =
  | { atender: true; mensagem: MensagemRecebida }
  | { atender: false; motivo: string };

/**
 * Decide se a mensagem deve chegar à IA. Ignora: outros eventos, grupos,
 * status, mensagens do próprio número, enviadas pela API e as do número do
 * Kleber (senão a IA trataria o próprio Kleber como cliente).
 */
export function filtrarMensagem(
  payload: WebhookUazapi,
  opcoes: { tokenInstancia: string; kleberWhatsapp: string; permitirKleber?: boolean },
): ResultadoFiltro {
  if (payload.EventType !== "messages") return { atender: false, motivo: "evento" };
  // Segunda trava além do segredo da URL: o webhook da UAZAPI traz o token
  // da instância. Sem ele, é chamada forjada (ex.: URL vazada).
  if (payload.token !== opcoes.tokenInstancia) return { atender: false, motivo: "instancia" };

  const m = payload.message;
  if (!m) return { atender: false, motivo: "sem_mensagem" };
  if (m.isGroup || m.chatid?.endsWith("@g.us")) return { atender: false, motivo: "grupo" };
  if (m.chatid === "status@broadcast" || m.chatid?.endsWith("@newsletter")) {
    return { atender: false, motivo: "status" };
  }
  if (m.fromMe) return { atender: false, motivo: "proprio_numero" };
  if (m.wasSentByApi) return { atender: false, motivo: "enviada_pela_api" };

  const telefone =
    telefoneDoJid(m.chatid) ?? telefoneDoJid(m.sender_pn) ?? telefoneDoJid(m.sender);
  if (!telefone) return { atender: false, motivo: "sem_telefone" };
  const ehKleber =
    telefoneComparavel(telefone) === telefoneComparavel(opcoes.kleberWhatsapp);
  if (ehKleber && !opcoes.permitirKleber) {
    return { atender: false, motivo: "kleber" };
  }

  const whatsappId = m.messageid ?? m.id;
  if (!whatsappId) return { atender: false, motivo: "sem_id" };

  return {
    atender: true,
    mensagem: {
      whatsappId,
      telefone,
      nomeWhatsapp: m.senderName?.trim() || null,
      texto: (m.text?.trim() ?? "").slice(0, LIMITE_TEXTO),
      tipo: m.messageType ?? "desconhecido",
    },
  };
}
