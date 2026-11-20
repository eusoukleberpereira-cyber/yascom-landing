import "server-only";
import { config } from "./config";

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

async function chamar(caminho: string, corpo: unknown): Promise<Response> {
  return fetch(`${config.uazapiUrl}${caminho}`, {
    method: "POST",
    headers: { token: config.uazapiToken, "Content-Type": "application/json" },
    body: JSON.stringify(corpo),
  });
}

/** Envia texto. `delay` mostra "digitando..." antes de enviar. */
export async function enviarTexto(numero: string, texto: string): Promise<void> {
  const delay = Math.min(1000 + texto.length * 25, 4000);
  const r = await chamar("/send/text", { number: numero, text: texto, delay, readchat: true });
  if (!r.ok) throw new Error(`UAZAPI /send/text ${r.status}: ${await r.text()}`);
}

/** Mostra "digitando..." enquanto a IA pensa (some sozinho ao enviar). */
export async function mostrarDigitando(numero: string): Promise<void> {
  await chamar("/message/presence", { number: numero, presence: "composing", delay: 30000 }).catch(
    () => undefined,
  );
}

/** Baixa o áudio de uma mensagem (MP3). */
export async function baixarAudio(mensagemId: string): Promise<{ dados: Blob; tipo: string }> {
  const r = await chamar("/message/download", { id: mensagemId, generate_mp3: true });
  if (!r.ok) throw new Error(`UAZAPI /message/download ${r.status}: ${await r.text()}`);
  const j = (await r.json()) as { fileURL?: string; mimetype?: string };
  if (!j.fileURL) throw new Error("UAZAPI /message/download sem fileURL");
  const arquivo = await fetch(j.fileURL);
  if (!arquivo.ok) throw new Error(`Download do áudio ${arquivo.status}`);
  const tipo = j.mimetype ?? "audio/mpeg";
  return { dados: new Blob([await arquivo.arrayBuffer()], { type: tipo }), tipo };
}
