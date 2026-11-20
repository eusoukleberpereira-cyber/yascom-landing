# ADR-002 — Arquitetura do Agente de IA de Pré-atendimento

**Status:** Aceito (2026-11-20). Modelo: Claude Haiku 5.5 (`claude-haiku-5-5`), escolhido por Kleber
**Data:** 2026-11-20
**Autor:** Hades
**Spec:** `docs/memoria/agente-pre-atendimento.md` · `docs/memoria/moscow-agente.md`

## Contexto

Todo contato do site vai para o WhatsApp 41 98504-6918, conectado pela UAZAPI (decisão do Kleber). Uma IA (Claude) precisa responder, descobrir nome/empresa/necessidade, avisar o Kleber no 41 99911-2899 e entender áudio. O site já é um Next.js 16 na Vercel, publicado a partir do `main`.

## Decisão

1. **O agente mora dentro do próprio projeto `yascom-landing`**, como uma rota de API do Next.js: `src/app/api/whatsapp/webhook/route.ts`.
   - A UAZAPI chama essa rota a cada mensagem recebida (webhook).
   - A rota responde `200` na hora e faz o trabalho pesado depois, com `after()` do Next.js (`node_modules/next/dist/docs/01-app/03-api-reference/04-functions/after.md`). Assim a UAZAPI não reenvia a mensagem por achar que falhou.
   - Rota protegida por um segredo (`WHATSAPP_WEBHOOK_SECRET`) que vai na URL do webhook. Sem o segredo: `401`.
2. **Memória da conversa no Supabase** (plano gratuito). Duas tabelas:
   - `conversas`: telefone, nome, empresa, necessidade, origem (botão do site), status (`em_andamento` | `encaminhada` | `nao_cliente`), datas.
   - `mensagens`: conversa, papel (cliente/IA), texto, id da mensagem no WhatsApp (único, evita responder duas vezes), data.
   - RLS ligado, sem nenhuma política pública: só o servidor (chave `service_role`) acessa.
   - De brinde, a tabela `conversas` já é a "lista de contatos atendidos" (Should Have nº 11).
3. **Cérebro: Claude pela SDK oficial `@anthropic-ai/sdk`**, com duas ferramentas que a IA chama quando decide:
   - `encaminhar_para_kleber({ nome, empresa, necessidade, interesse })` → salva, manda o aviso para o Kleber e a mensagem de despedida para o cliente.
   - `marcar_nao_cliente({ motivo })` → salva o status; não avisa ninguém.
   - O texto fixo (persona, 6 serviços, regras) vai no `system` com cache de prompt (paga ~10% nas repetições).
4. **Áudio: transcrição pelo Groq (Whisper)**, com a chave já no vault (`groq_api_key`). O texto transcrito entra na conversa como se o cliente tivesse digitado.
5. **Filtros antes de chamar a IA:** ignorar grupos, status, mensagens enviadas pelo próprio número (`fromMe`) e **mensagens vindas do número pessoal do Kleber** (senão, quando o Kleber responder um aviso, a IA trataria o próprio Kleber como cliente).
6. **Juntar mensagens picadas:** espera ~8 s depois da última mensagem do cliente antes de responder. Quem manda "oi" / "tudo bem?" / "queria saber..." recebe uma resposta só.

## Alternativas descartadas

| Alternativa | Por que não |
|---|---|
| Servidor separado (VPS, Railway) | Mais um custo mensal e mais uma coisa para manter. A Vercel já está paga e no ar |
| Sem banco: ler o histórico direto da UAZAPI | Sem como evitar resposta duplicada nem guardar o status "já encaminhada" com segurança |
| Usar o Claude para ouvir o áudio | O Claude não recebe áudio. Transcrever antes é o caminho |
| Ferramentas de automação prontas (n8n, Make) | Mais uma assinatura e menos controle sobre o comportamento |

## Consequências

- O site e o agente vão para o ar **juntos**: o mesmo merge no `main` publica os botões novos e o agente. Enquanto isso, qualquer outra mudança no site espera (ou entra por um ajuste separado).
- A UAZAPI não é oficial: risco de bloqueio do número (aceito pelo Kleber). Mitigação: a IA só responde, nunca inicia conversa.
- Custos recorrentes novos: Claude (por conversa), Groq (centavos), Supabase (grátis). Valores em `plano-tarefas-agente.md`.
