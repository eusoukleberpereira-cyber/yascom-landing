# Plano de Tarefas — Fase 15: Trava contra alucinação + Banco de provas
**Autor:** Hades · **Data:** 2026-11-22 · **Spec:** `docs/memoria/trava-alucinacao.md` (MoSCoW aprovado)

> **2026-11-22: escopo reduzido por Kleber** ("Eu quero que o agente de IA responda o que está no prompt. Somente isso."). Só a tarefa 15.3 (trava) foi executada, com uma conferência única das 21 pegadinhas. O banco de provas, o fiscal e as rodadas antes/depois (15.1, 15.2, 15.4) ficam registrados aqui caso sejam retomados.

---

## Decisões técnicas

| Decisão | Escolha | Por quê |
|---|---|---|
| Cliente de mentira | **Mensagens fixas por roteiro** (sem IA do lado do cliente) | Reprodutível, mais barato e sem um segundo ponto de alucinação |
| Agente testado | A própria `responder()` de `src/lib/agente/ia.ts` | Testa o código de produção, não uma cópia |
| Efeitos colaterais | `acoes` falsas que só anotam a chamada | Nenhum WhatsApp, aviso ao Kleber ou gravação no Supabase |
| Regra 4 (encaminhamento fiel) | **Conferência por código**, comparando os dados enviados com os esperados do roteiro | Determinístico: não precisa de IA para comparar texto |
| Regras 1, 2, 3, 5, 6 | Fiscal = Claude com saída estruturada (`output_config.format`, JSON schema) | Veredito em JSON validado, sem parsing frágil |
| Modelo do fiscal | **Aguardando Kleber** (ver custo abaixo) | |
| Repetições | 3 por pegadinha | A IA varia; uma rodada só pode dar falso ✅ |
| Execução | Script local `scripts/banco-de-provas/rodar.ts` com `tsx`, `--conditions=react-server` (o `server-only` quebra fora do Next sem isso) e `--env-file=.env.local` | Nada novo na Vercel; chave já está no `.env.local` |
| Saída | `scripts/banco-de-provas/resultados/AAAA-MM-DD-HHMM-<rotulo>.md` (boletim) + `.json` (cru) | Boletim legível para o Kleber; JSON para comparar antes × depois |
| Git | `resultados/` no `.gitignore` | Conversas simuladas não precisam ir para o repositório |

## Custo estimado (preços de 2026-11, por 1M de tokens)

- Agente (Haiku 5.5, $0,10 entrada / $0,50 saída): ~US$ 0,002 por pegadinha → desprezível.
- Fiscal, por chamada (~4K entrada, ~1,5K saída com raciocínio):
  - **Sonnet 5.5** ($2 / $10): ~US$ 0,025
  - **Opus 5.5** ($4 / $20): ~US$ 0,05
- Uma rodada = 21 pegadinhas × 3 repetições = 63 fiscalizações. Fase completa = 2 rodadas (antes + depois) + ~1 rodada de ajuste.

| Fiscal | Por rodada | Fase inteira (≈3 rodadas) |
|---|---|---|
| Sonnet 5.5 | ~US$ 1,60 | **~US$ 5** |
| Opus 5.5 | ~US$ 3,20 | **~US$ 10** |

Cobrado na mesma conta Anthropic do agente. Nada recorrente: só gasta quando alguém roda o script.

---

## Tarefas

### 15.1 Montar o banco de provas
- `scripts/banco-de-provas/pegadinhas.ts`: as 21 pegadinhas da spec. Cada uma tem `id`, `titulo`, `turnos` (mensagens do cliente, em ordem), `nomeWhatsapp`, `esperado` (texto do comportamento certo) e, nas de encaminhamento (18, 19), `encaminhamentoEsperado` com `nome`/`empresa` exatos ou `null` quando não pode encaminhar.
  - Pegadinhas de várias mensagens (ex.: 2 = pedir preço e depois insistir; 19 = se apresentar e dizer a necessidade) usam vários turnos. Entre turnos, a resposta do agente entra no histórico.
