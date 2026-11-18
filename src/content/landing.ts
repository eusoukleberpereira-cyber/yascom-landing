/**
 * Conteúdo da landing YASCOM v2 ("Sala de Controle").
 * Fonte: docs/memoria/plano-tarefas-v2.md (COPY DECK) e docs/memoria/projeto.md v2.0.
 *
 * Regras de texto: sem travessões, sem números sem prova, sem depoimentos inventados.
 * Para mudar qualquer texto do site, edite apenas este arquivo.
 */
import type { WaKey } from "@/lib/whatsapp";

export const CTA_DIAGNOSTICO = "Quero meu diagnóstico gratuito";

export const hero = {
  label: "I.A. · Automação · Sistemas · Tráfego Pago",
  titulo: "Cliente que espera,",
  tituloDestaque: "compra do concorrente.",
  subtitulo:
    "A YASCOM constrói Agentes de I.A., automações, sistemas e campanhas que atendem na hora, organizam sua operação e fazem sua empresa crescer sem inchar a equipe.",
  ctaPrimario: CTA_DIAGNOSTICO,
  ctaSecundario: { texto: "Ver o que construímos", href: "#solucoes" },
  microcopy: "Sem compromisso. Conversa direta com o fundador pelo WhatsApp.",
  indicadores: [
    { valor: "24/7", rotulo: "Atendimento contínuo" },
    { valor: "Sob medida", rotulo: "Para a sua operação" },
    { valor: "1:1", rotulo: "Acompanhamento do fundador" },
  ],
  conversa: {
    nome: "Agente YASCOM",
    status: "Online agora",
    mensagens: [
      { texto: "Olá! Como posso ajudar?", cliente: false },
      { texto: "Vocês atendem no fim de semana?", cliente: true },
      {
        texto: "Atendo 24 horas, todos os dias. Quer que eu já agende um horário pra você?",
        cliente: false,
      },
    ],
  },
} as const;

export const virada = {
  label: "Se você chegou até aqui",
  problemaNao: {
    titulo: "O problema não é",
    texto: "a falta de cliente, de equipe ou de ferramenta.",
  },
  problemaSempre: {
    titulo: "O problema sempre foi",
    texto: "uma operação que depende de alguém lembrar, responder e repetir tudo na mão.",
  },
  fechamento: "A YASCOM existe para transformar isso em sistema.",
} as const;

export const dores = {
  label: "A realidade",
  titulo: "Reconhece alguma dessas?",
  lista: [
    "Lead esperando horas por uma resposta",
    "Follow-up que ninguém faz",
    "CRM que não conversa com WhatsApp e Instagram",
    "Relatório e planilha montados na mão",
    "Documento digitado de um sistema para o outro",
    "Anúncio rodando e lead esfriando sem atendimento",
  ],
  maisDores: "e muitas outras…",
  ponte: "Quando a operação vira sistema, você:",
  alivios: [
    { titulo: "Fim do retrabalho", texto: "Faz uma vez e funciona todo dia." },
    { titulo: "Nenhum lead esquecido", texto: "Todo contato é atendido na hora, a qualquer hora." },
    { titulo: "Tempo de volta", texto: "Seu time cuida só do que precisa de gente." },
  ],
} as const;

export const pilares = {
  label: "Resultados",
  titulo: "O que muda na sua empresa",
  cta: "Quero esses resultados",
  itens: [
    {
      titulo: "Multiplicar faturamento e ROI",
      texto: "Escale seus resultados e multiplique o ROI com automações e I.A. estratégicas.",
    },
    {
      titulo: "Reduzir erros e aumentar produtividade",
      texto:
        "Minimize falhas e automatize processos críticos, liberando tempo para decisões estratégicas.",
    },
    {
      titulo: "Aumentar captação de leads",
      texto: "Aumente sua captação de leads com automações estratégicas.",
    },
    {
      titulo: "Melhorar a eficiência com integração completa",
      texto:
        "Sincronize WhatsApp, Instagram e CRM para operar com mais fluidez e menos esforço manual.",
    },
    {
      titulo: "Escalabilidade sem aumentar equipe",
      texto:
        "Cresça seu negócio sem a necessidade de contratar mais funcionários, automatizando tarefas operacionais e mantendo a qualidade nos processos.",
    },
    {
      titulo: "Reduzir tempo de espera de resposta para zero e aumentar conversão",
      texto:
        "Aumente sua conversão com atendimento instantâneo com chatbots e Agentes de I.A.",
    },
  ],
} as const;

