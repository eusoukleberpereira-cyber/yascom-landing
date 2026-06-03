import { Bot, LayoutDashboard, Layers, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5541999112899";

const SOLUCOES = [
  {
    icon: Bot,
    tag: "Atendimento inteligente",
    titulo: "Agente de IA",
    descricao:
      "Atendimento automatizado que responde, qualifica leads e vende — 24 horas por dia, 7 dias por semana. Seu negócio nunca fecha.",
    destaques: [
      "Responde em segundos",
      "Qualifica leads automaticamente",
      "Escala para humanos quando necessário",
    ],
    destaque: false,
  },
  {
    icon: LayoutDashboard,
    tag: "Gestão sob medida",
    titulo: "CRM Personalizado",
    descricao:
      "Não é um CRM genérico. É um sistema construído do zero para o seu jeito de trabalhar, com os processos que fazem sentido para o seu negócio.",
    destaques: [
      "Feito para sua operação",
      "Funil de vendas configurável",
      "Relatórios que importam",
    ],
    destaque: false,
  },
  {
    icon: Layers,
    tag: "Solução completa",
    titulo: "IA + CRM Integrados",
    descricao:
      "O Agente de IA e o CRM trabalhando juntos em uma única plataforma. O atendimento alimenta o CRM em tempo real — nada se perde.",
    destaques: [
      "Plataforma unificada",
      "Dados em tempo real",
      "Visão completa do cliente",
    ],
    destaque: true,
  },
];

export function Solucoes() {
  return (
    <section id="solucoes">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              color: "var(--color-accent)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "16px",
            }}
          >
            Nossas soluções
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              fontStyle: "italic",
              color: "var(--color-text-primary)",
              lineHeight: 1.1,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Tecnologia que trabalha por você.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {SOLUCOES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: s.destaque
                    ? "var(--color-bg-dark)"
                    : "var(--color-bg-white)",
                  border: s.destaque
                    ? "2px solid var(--color-accent)"
                    : "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "32px",
                  boxShadow: s.destaque
                    ? "var(--shadow-accent)"
                    : "var(--shadow-sm)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  position: "relative",
                }}
              >
                {s.destaque && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "var(--color-accent)",
                      color: "#fff",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-xs)",
                      fontWeight: 600,
                      padding: "4px 16px",
                      borderRadius: "var(--radius-full)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Mais completo
                  </div>
                )}

                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: s.destaque
                      ? "rgba(255,75,0,0.15)"
                      : "var(--color-accent-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={24} color="var(--color-accent)" />
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-xs)",
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "8px",
                    }}
                  >
                    {s.tag}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-2xl)",
                      fontWeight: 700,
                      color: s.destaque
                        ? "var(--color-text-inverted)"
                        : "var(--color-text-primary)",
                      lineHeight: 1.2,
                      marginBottom: "12px",
                    }}
                  >
                    {s.titulo}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-base)",
                      color: s.destaque
                        ? "var(--color-text-muted)"
                        : "var(--color-text-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {s.descricao}
                  </p>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {s.destaques.map((d, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-sm)",
                        color: s.destaque
                          ? "var(--color-text-inverted)"
                          : "var(--color-text-primary)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--color-accent)",
                          fontWeight: 700,
                        }}
                      >
                        ✓
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.destaque ? "btn-primary" : "btn-secondary"}
                  style={{ justifyContent: "center", marginTop: "auto" }}
                >
                  <MessageCircle size={16} />
                  Quero essa solução
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
