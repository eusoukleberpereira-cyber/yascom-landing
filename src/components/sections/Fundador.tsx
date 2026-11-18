import Image from "next/image";
import fotoKleber from "@/assets/kleber-fundador.jpg";

/** Bloco do fundador: foto do Kleber + visão, missão e compromisso da YASCOM. */
export function Fundador() {
  return (
    <div
      className="fundador-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "40px",
        alignItems: "center",
        marginTop: "96px",
        paddingTop: "80px",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      {/* Foto */}
      <div style={{ position: "relative", maxWidth: "400px", width: "100%", margin: "0 auto" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "16px -16px -16px 16px",
            borderRadius: "var(--radius-xl)",
            border: "2px solid var(--color-accent)",
          }}
        />
        <Image
          src={fotoKleber}
          alt="Kleber Pereira, fundador da YASCOM Inteligência Digital"
          placeholder="blur"
          sizes="(min-width: 768px) 400px, 100vw"
          style={{
            position: "relative",
            width: "100%",
            height: "auto",
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-lg)",
            display: "block",
          }}
        />
      </div>

      {/* Texto */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            fontWeight: 900,
            fontStyle: "italic",
            color: "var(--color-text-primary)",
            lineHeight: 1.15,
            marginBottom: "28px",
          }}
        >
          &ldquo;A automação é o motor do{" "}
          <span style={{ color: "var(--color-accent)" }}>crescimento sustentável</span>.&rdquo;
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-lg)",
            color: "var(--color-text-secondary)",
            lineHeight: 1.7,
          }}
        >
          <p>
            Sou o <strong style={{ color: "var(--color-text-primary)" }}>Kleber Pereira</strong>, fundador da
            YASCOM.
          </p>
          <p>
            Hoje, vejo que a automação e a Inteligência Artificial são o motor que impulsiona o
            crescimento sustentável das empresas. Quem responde o cliente na hora, organiza cada
            contato e para de perder tempo com tarefas repetitivas vende mais, com a mesma equipe.
          </p>
          <p>
            Por isso, minha missão é fazer com que o seu negócio alcance o máximo de resultados:{" "}
            <strong style={{ color: "var(--color-text-primary)" }}>
              captando mais leads, atendendo cada um no momento certo e escalando as vendas de forma
              previsível.
            </strong>
          </p>
          <p>
            Na YASCOM não existe solução de prateleira. Eu acompanho pessoalmente cada cliente, do
            diagnóstico até o sistema funcionando, e continuo ao seu lado depois disso.
          </p>
        </div>

        <div
          style={{
            marginTop: "28px",
            paddingTop: "20px",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-xl)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              lineHeight: 1.2,
            }}
          >
            Kleber Pereira
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              color: "var(--color-text-muted)",
              marginTop: "4px",
            }}
          >
            Fundador da YASCOM Inteligência Digital
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .fundador-grid { grid-template-columns: 0.85fr 1.15fr !important; gap: 72px !important; }
        }
      `}</style>
    </div>
  );
}