export type Solucao = {
  id: string;
  titulo: string;
  etiquetas: readonly string[];
  texto: string;
  wa: WaKey;
};

export const catalogo = {
  label: "Soluções",
  titulo: "O que a YASCOM constrói",
  subtitulo: "Tudo sob medida. Tudo conectado.",
  ctaCard: "Quero isso",
  itens: [
    {
      id: "agentes",
      titulo: "Agentes de I.A.",
      etiquetas: ["Atendimento", "Suporte", "Vendas"],
      texto:
        "Agentes que respondem na hora, 24h por dia, tiram dúvidas, qualificam o lead, conduzem a venda e chamam um humano quando precisa.",
      wa: "agentes",
    },
    {
      id: "crm",
      titulo: "CRM Personalizado",
      etiquetas: ["Sob medida para a sua empresa"],
      texto:
        "Um CRM construído em cima da sua operação, e não o contrário. Funil, etapas e relatórios do jeito que o seu time trabalha.",
      wa: "crm",
    },
    {
      id: "api",
      titulo: "API Oficial",
      etiquetas: ["WhatsApp Business"],
      texto:
        "Seu WhatsApp na API oficial: estabilidade, múltiplos atendentes e sem risco de bloqueio por uso de ferramentas não oficiais.",
      wa: "api",
    },
    {
      id: "automacoes",
      titulo: "Automações de Tarefas Internas",
      etiquetas: ["Rotinas", "Avisos", "Relatórios", "Planilhas"],
      texto:
        "Aquilo que o seu time repete todo dia passa a acontecer sozinho, sem erro e sem esquecimento.",
      wa: "automacoes",
    },
    {
      id: "documentos",
      titulo: "Processamento de Documentos",
      etiquetas: ["Leitura", "Extração", "Organização com I.A."],
      texto:
        "Contratos, notas, comprovantes e formulários lidos e organizados pela I.A., direto no seu sistema.",
      wa: "documentos",
    },
    {
      id: "sistemas",
      titulo: "Sistemas",
      etiquetas: ["Sob medida"],
      texto:
        "Sistemas e ferramentas internas criados para a sua operação, que conversam com tudo o que você já usa.",
      wa: "sistemas",
    },
    {
      id: "trafego",
      titulo: "Tráfego Pago",
      etiquetas: ["Google Ads", "Meta Ads", "LinkedIn Ads"],
      texto:
        "Campanhas que trazem o cliente certo, ligadas ao atendimento com I.A. e ao CRM: o lead chega e é atendido na hora.",
      wa: "trafego",
    },
  ] satisfies readonly Solucao[],
  ecossistema: {
    etapas: ["Anúncio", "Agente de I.A.", "CRM", "Venda"],
    texto:
      "A YASCOM cuida do caminho inteiro: o anúncio traz o cliente, a I.A. atende na hora e o CRM organiza tudo até o fechamento.",
  },
} as const;

export const comoFunciona = {
  label: "O método",
  titulo: "Da conversa ao resultado, em 4 etapas",
  etapas: [
    {
      titulo: "Diagnóstico gratuito",
      texto:
        "Entendemos sua operação, seus gargalos e onde sua empresa está deixando dinheiro na mesa.",
    },
    {
      titulo: "Desenho da solução",
      texto:
        "Você recebe o plano do que vamos construir, com prazo e investimento claros antes de começar.",
    },
    {
      titulo: "Construção e integração",
      texto:
        "Construímos e conectamos tudo ao que você já usa: WhatsApp, Instagram, CRM e sistemas.",
    },
    {
      titulo: "Acompanhamento e evolução",
      texto:
        "O fundador acompanha os resultados de perto e a solução evolui junto com a sua empresa.",
    },
  ],
} as const;

