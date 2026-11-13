# Especificação — Seção "Empresas que confiam na YASCOM"
**Data:** 2026-11-13
**Autora:** Shiva
**Aprovado por:** Kleber
**Referência visual:** faixa de logos "Empresas que confiam na Atração RH"

---

## Objetivo
Prova social: mostrar os logos de clientes reais atendidos pela YASCOM logo no início da página,
para gerar confiança antes do argumento de venda.

## Posição na página
Em `src/app/page.tsx`, entre `<Hero />` e `<Problema />`.

## Conteúdo
- Rótulo: `◆ EMPRESAS QUE CONFIAM NA YASCOM ◆`
- 10 logos, já em `public/clientes/`:

| Empresa | Arquivo | Observação |
|---|---|---|
| Silcar Autoescola | `silcar-autoescola.png` | 1920×1080, transparente |
| Major Financeira | `major-financeira.png` | 230×56, fundo branco |
| Papelaria Giga | `papelaria-giga.png` | 1024×410, transparente |
| Morais & Morais | `morais-e-morais.png` | 1024×1024, transparente |
| Telas Castro | `telas-castro.png` | 330×310, transparente (recortado) |
| Atração RH | `atracao-rh.png` | 400×75, transparente |
| Caixas Elegance | `caixas-elegance.png` | 657×185, faixa roxa |
| Viamel Tupi Distribuidora | `viamel-tupi.png` | 297×100, faixa vermelha |
| Viagens Legacy | `viagens-legacy.png` | 341×52, faixa azul (muito horizontal) |
| Comunidade Missionária de Villaregia | `villaregia.png` | 315×102, fundo branco |

Os clientes são atendidos atualmente pela YASCOM (confirmado por Kleber).

## Layout e comportamento
- **Esteira infinita horizontal** (marquee), da direita para a esquerda, velocidade suave (~35s por volta)
- Lista renderizada duas vezes em sequência para o loop ser contínuo, sem salto
- **Pausa ao passar o mouse** (`animation-play-state: paused`)
- Bordas laterais com fade (`mask-image` em gradiente linear) para os cartões sumirem suavemente no fundo
- Logos **coloridos** (sem filtro de cinza)
- `@media (prefers-reduced-motion: reduce)`: sem animação; mostrar a lista uma vez só, em grade centralizada com quebra de linha
- Sem rolagem horizontal da página em 360px (`overflow: hidden` no contêiner da esteira)

## Visual (tokens já existentes em `globals.css`)
| Elemento | Especificação |
|---|---|
| Fundo da seção | `var(--color-bg-primary)` (#f4f1ec) |
| Rótulo | `--font-body`, peso 600, `--text-sm`, caixa alta, `letter-spacing: 0.3em`, `--color-text-primary` |
| Losangos ◆ | `var(--color-accent)` (#ff4b00), ~20px de distância do texto |
| Cartão | 160×160px (desktop) / 120×120px (≤640px), fundo `--color-bg-white`, borda 1px `--color-border`, sem sombra, `border-radius: 2px` |
| Logo no cartão | centralizado, `object-fit: contain`, área máxima de ~75% × 60% do cartão |
| Espaço entre cartões | 24px (16px no mobile) |
| Padding vertical da seção | 64px desktop / 48px mobile |
| Distância rótulo → esteira | 40px |

Seguir o padrão dos componentes existentes (ex.: `Problema.tsx`), com estilos inline e tokens CSS. A animação `@keyframes` pode ir em `globals.css`.

## Acessibilidade
- `<section aria-labelledby>` apontando para o rótulo
- Cada logo com `alt="Logo [Nome da Empresa]"`
- Segunda cópia da lista com `aria-hidden="true"` (leitor de tela não lê duas vezes)
- `next/image` com `width`/`height` declarados (sem salto de layout)

## Arquivos
- Novo componente: `src/components/sections/Clientes.tsx`
- Array `CLIENTES = [{ nome, arquivo }]` no topo do componente, para facilitar adicionar ou remover clientes
- Alterar: `src/app/page.tsx` (inserir `<Clientes />`)
- Possível: `src/app/globals.css` (keyframes do marquee)

## Critérios de aceite
- [ ] Seção aparece entre Hero e Problema
- [ ] Os 10 logos aparecem e estão nítidos
- [ ] Loop contínuo sem salto visível
- [ ] Pausa no hover
- [ ] Sem animação com reduced-motion
- [ ] Sem rolagem horizontal da página em 360px
- [ ] `npm run build` sem erros e lint limpo
- [ ] GitFlow: `dev` → `hml` → `main`

## Melhorias futuras (não bloqueiam)
- Pedir versões em maior resolução para Major Financeira, Viamel Tupi e Viagens Legacy
