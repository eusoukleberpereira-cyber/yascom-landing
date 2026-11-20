-- Agente de IA de pré-atendimento (ADR-002)
create table if not exists public.conversas (
  id uuid primary key default gen_random_uuid(),
  telefone text not null unique,
  nome_whatsapp text,
  nome text,
  empresa text,
  necessidade text,
  interesse text,
  origem text,
  status text not null default 'em_andamento'
    check (status in ('em_andamento', 'encaminhada', 'nao_cliente')),
  encaminhada_em timestamptz,
  ultima_mensagem_em timestamptz not null default now(),
  criada_em timestamptz not null default now()
);

create table if not exists public.mensagens (
  id uuid primary key default gen_random_uuid(),
  conversa_id uuid not null references public.conversas(id) on delete cascade,
  papel text not null check (papel in ('cliente', 'ia')),
  texto text not null,
  tipo text not null default 'texto',
  whatsapp_id text unique,
  criada_em timestamptz not null default now()
);

create index if not exists mensagens_conversa_idx on public.mensagens (conversa_id, criada_em);

-- Só o servidor (service_role) acessa: RLS ligado e nenhuma política pública.
alter table public.conversas enable row level security;
alter table public.mensagens enable row level security;
revoke all on public.conversas, public.mensagens from anon, authenticated;
