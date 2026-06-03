import { MessageCircle, ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/5541999112899";

export function Hero() {
  return (
    <section
      style={{
        paddingTop: "calc(72px + 80px)",
        paddingBottom: "80px",
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
                IA + CRM sob medida para empresas
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900,
                fontStyle: "italic",
                color: "var(--color-text-primary)",
                lineHeight: 1.05,
                marginBottom: "24px",
              }}
            >
              Seu atendimento
              <br />
              no{" "}
              <span style={{ color: "var(--color-accent)" }}>
                piloto automático.
              </span>
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
              Agentes de IA e CRM personalizados para empresas que não aceitam
              perder clientes por falha no atendimento.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href={WA_LINK}
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
              height: "400px",
              alignItems: "center",
              justifyContent: "center",
              display: "none",
            }}
          >
            <div
              style={{
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,75,0,0.12) 0%, rgba(255,75,0,0.03) 60%, transparent 100%)",
                position: "absolute",
              }}
            />
            <div
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "28px",
                backgroundColor: "var(--color-bg-white)",
                boxShadow: "var(--shadow-lg)",
                maxWidth: "280px",
                position: "relative",
                width: "100%",
              }}
            >
              <div style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-accent-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ fontSize: "20px" }}>🤖</span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    margin: 0,
                  }}
                >
                  Agente YASCOM
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-xs)",
                    color: "var(--color-text-muted)",
                    margin: "2px 0 0",
                  }}
                >
                  Online agora • Responde em segundos
                </p>
              </div>
              {[
                { msg: "Olá! Como posso ajudar?", own: false },
                { msg: "Quero saber sobre os planos", own: true },
                { msg: "Claro! Vou te passar todas as informações 👇", own: false },
              ].map((m, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: m.own ? "flex-end" : "flex-start",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-xs)",
                      backgroundColor: m.own
                        ? "var(--color-accent)"
                        : "var(--color-bg-secondary)",
                      color: m.own ? "#fff" : "var(--color-text-primary)",
                      borderRadius: m.own
                        ? "12px 12px 2px 12px"
                        : "12px 12px 12px 2px",
                      padding: "8px 12px",
                      maxWidth: "80%",
                      lineHeight: 1.4,
                      display: "inline-block",
                    }}
                  >
                    {m.msg}
                  </span>
                </div>
              ))}
            </div>
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
