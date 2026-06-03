import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YASCOM | Agentes de IA e CRM para Empresas",
  description:
    "Soluções de Inteligência Artificial e CRM personalizados para transformar o atendimento da sua empresa. Fale com a YASCOM.",
  openGraph: {
    title: "YASCOM | Inteligência Digital",
    description:
      "Agentes de IA e CRM sob medida para empresas que não aceitam perder clientes.",
    siteName: "YASCOM",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${dmSans.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
