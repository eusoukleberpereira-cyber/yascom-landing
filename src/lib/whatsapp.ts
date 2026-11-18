const BASE = "https://wa.me/5541999112899?text=";

const encode = (msg: string) => BASE + encodeURIComponent(msg);

const DIAGNOSTICO = "Olá Kleber! Vim pelo site da YASCOM e quero meu diagnóstico gratuito.";

const interesse = (solucao: string) =>
  encode(`${DIAGNOSTICO} Tenho interesse em ${solucao}${solucao.endsWith(".") ? "" : "."}`);

/** Links do WhatsApp. Todos citam o diagnóstico gratuito (spec v2). */
export const WA = {
  diagnostico: encode(DIAGNOSTICO),
  agentes: interesse("Agentes de I.A."),
  crm: interesse("CRM Personalizado"),
  api: interesse("API Oficial do WhatsApp Business"),
  automacoes: interesse("Automações de Tarefas Internas"),
  documentos: interesse("Processamento de Documentos"),
  sistemas: interesse("Sistemas sob medida"),
  trafego: interesse("Tráfego Pago"),

  /* LEGADO v1: usados pelas seções antigas até serem substituídas (Fases 07–09). */
  header: encode(DIAGNOSTICO),
  hero: encode(DIAGNOSTICO),
  agente: interesse("Agentes de I.A."),
  completo: encode(DIAGNOSTICO),
  cta: encode(DIAGNOSTICO),
} as const;

export type WaKey = keyof typeof WA;
