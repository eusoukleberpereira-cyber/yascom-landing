# YASCOM Landing Page — As Built

**Descrição:** Landing page de alta conversão para YASCOM INTELIGÊNCIA DIGITAL LTDA, apresentando soluções de Agentes de IA e CRM personalizados. Objetivo único: gerar contato via WhatsApp.
**Stack:** Next.js 16.2.7 (Turbopack) + React 19 + Tailwind CSS 4 + Vercel + GitHub
**Última atualização:** 2026-11-18 (planejamento da v2)

> Status das Fases 01–04 reconstruído em 2026-11-13 a partir do `git log`, das tags de backup e do código atual (o arquivo não tinha sido atualizado durante a execução).

---

## Roadmap de Implementação

### 🔵 FASE 01: FUNDAÇÃO
**Status:** `✅ Completa`
**Progresso:** 6/6 tarefas (100%)

#### Tarefas:
- [x] Criar projeto Next.js 16 com Tailwind CSS
- [x] Criar repositório GitHub + configurar GitFlow (dev / hml / main)
- [x] Conectar Vercel ao branch `main`
- [x] Aplicar design tokens (CSS variables + fontes Google)
- [x] Criar layout base (container, tipografia, reset)
- [x] Primeiro deploy funcionando na Vercel

**Testável:** Página em branco com cores e fontes corretas no ar
**Notas:** Stack definida: Next.js 16 + Tailwind CSS 4 + Lucide React + Vercel Analytics

---

### 🔵 FASE 02: SEÇÕES SUPERIORES
**Status:** `✅ Completa`
**Progresso:** 5/5 tarefas (100%)

#### Tarefas:
- [x] Header fixo — logo YASCOM + botão WhatsApp
- [x] Seção Hero — headline + subheadline + CTA principal
- [x] Seção Problema — 5 dores do cliente
- [x] Seção Soluções — 3 cards (Agente IA / CRM / Completo)
- [x] Seção Como Funciona — 3 passos (Diagnóstico → Configuração → Resultado)

**Testável:** Ravena valida layout, responsividade e botão WhatsApp funcionando

---

### 🔵 FASE 03: FECHAMENTO E CONVERSÃO
**Status:** `✅ Completa`
**Progresso:** 4/4 tarefas (100%)

#### Tarefas:
- [x] Seção Por que YASCOM — diferenciais da marca
- [x] CTA Final — seção de encerramento + botão WhatsApp
- [x] Footer — logo, CNPJ, redes sociais
- [x] Revisão mobile completa (todas as seções)

**Testável:** Ravena testa fluxo completo mobile + desktop

---

### 🔵 FASE 04: PRODUÇÃO
**Status:** `✅ Completa`
**Progresso:** 6/6 tarefas (100%)

#### Tarefas:
- [x] SEO completo (title, description, OG image, favicon)
- [x] Vercel Analytics ativado
- [x] Otimização de performance (imagens, fontes, LCP)
- [x] Kerberos — auditoria de segurança
- [x] Ravena — QA final + aprovação
- [x] Merge hml → main → deploy produção 🚀

**Testável:** Página pública acessível pelo domínio final

---

### ⚪ FASE 05: PROVA SOCIAL — "Empresas que confiam na YASCOM"
**Status:** `❌ Cancelada`
**Notas:** Seção implementada em `dev` (e569c43) e revertida a pedido de Kleber em 2026-11-13 (não aprovou o resultado). Nunca chegou a `hml` nem a `main`.

---

# ⚪ LANDING v2 — "Sala de Controle" · `❌ Cancelada`

> **2026-11-18:** Kleber revisou a v2 completa em localhost e não aprovou. Código, spec, design system e MoSCoW restaurados ao estado de antes da v2 (`9e8f644`) por um commit de restauração em `dev`. A v2 nunca chegou a `hml` nem a `main`; o site em produção não foi alterado. O histórico abaixo fica como registro; o código da v2 continua recuperável no git (commits `de53a58` → `e75c773`).
>
> Spec v2 (histórico): `docs/memoria/projeto.md` v2.0 · Plano detalhado: `docs/memoria/plano-tarefas-v2.md` · Decisões: `docs/decisions/ADR-001-landing-v2-estilo-e-conteudo.md`

