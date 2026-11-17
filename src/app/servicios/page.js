"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServiciosPage() {
  const [modalActivo, setModalActivo] = useState(null);
  const whatsappBase = "https://wa.me/543794322272";

  const detalleProgramas = {
    tresDias: {
      categoria: "Cursos y Entrenamientos Intensivos",
      titulo: "Tres Días para Transformar tu Negocio",
      inversion: "$100 USD",
      resumen: "Un proceso intensivo de 3 días para alinear tu mentalidad empresarial y ordenar la estructura de tu negocio.",
      items: [
        "Día 1 • Clase Teórica: Bases de mentalidad de autoliderazgo y arquitectura estratégica de tu negocio.",
        "Día 2 • Workbook de Transformación: Completás el cuaderno de trabajo aplicado a tu caso real.",
        "Día 3 • Coaching Grupal Online en Vivo: Tu momento para preguntar todo lo que necesitás cambiar en tu mentalidad o en tu negocio."
      ],
      ctaTexto: "Inscribirme / Solicitar Link de Pago ($100 USD)",
      ctaUrl: `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero saber más e inscribirme en 'Tres Días para Transformar tu Negocio' (100 USD).")}`
    },
    cursoEmprender: {
      categoria: "Cursos y Entrenamientos Intensivos",
      titulo: "Curso: Emprender de Cero a Impacto y Ventas",
      inversion: "$150 USD (Campus 2 Meses) | $250 USD (Con 1h de Mentoría 1 a 1)",
      resumen: "Programa completo de 8 módulos en el Campus Virtual con apertura durante 2 meses para construir un negocio rentable desde las bases.",
      items: [
        "Modalidad Campus ($150 USD): Acceso completo durante 2 meses a las 8 clases grabadas y Workbooks descargables.",
        "Modalidad VIP ($250 USD): Acceso por 2 meses + 1 sesión personalizada de 1 hora con Romina (a utilizar dentro del plazo activo del curso).",
        "8 Módulos paso a paso: Mentalidad, cliente ideal, propuesta de valor, precios, finanzas y estrategia comercial."
      ],
      ctaTexto: "Inscribirme al Curso por WhatsApp",
      ctaUrl: `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero inscribirme al Curso 'Emprender de Cero a Impacto y Ventas'. ¿Me pasás el enlace de pago?")}`,
      linkSecundarioTexto: "Ver Programa Completo de los 8 Módulos →",
      linkSecundarioUrl: "/curso"
    },
    marcaPersonal: {
      categoria: "Cursos y Entrenamientos Intensivos • Pack de 4 Clases",
      titulo: "Potencia tu Marca Personal: «Tu Oferta Irresistible»",
      inversion: "$300 USD",
      resumen: "Un pack de 4 clases estratégicas para diferenciarte en tu mercado y estructurar una oferta que convierta tu talento en ventas.",
      items: [
        "Clase 1: Definición y comunicación de tu Propuesta de Valor única.",
        "Clase 2: Diseño de tu Pack de Productos y Servicios diferencial.",
        "Clase 3: Identificación exacta de tu Mercado Objetivo rentable.",
        "Clase 4: Creación de tu Oferta Irresistible vinculada a tu negocio o profesión."
      ],
      ctaTexto: "Inscribirme al Pack ($300 USD)",
      ctaUrl: `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero saber más e inscribirme al Pack de 4 clases 'Potencia tu Marca Personal: Tu Oferta Irresistible' (300 USD).")}`
    },
    practicaIA: {
      categoria: "Cursos y Entrenamientos Intensivos • Pack de 4 Clases",
      titulo: "Potencia tu Práctica con Inteligencia Artificial",
      inversion: "$400 USD",
      resumen: "Un pack de 4 clases para coaches y profesionales que buscan integrar a la IA como su compañero de viaje estratégico e invaluable.",
      items: [
        "Copiloto para Sesiones 1 a 1: Preparación de diagnósticos, hipótesis y preguntas poderosas.",
        "Diseño de Talleres Grupales: Creación ágil de dinámicas vivenciales, estructuras y cuadernos de ejercicios.",
        "Prompts Estratégicos a Medida: Entrená a la IA con tu propio método y enfoque humano.",
        "Optimización y Escalabilidad: Ahorrá horas operativas y multiplicá tu impacto profesional."
      ],
      ctaTexto: "Inscribirme al Pack de IA ($400 USD)",
      ctaUrl: `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero saber más e inscribirme al Pack de 4 clases 'Potencia tu Práctica con Inteligencia Artificial' (400 USD).")}`
    },
    mentoriaPrivada: {
      categoria: "Mentoría de Mentalidad y Negocios de Inmersión Estratégica",
      titulo: "Mi Mentoría Personalizada 1 a 1 con Romina Lorena Montiel",
      inversion: "$900 USD (Encuentro Intensivo de 3 Horas)",
      resumen: "Encuentro privado y confidencial de 3 horas mano a mano con Romina para preguntar y destrabar lo que necesitás en tu mentalidad, tus estrategias o tus productos.",
      items: [
        "Paso 1 • Diagnóstico Previo (Google Forms): Completás un cuestionario estratégico antes de la sesión para auditar tu caso.",
        "Paso 2 • Encuentro Privado de 3 Horas: Inmersión 1 a 1 para activar tu mentalidad de negocios, redefinir estrategias y potenciar tus productos.",
        "Paso 3 • Hoja de Ruta y Seguimiento: Plan de acción concreto para ejecutar con claridad."
      ],
      ctaTexto: "Postular y Recibir Formulario Previo ($900 USD)",
      ctaUrl: `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero solicitar la Mentoría Privada 1 a 1 de 3 Horas (900 USD) y recibir el formulario de diagnóstico previo.")}`
    },
    biblioteca: {
      categoria: "Biblioteca Modo Líder & Libros",
      titulo: "Biblioteca Modo Líder (Recursos y Obras Literarias)",
      inversion: "Recursos Digitales < $50 USD | Libros en Papel ~$30.000 - $31.000 ARS",
      resumen: "Herramientas descargables de aplicación inmediata y obras literarias en formato físico y digital.",
      items: [
        "Recursos de Mentalidad y Negocios (< $50 USD): Workbooks, guías prácticas y plantillas descargables.",
        "Libro «Primero Ámate» (Tinta Libre): Disponible en librerías y en edición física firmada y dedicada por Romina.",
        "Próximo Lanzamiento Editorial: Libro «Método MODO LÍDER®» en papel (~$30.000 - $31.000 ARS)."
      ],
      ctaTexto: "Consultar Recursos Disponibles por WhatsApp",
      ctaUrl: `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero conocer los recursos disponibles en la Biblioteca Modo Líder y tus libros.")}`,
      linkSecundarioTexto: "Ver Libro «Primero Ámate» →",
      linkSecundarioUrl: "/libroprimeroamate"
    }
  };

  return (
    <>
      <Navbar />

      <main style={{ minHeight: "100vh", paddingBottom: "5.5rem", background: "#FAF6F0", color: "#0F172A" }}>
        
        {/* ================= HEADER ================= */}
        <section style={{
          padding: "3.5rem 1.5rem 2.5rem 1.5rem",
          textAlign: "center",
          borderBottom: "1px solid #EAE3D2"
        }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <Link href="/" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#8A6405",
              textDecoration: "none",
              fontSize: "0.88rem",
              fontWeight: "750",
              marginBottom: "1.1rem",
              background: "#FFFFFF",
              padding: "0.4rem 1rem",
              borderRadius: "50px",
              border: "1px solid #D4AF37"
            }}>
              ← Volver al Inicio
            </Link>
            
            <span style={{
              display: "block",
              fontSize: "0.82rem",
              fontWeight: "800",
              letterSpacing: "3.5px",
              textTransform: "uppercase",
              color: "#8A6405",
              marginBottom: "0.5rem"
            }}>
              SERVICIOS &amp; FORMACIÓN PROFESIONAL
            </span>

            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: "900",
              color: "#0F172A",
              marginBottom: "0.6rem",
              lineHeight: 1.15
            }}>
              Tu Transformación en Acción
            </h1>
          </div>
        </section>

        {/* ================= PRIMER BLOQUE: CURSOS Y ENTRENAMIENTOS INTENSIVOS (4 EN PARALELO: I   I   I   I) ================= */}
        <section style={{ maxWidth: "1340px", margin: "3rem auto 0 auto", padding: "0 1.25rem" }}>
          
          <div style={{ textAlign: "center", marginBottom: "2.2rem" }}>
            <span style={{ color: "#8A6405", fontSize: "0.78rem", fontWeight: "900", letterSpacing: "2.5px", textTransform: "uppercase", display: "block", marginBottom: "0.35rem" }}>
              PRIMER BLOQUE
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.65rem, 3.2vw, 2.25rem)", color: "#0F172A", fontWeight: "800", margin: 0 }}>
              Cursos y Entrenamientos Intensivos
            </h2>
          </div>

          {/* 4 Columnas en Paralelo (I   I   I   I) como planes de software */}
          <div className="saas-row-4">

            {/* Columna 1 */}
            <div className="saas-card">
              <span className="saas-badge">Entrenamiento • 3 Días</span>
              <h3 className="saas-title">Tres Días para Transformar tu Negocio</h3>
              <p className="saas-desc">
                Proceso práctico de 3 días (clase teórica, workbook de transformación y coaching grupal en vivo) para destrabar tu mente y ordenar tu negocio.
              </p>
              <button onClick={() => setModalActivo("tresDias")} className="saas-btn">
                Saber más →
              </button>
            </div>

            {/* Columna 2 */}
            <div className="saas-card">
              <span className="saas-badge">Curso • Campus 2 Meses</span>
              <h3 className="saas-title">Emprender de Cero a Impacto y Ventas</h3>
              <p className="saas-desc">
                Programa de 8 módulos en el Campus Virtual para construir un negocio rentable desde cero (con opción a sumar 1 hora de mentoría 1 a 1).
              </p>
              <button onClick={() => setModalActivo("cursoEmprender")} className="saas-btn">
                Saber más →
              </button>
            </div>

            {/* Columna 3 */}
            <div className="saas-card">
              <span className="saas-badge">Pack de 4 Clases</span>
              <h3 className="saas-title">Potencia tu Marca Personal: «Tu Oferta Irresistible»</h3>
              <p className="saas-desc">
                4 clases para trabajar tu propuesta de valor, tu pack de productos-servicios diferencial, tu mercado objetivo y tu oferta irresistible.
              </p>
              <button onClick={() => setModalActivo("marcaPersonal")} className="saas-btn">
                Saber más →
              </button>
            </div>

            {/* Columna 4 */}
            <div className="saas-card">
              <span className="saas-badge">Pack de 4 Clases • IA</span>
              <h3 className="saas-title">Potencia tu Práctica con Inteligencia Artificial</h3>
              <p className="saas-desc">
                4 clases para coaches y profesionales para incorporar a la IA como tu compañero de viaje estratégico en tus sesiones 1 a 1 y talleres.
              </p>
              <button onClick={() => setModalActivo("practicaIA")} className="saas-btn">
                Saber más →
              </button>
            </div>

          </div>
        </section>

        {/* ================= SEGUNDO BLOQUE: MENTORÍA DE MENTALIDAD Y NEGOCIOS DE INMERSIÓN ESTRATÉGICA ================= */}
        <section style={{ maxWidth: "1340px", margin: "4rem auto 0 auto", padding: "0 1.25rem" }}>
          
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span style={{ color: "#8A6405", fontSize: "0.78rem", fontWeight: "900", letterSpacing: "2.5px", textTransform: "uppercase", display: "block", marginBottom: "0.35rem" }}>
              SEGUNDO BLOQUE • ACOMPAÑAMIENTO 1 A 1
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.65rem, 3.2vw, 2.25rem)", color: "#0F172A", fontWeight: "800", margin: 0 }}>
              Mentoría de Mentalidad y Negocios de Inmersión Estratégica
            </h2>
          </div>

          <div className="saas-row-2">
            {/* Tarjeta Mentoría Personalizada 1 a 1 */}
            <div className="saas-card saas-card-dark">
              <span className="saas-badge-gold">👑 Mi Mentoría Personalizada • 1 a 1</span>
              <h3 className="saas-title" style={{ color: "#FFFFFF" }}>
                Sesión de Mentoría Privada con Romina Lorena Montiel
              </h3>
              <p className="saas-desc" style={{ color: "#CBD5E1" }}>
                Encuentro privado de 3 horas (con cuestionario de diagnóstico previo) para preguntar lo que necesitás para activar tu mentalidad de negocios, cambiar tus estrategias o potenciar tus productos.
              </p>
              <button onClick={() => setModalActivo("mentoriaPrivada")} className="saas-btn-gold">
                Saber más →
              </button>
            </div>

            {/* Tarjeta Biblioteca Modo Líder & Libros */}
            <div className="saas-card">
              <span className="saas-badge">📚 Recursos &amp; Obras Literarias</span>
              <h3 className="saas-title">
                Biblioteca Modo Líder &amp; Libros Oficiales
              </h3>
              <p className="saas-desc">
                Recursos descargables de mentalidad y negocios por menos de 50 dólares, libro «Primero Ámate» (en librerías y firmado) y nuevo libro «Método Modo Líder®».
              </p>
              <button onClick={() => setModalActivo("biblioteca")} className="saas-btn">
                Saber más →
              </button>
            </div>
          </div>

        </section>

      </main>

      {/* ================= MODAL DESPLEGABLE "SABER MÁS" ================= */}
      {modalActivo && detalleProgramas[modalActivo] && (
        <div 
          onClick={() => setModalActivo(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(9, 10, 15, 0.75)",
            backdropFilter: "blur(6px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.25rem"
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#FFFFFF",
              border: "2px solid #D4AF37",
              borderRadius: "24px",
              maxWidth: "620px",
              width: "100%",
              padding: "clamp(1.6rem, 4vw, 2.5rem)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
              position: "relative",
              maxHeight: "90vh",
              overflowY: "auto"
            }}
          >
            <button
              onClick={() => setModalActivo(null)}
              aria-label="Cerrar"
              style={{
                position: "absolute",
                top: "1.1rem",
                right: "1.1rem",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid #CBD5E1",
                background: "#F8FAFC",
                color: "#0F172A",
                fontSize: "1.1rem",
                fontWeight: "800",
                cursor: "pointer"
              }}
            >
              ✕
            </button>

            <span style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: "800",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#8A6405",
              background: "#FAF6F0",
              padding: "0.35rem 0.9rem",
              borderRadius: "50px",
              border: "1px solid #D4AF37",
              marginBottom: "0.9rem"
            }}>
              {detalleProgramas[modalActivo].categoria}
            </span>

            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
              color: "#0F172A",
              fontWeight: "800",
              marginBottom: "0.6rem",
              lineHeight: 1.2
            }}>
              {detalleProgramas[modalActivo].titulo}
            </h3>

            <div style={{
              display: "inline-block",
              fontSize: "1.15rem",
              fontWeight: "900",
              color: "#8A6405",
              marginBottom: "1.1rem"
            }}>
              Valor: {detalleProgramas[modalActivo].inversion}
            </div>

            <p style={{ color: "#334155", fontSize: "0.98rem", lineHeight: 1.65, marginBottom: "1.4rem" }}>
              {detalleProgramas[modalActivo].resumen}
            </p>

            <div style={{
              background: "#FAF6F0",
              border: "1px solid #E5D9C3",
              borderRadius: "16px",
              padding: "1.2rem 1.3rem",
              marginBottom: "1.6rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem"
            }}>
              {detalleProgramas[modalActivo].items.map((item, idx) => (
                <div key={idx} style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start", fontSize: "0.92rem", color: "#1E293B", lineHeight: 1.5 }}>
                  <span style={{ color: "#B4871E", fontWeight: "900" }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href={detalleProgramas[modalActivo].ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem 1.4rem",
                  background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                  color: "#0E121B",
                  textDecoration: "none",
                  fontWeight: "900",
                  fontSize: "0.98rem",
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: "0 8px 20px rgba(212, 175, 55, 0.3)"
                }}
              >
                {detalleProgramas[modalActivo].ctaTexto}
              </a>

              {detalleProgramas[modalActivo].linkSecundarioUrl && (
                <Link
                  href={detalleProgramas[modalActivo].linkSecundarioUrl}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.85rem 1.2rem",
                    background: "#0F172A",
                    color: "#ECC369",
                    textDecoration: "none",
                    fontWeight: "800",
                    fontSize: "0.9rem",
                    borderRadius: "12px",
                    textAlign: "center"
                  }}
                >
                  {detalleProgramas[modalActivo].linkSecundarioTexto}
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .saas-row-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.35rem;
          align-items: stretch;
        }
        .saas-row-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          align-items: stretch;
          max-width: 980px;
          margin: 0 auto;
        }
        .saas-card {
          background: #FFFFFF;
          border: 1.5px solid #E5D9C3;
          border-top: 4px solid #D4AF37;
          border-radius: 20px;
          padding: 1.8rem 1.45rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 12px 28px rgba(60, 40, 20, 0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .saas-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 36px rgba(60, 40, 20, 0.11);
        }
        .saas-card-dark {
          background: linear-gradient(165deg, #141926 0%, #090A0F 100%);
          border: 2px solid #D4AF37;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.2);
        }
        .saas-badge {
          display: inline-block;
          align-self: flex-start;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #8A6405;
          background: #FAF6F0;
          border: 1px solid #E5D9C3;
          padding: 0.3rem 0.75rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }
        .saas-badge-gold {
          display: inline-block;
          align-self: flex-start;
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #0E121B;
          background: linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%);
          padding: 0.35rem 0.85rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }
        .saas-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 0.75rem 0;
          line-height: 1.3;
        }
        .saas-desc {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
          flex: 1;
        }
        .saas-btn {
          width: 100%;
          padding: 0.82rem 1rem;
          background: #FAF6F0;
          border: 1.5px solid #D4AF37;
          color: #8A6405;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
        }
        .saas-btn:hover {
          background: linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%);
          color: #0E121B;
        }
        .saas-btn-gold {
          width: 100%;
          padding: 0.88rem 1rem;
          background: linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%);
          border: none;
          color: #0E121B;
          border-radius: 12px;
          font-weight: 900;
          font-size: 0.92rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
          box-shadow: 0 6px 18px rgba(212, 175, 55, 0.3);
        }
        .saas-btn-gold:hover {
          filter: brightness(1.06);
        }
        @media (max-width: 1120px) {
          .saas-row-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 680px) {
          .saas-row-4,
          .saas-row-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}
