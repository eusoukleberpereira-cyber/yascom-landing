// Número do agente de IA de pré-atendimento (todos os contatos passam pela IA primeiro)
const BASE = "https://wa.me/5541985046918?text=";

const encode = (msg: string) => BASE + encodeURIComponent(msg);

export const WA = {
  header:   encode("Olá Kleber! Vi o site da YASCOM e quero saber como vocês podem ajudar minha empresa."),
  hero:     encode("Olá Kleber! Vi o site da YASCOM e quero saber como vocês podem ajudar minha empresa."),
  agente:   encode("Olá Kleber! Tenho interesse no Agente de IA da YASCOM. Como funciona?"),
  crm:      encode("Olá Kleber! Quero saber mais sobre o CRM Personalizado da YASCOM."),
  completo: encode("Olá Kleber! Tenho interesse na Solução Completa da YASCOM. Podemos conversar?"),
  api:        encode("Olá Kleber! Quero saber mais sobre a API Oficial do WhatsApp Business com a YASCOM."),
  automacoes: encode("Olá Kleber! Quero automatizar tarefas internas da minha empresa. Como funciona?"),
  documentos: encode("Olá Kleber! Tenho interesse no Processamento de Documentos com IA da YASCOM."),
  reuniao:    encode("Olá Kleber! Vi o site da YASCOM e quero marcar uma Reunião Estratégica. Qual o melhor dia e horário?"),
};
