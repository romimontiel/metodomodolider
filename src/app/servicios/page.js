import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Servicios, Programas y Biblioteca | Método MODO LÍDER - Romina Lorena Montiel",
  description: "Entrenamientos intensivos, curso Emprender de Cero, packs estratégicos de Marca Personal e IA, Mentoría Privada de 3 horas y Biblioteca Modo Líder.",
};

export default function ServiciosPage() {
  const whatsappBase = "https://wa.me/543794322272";
  
  const link3Dias = `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero inscribirme al entrenamiento 'Tres Días para Transformar tu Negocio' (100 USD). ¿Me pasás el enlace de Mercado Pago?")}`;
  const linkCurso150 = `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero inscribirme al Curso 'Emprender de Cero a Impacto y Ventas' — Modalidad Campus 2 meses (150 USD). ¿Me pasás el link de pago?")}`;
  const linkCurso250 = `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero inscribirme al Curso 'Emprender de Cero a Impacto y Ventas' — Modalidad VIP 2 meses + 1 Hora de Mentoría 1 a 1 (250 USD). ¿Me pasás el link de pago?")}`;
  const linkOfertaIrresistible = `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero sumarme al Pack de 4 clases 'Potencia tu Marca Personal: Tu Oferta Irresistible' (300 USD). ¿Me pasás el link de pago?")}`;
  const linkPackIA = `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero inscribirme al Pack de 4 clases 'Potencia tu Práctica con Inteligencia Artificial' (400 USD). ¿Me pasás el link de pago?")}`;
  const linkMentoria900 = `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero postular a la 'Mentoría Privada 1 a 1 de 3 Horas' (900 USD) y recibir el Formulario de Diagnóstico Previo.")}`;
  const linkBiblioteca = `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero conocer los recursos descargables disponibles en la Biblioteca Modo Líder (< 50 USD).")}`;
  const linkLibroFirmado = `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero pedir mi ejemplar físico firmado y dedicado de tu libro 'Primero Ámate'.")}`;
  const linkPreventaLibroModoLider = `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero anotarme en la lista prioritaria para el lanzamiento en papel de tu nuevo libro 'Método MODO LÍDER' ($30.000 / $31.000 ARS).")}`;
  const contactoGeneral = `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero hacerte una consulta personalizada sobre cuál programa se adapta mejor a mi momento actual.")}`;

  return (
    <>
      <Navbar />

      <main style={{ minHeight: "100vh", paddingBottom: "6rem", background: "#FAF6F0", color: "#0F172A" }}>
        
        {/* ================= HEADER HERO ================= */}
        <section style={{
          padding: "4.8rem 1.5rem 3.5rem 1.5rem",
          textAlign: "center",
          borderBottom: "1.5px solid #EAE3D2",
          background: "#FAF6F0",
          position: "relative"
        }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            
            <Link href="/" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#8A6405",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: "750",
              marginBottom: "1.5rem",
              background: "#FFFFFF",
              padding: "0.45rem 1.1rem",
              borderRadius: "50px",
              border: "1.5px solid #D4AF37",
              boxShadow: "0 4px 12px rgba(212, 175, 55, 0.12)"
            }}>
              ← Volver al Inicio
            </Link>
            
            <span style={{
              display: "block",
              fontSize: "0.85rem",
              fontWeight: "800",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#8A6405",
              marginBottom: "0.8rem"
            }}>
              ECOSISTEMA DE FORMACIÓN &amp; MENTORÍA
            </span>

            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5.2vw, 3.5rem)",
              fontWeight: "900",
              color: "#0F172A",
              marginBottom: "1.2rem",
              lineHeight: 1.15
            }}>
              Tu Transformación en Acción
            </h1>

            <p style={{
              fontSize: "clamp(1.02rem, 2.3vw, 1.2rem)",
              color: "#334155",
              lineHeight: 1.65,
              maxWidth: "780px",
              margin: "0 auto"
            }}>
              Elegí el nivel de acompañamiento ideal para tu momento actual: desde recursos prácticos y entrenamientos intensivos hasta packs de especialización y mentoría privada de inmersión para <strong style={{ color: "#8A6405" }}>transformar tu mentalidad y crear una Marca Personal o de Negocios que cree impacto y genere ventas</strong>.
            </p>
          </div>
        </section>

        {/* ================= BLOQUE 1: PROGRAMAS DE ENTRADA Y FUNDAMENTOS ================= */}
        <section style={{ maxWidth: "1220px", margin: "4rem auto 0 auto", padding: "0 1.25rem" }}>
          
          <div style={{ marginBottom: "2rem", textAlign: "left", borderLeft: "4px solid #D4AF37", paddingLeft: "1rem" }}>
            <span style={{ color: "#8A6405", fontSize: "0.8rem", fontWeight: "800", letterSpacing: "2.5px", textTransform: "uppercase", display: "block" }}>
              NIVEL 1 • ACTIVACIÓN Y BASES SÓLIDAS
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "#0F172A", fontWeight: "800", margin: "0.2rem 0 0 0" }}>
              Entrenamiento Intensivo &amp; Curso de Fundamentos
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.2rem",
            alignItems: "stretch"
          }}>
            
            {/* TARJETA 1: TRES DÍAS PARA TRANSFORMAR TU NEGOCIO ($100 USD) */}
            <div style={{
              background: "#FFFFFF",
              border: "1.5px solid #E5D9C3",
              borderTop: "4px solid #D4AF37",
              borderRadius: "24px",
              padding: "clamp(1.8rem, 3.5vw, 2.5rem)",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 15px 35px rgba(60, 40, 20, 0.07)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{
                  background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                  color: "#0E121B",
                  padding: "0.38rem 0.95rem",
                  borderRadius: "50px",
                  fontSize: "0.76rem",
                  fontWeight: "900",
                  letterSpacing: "1px",
                  textTransform: "uppercase"
                }}>
                  ENTRENAMIENTO INTENSIVO
                </span>
                <span style={{ color: "#8A6405", fontSize: "0.88rem", fontWeight: "800" }}>
                  3 Días Online
                </span>
              </div>

              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.8rem",
                color: "#0F172A",
                fontWeight: "800",
                marginBottom: "0.6rem",
                lineHeight: "1.25"
              }}>
                Tres Días para Transformar tu Negocio
              </h3>

              {/* Precio */}
              <div style={{
                margin: "0.6rem 0 1.4rem 0",
                padding: "1rem 1.2rem",
                background: "#FAF6F0",
                borderRadius: "14px",
                border: "1.5px solid #E5D9C3",
                display: "flex",
                alignItems: "baseline",
                gap: "0.5rem",
                flexWrap: "wrap"
              }}>
                <span style={{ fontSize: "2.2rem", fontWeight: "900", color: "#0F172A", fontFamily: "var(--font-display)" }}>
                  $100
                </span>
                <span style={{ fontSize: "1rem", color: "#8A6405", fontWeight: "800" }}>USD</span>
                <span style={{ marginLeft: "auto", fontSize: "0.76rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "800" }}>
                  Inversión Única
                </span>
              </div>

              <p style={{ color: "#334155", fontSize: "0.96rem", lineHeight: "1.65", marginBottom: "1.4rem" }}>
                El punto de partida ideal para alinear tu mente empresarial, auditar tu modelo actual y destrabar tu crecimiento en tres pasos concretos:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", marginBottom: "2rem" }}>
                <div style={{ padding: "0.95rem 1rem", background: "#FAF6F0", borderRadius: "12px", borderLeft: "3.5px solid #D4AF37" }}>
                  <div style={{ color: "#8A6405", fontWeight: "800", fontSize: "0.82rem", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                    Día 1 • Clase Teórica
                  </div>
                  <div style={{ color: "#1E293B", fontSize: "0.92rem", lineHeight: "1.5" }}>
                    Bases de mentalidad de autoliderazgo e inteligencia estratégica para estructurar tu negocio.
                  </div>
                </div>

                <div style={{ padding: "0.95rem 1rem", background: "#FAF6F0", borderRadius: "12px", borderLeft: "3.5px solid #D4AF37" }}>
                  <div style={{ color: "#8A6405", fontWeight: "800", fontSize: "0.82rem", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                    Día 2 • Workbook de Transformación
                  </div>
                  <div style={{ color: "#1E293B", fontSize: "0.92rem", lineHeight: "1.5" }}>
                    Completás el cuaderno de trabajo práctico aplicando cada herramienta a la realidad de tu negocio.
                  </div>
                </div>

                <div style={{ padding: "0.95rem 1rem", background: "#FAF6F0", borderRadius: "12px", borderLeft: "3.5px solid #D4AF37" }}>
                  <div style={{ color: "#8A6405", fontWeight: "800", fontSize: "0.82rem", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                    Día 3 • Coaching Grupal Online en Vivo
                  </div>
                  <div style={{ color: "#1E293B", fontSize: "0.92rem", lineHeight: "1.5" }}>
                    Tu momento en vivo para preguntar sobre lo que necesitás cambiar en tu mentalidad o en tu negocio.
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "auto" }}>
                <a 
                  href={link3Dias}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.65rem",
                    padding: "1.1rem 1.4rem",
                    background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                    color: "#0E121B",
                    textDecoration: "none",
                    fontWeight: "900",
                    fontSize: "0.98rem",
                    borderRadius: "14px",
                    boxShadow: "0 8px 20px rgba(212, 175, 55, 0.3)",
                    textAlign: "center"
                  }}
                >
                  <span>💳 Inscribirme / Pedir Link Mercado Pago ($100 USD)</span>
                </a>
              </div>
            </div>

            {/* TARJETA 2: CURSO EMPRENDER DE CERO A IMPACTO Y VENTAS ($150 / $250 USD) */}
            <div style={{
              background: "#FFFFFF",
              border: "1.5px solid #E5D9C3",
              borderTop: "4px solid #D4AF37",
              borderRadius: "24px",
              padding: "clamp(1.8rem, 3.5vw, 2.5rem)",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 15px 35px rgba(60, 40, 20, 0.07)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{
                  background: "#FFF9E6",
                  color: "#8A6405",
                  border: "1.5px solid #D4AF37",
                  padding: "0.38rem 0.95rem",
                  borderRadius: "50px",
                  fontSize: "0.76rem",
                  fontWeight: "900",
                  letterSpacing: "1px",
                  textTransform: "uppercase"
                }}>
                  CAMPUS VIRTUAL • 8 MÓDULOS
                </span>
                <span style={{ color: "#8A6405", fontSize: "0.88rem", fontWeight: "800" }}>
                  Acceso por 2 Meses
                </span>
              </div>

              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.8rem",
                color: "#0F172A",
                fontWeight: "800",
                marginBottom: "0.6rem",
                lineHeight: "1.25"
              }}>
                Curso: Emprender de Cero a Impacto y Ventas
              </h3>

              <p style={{ color: "#334155", fontSize: "0.96rem", lineHeight: "1.65", marginBottom: "1.2rem" }}>
                Construí un negocio desde las bases que te represente y genere ingresos reales. Incluye <strong>apertura completa al Campus Virtual durante 2 meses (60 días)</strong> con 8 clases grabadas y Workbooks descargables.
              </p>

              {/* Dos Opciones de Inversión */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.8rem" }}>
                
                {/* Opción 1: $150 USD */}
                <div style={{
                  padding: "1.1rem 1.2rem",
                  background: "#FAF6F0",
                  borderRadius: "14px",
                  border: "1.5px solid #E5D9C3"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.35rem", flexWrap: "wrap", gap: "0.4rem" }}>
                    <span style={{ color: "#0F172A", fontWeight: "800", fontSize: "1.02rem" }}>
                      Opción 1: Modalidad Campus (2 Meses)
                    </span>
                    <span style={{ fontSize: "1.65rem", fontWeight: "900", color: "#0F172A", fontFamily: "var(--font-display)" }}>
                      $150 <small style={{ fontSize: "0.85rem", color: "#8A6405" }}>USD</small>
                    </span>
                  </div>
                  <p style={{ color: "#475569", fontSize: "0.88rem", lineHeight: "1.5", margin: 0 }}>
                    Acceso durante 60 días a los 8 módulos completos en video, guías de estudio y cuadernos de ejercicios prácticos.
                  </p>
                </div>

                {/* Opción 2: $250 USD */}
                <div style={{
                  padding: "1.15rem 1.2rem",
                  background: "#FFFDF5",
                  borderRadius: "14px",
                  border: "2px solid #D4AF37",
                  position: "relative"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.35rem", flexWrap: "wrap", gap: "0.4rem" }}>
                    <span style={{ color: "#8A6405", fontWeight: "900", fontSize: "1.02rem" }}>
                      ⭐ Opción 2: Curso + 1 Hora de Mentoría 1 a 1
                    </span>
                    <span style={{ fontSize: "1.65rem", fontWeight: "900", color: "#0F172A", fontFamily: "var(--font-display)" }}>
                      $250 <small style={{ fontSize: "0.85rem", color: "#8A6405" }}>USD</small>
                    </span>
                  </div>
                  <p style={{ color: "#1E293B", fontSize: "0.88rem", lineHeight: "1.5", margin: 0 }}>
                    Todo el acceso al Campus por 2 meses + <strong>1 sesión privada de 1 hora con Romina</strong> para auditar tu avance (a utilizar dentro de los 2 meses de vigencia del curso).
                  </p>
                </div>

              </div>

              {/* Botones del Curso */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "auto" }}>
                <a 
                  href={linkCurso250}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "1rem 1.2rem",
                    background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                    color: "#0E121B",
                    textDecoration: "none",
                    fontWeight: "900",
                    fontSize: "0.95rem",
                    borderRadius: "12px",
                    boxShadow: "0 8px 20px rgba(212, 175, 55, 0.3)",
                    textAlign: "center"
                  }}
                >
                  <span>⭐ Inscribirme al Curso + Mentoría 1h ($250 USD)</span>
                </a>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.7rem" }}>
                  <a 
                    href={linkCurso150}
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0.85rem 1rem",
                      background: "#0F172A",
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontWeight: "800",
                      fontSize: "0.88rem",
                      borderRadius: "12px",
                      textAlign: "center"
                    }}
                  >
                    <span>💳 Solo Curso ($150 USD)</span>
                  </a>

                  <Link 
                    href="/curso"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0.85rem 1rem",
                      background: "#FAF6F0",
                      border: "1.5px solid #D4AF37",
                      color: "#8A6405",
                      textDecoration: "none",
                      fontWeight: "800",
                      fontSize: "0.88rem",
                      borderRadius: "12px",
                      textAlign: "center"
                    }}
                  >
                    <span>🎓 Ver Programa Detallado →</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ================= BLOQUE 2: PACKS DE ESPECIALIZACIÓN ESTRATÉGICA (4 CLASES) ================= */}
        <section style={{ maxWidth: "1220px", margin: "4.5rem auto 0 auto", padding: "0 1.25rem" }}>
          
          <div style={{ marginBottom: "2rem", textAlign: "left", borderLeft: "4px solid #D4AF37", paddingLeft: "1rem" }}>
            <span style={{ color: "#8A6405", fontSize: "0.8rem", fontWeight: "800", letterSpacing: "2.5px", textTransform: "uppercase", display: "block" }}>
              NIVEL 2 • PACKS DE ESPECIALIZACIÓN (4 CLASES)
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "#0F172A", fontWeight: "800", margin: "0.2rem 0 0 0" }}>
              Diferenciación, Oferta Irresistible e Inteligencia Artificial
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.2rem",
            alignItems: "stretch"
          }}>

            {/* TARJETA 3: POTENCIA TU MARCA PERSONAL — TU OFERTA IRRESISTIBLE ($300 USD) */}
            <div style={{
              background: "#FFFFFF",
              border: "1.5px solid #E5D9C3",
              borderTop: "4px solid #D4AF37",
              borderRadius: "24px",
              padding: "clamp(1.8rem, 3.5vw, 2.5rem)",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 15px 35px rgba(60, 40, 20, 0.07)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{
                  background: "#FFF9E6",
                  color: "#8A6405",
                  border: "1.5px solid #D4AF37",
                  padding: "0.38rem 0.95rem",
                  borderRadius: "50px",
                  fontSize: "0.76rem",
                  fontWeight: "900",
                  letterSpacing: "1px",
                  textTransform: "uppercase"
                }}>
                  PACK ESTRATÉGICO • MARCA Y VENTAS
                </span>
                <span style={{ color: "#8A6405", fontSize: "0.88rem", fontWeight: "800" }}>
                  Pack de 4 Clases
                </span>
              </div>

              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.8rem",
                color: "#0F172A",
                fontWeight: "800",
                marginBottom: "0.6rem",
                lineHeight: "1.25"
              }}>
                Potencia tu Marca Personal: «Tu Oferta Irresistible»
              </h3>

              {/* Precio */}
              <div style={{
                margin: "0.6rem 0 1.4rem 0",
                padding: "1rem 1.2rem",
                background: "#FAF6F0",
                borderRadius: "14px",
                border: "1.5px solid #E5D9C3",
                display: "flex",
                alignItems: "baseline",
                gap: "0.5rem",
                flexWrap: "wrap"
              }}>
                <span style={{ fontSize: "2.2rem", fontWeight: "900", color: "#0F172A", fontFamily: "var(--font-display)" }}>
                  $300
                </span>
                <span style={{ fontSize: "1rem", color: "#8A6405", fontWeight: "800" }}>USD</span>
                <span style={{ marginLeft: "auto", fontSize: "0.76rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "800" }}>
                  Pack Completo (4 Clases)
                </span>
              </div>

              <p style={{ color: "#334155", fontSize: "0.96rem", lineHeight: "1.65", marginBottom: "1.4rem" }}>
                Un programa focalizado de <strong>4 clases</strong> para convertir tus conocimientos en una marca personal o de negocios magnética con una estructura comercial que vende:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#8A6405", fontSize: "1.1rem", lineHeight: 1 }}>✨</span>
                  <div style={{ color: "#334155", fontSize: "0.93rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#0F172A" }}>Clase 1 • Propuesta de Valor:</strong> Descubrí y comunicá con claridad tu diferencial único en el mercado.
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#8A6405", fontSize: "1.1rem", lineHeight: 1 }}>📦</span>
                  <div style={{ color: "#334155", fontSize: "0.93rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#0F172A" }}>Clase 2 • Pack de Productos-Servicios Diferencial:</strong> Diseñá tu ecosistema de servicios rentables y escalables.
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#8A6405", fontSize: "1.1rem", lineHeight: 1 }}>🎯</span>
                  <div style={{ color: "#334155", fontSize: "0.93rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#0F172A" }}>Clase 3 • Mercado Objetivo:</strong> Identificá con precisión a tu comprador ideal dispuesto a valorar e invertir en lo que ofrecés.
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#8A6405", fontSize: "1.1rem", lineHeight: 1 }}>💎</span>
                  <div style={{ color: "#334155", fontSize: "0.93rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#0F172A" }}>Clase 4 • Tu Oferta Irresistible:</strong> Construí la promesa, los bonos y la presentación comercial vinculada a tu negocio o profesión.
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "auto" }}>
                <a 
                  href={linkOfertaIrresistible}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.65rem",
                    padding: "1.1rem 1.4rem",
                    background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                    color: "#0E121B",
                    textDecoration: "none",
                    fontWeight: "900",
                    fontSize: "0.98rem",
                    borderRadius: "14px",
                    boxShadow: "0 8px 20px rgba(212, 175, 55, 0.3)",
                    textAlign: "center"
                  }}
                >
                  <span>💳 Inscribirme al Pack ($300 USD)</span>
                </a>
              </div>
            </div>

            {/* TARJETA 4: POTENCIA TU PRÁCTICA CON INTELIGENCIA ARTIFICIAL ($400 USD) */}
            <div style={{
              background: "#FFFFFF",
              border: "1.5px solid #E5D9C3",
              borderTop: "4px solid #D4AF37",
              borderRadius: "24px",
              padding: "clamp(1.8rem, 3.5vw, 2.5rem)",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 15px 35px rgba(60, 40, 20, 0.07)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{
                  background: "#FFF9E6",
                  color: "#8A6405",
                  border: "1.5px solid #D4AF37",
                  padding: "0.38rem 0.95rem",
                  borderRadius: "50px",
                  fontSize: "0.76rem",
                  fontWeight: "900",
                  letterSpacing: "1px",
                  textTransform: "uppercase"
                }}>
                  ESPECIALIZACIÓN PARA COACHES &amp; PROFESIONALES
                </span>
                <span style={{ color: "#8A6405", fontSize: "0.88rem", fontWeight: "800" }}>
                  Pack de 4 Clases
                </span>
              </div>

              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.8rem",
                color: "#0F172A",
                fontWeight: "800",
                marginBottom: "0.6rem",
                lineHeight: "1.25"
              }}>
                Potencia tu Práctica con Inteligencia Artificial
              </h3>

              {/* Precio */}
              <div style={{
                margin: "0.6rem 0 1.4rem 0",
                padding: "1rem 1.2rem",
                background: "#FAF6F0",
                borderRadius: "14px",
                border: "1.5px solid #E5D9C3",
                display: "flex",
                alignItems: "baseline",
                gap: "0.5rem",
                flexWrap: "wrap"
              }}>
                <span style={{ fontSize: "2.2rem", fontWeight: "900", color: "#0F172A", fontFamily: "var(--font-display)" }}>
                  $400
                </span>
                <span style={{ fontSize: "1rem", color: "#8A6405", fontWeight: "800" }}>USD</span>
                <span style={{ marginLeft: "auto", fontSize: "0.76rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "800" }}>
                  Pack Completo (4 Clases)
                </span>
              </div>

              <p style={{ color: "#334155", fontSize: "0.96rem", lineHeight: "1.65", marginBottom: "1.4rem" }}>
                Un pack de <strong>4 clases prácticas</strong> para coaches, mentores y profesionales que desean incorporar a la IA como su compañero de viaje estratégico e invaluable:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#8A6405", fontSize: "1.1rem", lineHeight: 1 }}>🧠</span>
                  <div style={{ color: "#334155", fontSize: "0.93rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#0F172A" }}>Copiloto en Sesiones 1 a 1:</strong> Prepará diagnósticos previos, hipótesis de trabajo y preguntas de desbloqueo profundo para tus clientes.
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#8A6405", fontSize: "1.1rem", lineHeight: 1 }}>🎪</span>
                  <div style={{ color: "#334155", fontSize: "0.93rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#0F172A" }}>Diseño de Talleres y Programas:</strong> Estructurá dinámicas grupales, workbooks y presentaciones de alto impacto en una fracción del tiempo.
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#8A6405", fontSize: "1.1rem", lineHeight: 1 }}>⚙️</span>
                  <div style={{ color: "#334155", fontSize: "0.93rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#0F172A" }}>Entrenamiento de Prompts Estratégicos:</strong> Configurá a la IA con tu propio tono, marco teórico y ética profesional sin perder la calidez humana.
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#8A6405", fontSize: "1.1rem", lineHeight: 1 }}>🚀</span>
                  <div style={{ color: "#334155", fontSize: "0.93rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#0F172A" }}>Escalabilidad Profesional:</strong> Multiplicá tu capacidad de entrega y seguimiento personalizado con orden y eficiencia.
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "auto" }}>
                <a 
                  href={linkPackIA}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.65rem",
                    padding: "1.1rem 1.4rem",
                    background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                    color: "#0E121B",
                    textDecoration: "none",
                    fontWeight: "900",
                    fontSize: "0.98rem",
                    borderRadius: "14px",
                    boxShadow: "0 8px 20px rgba(212, 175, 55, 0.3)",
                    textAlign: "center"
                  }}
                >
                  <span>💳 Inscribirme al Pack de IA ($400 USD)</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ================= BLOQUE 3: MENTORÍA PRIVADA 1 A 1 DE INMERSIÓN (3 HORAS - $900 USD) ================= */}
        <section style={{ maxWidth: "1220px", margin: "4.5rem auto 0 auto", padding: "0 1.25rem" }}>
          
          <div style={{ marginBottom: "2rem", textAlign: "left", borderLeft: "4px solid #D4AF37", paddingLeft: "1rem" }}>
            <span style={{ color: "#8A6405", fontSize: "0.8rem", fontWeight: "800", letterSpacing: "2.5px", textTransform: "uppercase", display: "block" }}>
              NIVEL 3 • ALTA DIRECCIÓN Y PERSONALIZACIÓN 1 A 1
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "#0F172A", fontWeight: "800", margin: "0.2rem 0 0 0" }}>
              Mentoría Privada de Inmersión Estratégica
            </h2>
          </div>

          <div style={{
            background: "linear-gradient(165deg, #121622 0%, #090A0F 100%)",
            border: "2.5px solid #D4AF37",
            borderRadius: "28px",
            padding: "clamp(2rem, 4vw, 3.2rem)",
            boxShadow: "0 20px 50px rgba(15, 23, 42, 0.22)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem", flexWrap: "wrap", gap: "0.8rem" }}>
              <span style={{
                background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                color: "#0E121B",
                padding: "0.45rem 1.2rem",
                borderRadius: "50px",
                fontSize: "0.82rem",
                fontWeight: "900",
                letterSpacing: "1.5px",
                textTransform: "uppercase"
              }}>
                👑 MÁXIMA EXCLUSIVIDAD • 1 A 1 CON ROMINA
              </span>
              <span style={{ color: "#ECC369", fontSize: "0.95rem", fontWeight: "800" }}>
                Encuentro Intensivo de 3 Horas + Diagnóstico Previo
              </span>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2.5rem",
              alignItems: "center"
            }}>
              <div>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.85rem, 3.5vw, 2.4rem)",
                  color: "#FFFFFF",
                  fontWeight: "800",
                  marginBottom: "1rem",
                  lineHeight: "1.2"
                }}>
                  Mentoría Privada 1 a 1 con Romina Lorena Montiel
                </h3>

                <p style={{ color: "#E2E8F0", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "1.6rem" }}>
                  Un encuentro profundo y confidencial de <strong>3 horas de inmersión</strong> diseñado a la medida exacta de tu caso para preguntar y destrabar todo lo que necesitás para <strong>activar tu mentalidad de negocios, cambiar tus estrategias o potenciar tus productos y servicios</strong>.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1rem" }}>
                  <div style={{ padding: "1.1rem", background: "rgba(255, 255, 255, 0.05)", borderRadius: "14px", border: "1px solid rgba(212, 175, 55, 0.35)" }}>
                    <div style={{ color: "#ECC369", fontWeight: "800", fontSize: "0.85rem", marginBottom: "0.3rem", textTransform: "uppercase" }}>
                      1. Cuestionario Previo (Google Forms)
                    </div>
                    <p style={{ color: "#CBD5E1", fontSize: "0.9rem", lineHeight: "1.5", margin: 0 }}>
                      Al inscribirte completás un formulario de diagnóstico estratégico para que Romina estudie tu negocio antes de conectarse.
                    </p>
                  </div>

                  <div style={{ padding: "1.1rem", background: "rgba(255, 255, 255, 0.05)", borderRadius: "14px", border: "1px solid rgba(212, 175, 55, 0.35)" }}>
                    <div style={{ color: "#ECC369", fontWeight: "800", fontSize: "0.85rem", marginBottom: "0.3rem", textTransform: "uppercase" }}>
                      2. Inmersión de 3 Horas 1 a 1
                    </div>
                    <p style={{ color: "#CBD5E1", fontSize: "0.9rem", lineHeight: "1.5", margin: 0 }}>
                      Trabajo directo sobre tu mentalidad, reingeniería de tus ofertas, precios y estrategia comercial lista para ejecutar.
                    </p>
                  </div>
                </div>
              </div>

              {/* Caja Derecha de Inversión y Postulación */}
              <div style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1.5px solid rgba(212, 175, 55, 0.55)",
                borderRadius: "20px",
                padding: "2rem 1.8rem",
                textAlign: "center"
              }}>
                <span style={{ color: "#ECC369", fontSize: "0.8rem", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                  INVERSIÓN DE LA INMERSIÓN VIP
                </span>
                <div style={{ fontSize: "3rem", fontWeight: "900", color: "#F7E7CE", fontFamily: "var(--font-display)", lineHeight: 1.1, marginBottom: "0.4rem" }}>
                  $900 <span style={{ fontSize: "1.2rem", color: "#ECC369" }}>USD</span>
                </div>
                <p style={{ color: "#CBD5E1", fontSize: "0.88rem", marginBottom: "1.6rem" }}>
                  Incluye Cuestionario Diagnóstico en Google Forms + 3 Horas de Mentoría Privada + Plan de Acción.
                </p>

                <a 
                  href={linkMentoria900}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.65rem",
                    padding: "1.15rem 1.5rem",
                    background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                    color: "#0E121B",
                    textDecoration: "none",
                    fontWeight: "900",
                    fontSize: "1rem",
                    borderRadius: "14px",
                    boxShadow: "0 10px 25px rgba(212, 175, 55, 0.4)",
                    width: "100%",
                    marginBottom: "0.75rem"
                  }}
                >
                  <span>👑 Solicitar Mentoría &amp; Formulario Previo</span>
                </a>
                <span style={{ color: "#CBD5E1", fontSize: "0.8rem", display: "block" }}>
                  Cupos mensuales limitados por agenda directa.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BLOQUE 4: BIBLIOTECA MODO LÍDER & OBRAS LITERARIAS ================= */}
        <section style={{ maxWidth: "1220px", margin: "4.5rem auto 0 auto", padding: "0 1.25rem" }}>
          
          <div style={{ marginBottom: "2rem", textAlign: "left", borderLeft: "4px solid #D4AF37", paddingLeft: "1rem" }}>
            <span style={{ color: "#8A6405", fontSize: "0.8rem", fontWeight: "800", letterSpacing: "2.5px", textTransform: "uppercase", display: "block" }}>
              RECURSOS DESCARGABLES &amp; LIBROS EN PAPEL
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "#0F172A", fontWeight: "800", margin: "0.2rem 0 0 0" }}>
              📚 Biblioteca Modo Líder &amp; Obras de la Autora
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.8rem",
            alignItems: "stretch"
          }}>

            {/* ITEM A: RECURSOS DIGITALES < $50 USD */}
            <div style={{
              background: "#FFFFFF",
              border: "1.5px solid #E5D9C3",
              borderTop: "4px solid #D4AF37",
              borderRadius: "22px",
              padding: "2rem 1.8rem",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 12px 30px rgba(60, 40, 20, 0.06)"
            }}>
              <span style={{ color: "#8A6405", fontSize: "0.78rem", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                HERRAMIENTAS PRÁCTICAS ON-DEMAND
              </span>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "#0F172A", fontWeight: "800", marginBottom: "0.8rem" }}>
                Recursos de Mentalidad y Negocios
              </h3>
              <div style={{ fontSize: "1.5rem", fontWeight: "900", color: "#0F172A", marginBottom: "1rem", fontFamily: "var(--font-display)" }}>
                Menos de $50 <small style={{ fontSize: "0.85rem", color: "#8A6405" }}>USD</small>
              </div>
              <p style={{ color: "#334155", fontSize: "0.94rem", lineHeight: "1.6", marginBottom: "1.6rem", flex: 1 }}>
                Descargá Workbooks interactivos, guías de reprogramación mental, plantillas de finanzas y ejercicios tácticos listos para usar en tu negocio hoy mismo con acceso inmediato vía Mercado Pago.
              </p>
              <a 
                href={linkBiblioteca}
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.95rem 1.2rem",
                  background: "#FAF6F0",
                  border: "1.5px solid #D4AF37",
                  color: "#8A6405",
                  textDecoration: "none",
                  fontWeight: "800",
                  fontSize: "0.92rem",
                  borderRadius: "12px",
                  textAlign: "center"
                }}
              >
                <span>📥 Consultar Catálogo de Recursos</span>
              </a>
            </div>

            {/* ITEM B: LIBRO PRIMERO ÁMATE (EN LIBRERÍAS Y FIRMADO) */}
            <div style={{
              background: "#FFFFFF",
              border: "1.5px solid #E5D9C3",
              borderTop: "4px solid #D4AF37",
              borderRadius: "22px",
              padding: "2rem 1.8rem",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 12px 30px rgba(60, 40, 20, 0.06)"
            }}>
              <span style={{ color: "#8A6405", fontSize: "0.78rem", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                BESTSELLER • TINTA LIBRE EDICIONES
              </span>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "#0F172A", fontWeight: "800", marginBottom: "0.8rem" }}>
                Libro «Primero Ámate»
              </h3>
              <div style={{ fontSize: "1.15rem", fontWeight: "800", color: "#8A6405", marginBottom: "1rem" }}>
                Disponible en Librerías &amp; Edición Firmada
              </div>
              <p style={{ color: "#334155", fontSize: "0.94rem", lineHeight: "1.6", marginBottom: "1.6rem", flex: 1 }}>
                Un viaje de autodescubrimiento y neuropsicoeducación para encender el amor propio y construir la base emocional desde la cual liderar tu vida y tu negocio. Disponible en librerías y en ejemplares firmados por Romina.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <Link 
                  href="/libroprimeroamate"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.9rem 1.2rem",
                    background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                    color: "#0E121B",
                    textDecoration: "none",
                    fontWeight: "900",
                    fontSize: "0.92rem",
                    borderRadius: "12px",
                    textAlign: "center"
                  }}
                >
                  <span>📖 Ver Librerías y Sinopsis →</span>
                </Link>
                <a 
                  href={linkLibroFirmado}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.8rem 1.2rem",
                    background: "#FAF6F0",
                    border: "1.5px solid #D4AF37",
                    color: "#8A6405",
                    textDecoration: "none",
                    fontWeight: "800",
                    fontSize: "0.88rem",
                    borderRadius: "12px",
                    textAlign: "center"
                  }}
                >
                  <span>✍️ Pedir Ejemplar Firmado por Mí</span>
                </a>
              </div>
            </div>

            {/* ITEM C: NUEVO LIBRO MÉTODO MODO LÍDER ($30.000 / $31.000 ARS) */}
            <div style={{
              background: "#FFFFFF",
              border: "1.5px solid #E5D9C3",
              borderTop: "4px solid #D4AF37",
              borderRadius: "22px",
              padding: "2rem 1.8rem",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 12px 30px rgba(60, 40, 20, 0.06)"
            }}>
              <span style={{ color: "#8A6405", fontSize: "0.78rem", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                PRÓXIMO LANZAMIENTO EDITORIAL • EN PAPEL
              </span>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "#0F172A", fontWeight: "800", marginBottom: "0.8rem" }}>
                Nuevo Libro: «Método MODO LÍDER®»
              </h3>
              <div style={{ fontSize: "1.45rem", fontWeight: "900", color: "#0F172A", marginBottom: "1rem", fontFamily: "var(--font-display)" }}>
                ~$30.000 - $31.000 <small style={{ fontSize: "0.85rem", color: "#8A6405" }}>ARS (Edición Física)</small>
              </div>
              <p style={{ color: "#334155", fontSize: "0.94rem", lineHeight: "1.6", marginBottom: "1.6rem", flex: 1 }}>
                La obra integral donde vuelco más de 20 años uniendo Neurociencias, Mentalidad Empresarial e Inteligencia de Negocios para que dejes de tener un hobby caro y construyas una empresa rentable.
              </p>
              <a 
                href={linkPreventaLibroModoLider}
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.95rem 1.2rem",
                  background: "#FAF6F0",
                  border: "1.5px solid #D4AF37",
                  color: "#8A6405",
                  textDecoration: "none",
                  fontWeight: "800",
                  fontSize: "0.92rem",
                  borderRadius: "12px",
                  textAlign: "center"
                }}
              >
                <span>🔔 Reservar en Lista Prioritaria</span>
              </a>
            </div>

          </div>
        </section>

        {/* ================= TARJETA DE CONTACTO PERSONALIZADO CON ROMINA ================= */}
        <section style={{ maxWidth: "880px", margin: "5rem auto 0 auto", padding: "0 1.25rem" }}>
          <div style={{
            background: "#FFFFFF",
            border: "1.5px solid #E5D9C3",
            borderTop: "6px solid #D4AF37",
            borderRadius: "24px",
            padding: "clamp(2.2rem, 4vw, 3.2rem) clamp(1.2rem, 3vw, 2.5rem)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            boxShadow: "0 20px 45px rgba(60, 40, 20, 0.08)"
          }}>
            
            <div style={{
              width: "115px",
              height: "115px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3.5px solid #D4AF37",
              marginBottom: "1.2rem",
              background: "#F8FAFC",
              boxShadow: "0 8px 25px rgba(0,0,0,0.12)"
            }}>
              <img 
                src="/romina_historia.png?v=20261117" 
                alt="Romina Lorena Montiel" 
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 16%" }} 
              />
            </div>

            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.7rem",
              fontWeight: "800",
              color: "#0F172A",
              marginBottom: "0.35rem"
            }}>
              Romina Lorena Montiel
            </h3>

            <p style={{ color: "#8A6405", fontWeight: "800", fontSize: "1.05rem", marginBottom: "0.4rem" }}>
              Licenciada en Administración • Neuropsicoeducadora
            </p>
            <p style={{ color: "#0F172A", fontWeight: "750", fontSize: "0.98rem", marginBottom: "1.6rem" }}>
              Mentora de Mentes y de Negocios • Creadora del Método MODO LÍDER
            </p>

            <p style={{ color: "#475569", maxWidth: "680px", fontSize: "1rem", lineHeight: "1.65", marginBottom: "2rem" }}>
              ¿Tenés dudas sobre cuál de estos programas es el indicado para tu momento actual o necesitás el enlace directo de <strong>Mercado Pago</strong> en pesos argentinos? Escribime y te asesoro personalmente.
            </p>

            {/* Bloque de Redes Sociales */}
            <div style={{
              width: "100%",
              maxWidth: "700px",
              paddingTop: "1.8rem",
              borderTop: "1px solid #E2E8F0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.1rem"
            }}>
              <span style={{
                fontSize: "0.85rem",
                fontWeight: "800",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#64748B"
              }}>
                CANALES DE COMUNICACIÓN &amp; REDES
              </span>

              <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "0.9rem",
                width: "100%"
              }}>
                <a 
                  href="https://www.instagram.com/rominalorenamontiel/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.8rem 1.4rem",
                    background: "rgba(15, 23, 42, 0.04)",
                    border: "1.5px solid #0F172A",
                    borderRadius: "12px",
                    color: "#0F172A",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    fontWeight: "750"
                  }}
                >
                  <span>@rominalorenamontiel</span>
                </a>

                <a 
                  href="https://www.instagram.com/modolider.co/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.8rem 1.4rem",
                    background: "rgba(180, 116, 20, 0.08)",
                    border: "1.5px solid #784B08",
                    borderRadius: "12px",
                    color: "#784B08",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    fontWeight: "750"
                  }}
                >
                  <span>@modolider.co</span>
                </a>

                <a 
                  href="https://www.youtube.com/@RominaLorenaMontiel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.8rem 1.4rem",
                    background: "rgba(74, 46, 27, 0.06)",
                    border: "1.5px solid #4A2E1B",
                    borderRadius: "12px",
                    color: "#4A2E1B",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    fontWeight: "750"
                  }}
                >
                  <span>YouTube Oficial</span>
                </a>

                <a 
                  href={contactoGeneral}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.8rem 1.6rem",
                    background: "#0F172A",
                    border: "2px solid #0F172A",
                    borderRadius: "12px",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    fontWeight: "900"
                  }}
                >
                  <span>💬 Consulta Directa por WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
