import { ArrowRight, MessageCircle } from "lucide-react";
import { catalogo } from "@/content/landing";
import { WA } from "@/lib/whatsapp";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** Catálogo: as 7 soluções que a YASCOM constrói + o ecossistema Tráfego → I.A. → CRM. */
export function Catalogo() {
  return (
    <Section id="solucoes" aria-labelledby="catalogo-titulo">
      <SectionHeader
        label={catalogo.label}
        title={catalogo.titulo}
        subtitle={catalogo.subtitulo}
        titleId="catalogo-titulo"
      />

      <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {catalogo.itens.map((item, i) => (
          <li key={item.id} className="card flex flex-col gap-4">
            <span className="label-mono" aria-hidden="true">
              {String(i + 1).padStart(2, "0")} / {String(catalogo.itens.length).padStart(2, "0")}
            </span>
            <h3 className="text-2xl">{item.titulo}</h3>
            <ul className="flex flex-wrap gap-2" aria-label="Inclui">
              {item.etiquetas.map((etiqueta) => (
                <li
                  key={etiqueta}
                  className="rounded-full border border-line-strong px-3 py-1 text-xs font-medium text-fg-soft"
                >
                  {etiqueta}
                </li>
              ))}
            </ul>
            <p className="flex-1 text-base text-fg-soft">{item.texto}</p>
            <a
              href={WA[item.wa]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start text-sm font-semibold text-accent no-underline hover:text-accent-hover"
              aria-label={`${catalogo.ctaCard}: ${item.titulo}`}
            >
              <MessageCircle size={16} aria-hidden="true" />
              {catalogo.ctaCard}
            </a>
          </li>
        ))}

        {/* Ecossistema: o caminho inteiro do anúncio à venda (ocupa o espaço ao lado do 7º card) */}
        <li className="flex flex-col justify-center rounded-2xl border border-accent p-8 md:p-10 lg:col-span-2">
          <ol className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2" aria-label="Caminho do cliente">
            {catalogo.ecossistema.etapas.map((etapa, i) => (
              <li key={etapa} className="flex items-center gap-3">
                <span className="font-display text-2xl font-black text-fg italic md:text-3xl">{etapa}</span>
                {i < catalogo.ecossistema.etapas.length - 1 ? (
                  <ArrowRight className="text-accent" size={22} aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
          <p className="text-base text-fg-soft md:text-lg">{catalogo.ecossistema.texto}</p>
        </li>
      </ul>
    </Section>
  );
}
