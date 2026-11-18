import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  /** "base" = fundo principal · "raised" = fundo um tom acima, para alternar seções */
  variant?: "base" | "raised";
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  "aria-labelledby"?: string;
};

/** Seção padrão da landing: espaçamento vertical do tema + container central. */
export function Section({
  id,
  variant = "base",
  className = "",
  containerClassName = "",
  children,
  ...rest
}: SectionProps) {
  const bg = variant === "raised" ? "bg-raised" : "bg-base";

  return (
    <section id={id} className={`${bg} scroll-mt-20 ${className}`} {...rest}>
      <div className={`container ${containerClassName}`}>{children}</div>
    </section>
  );
}
