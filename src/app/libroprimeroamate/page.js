import Navbar from "@/components/Navbar";
import Libro from "@/components/Libro";
import CtaLibroFirmado from "@/components/CtaLibroFirmado";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Libro Primero Amate | Lic. Romina Lorena Montiel • Método MODO LÍDER®",
  description: "Obra literaria «Primero Ámate» de la Lic. Romina Lorena Montiel. Adquirí tu ejemplar en papel o formato digital e-book a través de Tinta Libre Ediciones y librerías internacionales.",
  alternates: {
    canonical: "https://rominalorenamontielmodolider.vercel.app/libroprimeroamate",
  },
};

export default function LibroPrimeroAmatePage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", background: "#FAF6F0", paddingTop: "1.5rem" }}>
        <Libro />
        <CtaLibroFirmado />
      </main>
      <Footer />
    </>
  );
}
