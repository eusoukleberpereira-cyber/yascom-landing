import "server-only";

function obrigatoria(nome: string): string {
  const valor = process.env[nome];
  if (!valor) throw new Error(`Variável de ambiente ausente: ${nome}`);
  return valor;
}

/** Configuração do agente de pré-atendimento, lida só no servidor. */
export const config = {
  get uazapiUrl() {
    return obrigatoria("UAZAPI_SERVER_URL").replace(/\/+$/, "");
  },
  get uazapiToken() {
    return obrigatoria("UAZAPI_INSTANCE_TOKEN");
  },
  get webhookSecret() {
    return obrigatoria("WHATSAPP_WEBHOOK_SECRET");
  },
  /** Número pessoal do Kleber: recebe os avisos e nunca é atendido pela IA. */
  get kleberWhatsapp() {
    return obrigatoria("KLEBER_WHATSAPP").replace(/\D/g, "");
  },
  get supabaseUrl() {
    return obrigatoria("SUPABASE_URL");
  },
  get supabaseServiceKey() {
    return obrigatoria("SUPABASE_SERVICE_ROLE_KEY");
  },
};
