import { MessageCircle, ArrowRight } from "lucide-react";
import { WA } from "@/lib/whatsapp";

export function CTAFinal() {
  return (
    <section
      className="dark"
      id="contato"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Elemento decorativo de fundo */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,75,0,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          {/* Label */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              color: "var(--color-accent)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "24px",
            }}
          >
            Vamos conversar?
          </p>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              fontWeight: 900,
              fontStyle: "italic",
              color: "var(--color-text-inverted)",
              lineHeight: 1.05,
              marginBottom: "24px",
            }}
          >
            Pronto para transformar
            <br />
            <span style={{ color: "var(--color-accent)" }}>
              seu atendimento?
            </span>
          </h2>

          {/* Subtexto */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xl)",
              color: "var(--color-text-muted)",
              lineHeight: 1.6,
              marginBottom: "48px",
              maxWidth: "520px",
              margin: "0 auto 48px",
            }}
          >
            Fale com Kleber agora e descubra qual solução faz sentido para o seu
            negócio. Sem compromisso, sem enrolação.
          </p>

          {/* CTA */}
          <a
            href={WA.cta}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              fontSize: "var(--text-lg)",
              padding: "20px 40px",
              display: "inline-flex",
              boxShadow: "0 8px 40px rgba(255, 75, 0, 0.4)",
            }}
          >
            <MessageCircle size={22} />
            Começar agora no WhatsApp
            <ArrowRight size={22} />
          </a>

          {/* Nota de confiança */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              color: "var(--color-text-muted)",
              marginTop: "24px",
            }}
          >
            Resposta em até 24 horas • Sem spam • Sem pressão
          </p>
        </div>
      </div>
    </section>
  );
}
