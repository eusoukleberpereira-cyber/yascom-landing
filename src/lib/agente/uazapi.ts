import "server-only";

/**
 * Formato do webhook "messages" da UAZAPI (docs.uazapi.com/webhook/messages).
 * Só os campos que o agente usa; o resto é ignorado.
 */
export type WebhookUazapi = {
  EventType?: string;
  owner?: string;
  token?: string;
  message?: {
    id?: string;
    messageid?: string;
    chatid?: string;
    sender?: string;
    sender_pn?: string;
    senderName?: string;
    fromMe?: boolean;
    isGroup?: boolean;
    messageType?: string;
    text?: string;
    wasSentByApi?: boolean;
  };
};

/** Extrai só os dígitos de um JID do WhatsApp ("5541...@s.whatsapp.net"). */
export function telefoneDoJid(jid: string | undefined): string | null {
  if (!jid || !jid.endsWith("@s.whatsapp.net")) return null;
  const digitos = jid.split("@")[0].split(":")[0].replace(/\D/g, "");
  return digitos || null;
}
