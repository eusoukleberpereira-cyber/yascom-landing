# YASCOM — Constituição do Projeto
**Versão:** 2.0
**Data:** 2026-11-18 (v1.0 em 2026-06-03)
**Responsável:** Kleber (Fundador)

> **O que mudou na v2.0:** reestruturação completa da landing page seguindo a "escada de convencimento" de uma referência de mercado (estrutura e técnicas de copy, NUNCA o texto), visual escuro com assinatura própria, catálogo completo do que a YASCOM constrói e conversão via **diagnóstico gratuito**.

---

## Visão

Landing page de alta conversão para a **YASCOM INTELIGÊNCIA DIGITAL LTDA**, empresa especializada em **I.A., Automação, Sistemas e Tráfego Pago** para empresas de pequeno, médio e grande porte.

Objetivo **único**: o visitante pedir o **diagnóstico gratuito** pelo WhatsApp.

---

## O Problema que a YASCOM Resolve

Empresas perdem vendas e clientes todos os dias por:
- Atendimento lento: o lead espera, esfria e compra do concorrente
- Falta de follow-up com leads
- Equipes sobrecarregadas com tarefas repetitivas
- CRM genérico que não conversa com WhatsApp, Instagram e o resto da operação
- Documentos, relatórios e planilhas montados na mão
- Tráfego pago gerando lead que ninguém atende direito

---

## Público-Alvo

**Quem:** Donos, sócios e gestores de empresas
**Porte:** Pequenas, médias e grandes empresas
**Segmentos:** Agências de viagens, locadoras de veículos, saúde, varejo, serviços em geral
**Perfil:** Sente a dor da operação manual, busca tecnologia, mas quer parceria humana próxima e não apenas uma ferramenta

---

## Diferencial Central

> O fundador da YASCOM acompanha cada cliente pessoalmente, do diagnóstico à evolução.

Não é ferramenta de prateleira. É solução sob medida + parceria.

---

## Os 6 Pilares (resultados que entregamos)

Texto definido por Kleber. Usar exatamente assim nos cards.

| # | Título | Descrição |
|---|--------|-----------|
| 1 | Multiplicar faturamento e ROI | Escale seus resultados e multiplique o ROI com automações e I.A. estratégicas. (sem "5x": decisão de Kleber, 2026-11-18) |
| 2 | Reduzir erros e aumentar produtividade | Minimize falhas e automatize processos críticos, liberando tempo para decisões estratégicas. |
| 3 | Aumentar captação de leads | Aumente sua captação de leads com automações estratégicas. |
| 4 | Melhorar a eficiência com integração completa | Sincronize WhatsApp, Instagram e CRM para operar com mais fluidez e menos esforço manual. |
| 5 | Escalabilidade sem aumentar equipe | Cresça seu negócio sem a necessidade de contratar mais funcionários, automatizando tarefas operacionais e mantendo a qualidade nos processos. |
| 6 | Reduzir tempo de espera de resposta para zero e aumentar conversão | Aumente sua conversão com atendimento instantâneo com chatbots e Agentes de I.A. |

---

## Catálogo: O que a YASCOM Constrói

| # | Solução | Detalhe | Descrição curta (rascunho de copy) |
|---|---------|---------|-------------------------------------|
| 1 | **Agentes de I.A.** | Atendimento · Suporte · Vendas | Agentes que respondem na hora, 24h por dia, tiram dúvidas, qualificam o lead, conduzem a venda e chamam um humano quando precisa. |
| 2 | **CRM Personalizado** | Sob medida para a empresa | Um CRM construído em cima da sua operação, e não o contrário. Funil, etapas e relatórios do jeito que o seu time trabalha. |
| 3 | **API Oficial** | WhatsApp Business (API oficial da Meta) | Seu WhatsApp na API oficial: estabilidade, múltiplos atendentes, sem risco de bloqueio por uso de ferramentas não oficiais. |
| 4 | **Automações de Tarefas Internas** | Rotinas, avisos, relatórios, planilhas | Aquilo que o seu time repete todo dia passa a acontecer sozinho, sem erro e sem esquecimento. |
| 5 | **Processamento de Documentos** | Leitura, extração e organização com I.A. | Contratos, notas, comprovantes e formulários lidos e organizados pela I.A., direto no seu sistema. |
| 6 | **Sistemas** | Sob medida | Sistemas e ferramentas internas criados para a sua operação, que conversam com tudo o que você já usa. |
| 7 | **Tráfego Pago** | Google Ads · Meta Ads · LinkedIn Ads | Campanhas que trazem o cliente certo, ligadas ao atendimento com I.A. e ao CRM: o lead chega e é atendido na hora. |

> A ligação **Tráfego → Agente de I.A. → CRM** é o "ecossistema" e deve aparecer como argumento: a YASCOM cuida do caminho inteiro, do anúncio à venda.

---

## Estrutura da Landing Page v2 (escada de convencimento)

