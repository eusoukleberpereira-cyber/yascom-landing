const PASSOS = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    descricao:
      "Conversamos sobre o seu negócio, seus desafios e como seu atendimento funciona hoje. Nada genérico — entendemos sua operação de ponta a ponta.",
  },
  {
    numero: "02",
    titulo: "Configuração",
    descricao:
      "Montamos a solução ideal: Agente de IA treinado para o seu negócio, CRM ajustado ao seu processo, integração com seus canais de atendimento.",
  },
  {
    numero: "03",
    titulo: "Resultado",
    descricao:
      "Você atende mais, vende mais e perde menos clientes. E conta com suporte direto para ajustar o que for necessário ao longo do caminho.",
  },
];

export function ComoFunciona() {
  return (
    <section className="dark" id="como-funciona">
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
            Como funciona
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              fontStyle: "italic",
              color: "var(--color-text-inverted)",
              lineHeight: 1.1,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Simples assim. Em 3 passos.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px",
          }}
        >
          {PASSOS.map((passo, i) => (
            <div
              key={i}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-6xl)",
                  fontWeight: 900,
                  fontStyle: "italic",
                  color: "var(--color-accent)",
                  lineHeight: 1,
                  opacity: 0.7,
                }}
              >
                {passo.numero}
              </span>

              <div
                style={{
                  borderLeft: "2px solid var(--color-accent)",
                  paddingLeft: "20px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-2xl)",
                    fontWeight: 700,
                    color: "var(--color-text-inverted)",
                    marginBottom: "12px",
                  }}
                >
                  {passo.titulo}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-base)",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {passo.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
