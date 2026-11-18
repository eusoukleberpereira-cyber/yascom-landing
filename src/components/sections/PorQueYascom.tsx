import { Headphones, Settings, UserCheck, Zap, type LucideIcon } from "lucide-react";
import { porQueYascom } from "@/content/landing";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ICONES: Record<(typeof porQueYascom.diferenciais)[number]["icone"], LucideIcon> = {
  userCheck: UserCheck,
  settings: Settings,
  zap: Zap,
  headphones: Headphones,
};

export function PorQueYascom() {
  return (
    <Section id="por-que-yascom" aria-labelledby="porque-titulo">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <SectionHeader
          label={porQueYascom.label}
          title={porQueYascom.titulo}
          subtitle={porQueYascom.subtitulo}
          titleId="porque-titulo"
        />

        <ul className="grid gap-8 sm:grid-cols-2">
          {porQueYascom.diferenciais.map((d) => {
            const Icone = ICONES[d.icone];
            return (
              <li key={d.titulo} className="flex flex-col gap-3">
                <span className="flex size-11 items-center justify-center rounded-lg bg-accent-subtle text-accent">
                  <Icone size={22} aria-hidden="true" />
                </span>
                <h3 className="text-xl">{d.titulo}</h3>
                <p className="text-base text-fg-soft">{d.texto}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