### 🔵 FASE 06: FUNDAÇÃO v2
**Status:** `✅ Completa` (aguardando revisão visual de Kleber)
**Progresso:** 9/9 tarefas (100%)
- [x] 06.1 Tokens v2 no Tailwind (`@theme static`) + apelidos legados para as seções antigas
- [x] 06.2 JetBrains Mono via `next/font`; variáveis renomeadas (`--font-fraunces`, `--font-dm-sans`, `--font-jetbrains`) para não colidir com os tokens
- [x] 06.3 Botões/cards/label-mono/bg-grid v2, foco visível, reduced-motion; estilos de elemento movidos para `@layer base`
- [x] 06.4 `whatsapp.ts`: mensagens do diagnóstico + 7 por solução (chaves legadas mantidas até Fase 09)
- [x] 06.5 `src/content/landing.ts` com o copy deck completo
- [x] 06.6 `src/components/ui/`: `Section`, `SectionHeader`, `CtaWhatsApp`
- [x] 06.7 SEO v2 + `viewport.themeColor`
- [x] 06.8 Seções antigas legíveis no escuro (3 cores fixas trocadas)
- [x] 06.9 lint ✅ · tsc ✅ · build ✅ · verificação visual em localhost ✅
**Notas:** o brilho laranja do `CTAFinal.tsx` (proibido no design v2) sai na Fase 09, quando a seção é substituída.

### 🔵 FASE 07: TOPO DA ESCADA
**Status:** `✅ Completa` (aguardando revisão visual de Kleber)
**Progresso:** 6/6 tarefas (100%)
- [x] 07.1 `Header.tsx`: Server Component (sem JS no cliente), logo + "Diagnóstico gratuito", sem menu hambúrguer
- [x] 07.2 `Hero.tsx`: grade técnica, H1 novo, CTA diagnóstico + "Ver o que construímos", microcopy, 3 indicadores, conversa do Agente (≥768px)
- [x] 07.3 `Virada.tsx` (novo): "O problema não é" riscado × "O problema sempre foi" em destaque
- [x] 07.4 `Dores.tsx` (novo): 6 dores + 3 alívios
- [x] 07.5 `Problema.tsx` removido; `page.tsx` atualizado
- [x] 07.6 lint ✅ · tsc ✅ · build ✅ · 375px sem rolagem horizontal ✅ · 768px ✅ · 1536px ✅

### 🔵 FASE 08: CORAÇÃO
**Status:** `✅ Completa` (aguardando revisão visual de Kleber)
**Progresso:** 5/5 tarefas (100%)
- [x] 08.1 `Pilares.tsx` (novo, `#resultados`): 6 cards numerados (pilar 1 sem "5x") + CTA
- [x] 08.2 `Catalogo.tsx` (novo, `#solucoes`): 7 soluções com etiquetas e CTA por solução; bloco do ecossistema ocupa o espaço ao lado do 7º card
- [x] 08.3 `ComoFunciona.tsx`: 4 etapas (1 col celular · 2 col tablet · 4 col desktop com linha)
- [x] 08.4 `PorQueYascom.tsx`: mesmo conteúdo, tema escuro, texto em `landing.ts`
- [x] 08.5 `Solucoes.tsx` removido · lint ✅ · tsc ✅ · build ✅ · sem rolagem lateral em 375/768/1024/1280 ✅
**Correções:** mensagem do WhatsApp de Agentes terminava em "I.A.." (ponto duplo), corrigido em `whatsapp.ts`; 4 colunas do método estouravam a largura em 768px, corrigido com 2 colunas no tablet.

### 🔵 FASE 09: FECHAMENTO
**Status:** `✅ Completa` (aguardando revisão de Kleber, incluindo as respostas do FAQ)
**Progresso:** 6/6 tarefas (100%)
- [x] 09.1 `Oferta.tsx` (novo, `#diagnostico`): "O que você recebe" + "Zero risco" + CTA
- [x] 09.2 `FAQ.tsx` (novo, `#faq`): 8 perguntas com `<details>` nativo; testado com mouse e teclado (Tab + Enter)
- [x] 09.3 `Fechamento.tsx` (substitui `CTAFinal.tsx`, mantém `#contato`): sem o brilho laranja proibido
- [x] 09.4 `Footer.tsx`: tema escuro, links das seções, razão social, CNPJ
- [x] 09.5 `WhatsAppFlutuante.tsx`: só < 768px, respeita safe-area; footer com espaço extra no celular
- [x] 09.6 `CTAFinal.tsx` removido · apelidos legados removidos de `globals.css` · chaves legadas removidas de `whatsapp.ts` · **zero `style={{}}` e zero `<style>` nos componentes** · lint ✅ · tsc ✅ · build ✅ · sem rolagem lateral em 320/375/414/768/1024/1280 ✅
**Notas:** em 320px (celulares muito antigos) os botões longos quebram em 2 linhas, sem estourar a tela; a partir de 375px ficam em 1 linha.

