import { MessageCircle } from "lucide-react";
import { WA, type WaKey } from "@/lib/whatsapp";

type CtaWhatsAppProps = {
  children: React.ReactNode;
  /** Qual mensagem pré-preenchida abrir (padrão: diagnóstico gratuito) */
  wa?: WaKey;
  variant?: "primary" | "secondary";
  /** Texto pequeno abaixo do botão, ex.: "Sem compromisso." */
  microcopy?: string;
  className?: string;
};

/** Botão que abre o WhatsApp da YASCOM com a mensagem certa. */
export function CtaWhatsApp({
  children,
  wa = "diagnostico",
  variant = "primary",
  microcopy,
  className = "",
}: CtaWhatsAppProps) {
  const link = (
    <a
      href={WA[wa]}
      target="_blank"
      rel="noopener noreferrer"
      className={variant === "primary" ? "btn-primary" : "btn-secondary"}
    >
      <MessageCircle size={18} aria-hidden="true" />
      {children}
    </a>
  );

  if (!microcopy) {
    return <div className={className}>{link}</div>;
  }

  return (
    <div className={`flex flex-col items-start gap-3 ${className}`}>
      {link}
      <p className="text-sm text-fg-muted">{microcopy}</p>
    </div>
  );
}
