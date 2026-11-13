import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Problema } from "@/components/sections/Problema";
import { Solucoes } from "@/components/sections/Solucoes";
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
        <Problema />
        <Solucoes />
        <ComoFunciona />
        <PorQueYascom />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
