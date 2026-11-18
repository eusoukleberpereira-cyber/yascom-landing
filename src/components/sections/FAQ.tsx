import { Plus } from "lucide-react";
import { faq } from "@/content/landing";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** Perguntas frequentes com <details> nativo: acessível por teclado e sem JS. */
export function FAQ() {
  return (
    <Section id="faq" aria-labelledby="faq-titulo">
      <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <SectionHeader label={faq.label} title={faq.titulo} titleId="faq-titulo" />

        <div className="border-t border-line">
          {faq.itens.map((item) => (
            <details key={item.pergunta} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-display text-lg font-bold text-fg transition-colors hover:text-accent md:text-xl [&::-webkit-details-marker]:hidden">
                {item.pergunta}
                <Plus
                  size={22}
                  aria-hidden="true"
                  className="shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="pb-6 text-base text-fg-soft md:pr-12 md:text-lg">{item.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
