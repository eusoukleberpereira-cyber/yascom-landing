import { timingSafeEqual } from "node:crypto";
import { after, type NextRequest } from "next/server";
import { config } from "@/lib/agente/config";
import { filtrarMensagem } from "@/lib/agente/filtros";
import { processarMensagem } from "@/lib/agente/processar";
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
        // Só para testes: deixa o Kleber falar com a IA do número pessoal.
        permitirKleber: process.env.AGENTE_PERMITIR_KLEBER === "1",
      });
      if (!filtro.atender) {
        console.info(`[agente] ignorada: ${filtro.motivo}`);
        return;
      }
      await processarMensagem(filtro.mensagem);
    } catch (erro) {
      console.error("[agente] erro ao processar mensagem", erro);
    }
  });

  return Response.json({ ok: true });
}
