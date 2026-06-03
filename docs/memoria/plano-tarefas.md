# Plano de Tarefas — YASCOM Landing Page
**Gerado por:** Hades  
**Data:** 2026-06-03

---

## FASE 01 — FUNDAÇÃO

### TAREFA 1.1 — Criar projeto Next.js 15

```bash
cd C:\Users\klebe\.gemini\yascom-landing
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
```

Resultado esperado: projeto criado sem erros, `npm run dev` funciona na porta 3000.

---

### TAREFA 1.2 — Criar repositório GitHub + GitFlow

```bash
git init
git add .
git commit -m "feat: initial Next.js 15 setup"
git branch -M main
# Criar repo no GitHub via gh CLI:
git remote add origin https://github.com/eusoukleberpereira-cyber/yascom-landing.git
git push -u origin main
# Criar branches:
git checkout -b dev
git push origin dev
git checkout -b hml
git push origin hml
git checkout dev
```

Resultado esperado: 3 branches no GitHub (main, hml, dev). Atlas trabalha sempre em `dev`.

---

### TAREFA 1.3 — Aplicar Design Tokens

Criar arquivo `src/app/globals.css` com o conteúdo de `docs/memoria/design-tokens.css`.

Adicionar ao `layout.tsx` o import das fontes Google:
```tsx
import { Fraunces, DM_Sans } from 'next/font/google'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
})
```

Resultado esperado: fontes Fraunces e DM Sans carregando corretamente.

---

### TAREFA 1.4 — Layout Base

Criar `src/components/layout/Container.tsx`:
```tsx
export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-[1200px] mx-auto px-6 ${className}`}>
      {children}
    </div>
  )
}
```

Criar `src/app/page.tsx` com estrutura básica de seções (placeholders).

---

### TAREFA 1.5 — Configurar Vercel

```bash
npx vercel --prod
# Linkar ao projeto Vercel, branch main = produção
```

Resultado esperado: URL de produção funcionando na Vercel.

---

## FASE 02 — SEÇÕES SUPERIORES

### Estrutura de arquivos:
```
src/
  components/
    sections/
      Header.tsx
      Hero.tsx
      Problema.tsx
      Solucoes.tsx
      ComoFunciona.tsx
```

### Conteúdo de cada seção:

**Header:**
- Logo: texto "YASCOM" em Fraunces bold + tagline pequena "Inteligência Digital"
- Botão: "Falar no WhatsApp" → link `https://wa.me/5541999112899`
- Sticky (fixo no topo), fundo #F4F1EC com border-bottom sutil

**Hero:**
- Headline: `Seu atendimento no piloto automático.` (Fraunces 900 italic, grande)
- Subheadline: `Agentes de IA e CRM sob medida para empresas que não aceitam perder clientes.`
- CTA: botão laranja "Falar com a YASCOM no WhatsApp" → `https://wa.me/5541999112899`
- Visual: elemento gráfico abstrato ou grid de pontos em laranja (sem foto genérica de stock)

**Problema (5 dores):**
- Título: `Reconhece alguma dessas situações?`
- 5 cards com ícones:
  1. "Clientes esperando horas por uma resposta"
  2. "Leads esfriando porque ninguém fez o follow-up"
  3. "Equipe sobrecarregada com tarefas repetitivas"
  4. "CRM genérico que não serve para o seu negócio"
  5. "Vendas perdidas por falta de organização"

**Soluções (3 cards):**
- Card 1: Agente de IA — "Atendimento 24/7 que responde, qualifica e vende"
- Card 2: CRM Personalizado — "Gestão feita do zero para o seu jeito de trabalhar"
- Card 3: Solução Completa — "IA + CRM integrados numa só plataforma"
- Cada card: ícone, título, descrição curta

**Como Funciona (3 passos):**
- Passo 1: Diagnóstico — "Entendemos sua operação de ponta a ponta"
- Passo 2: Configuração — "Montamos a solução ideal para o seu negócio"
- Passo 3: Resultado — "Você atende mais, vende mais e perde menos clientes"

---

## FASE 03 — FECHAMENTO E CONVERSÃO

### Estrutura de arquivos:
```
src/
  components/
    sections/
      PorQueYascom.tsx
      CTAFinal.tsx
      Footer.tsx
```

**Por que YASCOM (4 diferenciais):**
- "Acompanhamento pessoal do fundador"
- "Solução sob medida — nada de template"
- "Implementação rápida, sem enrolação"
- "Suporte contínuo após o lançamento"

**CTA Final:**
- Fundo escuro (#1C1C1C)
- Headline: `Pronto para transformar seu atendimento?`
- Subtexto: `Fale com Kleber agora e descubra qual solução faz sentido para o seu negócio.`
- Botão laranja grande: "Começar agora no WhatsApp"

**Footer:**
- Logo YASCOM
- CNPJ: [inserir]
- Links: Instagram, LinkedIn (se houver)
- Copyright

---

## FASE 04 — PRODUÇÃO

### SEO:
```tsx
// src/app/layout.tsx
export const metadata = {
  title: 'YASCOM | Agentes de IA e CRM para Empresas',
  description: 'Soluções de Inteligência Artificial e CRM personalizados para transformar o atendimento da sua empresa. Fale com a YASCOM.',
  openGraph: {
    title: 'YASCOM | Inteligência Digital',
    description: 'Agentes de IA e CRM sob medida para empresas que não aceitam perder clientes.',
    url: 'https://yascom.com.br',
    siteName: 'YASCOM',
    locale: 'pt_BR',
    type: 'website',
  },
}
```

### Vercel Analytics:
```bash
npm install @vercel/analytics
```

```tsx
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react'
// Adicionar <Analytics /> antes de </body>
```

### Critério de Aceitação Geral:
- [ ] Lighthouse Performance > 90
- [ ] Todos os botões WhatsApp abrem o chat correto
- [ ] Layout 100% responsivo (mobile, tablet, desktop)
- [ ] Fontes Fraunces e DM Sans carregando
- [ ] Cores conforme design system
- [ ] Sem erros no console do browser
- [ ] Deploy na Vercel funcionando