| # | Seção | O que faz na cabeça do visitante | Componente atual |
|---|-------|----------------------------------|------------------|
| 01 | Header fixo | Logo + botão "Diagnóstico gratuito" sempre visível | `Header.tsx` (ajustar) |
| 02 | Hero | "Isso é pra mim": promessa forte + CTA + microcopy "Sem compromisso. Resposta pelo WhatsApp." | `Hero.tsx` (refazer) |
| 03 | Virada de chave | "O problema não é falta de cliente. É cliente esperando resposta." Tira a culpa e aponta o inimigo real | novo |
| 04 | Dores + Alívio | Lista de dores do dia a dia → "Quando vira sistema, você…" (3 alívios) | `Problema.tsx` (refazer) |
| 05 | **Os 6 Pilares** | O coração da página: os resultados | novo (substitui o papel de benefícios) |
| 06 | O que a YASCOM constrói | Catálogo das 7 soluções + destaque do ecossistema Tráfego → I.A. → CRM + CTA | `Solucoes.tsx` (refazer) |
| 07 | Como funciona | 4 etapas numeradas: Diagnóstico → Desenho da solução → Construção e integração → Acompanhamento e evolução | `ComoFunciona.tsx` (ampliar de 3 para 4) |
| 08 | Por que YASCOM | Fundador acompanha pessoalmente, sob medida, sem ferramenta de prateleira | `PorQueYascom.tsx` (ajustar) |
| 09 | Oferta: Diagnóstico Gratuito | "O que você recebe" em lista (análise da operação, mapa de gargalos, sugestão de solução, estimativa de ganho) + bloco "zero risco: sem compromisso, sem custo" | novo (substitui preço + garantia da referência) |
| 10 | Perguntas frequentes | Responde objeções (preço, prazo, "minha empresa é pequena", "já uso um CRM", "e se a I.A. errar?", API oficial, tráfego) | novo |
| 11 | Fechamento | "A decisão é simples: continuar no manual ou colocar a operação para trabalhar por você?" + CTA | `CTAFinal.tsx` (refazer) |
| 12 | Footer | Logo, CNPJ, redes, links legais | `Footer.tsx` (ajustar ao tema escuro) |

**Prova social:** sem depoimentos por enquanto (decisão de Kleber, 2026-11-18). **Proibido inventar depoimentos, números de clientes ou logos.** Deixar o espaço previsto entre as seções 08 e 09 para quando houver depoimentos reais.

---

## Conversão

**Canal único:** WhatsApp (`src/lib/whatsapp.ts`)
**Oferta:** Diagnóstico gratuito
**CTA principal:** "Quero meu diagnóstico gratuito"
**Mensagem pré-preenchida sugerida:** "Olá! Vim pelo site e quero meu diagnóstico gratuito."
**Pontos de CTA:** header, hero, após os 6 pilares, após o catálogo, oferta, fechamento (+ botão flutuante no celular)

---

## Tom de Voz

**Parceiro próximo, direto, sem hype.** Frases curtas, verbos de ação, foco em resultado. Técnicas da referência permitidas: reenquadramento ("o problema não é X, é Y"), lista de dores, contraste antes/depois, fechamento de decisão binária.
**Regras:** sem travessões no texto do site; sem promessas sem prova; nada copiado da referência.

**Posicionamento:** Premium, sem tabela de preços.

---

## Direção Visual v2: "Sala de Controle"

Escuro, mas com assinatura própria e **sem cara de clone** da referência (que usa preto + brilho laranja + sans pesada).
- Fundo **grafite quente** (não preto puro, não azulado)
- Texto no **creme da marca** (#F4F1EC), herança da v1
- Laranja **#FF4B00 só em ação e detalhe** (botões, números, marcadores), nunca em brilhos/gradientes de fundo
- Títulos em **Fraunces itálico 900**: editorial, o oposto do visual "curso de IA"
- Etiquetas técnicas em **JetBrains Mono** (ex.: `01 / AGENTES DE I.A.`), reforçando o painel de controle
- Textura: grade fina de "planta técnica" no hero, linhas finas separando blocos
- Botão primário: laranja com **texto grafite** (contraste AA; branco em laranja não passa)
- Animações: entrada suave no scroll, respeitando `prefers-reduced-motion`
- Proibido: gradiente roxo, glassmorphism, brilho neon, foto de banco de imagem com óculos VR

Tokens em `design-system.json` e `design-tokens.css` (v2.0).

---

## Stack Técnica

- **Framework:** Next.js 16 (App Router) — ver `AGENTS.md`: ler `node_modules/next/dist/docs/` antes de codar
- **Deploy:** Vercel (https://yascom-landing.vercel.app)
- **Versionamento:** GitHub (GitFlow dev → hml → main)
- **Domínio próprio:** yascom.com.br ainda não aponta para o site (pendente)

---

## Pendências

1. **Domínio yascom.com.br:** confirmar se já foi registrado.

### Resolvidas (2026-11-18)
- ✅ Pilar 1 sem "5x" (sem caso real que sustente o número)
- ✅ API Oficial = API oficial do WhatsApp Business (Meta)
- ✅ Especificação v2 e MoSCoW aprovados por Kleber
