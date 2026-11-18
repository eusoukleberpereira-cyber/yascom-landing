import { ArrowRight, Bot } from "lucide-react";
import { hero } from "@/content/landing";
import { CtaWhatsApp } from "@/components/ui/CtaWhatsApp";

export function Hero() {
  return (
    <section
      id="topo"
      aria-labelledby="hero-titulo"
      className="bg-grid overflow-hidden border-b border-line pt-[calc(72px+56px)] pb-20 md:pt-[calc(72px+96px)] md:pb-28"
    >
      <div className="container grid items-center gap-12 md:grid-cols-[1.25fr_1fr]">
        <div className="flex flex-col items-start">
          <p className="label-mono mb-6">{hero.label}</p>

          <h1 id="hero-titulo" className="mb-6">
            {hero.titulo} <span className="text-accent">{hero.tituloDestaque}</span>
          </h1>

          <p className="mb-10 max-w-xl text-lg text-fg-soft md:text-xl">{hero.subtitulo}</p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <CtaWhatsApp className="[&>a]:w-full sm:[&>a]:w-auto">{hero.ctaPrimario}</CtaWhatsApp>
            <a href={hero.ctaSecundario.href} className="btn-secondary w-full sm:w-auto">
              {hero.ctaSecundario.texto}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
          <p className="mt-4 text-sm text-fg-muted">{hero.microcopy}</p>

          <dl className="mt-12 grid w-full grid-cols-3 gap-4 border-t border-line pt-8">
            {hero.indicadores.map((item) => (
              <div key={item.rotulo} className="flex flex-col gap-1">
                <dt className="order-2 text-xs text-fg-muted sm:text-sm">{item.rotulo}</dt>
                <dd className="order-1 font-display text-xl leading-tight font-black text-accent italic sm:text-2xl md:text-3xl">
                  {item.valor}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Conversa simulada com o Agente: só a partir de 768px */}
        <div className="hidden justify-center md:flex" aria-hidden="true">
          <div className="w-full max-w-[320px] rounded-2xl border border-line bg-raised p-6">
            <div className="mb-5 flex items-center gap-3 border-b border-line pb-4">
              <span className="flex size-10 items-center justify-center rounded-full bg-accent-subtle text-accent">
                <Bot size={20} />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-fg">{hero.conversa.nome}</span>
                <span className="flex items-center gap-1.5 font-mono text-[0.6875rem] tracking-wider text-fg-muted uppercase">
                  <span className="size-1.5 rounded-full bg-whatsapp" />
                  {hero.conversa.status}
                </span>
              </span>
            </div>

            <ul className="flex flex-col gap-2">
              {hero.conversa.mensagens.map((m) => (
                <li key={m.texto} className={`flex ${m.cliente ? "justify-end" : "justify-start"}`}>
                  <span
                    className={`max-w-[85%] px-3 py-2 text-sm leading-snug ${
                      m.cliente
                        ? "rounded-[12px_12px_2px_12px] bg-accent text-on-accent"
                        : "rounded-[12px_12px_12px_2px] bg-surface text-fg"
                    }`}
                  >
                    {m.texto}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
