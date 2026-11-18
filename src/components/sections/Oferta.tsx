import { Check, ShieldCheck } from "lucide-react";
import { oferta } from "@/content/landing";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CtaWhatsApp } from "@/components/ui/CtaWhatsApp";

/** Oferta: diagnóstico gratuito, o que a pessoa recebe e a garantia de zero risco. */
export function Oferta() {
  return (
    <Section id="diagnostico" variant="raised" aria-labelledby="oferta-titulo">
      <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeader label={oferta.label} title={oferta.titulo} titleId="oferta-titulo" />

          <div className="flex gap-4 rounded-2xl border border-line p-6">
            <ShieldCheck size={28} className="shrink-0 text-accent" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <p className="font-display text-xl font-bold text-fg">{oferta.zeroRisco.titulo}</p>
              <p className="text-base text-fg-soft">{oferta.zeroRisco.texto}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-accent bg-base px-5 py-6 sm:p-8 md:p-10">
          <p className="mb-6 font-display text-2xl font-bold text-fg">{oferta.recebeTitulo}</p>
          <ul className="mb-10 flex flex-col gap-4">
            {oferta.recebe.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-fg md:text-lg">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent">
                  <Check size={14} strokeWidth={3} aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <CtaWhatsApp className="[&>a]:w-full [&>a]:px-3 [&>a]:text-[0.9375rem] sm:[&>a]:px-8 sm:[&>a]:text-base">{oferta.cta}</CtaWhatsApp>
        </div>
      </div>
    </Section>
  );
}
