# Plano de Tarefas — YASCOM Landing v2 ("Sala de Controle")

> ❌ **CANCELADO em 2026-11-18.** Kleber não aprovou a v2; o site voltou ao modelo anterior. Arquivo mantido só como registro histórico.

**Autor:** Hades · **Data:** 2026-11-18
**Fonte:** `docs/memoria/projeto.md` v2.0, `design-system.json` v2.0, `moscow.md` (aprovado)
**Decisões técnicas:** `docs/decisions/ADR-001-landing-v2-estilo-e-conteudo.md`
**Branch de trabalho:** `dev` (nada vai para `hml`/`main` sem aprovação de Kleber)

> ⚠️ `AGENTS.md`: antes de codar, ler os guias relevantes em `node_modules/next/dist/docs/` (fontes: `01-app/01-getting-started/13-fonts.md`; CSS: guia de Tailwind/CSS; metadata).

---

## Visão geral das fases

| Fase | Nome | Entrega testável |
|------|------|------------------|
| 06 | Fundação v2 | Site atual já no tema escuro, tokens novos, fontes, conteúdo centralizado |
| 07 | Topo da escada | Header, Hero, Virada de chave, Dores + Alívio |
| 08 | Coração | 6 Pilares, Catálogo (7 soluções + ecossistema), Como funciona (4), Por que YASCOM |
| 09 | Fechamento | Oferta Diagnóstico, FAQ, Fechamento, Footer, botão flutuante mobile |
| 10 | Produção | OG image + SEO, Ravena (QA), Kerberos (segurança), merge `hml` → `main` |

Ordem final da página (`src/app/page.tsx`):
`Header → Hero → Virada → Dores → Pilares → Catalogo → ComoFunciona → PorQueYascom → [espaço futuro: Depoimentos] → Oferta → FAQ → Fechamento → Footer + WhatsAppFlutuante`

---

## 🔵 FASE 06: FUNDAÇÃO v2

**Por que primeiro?** Trocar o "chão e a pintura" antes de levantar paredes novas.

