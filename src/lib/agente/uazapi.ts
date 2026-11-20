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

/**
 * Forma comparável de um celular brasileiro. O WhatsApp de muitas contas
 * antigas usa o número sem o nono dígito (ex.: o 41 99911-2899 chega como
 * 554199112899), então "5541999112899" e "554199112899" são a mesma pessoa.
 */
export function telefoneComparavel(digitos: string): string {
  if (digitos.length === 13 && digitos.startsWith("55") && digitos[4] === "9") {
    return digitos.slice(0, 4) + digitos.slice(5);
  }
  return digitos;
}

/** Extrai só os dígitos de um JID do WhatsApp ("5541...@s.whatsapp.net"). */
export function telefoneDoJid(jid: string | undefined): string | null {
  if (!jid || !jid.endsWith("@s.whatsapp.net")) return null;
  const digitos = jid.split("@")[0].split(":")[0].replace(/\D/g, "");
  return digitos || null;
}
