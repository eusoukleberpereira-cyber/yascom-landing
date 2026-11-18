type SectionHeaderProps = {
  /** Etiqueta mono acima do título, ex.: "Resultados" */
  label: string;
  title: string;
  subtitle?: string;
  /** id do h2, para usar em aria-labelledby na Section */
  titleId?: string;
  align?: "left" | "center";
  className?: string;
};

/** Cabeçalho de seção: etiqueta mono laranja + título Fraunces + subtítulo opcional. */
export function SectionHeader({
  label,
  title,
  subtitle,
  titleId,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "items-start";

  return (
    <header className={`flex max-w-3xl flex-col gap-4 ${alignment} ${className}`}>
      <p className="label-mono">{label}</p>
      <h2 id={titleId}>{title}</h2>
      {subtitle ? <p className="text-fg-soft">{subtitle}</p> : null}
    </header>
  );
}
