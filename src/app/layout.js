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
  title: "Método MODO LÍDER | Romina Lorena Montiel",
  description: "Una metodología única que integra ciencia del comportamiento, mentalidad y ejecución de alto impacto para resultados reales y sostenibles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${cinzel.variable} ${outfit.variable} ${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
