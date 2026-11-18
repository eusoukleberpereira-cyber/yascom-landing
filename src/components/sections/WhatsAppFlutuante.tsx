import { MessageCircle } from "lucide-react";
import { WA } from "@/lib/whatsapp";

/** Botão redondo fixo do WhatsApp, só no celular (< 768px). CSS puro, sem JS. */
export function WhatsAppFlutuante() {
  return (
    <a
      href={WA.diagnostico}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir diagnóstico gratuito pelo WhatsApp"
      className="fixed right-4 bottom-[calc(16px+env(safe-area-inset-bottom))] z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-on-accent shadow-[0_6px_24px_rgba(0,0,0,0.45)] transition-transform hover:scale-105 md:hidden"
    >
      <MessageCircle size={26} strokeWidth={2.25} aria-hidden="true" />
    </a>
  );
}
