const BASE = "https://wa.me/5541999112899?text=";

const encode = (msg: string) => BASE + encodeURIComponent(msg);

export const WA = {
  header:   encode("Olá Kleber! Vi o site da YASCOM e quero saber como vocês podem ajudar minha empresa."),
  hero:     encode("Olá Kleber! Vi o site da YASCOM e quero saber como vocês podem ajudar minha empresa."),
  agente:   encode("Olá Kleber! Tenho interesse no Agente de IA da YASCOM. Como funciona?"),
  crm:      encode("Olá Kleber! Quero saber mais sobre o CRM Personalizado da YASCOM."),
  completo: encode("Olá Kleber! Tenho interesse na Solução Completa da YASCOM. Podemos conversar?"),
  cta:      encode("Olá Kleber! Quero transformar o atendimento da minha empresa. Por onde começamos?"),
};