/** Mantido do site v1 (PorQueYascom.tsx), conforme plano 08.4. */
export const porQueYascom = {
  label: "Por que YASCOM",
  diferenciais: [
    {
      icone: "userCheck",
      titulo: "Acompanhamento do fundador",
      texto:
        "Não é um suporte terceirizado. É o Kleber, fundador da YASCOM, que acompanha você do primeiro contato até o sistema funcionando. E depois também.",
    },
    {
      icone: "settings",
      titulo: "100% sob medida",
      texto:
        "Nada de template pronto. Cada solução é construída do zero para o seu negócio, seus processos e sua realidade.",
    },
    {
      icone: "zap",
      titulo: "Implementação rápida",
      texto:
        "Sem burocracia, sem meses de espera. A YASCOM vai direto ao ponto: entende, configura e entrega. Você vê resultado rápido.",
    },
    {
      icone: "headphones",
      titulo: "Suporte contínuo",
      texto:
        "Depois da implementação, não deixamos você sozinho. Ajustamos, evoluímos e melhoramos a solução conforme o seu negócio cresce.",
    },
  ],
} as const;

export const oferta = {
  label: "Diagnóstico gratuito",
  titulo: "Comece descobrindo onde sua empresa está perdendo dinheiro.",
  recebeTitulo: "O que você recebe:",
  recebe: [
    "Análise do seu atendimento, vendas e processos internos",
    "Mapa dos gargalos que travam o crescimento",
    "Recomendação do que faz sentido para o seu caso (e do que não faz)",
    "Estimativa de prazo e investimento",
    "Conversa direta com o fundador, sem robô de vendas",
  ],
  zeroRisco: {
    titulo: "Zero risco",
    texto:
      "É gratuito e sem compromisso. Se não fizer sentido para você, a conversa termina ali.",
  },
  cta: CTA_DIAGNOSTICO,
} as const;

/** ⚠️ Respostas a validar por Kleber na revisão da Fase 09. */
export const faq = {
  label: "Perguntas frequentes",
  titulo: "Ainda com dúvida?",
  itens: [
    {
      pergunta: "Minha empresa é pequena. Isso é para mim?",
      resposta:
        "Sim. Tudo é construído sob medida para o tamanho e o momento da sua empresa. No diagnóstico mostramos o que faz sentido agora e o que pode esperar.",
    },
    {
      pergunta: "Quanto custa?",
      resposta:
        "Depende do que for construído. Por isso o primeiro passo é o diagnóstico gratuito: você recebe uma estimativa clara antes de decidir qualquer coisa.",
    },
    {
      pergunta: "Quanto tempo leva para ficar pronto?",
      resposta:
        "Varia conforme a solução. O prazo é definido no plano, antes de começar, e você acompanha cada etapa.",
    },
    {
      pergunta: "Já uso um CRM. Preciso trocar?",
      resposta:
        "Nem sempre. Muitas vezes integramos com o que você já usa. Se o seu CRM estiver travando a operação, mostramos as alternativas no diagnóstico.",
    },
    {
      pergunta: "E se o Agente de I.A. não souber responder?",
      resposta:
        "Ele é treinado com as informações da sua empresa e, quando a conversa precisa de uma pessoa, transfere para o seu time com todo o histórico.",
    },
    {
      pergunta: "O que é a API Oficial do WhatsApp Business?",
      resposta:
        "É a conexão oficial da Meta para empresas. Permite vários atendentes no mesmo número, automações e Agentes de I.A., com estabilidade e sem o risco de bloqueio das ferramentas não oficiais.",
    },
    {
      pergunta: "Vocês cuidam do tráfego pago também?",
      resposta:
        "Sim. Criamos e gerenciamos campanhas no Google, Meta e LinkedIn, já conectadas ao atendimento e ao CRM, para nenhum lead se perder.",
    },
    {
      pergunta: "Quem vai me atender?",
      resposta:
        "O fundador da YASCOM acompanha cada cliente pessoalmente, do diagnóstico à evolução da solução.",
    },
  ],
} as const;

export const fechamento = {
  titulo: "A decisão é simples.",
  texto:
    "Continuar com a operação no manual, perdendo cliente na espera, ou colocar sua empresa para trabalhar por você.",
  cta: CTA_DIAGNOSTICO,
  microcopy: "Gratuito. Sem compromisso. Resposta pelo WhatsApp.",
} as const;

export const empresa = {
  nome: "YASCOM",
  descricao: "Inteligência Digital",
  razaoSocial: "YASCOM INTELIGÊNCIA DIGITAL LTDA",
  cnpj: "65.271.569/0001-37",
} as const;
