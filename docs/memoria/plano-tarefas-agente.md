# Plano de Tarefas — Agente de IA de Pré-atendimento
**Data:** 2026-11-20 · **Autor:** Hades
**Base:** `agente-pre-atendimento.md`, `moscow-agente.md`, `ADR-002`
**Status:** modelo aprovado por Kleber em 2026-11-20: **Haiku 5.5 (`claude-haiku-5-5`)**, ~R$ 0,02 por conversa

---

## Custos (aprovação obrigatória antes da Fase 12)

Estimativa por conversa completa (~6 trocas de mensagem, texto fixo de ~3 mil tokens em cache, effort `low`). Câmbio aproximado US$ 1 ≈ R$ 5,50.

| Item | Opção | Por conversa | 100 conversas/mês | 500/mês |
|---|---|---|---|---|
| Claude | **Opus 5.5** (`claude-opus-5-5`, padrão) | ~US$ 0,09 (~R$ 0,50) | ~R$ 50 | ~R$ 250 |
| Claude | **Haiku 5.5** (`claude-haiku-5-5`) | ~US$ 0,003 (~R$ 0,02) | ~R$ 2 | ~R$ 10 |
| Áudio (Groq Whisper) | — | centavos | < R$ 5 | < R$ 15 |
| Supabase | Plano gratuito | R$ 0 | R$ 0 | R$ 0 |
| Vercel | Já existente | R$ 0 a mais | — | — |
| UAZAPI | Já contratada pelo Kleber | — | — | — |

São estimativas: o valor real aparece no painel da Anthropic depois da primeira semana.
**Como desligar tudo:** remover o webhook na UAZAPI (a IA para na hora), apagar a chave no painel da Anthropic e pausar/apagar o projeto no Supabase.

---

## Roadmap

### 🔵 FASE 11: FUNDAÇÃO DO AGENTE
**Objetivo:** a mensagem do cliente chega, é filtrada e guardada. A IA ainda não responde.
**Testável:** mandar "oi" para o 41 98504-6918 e ver a linha aparecer no Supabase.

- [x] 11.1 Supabase: usar o projeto `supabase_project_ref` do vault se ele for da YASCOM e estiver livre; senão criar um novo no plano gratuito (confirmar com o Kleber se for criar). Criar `conversas` e `mensagens` (ADR-002 §2) com RLS ligado e sem políticas públicas
- [~] 11.2 Variáveis: `.env.local` feito; Vercel (Production e Preview) fica para a Fase 14: `ANTHROPIC_API_KEY`, `GROQ_API_KEY`, `UAZAPI_SERVER_URL`, `UAZAPI_INSTANCE_TOKEN`, `KLEBER_WHATSAPP=5541999112899`, `WHATSAPP_WEBHOOK_SECRET` (gerar aleatório), `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`. Tudo do vault; o que faltar, salvar no vault
- [x] 11.3 Rota `src/app/api/whatsapp/webhook/route.ts`: confere o segredo, responde 200 e processa com `after()`. Ler antes `node_modules/next/dist/docs/01-app/` (rotas e `after`)
- [x] 11.4 Filtros: grupos, status, `fromMe`, número do Kleber. Id da mensagem único (sem duplicar)
- [ ] 11.5 Ler a documentação da UAZAPI (formato do webhook, envio de texto, download de mídia) e registrar o formato real recebido num arquivo de exemplo em `docs/`

**Critério de aceitação:** `npm run build` e `npm run lint` sem erro; mensagem de teste gravada uma única vez; mensagem do número do Kleber ignorada; chamada sem segredo recebe 401.

### 🔵 FASE 12: CÉREBRO
**Objetivo:** a IA conversa, descobre o básico e encaminha.
**Testável:** conversa completa de um celular de teste até a despedida.

- [ ] 12.1 Instalar `@anthropic-ai/sdk`. Modelo: `claude-haiku-5-5` (aprovado). Haiku não tem fallback automático em recusa: tratar `stop_reason: "refusal"` com mensagem fixa. `thinking` adaptativo (padrão), `output_config.effort: "low"`, cache no `system`, `max_tokens` ~1024
- [ ] 12.2 Texto fixo da IA (`src/lib/agente/prompt.ts`): persona (assistente virtual do Kleber, diz que é IA, se usa como vitrine), os 6 serviços (de `Solucoes.tsx`), as 8 mensagens prontas e o interesse de cada uma (`src/lib/whatsapp.ts`), regras (sem preço, sem prazo, nunca diz que é humana, respostas curtas de WhatsApp, tom de voz de `projeto.md`)
- [ ] 12.3 Ferramentas `encaminhar_para_kleber` e `marcar_nao_cliente` com `strict: true`; `tool_choice: auto` (o modelo não aceita forçar ferramenta)
- [ ] 12.4 Envio da resposta pela UAZAPI. Juntar mensagens picadas (~8 s)
- [ ] 12.5 Tratar `stop_reason` (`refusal`, `max_tokens`) e falhas da API: o cliente nunca fica sem resposta; em último caso, mensagem fixa "já te respondo em instantes" e aviso ao Kleber
- [ ] 12.6 Depois de encaminhada, a IA continua educada se o cliente escrever, mas **não avisa o Kleber de novo**

**Critério de aceitação:** 5 conversas de teste (cliente decidido, cliente vago, "Reunião Estratégica", candidato a emprego, pergunta de preço) com o comportamento da spec.

### 🔵 FASE 13: ÁUDIO E AVISO
**Objetivo:** fechar os Must Haves.
- [ ] 13.1 Áudio: baixar pela UAZAPI → transcrever no Groq → entrar na conversa como texto. Falha na transcrição: pedir com gentileza para escrever
- [ ] 13.2 Aviso para o Kleber (41 99911-2899) no formato da spec, com o link `wa.me` do cliente para ele chamar com um toque
- [ ] 13.3 Mensagem de despedida para o cliente

**Critério de aceitação:** áudio de teste entendido; aviso chegando no celular do Kleber; cliente avisado.

### 🔵 FASE 14: PRODUÇÃO
- [ ] 14.0 Travar de novo o número do Kleber: remover `AGENTE_PERMITIR_KLEBER` do `.env.local` (e nunca colocar na Vercel)
- [ ] 14.1 Ravena: roteiro das 5 conversas + áudio + botões do site abrindo o número novo
- [ ] 14.2 Kerberos: segredo do webhook, chaves fora do código e do git, RLS, tentativa de "enganar" a IA para falar preço ou sair do papel
- [ ] 14.3 Backup (tag) → `dev` → `hml` → `main` com aprovação do Kleber
- [ ] 14.4 Apontar o webhook da UAZAPI para `https://yascom.com.br/api/whatsapp/webhook?secret=...`
- [ ] 14.5 Teste real em produção com o Kleber
