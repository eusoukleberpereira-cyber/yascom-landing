import { timingSafeEqual } from "node:crypto";
import { after, type NextRequest } from "next/server";
import { config } from "@/lib/agente/config";
import { gravarMensagemCliente, obterConversa } from "@/lib/agente/db";
import { filtrarMensagem } from "@/lib/agente/filtros";
import type { WebhookUazapi } from "@/lib/agente/uazapi";

export const maxDuration = 60;

function segredoValido(recebido: string | null): boolean {
  if (!recebido) return false;
  const a = Buffer.from(recebido);
  const b = Buffer.from(config.webhookSecret);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** Webhook da UAZAPI: responde 200 na hora e processa depois, com after(). */
export async function POST(request: NextRequest) {
  if (!segredoValido(request.nextUrl.searchParams.get("secret"))) {
    return new Response("unauthorized", { status: 401 });
  }

  let payload: WebhookUazapi;
  try {
    payload = await request.json();
  } catch {
    return new Response("bad request", { status: 400 });
  }

  after(async () => {
    try {
      const filtro = filtrarMensagem(payload, {
        tokenInstancia: config.uazapiToken,
        kleberWhatsapp: config.kleberWhatsapp,
      });
      if (!filtro.atender) {
        console.info(`[agente] ignorada: ${filtro.motivo}`);
        return;
      }
      const { mensagem } = filtro;
      const conversa = await obterConversa(mensagem.telefone, mensagem.nomeWhatsapp);
      const nova = await gravarMensagemCliente({
        conversaId: conversa.id,
        texto: mensagem.texto,
        tipo: mensagem.tipo,
        whatsappId: mensagem.whatsappId,
      });
      console.info(
        `[agente] ${nova ? "gravada" : "repetida"}: conversa ${conversa.id}, tipo ${mensagem.tipo}`,
      );
      // Fase 12: chamar a IA e responder.
    } catch (erro) {
      console.error("[agente] erro ao processar mensagem", erro);
    }
  });

  return Response.json({ ok: true });
}
