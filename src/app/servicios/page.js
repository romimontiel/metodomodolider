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
      categoria: "Mentoría de Mentalidad y Negocios de Inmersión Estratégica",
      titulo: "Potencia tu Marca Personal: «Tu Oferta Irresistible»",
      inversion: "$300 USD (Pack de 4 Clases)",
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
      categoria: "Mentoría de Mentalidad y Negocios de Inmersión Estratégica",
      titulo: "Potencia tu Práctica con Inteligencia Artificial",
      inversion: "$400 USD (Pack de 4 Clases)",
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
      categoria: "Mi Mentoría Personalizada",
      titulo: "Mentoría Privada 1 a 1 con Romina Lorena Montiel",
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

      <main style={{ minHeight: "100vh", paddingBottom: "5rem", background: "#FAF6F0", color: "#0F172A" }}>
        
        {/* ================= HEADER MINIMALISTA ================= */}
        <section style={{
          padding: "3.8rem 1.5rem 2.8rem 1.5rem",
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
              marginBottom: "1.2rem",
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
              marginBottom: "0.6rem"
            }}>
              SERVICIOS &amp; MENTORÍA PROFESIONAL
            </span>

            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.1rem)",
              fontWeight: "900",
              color: "#0F172A",
              marginBottom: "0.8rem",
              lineHeight: 1.15
            }}>
              Elegí Cómo Transformar tu Negocio
            </h1>

            <p style={{
              fontSize: "1.06rem",
              color: "#475569",
              lineHeight: 1.6,
              maxWidth: "680px",
              margin: "0 auto"
            }}>
              Cuatro niveles diseñados para desarrollar tu mentalidad, crear tu marca personal o de negocios y generar impacto y ventas.
            </p>
          </div>
        </section>

        {/* ================= GRILLA EN PARALELO ESTILO SOFTWARE (I   I   I   I) ================= */}
        <section style={{ maxWidth: "1360px", margin: "3rem auto 0 auto", padding: "0 1.25rem" }}>
          
          <div className="servicios-saas-grid">

            {/* ================= COLUMNA 1: CURSOS Y ENTRENAMIENTOS INTENSIVOS ================= */}
            <div className="saas-col">
              <div className="saas-col-header">
                <span className="saas-col-step">NIVEL 01</span>
                <h2 className="saas-col-title">Cursos y Entrenamientos Intensivos</h2>
              </div>

              <div className="saas-col-body">
                {/* Item 1.1 */}
                <div className="saas-subcard">
                  <h3 className="saas-item-name">Tres Días para Transformar tu Negocio</h3>
                  <p className="saas-item-desc">
                    Entrenamiento intensivo de 3 días (clase teórica, workbook práctico y coaching grupal en vivo) para alinear tu mente y tu negocio.
                  </p>
                  <button onClick={() => setModalActivo("tresDias")} className="saas-btn-outline">
                    Saber más →
                  </button>
                </div>

                {/* Item 1.2 */}
                <div className="saas-subcard">
                  <h3 className="saas-item-name">Emprender de Cero a Impacto y Ventas</h3>
                  <p className="saas-item-desc">
                    Curso práctico en el Campus Virtual (acceso por 2 meses, con opción de sumar 1 hora de mentoría 1 a 1) para construir un negocio rentable.
                  </p>
                  <button onClick={() => setModalActivo("cursoEmprender")} className="saas-btn-outline">
                    Saber más →
                  </button>
                </div>
              </div>
            </div>

            {/* ================= COLUMNA 2: MENTORÍA DE MENTALIDAD Y NEGOCIOS DE INMERSIÓN ESTRATÉGICA ================= */}
            <div className="saas-col">
              <div className="saas-col-header">
                <span className="saas-col-step">NIVEL 02</span>
                <h2 className="saas-col-title">Mentoría de Mentalidad y Negocios de Inmersión Estratégica</h2>
              </div>

              <div className="saas-col-body">
                {/* Item 2.1 */}
                <div className="saas-subcard">
                  <h3 className="saas-item-name">Potencia tu Marca Personal: «Tu Oferta Irresistible»</h3>
                  <p className="saas-item-desc">
                    Pack de 4 clases para trabajar tu propuesta de valor, tu pack de productos-servicios diferencial, tu mercado objetivo y tu oferta irresistible.
                  </p>
                  <button onClick={() => setModalActivo("marcaPersonal")} className="saas-btn-outline">
                    Saber más →
                  </button>
                </div>

                {/* Item 2.2 */}
                <div className="saas-subcard">
                  <h3 className="saas-item-name">Potencia tu Práctica con Inteligencia Artificial</h3>
                  <p className="saas-item-desc">
                    Pack de 4 clases para coaches y profesionales para incorporar a la IA como tu compañero de viaje estratégico en sesiones 1 a 1 y talleres.
                  </p>
                  <button onClick={() => setModalActivo("practicaIA")} className="saas-btn-outline">
                    Saber más →
                  </button>
                </div>
              </div>
            </div>

            {/* ================= COLUMNA 3: MI MENTORÍA PERSONALIZADA (DESTACADA) ================= */}
            <div className="saas-col saas-col-featured">
              <div className="saas-col-header">
                <span className="saas-col-step" style={{ color: "#ECC369" }}>NIVEL 03 • VIP 1 A 1</span>
                <h2 className="saas-col-title" style={{ color: "#FFFFFF" }}>Mi Mentoría Personalizada</h2>
              </div>

              <div className="saas-col-body">
                <div className="saas-subcard saas-subcard-dark" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <h3 className="saas-item-name" style={{ color: "#F7E7CE", fontSize: "1.35rem" }}>
                      Sesión de Mentoría Privada con Romina Lorena Montiel
                    </h3>
                    <p className="saas-item-desc" style={{ color: "#CBD5E1", fontSize: "0.96rem", lineHeight: "1.65" }}>
                      Encuentro privado de 3 horas (con cuestionario de diagnóstico previo) para preguntar y resolver todo lo que necesitás para activar tu mentalidad de negocios, cambiar tus estrategias o potenciar tus productos.
                    </p>
                  </div>
                  <button onClick={() => setModalActivo("mentoriaPrivada")} className="saas-btn-gold">
                    Saber más →
                  </button>
                </div>
              </div>
            </div>

            {/* ================= COLUMNA 4: BIBLIOTECA MODO LÍDER & LIBROS ================= */}
            <div className="saas-col">
              <div className="saas-col-header">
                <span className="saas-col-step">RECURSOS &amp; EDITORIAL</span>
                <h2 className="saas-col-title">Biblioteca Modo Líder &amp; Libros</h2>
              </div>

              <div className="saas-col-body">
                {/* Item 4.1 */}
                <div className="saas-subcard">
                  <h3 className="saas-item-name">Recursos de Mentalidad y Negocios</h3>
                  <p className="saas-item-desc">
                    Workbooks interactivos, guías prácticas y herramientas descargables de aplicación inmediata por menos de 50 dólares.
                  </p>
                  <button onClick={() => setModalActivo("biblioteca")} className="saas-btn-outline">
                    Saber más →
                  </button>
                </div>

                {/* Item 4.2 */}
                <div className="saas-subcard">
                  <h3 className="saas-item-name">Libros «Primero Ámate» &amp; «Método Modo Líder»</h3>
                  <p className="saas-item-desc">
                    Obras literarias de Romina Lorena Montiel disponibles en librerías, ejemplares firmados y preventa editorial en papel.
                  </p>
                  <button onClick={() => setModalActivo("biblioteca")} className="saas-btn-outline">
                    Saber más →
                  </button>
                </div>
              </div>
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
        .servicios-saas-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.4rem;
          align-items: stretch;
        }
        .saas-col {
          background: #FFFFFF;
          border: 1.5px solid #E5D9C3;
          border-top: 4px solid #D4AF37;
          border-radius: 22px;
          padding: 1.8rem 1.4rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 12px 30px rgba(60, 40, 20, 0.06);
        }
        .saas-col-featured {
          background: linear-gradient(165deg, #141926 0%, #090A0F 100%);
          border: 2px solid #D4AF37;
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.22);
        }
        .saas-col-header {
          padding-bottom: 1.1rem;
          margin-bottom: 1.2rem;
          border-bottom: 1px solid rgba(212, 175, 55, 0.25);
          min-height: 88px;
        }
        .saas-col-step {
          display: block;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #8A6405;
          margin-bottom: 0.4rem;
        }
        .saas-col-title {
          font-family: var(--font-display);
          font-size: 1.32rem;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.25;
          margin: 0;
        }
        .saas-col-body {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          flex: 1;
        }
        .saas-subcard {
          background: #FAF6F0;
          border: 1px solid #EAE3D2;
          border-radius: 16px;
          padding: 1.25rem 1.15rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }
        .saas-subcard-dark {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(212, 175, 55, 0.3);
        }
        .saas-item-name {
          font-family: var(--font-heading);
          font-size: 1.12rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 0.55rem 0;
          line-height: 1.3;
        }
        .saas-item-desc {
          font-size: 0.89rem;
          color: #475569;
          line-height: 1.55;
          margin: 0 0 1.1rem 0;
        }
        .saas-btn-outline {
          width: 100%;
          padding: 0.72rem 1rem;
          background: #FFFFFF;
          border: 1.5px solid #D4AF37;
          color: #8A6405;
          border-radius: 10px;
          font-weight: 800;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
        }
        .saas-btn-outline:hover {
          background: #FFF9E6;
          color: #0F172A;
          transform: translateY(-1px);
        }
        .saas-btn-gold {
          width: 100%;
          padding: 0.9rem 1rem;
          background: linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%);
          border: none;
          color: #0E121B;
          border-radius: 10px;
          font-weight: 900;
          font-size: 0.92rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
          box-shadow: 0 6px 18px rgba(212, 175, 55, 0.3);
        }
        .saas-btn-gold:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }
        @media (max-width: 1180px) {
          .servicios-saas-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 680px) {
          .servicios-saas-grid {
            grid-template-columns: 1fr;
          }
          .saas-col-header {
            min-height: auto;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}
