export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        padding: "32px",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-5xl)",
          fontWeight: 900,
          fontStyle: "italic",
          color: "var(--color-text-primary)",
        }}
      >
        YASCOM
      </h1>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-lg)",
          color: "var(--color-text-secondary)",
        }}
      >
        Inteligência Digital — Fundação OK ✅
      </p>
      <span
        style={{
          display: "inline-block",
          background: "var(--color-accent)",
          color: "#fff",
          borderRadius: "var(--radius-full)",
          padding: "8px 24px",
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: "var(--text-sm)",
        }}
      >
        #FF4B00 — Design tokens ativos
      </span>
    </main>
  );
}
