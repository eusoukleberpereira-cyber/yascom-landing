import { pilares } from "@/content/landing";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CtaWhatsApp } from "@/components/ui/CtaWhatsApp";

/** Os 6 pilares: os resultados que a YASCOM entrega. Coração da página. */
export function Pilares() {
  return (
    <Section id="resultados" variant="raised" aria-labelledby="pilares-titulo">
      <SectionHeader label={pilares.label} title={pilares.titulo} titleId="pilares-titulo" />

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {pilares.itens.map((pilar, i) => (
          <li key={pilar.titulo} className="card flex flex-col gap-4 bg-base">
            <span className="font-mono text-sm font-medium tracking-[0.12em] text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-xl leading-snug md:text-2xl">{pilar.titulo}</h3>
            <p className="text-base text-fg-soft">{pilar.texto}</p>
          </li>
        ))}
      </ol>

      <CtaWhatsApp className="mt-12 flex justify-center">{pilares.cta}</CtaWhatsApp>
    </Section>
  );
}
