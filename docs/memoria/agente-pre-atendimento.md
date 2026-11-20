# Agente de IA de Pré-atendimento — Especificação
**Versão:** 1.0
**Data:** 2026-11-20
**Responsável:** Kleber (Fundador)
**Autora:** Shiva

---

## Visão

Um agente de IA (Claude, da Anthropic) que atende **todo** contato que chega pelo site yascom.com.br no WhatsApp **41 98504-6918**. Ele recebe a pessoa, descobre o básico sobre ela e, se for um cliente em potencial, passa a conversa para o Kleber com um resumo pronto.

O agente também serve de **vitrine**: é um exemplo vivo do "Agente de IA" que a YASCOM vende.

---

## Canal

| Item | Valor |
|---|---|
| Número da IA | 41 98504-6918 (`5541985046918`) |
| Conexão | UAZAPI, servidor `https://evolluti.uazapi.com` (token no vault: `uazapi_instance_token`; no projeto: `.env.local` → `UAZAPI_*`) |
| Número pessoal do Kleber (recebe os avisos) | 41 99911-2899 (`5541999112899`) |
| Cérebro | Claude (Anthropic). Chave no vault: `anthropic_api_key`. Modelo e custo: Hades define e cota antes de ligar |

**Site:** todos os botões de WhatsApp (`src/lib/whatsapp.ts`) já apontam para o número da IA, no branch `dev` (commits `41a4d7d`, `1074043`). **Só publicar quando a IA estiver respondendo.** As mensagens prontas continuam começando com "Olá Kleber!", decisão do Kleber.

**Risco conhecido:** a UAZAPI não é a API oficial da Meta, e o próprio site diz que ferramentas não oficiais correm risco de bloqueio. Kleber escolheu a UAZAPI conscientemente. Para proteger o número, a IA **só responde quem chama**: nunca inicia conversas nem dispara mensagens.

---

## De onde o cliente vem

Cada botão do site abre o WhatsApp com uma mensagem pronta. A IA usa essa mensagem para saber o interesse do cliente desde a primeira frase:

| Botão | Mensagem pronta começa com | Interesse |
|---|---|---|
| Header / Hero | "Olá Kleber! Vi o site da YASCOM e quero saber como vocês podem ajudar..." | Ainda não sabe |
| Agente de IA | "...interesse no Agente de IA..." | Agente de IA |
| CRM Personalizado | "...CRM Personalizado..." | CRM |
| IA + CRM Integrados | "...Solução Completa..." | Solução completa |
| API Oficial WhatsApp | "...API Oficial do WhatsApp Business..." | API WhatsApp |
| Automações | "...automatizar tarefas internas..." | Automações |
| Documentos | "...Processamento de Documentos..." | Documentos |
| Marcar Reunião Estratégica | "...marcar uma Reunião Estratégica..." | **Quente**: quer falar com o Kleber |

Mensagens que não batem com nenhuma (o cliente digitou do zero) são tratadas como "ainda não sabe".

---

## Como a conversa acontece

1. **Apresentação** (decisão de Kleber, opção "a"). A IA diz logo que é IA e se usa como vitrine. Exemplo:
   > "Oi! Aqui é a assistente virtual do Kleber 🤖 Ele me pediu pra te receber. A propósito, eu sou um exemplo do Agente de IA que a YASCOM monta pros clientes!"
2. **Descoberta curta** (decisão de Kleber, opção "c"). A IA descobre **só três coisas**, conversando, sem cara de formulário:
   - Nome da pessoa
   - Nome da empresa
   - O que ela precisa
   O resto (tamanho, quem decide, pressa) o Kleber pergunta na conversa dele.
3. **Encerramento** (decisão de Kleber, opção "a"):
   - A IA avisa o cliente: "Prontinho! Já passei tudo pro Kleber, ele vai te chamar em breve 😊"
   - A IA manda um **aviso** para o WhatsApp pessoal do Kleber (41 99911-2899). Exemplo:
     > 🔔 Novo cliente: Ana, Papelaria Giga. Quer automatizar o atendimento no WhatsApp. Conversa: 41 9xxxx-xxxx
   - **Kleber chama o cliente** pelo número dele. A IA não marca reunião.

### Quem não é cliente (decisão de Kleber, opção "a")
Candidato a emprego, vendedor oferecendo serviço, pessoa física, curioso: a IA responde com educação, explica que a YASCOM atende empresas e **não avisa o Kleber**.

---

## Regras da IA

- Conhece os **6 serviços**: Agente de IA, CRM Personalizado, IA + CRM Integrados, API Oficial WhatsApp Business, Automações de Tarefas Internas, Processamento de Documentos (textos em `src/components/sections/Solucoes.tsx`)
- **Nunca** fala de preço, valores ou prazos. Isso é com o Kleber (a YASCOM é premium, sem tabela de preços)
- **Nunca** mente que é humana. Se perguntarem, confirma que é IA
- **Nunca** inicia conversa nem manda mensagem sem o cliente ter escrito antes
- **Entende áudio** (muitos clientes só mandam áudio no WhatsApp)
- Tom de voz da YASCOM: parceiro próximo, cálido, direto, sem jargão técnico (ver `projeto.md` → Tom de Voz)
- Respostas curtas, como num WhatsApp de verdade

---

## Sugestões para o Hades

- **Áudio:** o Claude não ouve áudio direto. O vault já tem `groq_api_key`, que dá pra usar para transformar o áudio em texto antes de mandar ao Claude
- **Onde o agente roda e onde ficam as conversas:** a stack padrão é Vercel + Supabase, mas quem decide é o Hades. A lista de contatos atendidos fica para a segunda versão (ver `moscow-agente.md`); a IA só precisa lembrar da conversa em andamento
- **Custo:** cotar o custo por conversa (Claude + transcrição + servidor) e mostrar ao Kleber antes de ligar
