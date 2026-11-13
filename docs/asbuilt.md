# YASCOM Landing Page — As Built

**Descrição:** Landing page de alta conversão para YASCOM INTELIGÊNCIA DIGITAL LTDA, apresentando soluções de Agentes de IA e CRM personalizados. Objetivo único: gerar contato via WhatsApp.
**Stack:** Next.js 15 + Tailwind CSS + Vercel + GitHub
**Última atualização:** 2026-06-03

---

## Roadmap de Implementação

### 🔵 FASE 01: FUNDAÇÃO
**Status:** `⏳ Aguardando`
**Progresso:** 0/6 tarefas (0%)

#### Tarefas:
- [ ] Criar projeto Next.js 15 com Tailwind CSS
- [ ] Criar repositório GitHub + configurar GitFlow (dev / hml / main)
- [ ] Conectar Vercel ao branch `main`
- [ ] Aplicar design tokens (CSS variables + fontes Google)
- [ ] Criar layout base (container, tipografia, reset)
- [ ] Primeiro deploy funcionando na Vercel

**Testável:** Página em branco com cores e fontes corretas no ar
**Notas:** Stack definida: Next.js 15 + Tailwind CSS + Lucide React + Vercel Analytics

---

### 🔵 FASE 02: SEÇÕES SUPERIORES
**Status:** `⏳ Aguardando`
**Progresso:** 0/5 tarefas (0%)

#### Tarefas:
- [ ] Header fixo — logo YASCOM + botão WhatsApp
- [ ] Seção Hero — headline + subheadline + CTA principal
- [ ] Seção Problema — 5 dores do cliente
- [ ] Seção Soluções — 3 cards (Agente IA / CRM / Completo)
- [ ] Seção Como Funciona — 3 passos (Diagnóstico → Configuração → Resultado)

**Testável:** Ravena valida layout, responsividade e botão WhatsApp funcionando

---

### 🔵 FASE 03: FECHAMENTO E CONVERSÃO
**Status:** `⏳ Aguardando`
**Progresso:** 0/4 tarefas (0%)

#### Tarefas:
- [ ] Seção Por que YASCOM — diferenciais da marca
- [ ] CTA Final — seção de encerramento + botão WhatsApp
- [ ] Footer — logo, CNPJ, redes sociais
- [ ] Revisão mobile completa (todas as seções)

**Testável:** Ravena testa fluxo completo mobile + desktop

---

### 🔵 FASE 04: PRODUÇÃO
**Status:** `⏳ Aguardando`
**Progresso:** 0/5 tarefas (0%)

#### Tarefas:
- [ ] SEO completo (title, description, OG image, favicon)
- [ ] Vercel Analytics ativado
- [ ] Otimização de performance (imagens, fontes, LCP)
- [ ] Kerberos — auditoria de segurança
- [ ] Ravena — QA final + aprovação
- [ ] Merge hml → main → deploy produção 🚀

**Testável:** Página pública acessível pelo domínio final

---

### 🟠 FASE 05: PROVA SOCIAL — "Empresas que confiam na YASCOM"
**Status:** `🔄 Em Andamento`
**Progresso:** 4/6 tarefas (67%)
**Spec:** `docs/memoria/spec-clientes.md`

#### Tarefas:
- [x] Logos dos 10 clientes em `public/clientes/` (Shiva, 2026-11-13)
- [x] Componente `src/components/sections/Clientes.tsx` (esteira infinita, pausa no hover, reduced-motion)
- [x] Inserir `<Clientes />` entre `<Hero />` e `<Problema />` em `src/app/page.tsx`
- [x] `npm run lint` + `npm run build` sem erros, commit e push em `dev`
- [ ] Ravena — QA (desktop, 360px, hover, reduced-motion)
- [ ] Kerberos — revisão do diff → merge `dev → hml → main` com aprovação de Kleber

**Testável:** Esteira de logos visível entre o Hero e o Problema, sem rolagem horizontal no mobile
**Notas:** Next.js 16.2.7 (não 15). Ler `node_modules/next/dist/docs/` antes de usar `next/image` (regra do AGENTS.md).

---

## Backups e Segurança

| Data | Tag | Tipo | Status |
|------|-----|------|--------|
| — | — | — | — |

## Histórico de Sessões

| Data | O que foi feito |
|------|----------------|
| 2026-06-03 | Shiva: Descoberta completa, design system definido, MoSCoW aprovado |
| 2026-06-03 | Hades: Roadmap criado, stack definida, Atlas instruído para Fase 01 |
| 2026-11-13 | Shiva: spec da seção de clientes + 10 logos. Hades: Fase 05 planejada |
