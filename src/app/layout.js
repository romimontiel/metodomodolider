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
  metadataBase: new URL("https://rominalorenamontielmodolider.vercel.app"),
  title: "Lic. Romina Lorena Montiel | Método MODO LÍDER® & Libro «Primero Ámate»",
  description:
    "Sitio oficial de la Lic. Romina Lorena Montiel: Creadora del Método Modo Líder®, Mentora de Mentes y Negocios, Lic. en Administración y Finanzas, Neuropsicoeducadora y autora del libro «Primero Ámate» (Tinta Libre Ediciones). Más de 20 años de trayectoria en España y Argentina.",
  keywords: [
    "Romina Lorena Montiel",
    "Lic. Romina Lorena Montiel",
    "Método Modo Líder",
    "Primero Ámate",
    "Libro Primero Ámate",
    "Neuropsicoeducadora",
    "Mentora de Mentes y Negocios",
    "Tinta Libre Ediciones",
    "Curso Emprender de Cero a Impacto y Ventas",
  ],
  authors: [{ name: "Lic. Romina Lorena Montiel", url: "https://rominalorenamontielmodolider.vercel.app" }],
  alternates: {
    canonical: "https://rominalorenamontielmodolider.vercel.app",
  },
  openGraph: {
    title: "Lic. Romina Lorena Montiel | Método MODO LÍDER® & Autora de «Primero Ámate»",
    description:
      "Neurociencias, Desbloqueo Mental e Inteligencia Estratégica de Negocios. Conocé el Método Modo Líder® y adquirí el libro «Primero Ámate» en formato impreso y e-book digital (ePub).",
    url: "https://rominalorenamontielmodolider.vercel.app",
    siteName: "Método MODO LÍDER • Romina Lorena Montiel",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/banner_primero_amate.jpg",
        width: 1200,
        height: 630,
        alt: "Lic. Romina Lorena Montiel - Autora de Primero Ámate y Creadora del Método Modo Líder",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  const schemaOrgJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://rominalorenamontielmodolider.vercel.app/#romina-lorena-montiel",
        name: "Romina Lorena Montiel",
        honorificPrefix: "Lic.",
        jobTitle: "Creadora del Método Modo Líder®, Mentora de Mentes y Negocios, Lic. en Administración y Finanzas, Neuropsicoeducadora y Autora",
        url: "https://rominalorenamontielmodolider.vercel.app/",
        image: "https://rominalorenamontielmodolider.vercel.app/romina.png",
        description:
          "Licenciada en Administración y Finanzas (UNVM), Neuropsicoeducadora (Asociación Educar, Posgrado en Neurociencias de las Emociones), autora del libro «Primero Ámate» (Tinta Libre Ediciones) y fundadora del Método Modo Líder®. Más de 20 años de trayectoria profesional internacional iniciada en Valencia y Castellón (España) y consolidada en Argentina.",
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "Universidad Nacional de Villa María (UNVM)",
          },
          {
            "@type": "EducationalOrganization",
            name: "Asociación Educar para el Desarrollo Humano",
          },
        ],
        sameAs: [
          "https://www.linkedin.com/in/romina-lorena-montiel/",
          "https://www.instagram.com/rominalorenamontiel/",
          "https://www.instagram.com/modolider.co/",
          "https://www.youtube.com/@RominaLorenaMontiel",
          "https://romimontiel.github.io/mihistoriaymibio/",
          "https://www.tintalibre.com.ar/author/1907/Romina_Lorena_Montiel",
        ],
      },
      {
        "@type": "Book",
        "@id": "https://rominalorenamontielmodolider.vercel.app/#libro-primero-amate",
        name: "Primero Ámate",
        alternateName: "Primero ámate: Un viaje de autodescubrimiento y empoderamiento para encender la llama del amor propio",
        author: {
          "@id": "https://rominalorenamontielmodolider.vercel.app/#romina-lorena-montiel",
        },
        publisher: {
          "@type": "Organization",
          name: "Tinta Libre Ediciones",
          url: "https://www.tintalibre.com.ar",
        },
        datePublished: "2025-03",
        inLanguage: "es",
        bookFormat: ["https://schema.org/Paperback", "https://schema.org/EBook"],
        image: "https://rominalorenamontielmodolider.vercel.app/portada_primero_amate_3d.jpg",
        url: "https://rominalorenamontielmodolider.vercel.app/#libro-primero-amate",
        description:
          "A través de una combinación única de neurociencia, psicología, coaching, narración de historias y técnicas prácticas de autoconocimiento, este libro brinda una guía paso a paso para ayudarte a descubrir tu verdadero valor personal, reconectar contigo mismo y encender la chispa del amor propio que reside en ti.",
        sameAs: [
          "https://www.tintalibre.com.ar/book/2198/Primero_%C3%A1mate",
          "https://ebooks.yenny-elateneo.com/library/publication/primero-amate",
          "https://ebooks.sbs.com.ar/library/publication/primero-amate",
          "https://www.mercadolibre.com.ar/tt-lbr--primero-amate/up/MLAU3551926505",
          "https://ebooks.gonvill.com.mx/library/publication/primero-amate",
          "https://ebooks.hombredelamancha.com/library/publication/primero-amate",
          "https://ebooks.libreriaespanola.com/library/publication/primero-amate",
        ],
      },
    ],
  };

  return (
    <html lang="es" className={`${cinzel.variable} ${outfit.variable} ${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
