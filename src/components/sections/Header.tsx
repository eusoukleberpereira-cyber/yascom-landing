import { MessageCircle } from "lucide-react";
import { WA } from "@/lib/whatsapp";
import { empresa } from "@/content/landing";

/** Cabeçalho fixo: logo + botão do diagnóstico gratuito (sem JS no cliente). */
export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-base/95">
      <div className="container flex h-[72px] items-center justify-between gap-4">
        <a href="#topo" className="flex flex-col gap-px no-underline" aria-label="YASCOM, voltar ao topo">
          <span className="font-display text-xl leading-none font-black text-fg">{empresa.nome}</span>
          <span className="text-[0.625rem] tracking-[0.12em] text-fg-muted uppercase sm:text-xs">
            {empresa.descricao}
          </span>
        </a>

        <a
          href={WA.diagnostico}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-4 py-2.5 text-sm sm:px-6 sm:py-3"
        >
          <MessageCircle size={16} aria-hidden="true" />
          Diagnóstico gratuito
        </a>
      </div>
    </header>
  );
}