- [ ] 06.1 `globals.css`: substituir tokens v1 pelos tokens v2 (`docs/memoria/design-tokens.css`) e expô-los no Tailwind via `@theme` (cores `base/raised/surface`, textos, `accent`, bordas; fontes `display/body/mono`)
- [ ] 06.2 `layout.tsx`: adicionar `JetBrains_Mono` (peso 500) via `next/font/google` com `variable: "--font-mono"`; `<html>` com `className` das 3 fontes e `style={{colorScheme:"dark"}}` ou `color-scheme` no CSS
- [ ] 06.3 Atualizar `.btn-primary` (texto **#141210** sobre laranja), `.btn-secondary`, `.card`, `.label-mono`, `.bg-grid`, foco visível e `prefers-reduced-motion`
- [ ] 06.4 `src/lib/whatsapp.ts`: novas mensagens (ver "Mensagens WhatsApp" abaixo)
- [ ] 06.5 Criar `src/content/landing.ts` com TODO o copy deck abaixo, tipado
- [ ] 06.6 Criar componentes base em `src/components/ui/`: `Section` (id, variante `base|raised`, container), `SectionHeader` (label mono + h2 + subtítulo opcional), `CtaWhatsApp` (link do WA + ícone + microcopy opcional)
- [ ] 06.7 `metadata` em `layout.tsx`: title/description/keywords/OG v2 (ver "SEO")
- [ ] 06.8 Ajuste mínimo nas seções antigas para continuarem legíveis no escuro (só o necessário; elas serão substituídas nas fases 07–09)
- [ ] 06.9 `npm run lint` e `npm run build` sem erros; commit + push em `dev`

**Critério de aceitação:** build ok; página carrega com fundo grafite, texto creme, botões laranja com texto escuro; nenhum texto ilegível.

---

## 🔵 FASE 07: TOPO DA ESCADA

- [ ] 07.1 `Header.tsx` (reescrever): logo, fundo `base` com borda inferior 1px ao rolar (ou fixa), botão "Diagnóstico gratuito"; no celular, só logo + botão compacto
- [ ] 07.2 `Hero.tsx` (reescrever): `.bg-grid`, label mono, H1, subtítulo, CTA primário + secundário (`#solucoes`), microcopy, 3 indicadores, cartão de conversa do Agente (versão escura do atual) visível ≥768px
- [ ] 07.3 `Virada.tsx` (novo): bloco "O problema não é / O problema sempre foi" em dois painéis contrastantes + frase de fechamento
- [ ] 07.4 `Dores.tsx` (novo, substitui `Problema.tsx`): lista de dores com marcador ✕ laranja + 3 cards de alívio
- [ ] 07.5 Remover `Problema.tsx`; atualizar `page.tsx`
- [ ] 07.6 Lint + build + commit/push `dev`

**Critério:** topo completo em 375px, 768px e 1280px sem rolagem horizontal; CTA abre WhatsApp com a mensagem do diagnóstico.

---

## 🔵 FASE 08: CORAÇÃO

- [ ] 08.1 `Pilares.tsx` (novo): grade 1/2/3 colunas, cards numerados 01–06 (número em mono laranja), CTA no fim
- [ ] 08.2 `Catalogo.tsx` (novo, substitui `Solucoes.tsx`, `id="solucoes"`): 7 cards com etiquetas (ex.: `Atendimento · Suporte · Vendas`), CTA por card com mensagem específica; faixa do ecossistema `Anúncio → Agente de I.A. → CRM → Venda`
- [ ] 08.3 `ComoFunciona.tsx` (reescrever): 4 etapas numeradas, linha conectando as etapas no desktop
- [ ] 08.4 `PorQueYascom.tsx` (reescrever com o conteúdo atual, no tema escuro e com classes)
- [ ] 08.5 Remover `Solucoes.tsx`; atualizar `page.tsx`; lint + build + commit/push

**Critério:** textos dos 6 pilares idênticos ao `projeto.md` (pilar 1 sem "5x"); cada CTA do catálogo abre a mensagem certa.

---

## 🔵 FASE 09: FECHAMENTO

- [ ] 09.1 `Oferta.tsx` (novo, `id="diagnostico"`): lista "o que você recebe" + bloco "zero risco" + CTA
- [ ] 09.2 `FAQ.tsx` (novo, `id="faq"`): `<details>/<summary>` nativo, ícone +/− em CSS, foco visível
- [ ] 09.3 `Fechamento.tsx` (substitui `CTAFinal.tsx`)
- [ ] 09.4 `Footer.tsx` (reescrever no tema escuro, manter CNPJ e redes atuais)
- [ ] 09.5 `WhatsAppFlutuante.tsx` (novo): botão redondo fixo canto inferior direito, só < 768px, `aria-label`, respeita `env(safe-area-inset-bottom)`
- [ ] 09.6 Remover `CTAFinal.tsx`; `page.tsx` final; zero `style={{}}` nas seções; lint + build + commit/push

**Critério:** página completa; FAQ abre/fecha por teclado; botão flutuante só no celular.

---

## 🔵 FASE 10: PRODUÇÃO

- [ ] 10.1 `opengraph-image.tsx` e `icon.tsx` no visual escuro
- [ ] 10.2 Lighthouse (celular): Performance ≥ 90, Acessibilidade ≥ 95
- [ ] 10.3 Ravena: QA completo (rotas, CTAs, responsivo, acessibilidade, performance)
- [ ] 10.4 Kerberos: auditoria (CSP continua válido, links externos com `rel="noopener noreferrer"`, sem segredos)
- [ ] 10.5 Tag `backup-pre-hml-v2` → merge `dev → hml` (aprovação de Kleber)
- [ ] 10.6 Tag `backup-pre-prod-v2` → merge `hml → main` (aprovação de Kleber) → deploy Vercel

---

## 📝 COPY DECK (conteúdo de `src/content/landing.ts`)

Regras: **sem travessões**, nada copiado da referência, sem números sem prova, sem depoimentos inventados.

### Hero
- **Label:** `I.A. · AUTOMAÇÃO · SISTEMAS · TRÁFEGO PAGO`
- **H1:** Cliente que espera, *compra do concorrente.* (parte em itálico laranja: "compra do concorrente.")
- **Subtítulo:** A YASCOM constrói Agentes de I.A., automações, sistemas e campanhas que atendem na hora, organizam sua operação e fazem sua empresa crescer sem inchar a equipe.
- **CTA primário:** Quero meu diagnóstico gratuito
- **CTA secundário:** Ver o que construímos → `#solucoes`
- **Microcopy:** Sem compromisso. Conversa direta com o fundador pelo WhatsApp.
- **Indicadores:** `24/7` Atendimento contínuo · `Sob medida` Para a sua operação · `1:1` Acompanhamento do fundador
- **Cartão de conversa:** Agente YASCOM · "Online agora" · mensagens: "Olá! Como posso ajudar?" / "Vocês atendem no fim de semana?" / "Atendo 24 horas, todos os dias. Quer que eu já agende um horário pra você?"

### Virada de chave
- **Label:** `SE VOCÊ CHEGOU ATÉ AQUI`
- **Painel 1 — título:** O problema não é
  **texto:** a falta de cliente, de equipe ou de ferramenta.
- **Painel 2 — título:** O problema sempre foi
  **texto:** uma operação que depende de alguém lembrar, responder e repetir tudo na mão.
- **Fechamento:** A YASCOM existe para transformar isso em sistema.

### Dores + Alívio
- **Label:** `A REALIDADE` · **H2:** Reconhece alguma dessas?
- **Dores:** Lead esperando horas por uma resposta · Follow-up que ninguém faz · CRM que não conversa com WhatsApp e Instagram · Relatório e planilha montados na mão · Documento digitado de um sistema para o outro · Anúncio rodando e lead esfriando sem atendimento · *e muitas outras…*
- **Ponte:** Quando a operação vira sistema, você:
- **Alívio 1:** Fim do retrabalho / Faz uma vez e funciona todo dia.
- **Alívio 2:** Nenhum lead esquecido / Todo contato é atendido na hora, a qualquer hora.
- **Alívio 3:** Tempo de volta / Seu time cuida só do que precisa de gente.

### Os 6 Pilares
- **Label:** `RESULTADOS` · **H2:** O que muda na sua empresa
- **Cards:** exatamente a tabela "Os 6 Pilares" de `projeto.md` (pilar 1 **sem** "5x")
- **CTA:** Quero esses resultados

### Catálogo
- **Label:** `SOLUÇÕES` · **H2:** O que a YASCOM constrói · **Sub:** Tudo sob medida. Tudo conectado.
- **Cards:** exatamente a tabela "Catálogo" de `projeto.md` (título, etiquetas, descrição)
- **CTA de cada card:** Quero isso
- **Faixa do ecossistema:** `Anúncio → Agente de I.A. → CRM → Venda` · "A YASCOM cuida do caminho inteiro: o anúncio traz o cliente, a I.A. atende na hora e o CRM organiza tudo até o fechamento."

### Como funciona
- **Label:** `O MÉTODO` · **H2:** Da conversa ao resultado, em 4 etapas
1. **Diagnóstico gratuito** · Entendemos sua operação, seus gargalos e onde sua empresa está deixando dinheiro na mesa.
2. **Desenho da solução** · Você recebe o plano do que vamos construir, com prazo e investimento claros antes de começar.
3. **Construção e integração** · Construímos e conectamos tudo ao que você já usa: WhatsApp, Instagram, CRM e sistemas.
4. **Acompanhamento e evolução** · O fundador acompanha os resultados de perto e a solução evolui junto com a sua empresa.

### Por que YASCOM
- Manter os diferenciais atuais de `PorQueYascom.tsx` (só migrar para o tema e para `landing.ts`)

### Oferta: Diagnóstico Gratuito
- **Label:** `DIAGNÓSTICO GRATUITO` · **H2:** Comece descobrindo onde sua empresa está perdendo dinheiro.
- **O que você recebe:**
  - Análise do seu atendimento, vendas e processos internos
  - Mapa dos gargalos que travam o crescimento
  - Recomendação do que faz sentido para o seu caso (e do que não faz)
  - Estimativa de prazo e investimento
  - Conversa direta com o fundador, sem robô de vendas
- **Zero risco:** É gratuito e sem compromisso. Se não fizer sentido para você, a conversa termina ali.
- **CTA:** Quero meu diagnóstico gratuito

### FAQ (⚠️ Kleber valida as respostas na revisão da Fase 09)
1. **Minha empresa é pequena. Isso é para mim?** Sim. Tudo é construído sob medida para o tamanho e o momento da sua empresa. No diagnóstico mostramos o que faz sentido agora e o que pode esperar.
2. **Quanto custa?** Depende do que for construído. Por isso o primeiro passo é o diagnóstico gratuito: você recebe uma estimativa clara antes de decidir qualquer coisa.
3. **Quanto tempo leva para ficar pronto?** Varia conforme a solução. O prazo é definido no plano, antes de começar, e você acompanha cada etapa.
4. **Já uso um CRM. Preciso trocar?** Nem sempre. Muitas vezes integramos com o que você já usa. Se o seu CRM estiver travando a operação, mostramos as alternativas no diagnóstico.
5. **E se o Agente de I.A. não souber responder?** Ele é treinado com as informações da sua empresa e, quando a conversa precisa de uma pessoa, transfere para o seu time com todo o histórico.
6. **O que é a API Oficial do WhatsApp Business?** É a conexão oficial da Meta para empresas. Permite vários atendentes no mesmo número, automações e Agentes de I.A., com estabilidade e sem o risco de bloqueio das ferramentas não oficiais.
7. **Vocês cuidam do tráfego pago também?** Sim. Criamos e gerenciamos campanhas no Google, Meta e LinkedIn, já conectadas ao atendimento e ao CRM, para nenhum lead se perder.
8. **Quem vai me atender?** O fundador da YASCOM acompanha cada cliente pessoalmente, do diagnóstico à evolução da solução.

### Fechamento
- **H2:** A decisão é simples.
- **Texto:** Continuar com a operação no manual, perdendo cliente na espera, ou colocar sua empresa para trabalhar por você.
- **CTA:** Quero meu diagnóstico gratuito · **Microcopy:** Gratuito. Sem compromisso. Resposta pelo WhatsApp.

---

## 💬 Mensagens WhatsApp (`src/lib/whatsapp.ts`)

Número atual mantido (`5541999112899`).
- `diagnostico`: "Olá Kleber! Vim pelo site da YASCOM e quero meu diagnóstico gratuito."
- Por solução: "Olá Kleber! Vim pelo site da YASCOM e quero meu diagnóstico gratuito. Tenho interesse em {solução}." para: Agentes de I.A., CRM Personalizado, API Oficial do WhatsApp Business, Automações de Tarefas Internas, Processamento de Documentos, Sistemas sob medida, Tráfego Pago.

## 🔎 SEO (`layout.tsx`)
- **title:** YASCOM | I.A., Automação, Sistemas e Tráfego Pago para Empresas
- **description:** Agentes de I.A., CRM personalizado, automações, sistemas e tráfego pago construídos sob medida para a sua empresa vender mais sem aumentar a equipe. Peça seu diagnóstico gratuito.
- **keywords:** + "automação de processos", "API oficial do WhatsApp", "tráfego pago", "sistemas sob medida", "processamento de documentos"

---

## INSTRUÇÕES PARA ATLAS — FASE 06: FUNDAÇÃO v2

### Contexto
Aplicar o tema escuro "Sala de Controle" e preparar a base (tokens no Tailwind, fontes, conteúdo centralizado, componentes base) conforme ADR-001, sem ainda reescrever as seções.

### Pré-condições
- [ ] `git checkout dev && git pull origin dev`
- [ ] Commitar antes os docs da Shiva/Hades: `docs: especificação e plano da landing v2`
- [ ] Ler `node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md` e o guia de CSS/Tailwind da pasta de docs

### Passos
1. Tarefas 06.1 → 06.8 deste arquivo, na ordem
2. `npm run lint` → sem erros
3. `npm run build` → sem erros
4. `git add -A && git commit -m "feat(v2): fundação do tema escuro, tokens, fontes e conteúdo centralizado"` + `git push origin dev`
5. Subir `npm run dev` para Kleber revisar

### Critério de Aceitação
Build ok · fundo `#141210` · texto creme · botão laranja com texto escuro · fontes Fraunces/DM Sans/JetBrains Mono carregando · `src/content/landing.ts` com o copy deck completo · CSP intacto.

### Em caso de erro
Parar e reportar ao Hades com output completo.

### ✅ RELATÓRIO OBRIGATÓRIO
STATUS · STEPS EXECUTADOS · OUTPUT DO TERMINAL · ESTADO ATUAL (`git status`, `npm run build`) · ERROS ENCONTRADOS
