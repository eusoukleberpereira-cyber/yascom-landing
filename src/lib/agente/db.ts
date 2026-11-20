import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { config } from "./config";

let cliente: SupabaseClient | null = null;

/** Cliente com a chave service_role: só o servidor usa (RLS bloqueia o resto). */
export function db(): SupabaseClient {
  if (!cliente) {
    cliente = createClient(config.supabaseUrl, config.supabaseServiceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return cliente;
}

export type StatusConversa = "em_andamento" | "encaminhada" | "nao_cliente";

export type Conversa = {
  id: string;
  telefone: string;
  nome_whatsapp: string | null;
  nome: string | null;
  empresa: string | null;
  necessidade: string | null;
  interesse: string | null;
  origem: string | null;
  status: StatusConversa;
  encaminhada_em: string | null;
  ultima_mensagem_em: string;
};

/** Busca a conversa do telefone ou cria uma nova. */
export async function obterConversa(
  telefone: string,
  nomeWhatsapp: string | null,
): Promise<Conversa> {
  const { data, error } = await db()
    .from("conversas")
    .upsert(
      { telefone, nome_whatsapp: nomeWhatsapp, ultima_mensagem_em: new Date().toISOString() },
      { onConflict: "telefone" },
    )
    .select()
    .single();
  if (error) throw new Error(`Supabase (conversas): ${error.message}`);
  return data as Conversa;
}

/**
 * Grava a mensagem do cliente. Retorna false se ela já tinha sido gravada
 * (a UAZAPI reenviou o mesmo webhook), para não responder duas vezes.
 */
export async function gravarMensagemCliente(params: {
  conversaId: string;
  texto: string;
  tipo: string;
  whatsappId: string;
}): Promise<boolean> {
  const { error } = await db().from("mensagens").insert({
    conversa_id: params.conversaId,
    papel: "cliente",
    texto: params.texto,
    tipo: params.tipo,
    whatsapp_id: params.whatsappId,
  });
  if (!error) return true;
  if (error.code === "23505") return false; // whatsapp_id repetido
  throw new Error(`Supabase (mensagens): ${error.message}`);
}
