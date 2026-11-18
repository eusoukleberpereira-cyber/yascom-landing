import { virada } from "@/content/landing";
import { Section } from "@/components/ui/Section";

/** Virada de chave: tira a culpa do visitante e aponta o inimigo real. */
export function Virada() {
  return (
    <Section id="virada" variant="raised" aria-labelledby="virada-titulo">
      <p className="label-mono mb-8 text-center">{virada.label}</p>

      <h2 id="virada-titulo" className="sr-only">
        {virada.problemaNao.titulo} {virada.problemaNao.texto} {virada.problemaSempre.titulo}{" "}
        {virada.problemaSempre.texto}
      </h2>

      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 md:gap-6">
        <div className="rounded-2xl border border-line p-8 md:p-10">
          <p className="mb-3 font-mono text-xs tracking-[0.12em] text-fg-muted uppercase">
            {virada.problemaNao.titulo}
          </p>
          <p className="font-display text-2xl leading-snug text-fg-muted line-through decoration-accent/60 decoration-2 md:text-3xl">
            {virada.problemaNao.texto}
          </p>
        </div>

        <div className="rounded-2xl border border-accent bg-base p-8 md:p-10">
          <p className="label-mono mb-3">{virada.problemaSempre.titulo}</p>
          <p className="font-display text-2xl leading-snug font-bold text-fg md:text-3xl">
            {virada.problemaSempre.texto}
          </p>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-3xl text-center font-display text-3xl leading-tight font-black text-fg italic md:text-4xl">
        {virada.fechamento}
      </p>
    </Section>
  );
}
