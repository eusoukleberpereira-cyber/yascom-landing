import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "YASCOM | Agentes de IA e CRM para Empresas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#F4F1EC",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Elemento decorativo laranja — topo direito */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,75,0,0.15) 0%, transparent 70%)",
          }}
        />
        {/* Elemento decorativo laranja — base esquerda */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "40px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,75,0,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Topo — badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "rgba(255,75,0,0.1)",
            border: "1px solid #FF4B00",
            borderRadius: "100px",
            padding: "8px 20px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#FF4B00",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#FF4B00",
              letterSpacing: "0.05em",
            }}
          >
            IA + CRM sob medida para empresas
          </span>
        </div>

        {/* Centro — headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "80px",
              fontWeight: 900,
              color: "#1C1C1C",
              lineHeight: 1.0,
              fontStyle: "italic",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Seu atendimento</span>
            <span>
              no <span style={{ color: "#FF4B00" }}>piloto</span>
            </span>
            <span style={{ color: "#FF4B00" }}>automático.</span>
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#5C5855",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}
          >
            Agentes de IA e CRM personalizados para empresas que não aceitam
            perder clientes.
          </div>
        </div>

        {/* Rodapé — logo + CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span
              style={{
                fontSize: "36px",
                fontWeight: 900,
                color: "#1C1C1C",
                fontStyle: "italic",
                lineHeight: 1,
              }}
            >
              YASCOM
            </span>
            <span
              style={{
                fontSize: "14px",
                color: "#8C8784",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Inteligência Digital
            </span>
          </div>

          <div
            style={{
              backgroundColor: "#FF4B00",
              color: "#FFFFFF",
              borderRadius: "100px",
              padding: "16px 32px",
              fontSize: "22px",
              fontWeight: 600,
            }}
          >
            Fale no WhatsApp →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
