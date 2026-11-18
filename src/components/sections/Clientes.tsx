import Image, { type StaticImageData } from "next/image";
import atracaoRh from "@/assets/clientes/atracao-rh.png";
import caixasElegance from "@/assets/clientes/caixas-elegance.png";
import majorFinanceira from "@/assets/clientes/major-financeira.png";
import papelariaGiga from "@/assets/clientes/papelaria-giga.png";
import ruteZachara from "@/assets/clientes/rute-zachara.png";
import silcarAutoescola from "@/assets/clientes/silcar-autoescola.png";
import telasCastro from "@/assets/clientes/telas-castro.png";
import viagensLegacy from "@/assets/clientes/viagens-legacy.png";
import viamelTupi from "@/assets/clientes/viamel-tupi.png";
import villaregia from "@/assets/clientes/villaregia.png";

/** `clara`: logo de cores muito claras; no estado cinza recebe mais contraste para não sumir. */
type Cliente = { nome: string; logo: StaticImageData; clara?: boolean };

const CLIENTES: Cliente[] = [
  { nome: "Major Financeira", logo: majorFinanceira },
  { nome: "Papelaria Giga", logo: papelariaGiga },
  { nome: "Silcar Autoescola", logo: silcarAutoescola },
  { nome: "Viagens Legacy", logo: viagensLegacy },
  { nome: "Comunidade Missionária de Villaregia", logo: villaregia, clara: true },
  { nome: "Telas Castro", logo: telasCastro },
  { nome: "Rute Zachara Advocacia", logo: ruteZachara },
  { nome: "Atração RH", logo: atracaoRh, clara: true },
  { nome: "Caixas Elegance", logo: caixasElegance },
  { nome: "Viamel Tupi Distribuidora", logo: viamelTupi },
];

// Equilíbrio óptico: todas as logos ocupam a mesma ÁREA visual, em vez da mesma altura.
// Assim uma logo muito larga (Viagens Legacy) não fica minúscula ao lado de uma alta (Telas Castro).
const AREA = 7800; // px² na tela do computador
const ALTURA_MAX = 64;
const LARGURA_MAX = 190;

function tamanho(logo: StaticImageData) {
  const proporcao = logo.width / logo.height;
  let w = Math.sqrt(AREA * proporcao);
  let h = w / proporcao;
  if (h > ALTURA_MAX) {
    h = ALTURA_MAX;
    w = h * proporcao;
  }
  if (w > LARGURA_MAX) {
    w = LARGURA_MAX;
    h = w / proporcao;
  }
  return { w: Math.round(w) };
}

/** Faixa estática de logos dos clientes atendidos pela YASCOM. */
export function Clientes() {
  return (
    <section
      className="clientes"
      aria-labelledby="clientes-titulo"
      style={{
        backgroundColor: "var(--color-bg-primary)",
        paddingTop: "48px",
        paddingBottom: "56px",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container">
        <p
          id="clientes-titulo"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            fontWeight: 600,
            color: "var(--color-accent)",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            textAlign: "center",
            marginBottom: "36px",
          }}
        >
          Empresas que confiam na YASCOM
        </p>

        <ul className="clientes-grid">
          {CLIENTES.map((c) => {
            const { w } = tamanho(c.logo);
            return (
              <li key={c.nome} className={c.clara ? "clientes-item clientes-item--clara" : "clientes-item"}>
                <Image
                  src={c.logo}
                  alt={`Logo ${c.nome}`}
                  title={c.nome}
                  sizes={`${w}px`}
                  className="clientes-logo"
                  style={{ width: `calc(${w}px * var(--logo-escala))`, height: "auto", maxWidth: "100%" }}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <style>{`
        .clientes { --logo-escala: 0.78; }
        .clientes-grid {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px 24px;
          align-items: center;
          justify-items: center;
          max-width: 1080px;
          margin: 0 auto;
        }
        .clientes-item { display: flex; align-items: center; justify-content: center; min-height: 56px; }
        .clientes-logo { display: block; }
        @media (min-width: 768px) {
          .clientes { --logo-escala: 0.85; }
          .clientes-grid { grid-template-columns: repeat(5, 1fr); gap: 40px 32px; }
          .clientes-item { min-height: 72px; }
        }
        @media (min-width: 1024px) {
          .clientes { --logo-escala: 1; }
        }
        /* Em telas com mouse: logos em tons de cinza, coloridas ao passar o mouse */
        @media (hover: hover) {
          .clientes-logo {
            filter: grayscale(1);
            opacity: 0.65;
            transition: filter var(--transition-normal), opacity var(--transition-normal), transform var(--transition-normal);
          }
          .clientes-item--clara .clientes-logo { filter: grayscale(1) brightness(0.45) contrast(1.6); }
          .clientes-item:hover .clientes-logo { filter: none; opacity: 1; transform: scale(1.04); }
        }
        @media (prefers-reduced-motion: reduce) {
          .clientes-logo { transition: none !important; }
          .clientes-item:hover .clientes-logo { transform: none; }
        }
      `}</style>
    </section>
  );
}
