import {
  Bot,
  LayoutDashboard,
  MessageCircle,
  ScanText,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Evento = {
  icon: LucideIcon;
  servico: string;
  texto: string;
  tempo: string;
};

// Uma única história passando por todos os serviços da YASCOM:
// a mensagem chega (API Oficial), a IA atende, o CRM registra,
// o documento é lido e a automação agenda o próximo passo.
const EVENTOS: Evento[] = [
  { icon: MessageCircle, servico: "API Oficial WhatsApp", texto: "Nova mensagem de Mariana", tempo: "agora" },
  { icon: Bot, servico: "Agente de IA", texto: "Respondeu e qualificou o lead", tempo: "3s" },
  { icon: LayoutDashboard, servico: "CRM Personalizado", texto: "Lead movido para Proposta", tempo: "5s" },
  { icon: ScanText, servico: "Documentos", texto: "Contrato lido e dados salvos", tempo: "12s" },
  { icon: Workflow, servico: "Automação", texto: "Follow-up agendado para amanhã", tempo: "15s" },
];

/** Painel decorativo do Hero: mostra todos os serviços funcionando juntos. */
export function HeroPainel() {
  return (
    <div
      aria-hidden="true"
      style={{
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-xl)",
        padding: "28px",
        backgroundColor: "var(--color-bg-white)",
        boxShadow: "var(--shadow-lg)",
        maxWidth: "380px",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Cabeçalho */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "18px",
          marginBottom: "18px",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-lg)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Operação YASCOM
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)",
              margin: "2px 0 0",
              lineHeight: 1.4,
            }}
          >
            Tudo conectado, funcionando sozinho
          </p>
        </div>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-xs)",
            fontWeight: 600,
            color: "#1E7F4F",
            backgroundColor: "#E7F6EE",
            borderRadius: "var(--radius-full)",
            padding: "4px 10px",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#25D366",
              display: "inline-block",
            }}
          />
          Ao vivo
        </span>
      </div>

      {/* Linha do tempo */}
      <ol style={{ listStyle: "none", position: "relative", margin: 0, padding: 0 }}>
        <span
          style={{
            position: "absolute",
            left: "17px",
            top: "18px",
            bottom: "18px",
            width: "2px",
            backgroundColor: "var(--color-accent-light)",
          }}
        />
        {EVENTOS.map((e, i) => {
          const Icon = e.icon;
          const ultimo = i === EVENTOS.length - 1;
          return (
            <li
              key={e.servico}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: ultimo ? 0 : "14px",
                position: "relative",
              }}
            >
              <span
                style={{
                  width: "36px",
                  height: "36px",
                  minWidth: "36px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: i === 1 ? "var(--color-accent)" : "var(--color-accent-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <Icon size={18} color={i === 1 ? "#FFFFFF" : "var(--color-accent)"} />
              </span>
              <span style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "var(--color-text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    lineHeight: 1.3,
                  }}
                >
                  {e.servico}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-primary)",
                    lineHeight: 1.35,
                  }}
                >
                  {e.texto}
                </span>
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-text-muted)",
                  whiteSpace: "nowrap",
                }}
              >
                {e.tempo}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
