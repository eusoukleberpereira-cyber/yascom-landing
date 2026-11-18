import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const title = "YASCOM | I.A., Automação, Sistemas e Tráfego Pago para Empresas";
const description =
  "Agentes de I.A., CRM personalizado, automações, sistemas e tráfego pago construídos sob medida para a sua empresa vender mais sem aumentar a equipe. Peça seu diagnóstico gratuito.";

export const metadata: Metadata = {
  metadataBase: new URL("https://yascom-landing.vercel.app"),
  title,
  description,
  keywords: [
    "agente de IA",
    "CRM personalizado",
    "atendimento automatizado",
    "inteligência artificial",
    "automação de processos",
    "API oficial do WhatsApp",
    "tráfego pago",
    "sistemas sob medida",
    "processamento de documentos",
    "automação de vendas",
    "YASCOM",
  ],
  authors: [{ name: "YASCOM Inteligência Digital" }],
  creator: "YASCOM",
  openGraph: {
    title,
    description,
    siteName: "YASCOM",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#141210",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
