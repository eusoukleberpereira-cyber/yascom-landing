# ADR-001 — Landing v2: tokens no Tailwind e conteúdo como dados

**Status:** Aceito
**Data:** 2026-11-18
**Autor:** Hades

## Contexto

A v2 da landing (spec da Shiva em `docs/memoria/projeto.md` v2.0) troca o tema (creme → escuro "Sala de Controle"), reescreve 8 seções e cria 4 novas. O código atual tem **108 objetos `style={{}}` inline** espalhados em 10 arquivos, e todo o texto vive dentro do JSX. Trocar o tema nesse formato significa caçar cor por cor em 108 lugares. Mudar uma frase exige abrir componente React.

## Decisão

1. **Tokens no Tailwind 4 (`@theme` em `globals.css`)**: cores, fontes e espaçamentos viram classes (`bg-base`, `text-primary`, `font-display`…). As seções reescritas usam classes, **sem `style={{}}`** e sem blocos `<style>` dentro de componentes.
2. **Conteúdo como dados (`src/content/landing.ts`)**: todo o texto (pilares, catálogo, etapas, FAQ, oferta) fica num único arquivo tipado. Componentes só desenham.
3. **Zero JavaScript no cliente por padrão**: todas as seções são Server Components. FAQ com `<details>/<summary>` nativo (acessível, sem JS). Botão flutuante em CSS puro. Animações de scroll (Should) entram depois num único componente cliente pequeno.
4. **Fontes via `next/font/google`** (Fraunces, DM Sans, JetBrains Mono): baixadas no build e servidas pelo próprio domínio, compatível com o CSP `font-src 'self'`.
5. **Mensagens do WhatsApp centralizadas** em `src/lib/whatsapp.ts`, todas citando o diagnóstico gratuito.

## Alternativas descartadas

- **Só trocar as variáveis CSS e manter os inline styles**: rápido, mas as seções serão reescritas de qualquer jeito. Seria pintar a parede que vai ser derrubada.
- **CMS (Sanity, Contentful…)**: custo, conta nova, complexidade. Um arquivo `.ts` resolve para uma landing editada poucas vezes por mês.
- **Biblioteca de animação (Framer Motion)**: ~30 KB de JS para fazer fade-in. Não.

## Consequências

- (+) Trocar uma cor do tema = mudar uma linha.
- (+) Kleber (ou o Atlas) muda qualquer texto num só arquivo.
- (+) Página continua estática, rápida e compatível com o CSP atual sem alterações.
- (−) Reescrita maior nesta versão (aceitável: as seções seriam refeitas de qualquer forma).
- `docs/memoria/design-tokens.css` continua sendo a referência; `globals.css` é a implementação.
