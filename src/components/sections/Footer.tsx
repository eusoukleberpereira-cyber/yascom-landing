export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--color-bg-dark)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "40px 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "var(--text-xl)",
              color: "var(--color-text-inverted)",
              lineHeight: 1,
              marginBottom: "4px",
            }}
          >
            YASCOM
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Inteligência Digital
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "40px",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        />

        {/* CNPJ e copyright */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)",
            }}
          >
            YASCOM INTELIGÊNCIA DIGITAL LTDA — CNPJ: 65.271.569/0001-37
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)",
            }}
          >
            © {year} YASCOM. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
