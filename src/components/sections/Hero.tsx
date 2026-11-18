import { MessageCircle, ArrowRight } from "lucide-react";
import { WA } from "@/lib/whatsapp";
import { HeroPainel } from "./HeroPainel";

export function Hero() {
  return (
    <section
      style={{
        paddingTop: "calc(72px + 16px)",
        paddingBottom: "40px",
        backgroundColor: "var(--color-bg-primary)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Conteúdo */}
          <div style={{ maxWidth: "680px" }}>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "var(--color-accent-light)",
                border: "1px solid var(--color-accent)",
                borderRadius: "var(--radius-full)",
                padding: "6px 16px",
                marginBottom: "32px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-accent)",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 600,
                  color: "var(--color-accent)",
                }}
              >
                IA, CRM e automações sob medida
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 4.2vw, 3.25rem)",
                fontWeight: 900,
                fontStyle: "italic",
                color: "var(--color-text-primary)",
                lineHeight: 1.05,
                marginBottom: "24px",
              }}
            >
              Inteligência Artificial e automações para{" "}
              <span style={{ color: "var(--color-accent)" }}>
                escalar sua empresa
              </span>{" "}
              de forma estratégica.
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xl)",
                color: "var(--color-text-secondary)",
                lineHeight: 1.6,
                marginBottom: "40px",
                maxWidth: "560px",
              }}
            >
              Para empresários e gestores que buscam escalar o negócio de forma
              inteligente com Agentes de IA, CRM personalizado e automações, e
              aumentar as vendas sem aumentar a equipe.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href={WA.hero}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={18} />
                Falar com a YASCOM
              </a>
              <a href="#solucoes" className="btn-secondary">
                Ver soluções
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Stats */}
            <div
              style={{
                marginTop: "48px",
                paddingTop: "32px",
                borderTop: "1px solid var(--color-border)",
                display: "flex",
                gap: "32px",
                flexWrap: "wrap",
              }}
            >
              {[
                { value: "24/7", label: "Atendimento contínuo" },
                { value: "100%", label: "Personalizado" },
                { value: "1:1", label: "Suporte do fundador" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-3xl)",
                      fontWeight: 900,
                      fontStyle: "italic",
                      color: "var(--color-accent)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      color: "var(--color-text-muted)",
                      marginTop: "4px",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual decorativo — visível apenas desktop */}
          <div
            className="hero-visual"
            style={{
              position: "relative",
              minHeight: "400px",
              alignItems: "center",
              justifyContent: "center",
              display: "none",
            }}
          >
            <div
              style={{
                width: "420px",
                height: "420px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,75,0,0.12) 0%, rgba(255,75,0,0.03) 60%, transparent 100%)",
                position: "absolute",
              }}
            />
            <HeroPainel />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-visual { display: flex !important; }
        }
      `}</style>
    </section>
  );
}
