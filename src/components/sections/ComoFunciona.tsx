import { comoFunciona } from "@/content/landing";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** O método em 4 etapas numeradas, ligadas por uma linha no desktop. */
export function ComoFunciona() {
  return (
    <Section id="como-funciona" variant="raised" aria-labelledby="como-funciona-titulo">
      <SectionHeader
        label={comoFunciona.label}
        title={comoFunciona.titulo}
        titleId="como-funciona-titulo"
      />

      <ol className="relative mt-14 grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-4 lg:gap-6">
        {/* Linha que conecta as etapas (só com 4 colunas) */}
        <span aria-hidden="true" className="absolute top-6 right-0 left-0 hidden h-px bg-line lg:block" />

        {comoFunciona.etapas.map((etapa, i) => (
          <li key={etapa.titulo} className="relative flex min-w-0 gap-5 md:flex-col md:gap-6">
            <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-accent bg-raised font-mono text-sm font-medium text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl">{etapa.titulo}</h3>
              <p className="text-base text-fg-soft">{etapa.texto}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
