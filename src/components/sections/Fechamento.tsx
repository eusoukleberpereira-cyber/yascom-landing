import { fechamento } from "@/content/landing";
import { CtaWhatsApp } from "@/components/ui/CtaWhatsApp";

/** Fechamento: a decisão binária + último CTA. */
export function Fechamento() {
  return (
    <section id="contato" aria-labelledby="fechamento-titulo" className="bg-grid scroll-mt-20 border-t border-line">
      <div className="container flex flex-col items-center text-center">
        <h2 id="fechamento-titulo" className="mb-6 text-[clamp(2.5rem,7vw,4.5rem)]">
          {fechamento.titulo}
        </h2>
        <p className="mb-10 max-w-2xl text-lg text-fg-soft md:text-xl">{fechamento.texto}</p>
        <CtaWhatsApp
          microcopy={fechamento.microcopy}
          className="items-center [&>a]:px-6 [&>a]:py-4 sm:[&>a]:px-10 sm:[&>a]:py-5 sm:[&>a]:text-lg"
        >
          {fechamento.cta}
        </CtaWhatsApp>
      </div>
    </section>
  );
}
