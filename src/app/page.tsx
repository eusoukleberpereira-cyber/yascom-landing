import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Virada } from "@/components/sections/Virada";
import { Dores } from "@/components/sections/Dores";
import { Pilares } from "@/components/sections/Pilares";
import { Catalogo } from "@/components/sections/Catalogo";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { PorQueYascom } from "@/components/sections/PorQueYascom";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";

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
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
