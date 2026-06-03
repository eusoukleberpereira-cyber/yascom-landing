import { UserCheck, Settings, Zap, Headphones } from "lucide-react";

const DIFERENCIAIS = [
  {
    icon: UserCheck,
    titulo: "Acompanhamento do fundador",
    descricao:
      "Não é um suporte terceirizado. É o Kleber — fundador da YASCOM — que acompanha você do primeiro contato até o sistema funcionando. E depois também.",
  },
  {
    icon: Settings,
    titulo: "100% sob medida",
    descricao:
      "Nada de template pronto. Cada solução é construída a partir do zero para o seu negócio, seus processos e sua realidade.",
  },
  {
    icon: Zap,
    titulo: "Implementação rápida",
    descricao:
      "Sem burocracia, sem meses de espera. A YASCOM vai direto ao ponto: entende, configura e entrega. Você vê resultado rápido.",
  },
  {
    icon: Headphones,
    titulo: "Suporte contínuo",
    descricao:
      "Depois de implementado, não te deixamos sozinho. Ajustamos, evoluímos e melhoramos a solução conforme o seu negócio cresce.",
  },
];

export function PorQueYascom() {
  return (
    <section className="secondary" id="por-que-yascom">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "64px",
            alignItems: "center",
          }}
          className="porque-grid"
        >
          {/* Lado esquerdo — título */}
          <div>
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
              Por que a YASCOM
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                fontStyle: "italic",
                color: "var(--color-text-primary)",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              Não somos mais uma ferramenta de IA.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-lg)",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                maxWidth: "480px",
              }}
            >
              Somos uma parceria. A diferença entre uma ferramenta que você
              precisa aprender a usar e uma solução que funciona para o seu
              negócio desde o primeiro dia.
            </p>
          </div>

          {/* Lado direito — diferenciais */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "32px",
            }}
            className="diferenciais-grid"
          >
            {DIFERENCIAIS.map((d, i) => {
              const Icon = d.icon;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      minWidth: "48px",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--color-accent-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={22} color="var(--color-accent)" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-xl)",
                        fontWeight: 700,
                        color: "var(--color-text-primary)",
                        marginBottom: "8px",
                        lineHeight: 1.2,
                      }}
                    >
                      {d.titulo}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-base)",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      {d.descricao}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .porque-grid { grid-template-columns: 1fr 1fr !important; }
          .diferenciais-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
