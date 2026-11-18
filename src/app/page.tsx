import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Virada } from "@/components/sections/Virada";
import { Dores } from "@/components/sections/Dores";
import { Pilares } from "@/components/sections/Pilares";
import { Catalogo } from "@/components/sections/Catalogo";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { PorQueYascom } from "@/components/sections/PorQueYascom";
import { Oferta } from "@/components/sections/Oferta";
import { FAQ } from "@/components/sections/FAQ";
import { Fechamento } from "@/components/sections/Fechamento";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFlutuante } from "@/components/sections/WhatsAppFlutuante";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Virada />
        <Dores />
        <Pilares />
        <Catalogo />
        <ComoFunciona />
        <PorQueYascom />
        {/* Espaço reservado: Depoimentos (quando houver depoimentos reais) */}
        <Oferta />
        <FAQ />
        <Fechamento />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </>
  );
}
