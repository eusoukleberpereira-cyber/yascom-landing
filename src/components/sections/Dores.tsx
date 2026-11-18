import { Check, X } from "lucide-react";
import { dores } from "@/content/landing";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** Dores do dia a dia + o alívio de transformar a operação em sistema. */
export function Dores() {
  return (
    <Section id="dores" aria-labelledby="dores-titulo">
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <SectionHeader label={dores.label} title={dores.titulo} titleId="dores-titulo" />

        <ul className="flex flex-col">
          {dores.lista.map((dor) => (
            <li key={dor} className="flex items-start gap-4 border-b border-line py-4 text-fg first:pt-0">
              <X size={20} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
              <span>{dor}</span>
            </li>
          ))}
          <li className="pt-4 text-fg-muted italic">{dores.maisDores}</li>
        </ul>
      </div>

      <p className="mt-20 mb-8 font-display text-2xl font-bold text-fg md:text-3xl">{dores.ponte}</p>

      <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
        {dores.alivios.map((alivio) => (
          <li key={alivio.titulo} className="card flex flex-col gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg bg-accent-subtle text-accent">
              <Check size={20} aria-hidden="true" />
            </span>
            <h3 className="text-xl">{alivio.titulo}</h3>
            <p className="text-base text-fg-soft">{alivio.texto}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
