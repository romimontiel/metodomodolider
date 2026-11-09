import { Cinzel, Outfit, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-cinzel",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-plus-jakarta",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Método MODO LÍDER | Lic. Romina Lorena Montiel • Autora de «Primero Ámate»",
  description: "Lic. Romina Lorena Montiel: Creadora del Método Modo Líder®, Mentora de Mentes y Negocios, Lic. en Administración y Finanzas, Neuropsicoeducadora y autora del libro «Primero Ámate» (Tinta Libre Ediciones).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${cinzel.variable} ${outfit.variable} ${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
