import { empresa } from "@/content/landing";

const LINKS = [
  { href: "#solucoes", texto: "Soluções" },
  { href: "#como-funciona", texto: "Como funciona" },
  { href: "#diagnostico", texto: "Diagnóstico gratuito" },
  { href: "#faq", texto: "Perguntas frequentes" },
];

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    // pb extra no celular para o botão flutuante do WhatsApp não cobrir o texto
    <footer className="border-t border-line bg-raised pt-12 pb-28 md:pb-12">
      <div className="container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-display text-2xl leading-none font-black text-fg">{empresa.nome}</p>
          <p className="text-xs tracking-[0.12em] text-fg-muted uppercase">{empresa.descricao}</p>
        </div>

        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LINKS.map((link) => (
              <li key={link.href} className="text-sm">
                <a href={link.href} className="text-fg-soft no-underline hover:text-accent">
                  {link.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container mt-10">
        <div className="flex flex-col gap-1 border-t border-line pt-6 text-xs text-fg-muted md:flex-row md:justify-between">
          <p className="text-xs">
            {empresa.razaoSocial} | CNPJ: {empresa.cnpj}
          </p>
          <p className="text-xs">
            © {ano} {empresa.nome}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
