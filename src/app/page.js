import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Historia from "@/components/Historia";
import Metodo from "@/components/Metodo";
import Libro from "@/components/Libro";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Historia />
      <Metodo />
      <Libro />
      <CtaFinal />
      <Footer />
    </>
  );
}

