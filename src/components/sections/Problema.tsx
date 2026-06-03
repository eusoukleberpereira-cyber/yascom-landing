const DORES = [
  {
    emoji: "⏳",
    titulo: "Clientes esperando horas por uma resposta",
    descricao:
      "Cada hora de espera é uma chance a mais do concorrente fechar a venda no seu lugar.",
  },
  {
    emoji: "📉",
    titulo: "Leads esfriando porque ninguém fez o follow-up",
    descricao:
      "O lead chegou, demonstrou interesse e sumiu. A equipe estava ocupada — e a oportunidade, perdida.",
  },
  {
    emoji: "🔄",
    titulo: "Equipe sobrecarregada com tarefas repetitivas",
    descricao:
      "Responder as mesmas perguntas dezenas de vezes por dia drena energia de quem deveria estar vendendo.",
  },
  {
    emoji: "🗂️",
    titulo: "CRM genérico que não serve para o seu negócio",
    descricao:
      "Um sistema que não foi feito para você cria mais trabalho do que resolve. Dados espalhados, processos quebrados.",
  },
  {
    emoji: "💸",
    titulo: "Vendas perdidas por falta de organização",
    descricao:
      "Sem visibilidade do funil, você não sabe onde o cliente parou — e não consegue agir antes de ele desistir.",
  },
];

export function Problema() {
  return (
    <section className="secondary" id="problema">
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
            O problema
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
            Reconhece alguma dessas situações?
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {DORES.map((dor, i) => (
            <div
              key={i}
              className="card"
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <span style={{ fontSize: "32px" }}>{dor.emoji}</span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-xl)",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  lineHeight: 1.3,
                }}
              >
                {dor.titulo}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                {dor.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
