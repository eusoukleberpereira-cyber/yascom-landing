import Image, { type StaticImageData } from "next/image";

import silcarAutoescola from "../../../public/clientes/silcar-autoescola.png";
import majorFinanceira from "../../../public/clientes/major-financeira.png";
import papelariaGiga from "../../../public/clientes/papelaria-giga.png";
import moraisEMorais from "../../../public/clientes/morais-e-morais.png";
import telasCastro from "../../../public/clientes/telas-castro.png";
import atracaoRh from "../../../public/clientes/atracao-rh.png";
import caixasElegance from "../../../public/clientes/caixas-elegance.png";
import viamelTupi from "../../../public/clientes/viamel-tupi.png";
import viagensLegacy from "../../../public/clientes/viagens-legacy.png";
import villaregia from "../../../public/clientes/villaregia.png";

type Cliente = { nome: string; logo: StaticImageData };

// Para adicionar ou remover um cliente: coloque o PNG em public/clientes/,
// importe acima e inclua/remova a linha abaixo.
const CLIENTES: Cliente[] = [
  { nome: "Silcar Autoescola", logo: silcarAutoescola },
  { nome: "Major Financeira", logo: majorFinanceira },
  { nome: "Papelaria Giga", logo: papelariaGiga },
  { nome: "Morais & Morais", logo: moraisEMorais },
  { nome: "Telas Castro", logo: telasCastro },
  { nome: "Atração RH", logo: atracaoRh },
  { nome: "Caixas Elegance", logo: caixasElegance },
  { nome: "Viamel Tupi Distribuidora", logo: viamelTupi },
  { nome: "Viagens Legacy", logo: viagensLegacy },
  { nome: "Comunidade Missionária de Villaregia", logo: villaregia },
];

function ListaLogos({ copia }: { copia?: boolean }) {
  return (
    <ul
      className={copia ? "clientes-lista clientes-lista-copia" : "clientes-lista"}
      aria-hidden={copia ? true : undefined}
    >
      {CLIENTES.map((cliente) => (
        <li key={cliente.nome} className="clientes-card">
          <Image
            src={cliente.logo}
            alt={copia ? "" : `Logo ${cliente.nome}`}
            sizes="(max-width: 640px) 90px, 120px"
            loading="eager"
            className="clientes-logo"
          />
        </li>
      ))}
    </ul>
  );
}

export function Clientes() {
  return (
    <section className="clientes" aria-labelledby="clientes-titulo">
      <div className="container">
        <p id="clientes-titulo" className="clientes-titulo">
          <span aria-hidden="true" className="clientes-losango">
            ◆
          </span>
          Empresas que confiam na YASCOM
          <span aria-hidden="true" className="clientes-losango">
            ◆
          </span>
        </p>
      </div>

      <div className="clientes-esteira">
        <div className="clientes-track">
          <ListaLogos />
          <ListaLogos copia />
        </div>
      </div>
    </section>
  );
}
