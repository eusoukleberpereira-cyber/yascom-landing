import { ImageResponse } from "next/og";

// Imagem de compartilhamento (WhatsApp, LinkedIn, etc.) no visual v2 "Sala de Controle".
// ImageResponse exige estilos inline; as cores repetem os tokens de globals.css.
const BASE = "#141210";
const FG = "#F4F1EC";
const FG_SOFT = "#B8B1A7";
const FG_MUTED = "#8F887E";
const ACCENT = "#FF4B00";
const LINE = "#34302A";
const GRID = "rgba(244, 241, 236, 0.05)";

export const alt = "YASCOM | I.A., Automação, Sistemas e Tráfego Pago para Empresas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: BASE,
          backgroundImage: `linear-gradient(${GRID} 1px, transparent 1px), linear-gradient(90deg, ${GRID} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "monospace",
            fontSize: "20px",
            letterSpacing: "0.14em",
            color: ACCENT,
            textTransform: "uppercase",
          }}
        >
          I.A. · Automação · Sistemas · Tráfego Pago
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "84px",
              fontWeight: 900,
              fontStyle: "italic",
              lineHeight: 1.02,
              color: FG,
            }}
          >
            <span>Cliente que espera,</span>
            <span style={{ color: ACCENT }}>compra do concorrente.</span>
          </div>
          <div style={{ display: "flex", fontSize: "28px", color: FG_SOFT, maxWidth: "860px", lineHeight: 1.45 }}>
            Agentes de I.A., automações, sistemas e tráfego pago sob medida para a sua empresa.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${LINE}`,
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "38px", fontWeight: 900, color: FG, lineHeight: 1 }}>YASCOM</span>
            <span style={{ fontSize: "15px", color: FG_MUTED, letterSpacing: "0.16em", textTransform: "uppercase" }}>
              Inteligência Digital
            </span>
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: ACCENT,
              color: BASE,
              borderRadius: "100px",
              padding: "18px 34px",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            Diagnóstico gratuito →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