### 🔵 FASE 10: PRODUÇÃO v2
**Status:** `🔄 Em Andamento` (portão: Ravena + Kerberos + aprovação de Kleber)
**Progresso:** 2/6 tarefas (33%)
- [x] 10.1 `opengraph-image.tsx` no visual escuro (headline v2 + "Diagnóstico gratuito"); `icon.tsx` com Y grafite sobre laranja
- [x] 10.2 Medição no build de produção: celular (CPU 4x + 4G lento) FCP/LCP 2,0 s · CLS 0 — desktop LCP 0,38 s · CLS 0 — 14 requisições, ~310 KB. Lighthouse local falhou 2x com `NO_NAVSTART` (bug do Chrome headless no Windows); Acessibilidade 100 e SEO 100 foram medidos. Rodar PageSpeed Insights na URL de produção após o deploy.
- [ ] 10.3 Ravena — QA completo
- [ ] 10.4 Kerberos — auditoria de segurança
- [ ] 10.5 Tag `backup-pre-hml-v2` → merge `dev → hml` (aprovação de Kleber)
- [ ] 10.6 Tag `backup-pre-prod-v2` → merge `hml → main` (aprovação de Kleber) → deploy Vercel
**Pendente de decisão:** a imagem de compartilhamento usa a fonte padrão do gerador (sem Fraunces). Para usar Fraunces é preciso baixar os arquivos `.ttf` (licença OFL) para o projeto.
**Pendente de Kleber:** validar as respostas do FAQ (`src/content/landing.ts`).

---

## Backups e Segurança

| Data | Tag | Tipo | Status |
|------|-----|------|--------|
| — | `backup-pre-hml-fase04` | Pré-HML | ✅ |
| — | `backup-pre-prod-fase04` | Pré-produção | ✅ |
| 2026-11-18 | `backup-pre-hml-20261118-132049` | Pré-HML (Soluções +3) | ✅ |
| 2026-11-18 | `backup-pre-prod-20261118-132146` | Pré-produção (Soluções +3) | ✅ |
| 2026-11-18 | `backup-pre-hml-20261118-145711` | Pré-HML (headline, painel, dobra) | ✅ |
| 2026-11-18 | `backup-pre-prod-20261118-145728` | Pré-produção (headline, painel, dobra) | ✅ |
| 2026-11-18 | `backup-pre-hml-20261118-165533` | Pré-HML (fundador + logos) | ✅ |
| 2026-11-18 | `backup-pre-prod-20261118-165556` | Pré-produção (fundador + logos) | ✅ |
| 2026-11-18 | `backup-pre-hml-20261118-180820` | Pré-HML (remove CTA final + botão reunião) | ✅ |
| 2026-11-18 | `backup-pre-prod-20261118-180838` | Pré-produção (remove CTA final + botão reunião) | ✅ |
| 2026-11-18 | `backup-pre-hml-20261118-225519` | Pré-homologação (domínio yascom.com.br) | ✅ |
| 2026-11-18 | `backup-pre-prod-20261118-225519` | Pré-produção (domínio yascom.com.br) | ✅ |

## Histórico de Sessões