- `scripts/banco-de-provas/fiscal.ts`: chamada ao Claude com `PROMPT_FIXO` + transcrição + comportamento esperado + as regras 1, 2, 3, 5 e 6 da spec. Saída estruturada: `{ regras: [{ regra, passou, motivo, trecho }], passou_geral }`. Regra 6 (formato) não derruba o `passou_geral`, só é listada.
- `scripts/banco-de-provas/rodar.ts`: roda tudo (ou `--so=4,7`), 3 repetições, até 3 pegadinhas em paralelo, e escreve boletim + JSON. Argumento `--rotulo=antes|depois`.
- Boletim: nota geral (X/63), tabela por pegadinha (✅✅❌) e, para cada falha, a pergunta, a resposta do agente e o motivo do fiscal.
- `package.json`: `"provas": "tsx --conditions=react-server --env-file=.env.local scripts/banco-de-provas/rodar.ts"`; `tsx` em devDependencies.
- **Aceite:** `npm run provas -- --so=20 --rotulo=teste` roda 1 pegadinha × 3, gera o boletim, e **nenhuma** linha nova aparece em `conversas`/`mensagens` no Supabase. `npm run lint` e `npx tsc --noEmit` passam.

### 15.2 Rodada "antes" (manual atual, sem mudar nada)
- `npm run provas -- --rotulo=antes`
- **Aceite:** boletim gerado. Atlas reporta a nota e a lista de falhas sem resumir.

### 15.3 Aplicar a trava em `src/lib/agente/prompt.ts`
- Trocar "Você pode explicar os serviços em poucas linhas se a pessoa perguntar, mas seu objetivo é passar para o Kleber, não vender sozinha." por "Se a pessoa perguntar, explique os serviços usando só o que está escrito acima. Seu objetivo é passar para o Kleber, não vender sozinha."
- Substituir a regra "Não invente informações sobre a YASCOM..." pela regra nova da spec (seção "Regra nova"), incluindo: conversa social liberada; perguntas fora do assunto não respondidas; encaminhamento só com o que a pessoa disse, sem completar nem usar o nome do perfil sem confirmar.
- Escrever como instrução positiva e curta (o Haiku segue melhor regra clara que lista de proibições em maiúsculas). Não colocar nada que mude por conversa no `PROMPT_FIXO` (cache).
- **Aceite:** lint + tsc + build ok.

### 15.4 Rodada "depois"
- `npm run provas -- --rotulo=depois`
- Se houver falhas: **no máximo 2 ajustes** no texto da trava (regra das 2 tentativas), rodando só as pegadinhas que falharam (`--so=`). Se ainda falhar, parar e reportar ao Hades.
- **Aceite:** 0 falhas nas regras 1–5 em todas as repetições, **e** as pegadinhas de controle 20 e 21 passando (a trava não pode deixar o agente mudo).

### 15.5 Fechamento
- Commit em `dev` (código + prompt), sem `resultados/`.
- Atualizar `docs/asbuilt.md` (Fase 15 + histórico) com a nota antes × depois.
- Publicar em produção **só com "pode publicar" do Kleber**, no fluxo de sempre (tags de backup → `hml` → `main`).

---

## INSTRUÇÕES PARA ATLAS — Fase 15

### Pré-condições
- [ ] `git checkout dev && git pull origin dev`
- [ ] `.env.local` com `ANTHROPIC_API_KEY` (vault: `anthropic_api_key`). Não pedir ao Kleber o que já está no vault.
- [ ] Modelo do fiscal aprovado pelo Kleber (constante `MODELO_FISCAL` em `fiscal.ts`)

### Passos (na ordem)
15.1 → 15.2 → 15.3 → 15.4 → 15.5, cada um com o aceite acima. **Não aplicar a trava antes de gerar o boletim "antes"**, senão perdemos a comparação.

### Em caso de erro
Parar e reportar ao Hades com o output completo.

### ✅ Relatório obrigatório ao concluir
- **STATUS**: sucesso / erro
- **STEPS EXECUTADOS**: lista numerada
- **OUTPUT DO TERMINAL**: copiado, sem resumo
- **NOTAS**: antes X/63 · depois Y/63, e falhas restantes
- **ESTADO ATUAL**: `git status`, lint, tsc, build
- **CUSTO REAL**: soma de `usage` das chamadas (agente + fiscal), em US$
