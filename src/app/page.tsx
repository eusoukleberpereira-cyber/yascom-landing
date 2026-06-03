import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Problema } from "@/components/sections/Problema";
import { Solucoes } from "@/components/sections/Solucoes";
import { ComoFunciona } from "@/components/sections/ComoFunciona";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problema />
        <Solucoes />
        <ComoFunciona />
      </main>
    </>
  );
}