| Data | O que foi feito |
|------|----------------|
| 2026-06-03 | Shiva: Descoberta completa, design system definido, MoSCoW aprovado |
| 2026-06-03 | Hades: Roadmap criado, stack definida, Atlas instruído para Fase 01 |
| — | Atlas: Fases 01–04 executadas (commits d9d3a8d → 3c66364), site em produção |
| 2026-11-13 | Shiva: spec da seção de clientes + 10 logos. Hades: Fase 05 planejada |
| 2026-11-13 | Atlas: seção Clientes implementada e enviada para `dev` (e569c43) |
| 2026-11-13 | Seção Clientes revertida a pedido de Kleber — site volta ao estado anterior |
| 2026-11-18 | Shiva: spec v2.0 (tema escuro "Sala de Controle", 6 pilares, catálogo com 7 soluções, diagnóstico gratuito), MoSCoW v2 aprovado |
| 2026-11-18 | Hades: ADR-001, plano das Fases 06–10 e copy deck completo em `plano-tarefas-v2.md` |
| 2026-11-18 | Atlas: Fases 06–09 + 10.1/10.2 executadas em `dev` (de53a58 → e75c773) |
| 2026-11-18 | Kleber não aprovou a v2. Site restaurado ao modelo anterior em `dev`; v2 cancelada |
| 2026-11-18 | Atlas: 3 novos cards em Soluções (API Oficial WhatsApp Business, Automações de Tarefas Internas, Processamento de Documentos) — ed6b384 |
| 2026-11-18 | Publicado em produção (`main` c3422b5). Ravena e Kerberos dispensados por Kleber ("CONFIRMAR PRODUÇÃO"); Atlas verificou build, responsividade, secrets e links |
| 2026-11-18 | Hero: nova headline ("IA e automações para escalar sua empresa de forma estratégica"), etiqueta "IA, CRM e automações sob medida", painel `HeroPainel.tsx` (todos os serviços em sequência) no lugar do chat, OG image atualizada |
| 2026-11-18 | Hero compactado: primeira dobra inteira a 100% de zoom em 1366×657, 1536×695, 1440×760 e 1920×937; espaço Hero → Problema reduzido |
| 2026-11-18 | CTA final: "Resposta em até 24 horas" → "Resposta no mesmo dia" (contradizia a dor "clientes esperando horas") |
| 2026-11-18 | Publicado em produção (`main` 02f5820) a pedido de Kleber ("pode publicar"); Ravena e Kerberos não executados; Atlas verificou build, lint, secrets, dobra e site no ar |
| 2026-11-18 | Bloco do fundador (`Fundador.tsx`, foto `src/assets/kleber-fundador.jpg`, "Kleber Pereira") ao fim de Por que a YASCOM; faixa `Clientes.tsx` com 10 logos (grade estática, cinza → cor no hover) entre Hero e Problema. Bastidores Elegance sem logo (só foto de pessoa no Instagram); Morais & Morais fora da lista nova |
| 2026-11-18 | Publicado em produção (`main` b8f10a2) a pedido de Kleber; Ravena e Kerberos não executados; Atlas verificou build, textos e imagens no ar (foto do fundador servida em WebP, ~26 KB) |
| 2026-11-18 | Seção final 'Pronto para transformar seu atendimento?' (`CTAFinal.tsx`) removida a pedido de Kleber; botão 'Marcar Reunião Estratégica' (WhatsApp) abaixo da assinatura do fundador. Publicado (`main` 3de7bac) |
| 2026-11-18 | Shiva: recomendações pendentes de material de Kleber: caso real de cliente, foto do fundador, oferta "diagnóstico gratuito", FAQ, segmentos, integrações, política de privacidade, medição de cliques, domínio yascom.com.br, WhatsApp flutuante |
| 2026-11-18 | Domínio yascom.com.br (Registro.br, modo avançado: A @ 216.198.79.1 / 64.29.17.1, CNAME www → Vercel) ligado ao projeto; certificado Let's Encrypt emitido via `vercel certs issue` (até 17/02/2027, renovação automática). `metadataBase`, canonical e og:url → https://yascom.com.br. Publicado (`main` bb82b89) |
| 2026-11-20 | Todos os botões de WhatsApp do site (`src/lib/whatsapp.ts`) → 41 98504-6918, número do agente de IA de pré-atendimento (conectado via UAZAPI). Antes: 41 99911-2899 (Kleber). Credenciais UAZAPI no vault e em `.env.local` (fora do git) |
| 2026-11-20 | Mensagens prontas dos botões de WhatsApp: "Olá Kleber!" → "Olá, YASCOM!" (quem recebe agora é a IA) |
| 2026-11-20 | Mensagens prontas voltam a começar com "Olá Kleber!" a pedido de Kleber; a IA se apresenta como assistente dele. Número 41 98504-6918 mantido |
| 2026-11-20 | Shiva: spec do agente de IA de pré-atendimento (`agente-pre-atendimento.md`, `moscow-agente.md`). Hades: ADR-002 (rota de API no próprio Next.js + Supabase + Claude + Groq para áudio) e plano das Fases 11–14 em `plano-tarefas-agente.md`. Aguardando aprovação do modelo e do custo |
| 2026-11-20 | Atlas · Fase 11: número 41 98504-6918 reconectado na UAZAPI (QR escaneado por Kleber); Supabase `yascom-agente` (ref `yyirhncvkxtwutovenqb`, sa-east-1, grátis) com `conversas`/`mensagens` e RLS sem políticas públicas; rota `/api/whatsapp/webhook` (segredo, `after()`, filtros, sem duplicar). Webhook antigo (trip-crm-staging) substituído por um túnel de teste local. Testes simulados ok (401 sem segredo, gravação, repetida, número do Kleber ignorado) |
| 2026-11-20 | Atlas · Fases 12 e 13 (código): Claude Haiku 5.5 com ferramentas `encaminhar_para_kleber`/`marcar_nao_cliente`, espera de 8 s para juntar mensagens, áudio (UAZAPI `AudioMessage` → `/message/download` MP3 → Groq `whisper-large-v3-turbo`), aviso ao Kleber com link wa.me, alerta ao Kleber se a IA falhar. Chave Anthropic antiga inválida, substituída no vault. 6 conversas simuladas ok. Achado: o WhatsApp entrega o número do Kleber sem o nono dígito (554199112899); trava corrigida. Aguardando teste real do Kleber |
| 2026-11-20 | Kleber dispensou o teste manual. Atlas: envio real pela UAZAPI testado (mensagem de teste ao Kleber); trava do número do Kleber fechada de novo (`AGENTE_PERMITIR_KLEBER` removida) e conferida; 8 variáveis cadastradas na Vercel (Production, sensíveis); nenhum segredo no git; build ok. Aguardando "pode publicar" |
