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

# 🟠 LANDING v2 — "Sala de Controle"

> Spec: `docs/memoria/projeto.md` v2.0 · Plano detalhado: `docs/memoria/plano-tarefas-v2.md` · Decisões: `docs/decisions/ADR-001-landing-v2-estilo-e-conteudo.md`

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
**Status:** `⏳ Aguardando`
**Progresso:** 0/5 tarefas (0%)
- 6 Pilares, Catálogo (7 soluções + ecossistema), Como funciona (4 etapas), Por que YASCOM

### 🔵 FASE 09: FECHAMENTO
**Status:** `⏳ Aguardando`
**Progresso:** 0/6 tarefas (0%)
- Oferta Diagnóstico Gratuito, FAQ, Fechamento, Footer, WhatsApp flutuante (mobile)

### 🔵 FASE 10: PRODUÇÃO v2
**Status:** `⏳ Aguardando`
**Progresso:** 0/6 tarefas (0%)
- OG image escura, Lighthouse, Ravena, Kerberos, merge `hml` → `main`

---

## Backups e Segurança

| Data | Tag | Tipo | Status |
|------|-----|------|--------|
| — | `backup-pre-hml-fase04` | Pré-HML | ✅ |
| — | `backup-pre-prod-fase04` | Pré-produção | ✅ |

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
