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

export type Mensagem = { papel: "cliente" | "ia"; texto: string; whatsapp_id: string | null };

/** Histórico da conversa, do mais antigo para o mais novo (últimas 40). */
export async function listarMensagens(conversaId: string): Promise<Mensagem[]> {
  const { data, error } = await db()
    .from("mensagens")
    .select("papel, texto, whatsapp_id")
    .eq("conversa_id", conversaId)
    .order("criada_em", { ascending: false })
    .limit(40);
  if (error) throw new Error(`Supabase (mensagens): ${error.message}`);
  return (data as Mensagem[]).reverse();
}

/** whatsapp_id da última mensagem do cliente (para juntar mensagens picadas). */
export async function ultimaMensagemCliente(conversaId: string): Promise<string | null> {
  const { data, error } = await db()
    .from("mensagens")
    .select("whatsapp_id")
    .eq("conversa_id", conversaId)
    .eq("papel", "cliente")
    .order("criada_em", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) throw new Error(`Supabase (mensagens): ${error.message}`);
  return (data?.whatsapp_id as string | undefined) ?? null;
}

export async function gravarMensagemIA(conversaId: string, texto: string): Promise<void> {
  const { error } = await db()
    .from("mensagens")
    .insert({ conversa_id: conversaId, papel: "ia", texto, tipo: "texto" });
  if (error) throw new Error(`Supabase (mensagens): ${error.message}`);
}

export async function atualizarConversa(
  conversaId: string,
  campos: Partial<Omit<Conversa, "id" | "telefone">>,
): Promise<void> {
  const { error } = await db().from("conversas").update(campos).eq("id", conversaId);
  if (error) throw new Error(`Supabase (conversas): ${error.message}`);
}

/**
 * Marca a conversa como encaminhada só se ainda não estava. Retorna true
 * para quem conseguiu marcar (evita mandar dois avisos ao Kleber).
 */
export async function marcarEncaminhada(
  conversaId: string,
  campos: { nome: string; empresa: string; necessidade: string; interesse: string },
): Promise<boolean> {
  const { data, error } = await db()
    .from("conversas")
    .update({ ...campos, status: "encaminhada", encaminhada_em: new Date().toISOString() })
    .eq("id", conversaId)
    .neq("status", "encaminhada")
    .select("id");
  if (error) throw new Error(`Supabase (conversas): ${error.message}`);
  return (data?.length ?? 0) > 0;
}
