import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Servicios & Programas de Transformación | Método MODO LÍDER - Romina Lorena Montiel",
  description: "Entrenamientos intensivos, packs formativos y mentoría privada 1 a 1 con Romina Lorena Montiel para activar tu mentalidad de negocios, potenciar tu marca y escalar tus ventas.",
};

export default function ServiciosPage() {
  const whatsappBase = "https://wa.me/543794322272";
  
  const link3Dias = `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero inscribirme al entrenamiento 'Tres Días para Transformar tu Negocio' (100 USD).")}`;
  const linkMarcaPersonal = `${whatsappBase}?text=${encodeURIComponent("Hola Romina, me interesa sumarme al pack de 4 clases 'Potencia tu Marca Personal' (300 USD).")}`;
  const linkIaCoaches = `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero inscribirme al pack de 4 clases 'Potencia tu Práctica con Inteligencia Artificial' (300 USD).")}`;
  const linkMentoriaPrivada = `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero postular y coordinar mi 'Mentoría Privada 1 a 1' contigo (900 USD).")}`;
  const contactoGeneral = `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero hacerte una consulta personalizada sobre cuál servicio se adapta mejor a mi momento actual.")}`;

  return (
    <>
      <Navbar />

      <main style={{ minHeight: "100vh", paddingBottom: "6rem", background: "radial-gradient(circle at 50% 10%, rgba(212, 175, 55, 0.08) 0%, rgba(9, 10, 15, 1) 70%)" }}>
        
        {/* Header Hero */}
        <section style={{
          padding: "5rem 1.5rem 3.5rem 1.5rem",
          textAlign: "center",
          borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
          position: "relative"
        }}>
          <div style={{ maxWidth: "880px", margin: "0 auto" }}>
            
            <Link href="/" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#ECC369",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              background: "rgba(212, 175, 55, 0.1)",
              padding: "0.45rem 1.1rem",
              borderRadius: "50px",
              border: "1px solid rgba(212, 175, 55, 0.35)",
              transition: "all 0.2s"
            }}>
              ← Volver al Inicio
            </Link>
            
            <span style={{
              display: "block",
              fontSize: "0.85rem",
              fontWeight: "800",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#D4AF37",
              marginBottom: "0.8rem"
            }}>
              PROPUESTA DE VALOR &amp; ENTRENAMIENTO
            </span>

            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.3rem, 5.5vw, 3.5rem)",
              fontWeight: "800",
              color: "#FFFFFF",
              marginBottom: "1.2rem",
              lineHeight: 1.15
            }}>
              Tu Transformación en Acción
            </h1>

            <p style={{
              fontSize: "clamp(1.05rem, 2.5vw, 1.22rem)",
              color: "#E2E8F0",
              lineHeight: 1.65,
              maxWidth: "760px",
              margin: "0 auto"
            }}>
              Entrenamientos intensivos, packs estratégicos y mentoría privada diseñados para <strong style={{ color: "#ECC369" }}>alinear tu mentalidad con tus números</strong>, erradicar la postergación y traducir tu valor en impacto real y ventas consistentes.
            </p>
          </div>
        </section>

        {/* Grilla de los 4 Servicios */}
        <section style={{ maxWidth: "1240px", margin: "4rem auto 0 auto", padding: "0 1.25rem" }}>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
            gap: "2.2rem",
            alignItems: "stretch"
          }}>
            
            {/* ================= SERVICIO 1: TRES DÍAS PARA TRANSFORMAR TU NEGOCIO ================= */}
            <div style={{
              background: "linear-gradient(165deg, rgba(26, 32, 48, 0.95) 0%, rgba(14, 18, 27, 0.98) 100%)",
              border: "2px solid rgba(212, 175, 55, 0.45)",
              borderRadius: "24px",
              padding: "2.4rem 2rem",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 45px rgba(0,0,0,0.5), 0 0 30px rgba(212, 175, 55, 0.08)",
              position: "relative"
            }}>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{
                  background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                  color: "#0E121B",
                  padding: "0.38rem 0.95rem",
                  borderRadius: "50px",
                  fontSize: "0.78rem",
                  fontWeight: "900",
                  letterSpacing: "1px",
                  textTransform: "uppercase"
                }}>
                  ENTRENAMIENTO INTENSIVO
                </span>
                <span style={{ color: "#ECC369", fontSize: "0.88rem", fontWeight: "750" }}>
                  3 Días Online
                </span>
              </div>

              <h2 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.85rem",
                color: "#FFFFFF",
                fontWeight: "800",
                marginBottom: "0.8rem",
                lineHeight: "1.25"
              }}>
                Tres Días para Transformar tu Negocio
              </h2>

              {/* Bloque Precio */}
              <div style={{
                margin: "0.8rem 0 1.6rem 0",
                padding: "1rem 1.2rem",
                background: "rgba(212, 175, 55, 0.08)",
                borderRadius: "14px",
                border: "1px solid rgba(212, 175, 55, 0.25)",
                display: "flex",
                alignItems: "baseline",
                gap: "0.6rem"
              }}>
                <span style={{ fontSize: "2.2rem", fontWeight: "900", color: "#F7E7CE", fontFamily: "var(--font-display)" }}>
                  $100
                </span>
                <span style={{ fontSize: "1rem", color: "#ECC369", fontWeight: "700" }}>USD</span>
                <span style={{ marginLeft: "auto", fontSize: "0.78rem", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700" }}>
                  Inversión Única
                </span>
              </div>

              <p style={{ color: "#CBD5E1", fontSize: "0.98rem", lineHeight: "1.65", marginBottom: "1.6rem" }}>
                Un proceso guiado paso a paso para ordenar tu modelo, destrabar frenos mentales y conectar tu propuesta con resultados tangibles:
              </p>

              {/* Desglose día por día */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.2rem" }}>
                
                <div style={{
                  padding: "1rem",
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "12px",
                  borderLeft: "3.5px solid #D4AF37"
                }}>
                  <div style={{ color: "#ECC369", fontWeight: "800", fontSize: "0.85rem", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                    Día 1 • Clase Teórica
                  </div>
                  <div style={{ color: "#F1F5F9", fontSize: "0.92rem", lineHeight: "1.5" }}>
                    Fundamentos de mentalidad de autoliderazgo y arquitectura estratégica de tu negocio.
                  </div>
                </div>

                <div style={{
                  padding: "1rem",
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "12px",
                  borderLeft: "3.5px solid #D4AF37"
                }}>
                  <div style={{ color: "#ECC369", fontWeight: "800", fontSize: "0.85rem", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                    Día 2 • Workbook de Transformación
                  </div>
                  <div style={{ color: "#F1F5F9", fontSize: "0.92rem", lineHeight: "1.5" }}>
                    Completás tu cuaderno interactivo de trabajo para bajar la estrategia a tu caso real y concreto.
                  </div>
                </div>

                <div style={{
                  padding: "1rem",
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "12px",
                  borderLeft: "3.5px solid #D4AF37"
                }}>
                  <div style={{ color: "#ECC369", fontWeight: "800", fontSize: "0.85rem", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                    Día 3 • Coaching Grupal Online en Vivo
                  </div>
                  <div style={{ color: "#F1F5F9", fontSize: "0.92rem", lineHeight: "1.5" }}>
                    Tu momento para preguntar directamente todo lo que necesitás cambiar en tu mentalidad o en tu negocio.
                  </div>
                </div>

              </div>

              {/* Botón WhatsApp */}
              <div style={{ marginTop: "auto" }}>
                <a 
                  href={link3Dias}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    padding: "1.1rem 1.6rem",
                    background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                    color: "#0E121B",
                    textDecoration: "none",
                    fontWeight: "900",
                    fontSize: "1.02rem",
                    borderRadius: "14px",
                    boxShadow: "0 8px 20px rgba(212, 175, 55, 0.35)",
                    transition: "transform 0.2s, box-shadow 0.2s"
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.981-1.394C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.167-.492-4.448-1.336l-.319-.208-2.966.83.844-2.883-.228-.337A8.156 8.156 0 0 1 3.8 12c0-4.522 3.678-8.2 8.2-8.2 4.521 0 8.2 3.678 8.2 8.2 0 4.522-3.679 8.2-8.2 8.2z"/>
                  </svg>
                  <span>Inscribirme al Entrenamiento</span>
                </a>
              </div>

            </div>


            {/* ================= SERVICIO 2: POTENCIA TU MARCA PERSONAL ================= */}
            <div style={{
              background: "linear-gradient(165deg, rgba(22, 27, 40, 0.95) 0%, rgba(12, 15, 23, 0.98) 100%)",
              border: "2px solid rgba(212, 175, 55, 0.45)",
              borderRadius: "24px",
              padding: "2.4rem 2rem",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 45px rgba(0,0,0,0.5), 0 0 30px rgba(212, 175, 55, 0.08)",
              position: "relative"
            }}>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{
                  background: "rgba(212, 175, 55, 0.16)",
                  color: "#ECC369",
                  border: "1px solid rgba(212, 175, 55, 0.4)",
                  padding: "0.38rem 0.95rem",
                  borderRadius: "50px",
                  fontSize: "0.78rem",
                  fontWeight: "900",
                  letterSpacing: "1px",
                  textTransform: "uppercase"
                }}>
                  PACK FORMATIVO ESTRATÉGICO
                </span>
                <span style={{ color: "#ECC369", fontSize: "0.88rem", fontWeight: "750" }}>
                  4 Clases
                </span>
              </div>

              <h2 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.85rem",
                color: "#FFFFFF",
                fontWeight: "800",
                marginBottom: "0.8rem",
                lineHeight: "1.25"
              }}>
                Potencia tu Marca Personal
              </h2>

              {/* Bloque Precio */}
              <div style={{
                margin: "0.8rem 0 1.6rem 0",
                padding: "1rem 1.2rem",
                background: "rgba(212, 175, 55, 0.08)",
                borderRadius: "14px",
                border: "1px solid rgba(212, 175, 55, 0.25)",
                display: "flex",
                alignItems: "baseline",
                gap: "0.6rem"
              }}>
                <span style={{ fontSize: "2.2rem", fontWeight: "900", color: "#F7E7CE", fontFamily: "var(--font-display)" }}>
                  $300
                </span>
                <span style={{ fontSize: "1rem", color: "#ECC369", fontWeight: "700" }}>USD</span>
                <span style={{ marginLeft: "auto", fontSize: "0.78rem", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700" }}>
                  Inversión del Pack
                </span>
              </div>

              <p style={{ color: "#CBD5E1", fontSize: "0.98rem", lineHeight: "1.65", marginBottom: "1.6rem" }}>
                Un pack intensivo de <strong>4 clases</strong> para transformar tu perfil profesional o tu negocio en una marca de alto impacto comercial:
              </p>

              {/* Ejes temáticos del Pack */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2.2rem" }}>
                
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#D4AF37", fontSize: "1.1rem", lineHeight: 1 }}>✨</span>
                  <div style={{ color: "#E2E8F0", fontSize: "0.94rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#FFFFFF" }}>Propuesta de Valor Única:</strong> Articulá con nitidez qué te diferencia y por qué sos la mejor opción en tu rubro.
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#D4AF37", fontSize: "1.1rem", lineHeight: 1 }}>📦</span>
                  <div style={{ color: "#E2E8F0", fontSize: "0.94rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#FFFFFF" }}>Pack de Productos &amp; Servicios Diferencial:</strong> Estructurá tu escalera de ofertas para monetizar tu conocimiento en varios niveles.
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#D4AF37", fontSize: "1.1rem", lineHeight: 1 }}>🎯</span>
                  <div style={{ color: "#E2E8F0", fontSize: "0.94rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#FFFFFF" }}>Mercado Objetivo Exacto:</strong> Identificá el perfil de cliente ideal que valora tu propuesta y tiene la capacidad de compra.
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#D4AF37", fontSize: "1.1rem", lineHeight: 1 }}>💎</span>
                  <div style={{ color: "#E2E8F0", fontSize: "0.94rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#FFFFFF" }}>Oferta Irresistible:</strong> Construí el mensaje y las condiciones de venta que convierten seguidores en clientes comprometidos.
                  </div>
                </div>

              </div>

              {/* Botón WhatsApp */}
              <div style={{ marginTop: "auto" }}>
                <a 
                  href={linkMarcaPersonal}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    padding: "1.1rem 1.6rem",
                    background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                    color: "#0E121B",
                    textDecoration: "none",
                    fontWeight: "900",
                    fontSize: "1.02rem",
                    borderRadius: "14px",
                    boxShadow: "0 8px 20px rgba(212, 175, 55, 0.35)",
                    transition: "transform 0.2s, box-shadow 0.2s"
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.981-1.394C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.167-.492-4.448-1.336l-.319-.208-2.966.83.844-2.883-.228-.337A8.156 8.156 0 0 1 3.8 12c0-4.522 3.678-8.2 8.2-8.2 4.521 0 8.2 3.678 8.2 8.2 0 4.522-3.679 8.2-8.2 8.2z"/>
                  </svg>
                  <span>Inscribirme al Pack ($300 USD)</span>
                </a>
              </div>

            </div>


            {/* ================= SERVICIO 3: POTENCIA TU PRÁCTICA CON INTELIGENCIA ARTIFICIAL ================= */}
            <div style={{
              background: "linear-gradient(165deg, rgba(22, 27, 40, 0.95) 0%, rgba(12, 15, 23, 0.98) 100%)",
              border: "2px solid rgba(212, 175, 55, 0.45)",
              borderRadius: "24px",
              padding: "2.4rem 2rem",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 45px rgba(0,0,0,0.5), 0 0 30px rgba(212, 175, 55, 0.08)",
              position: "relative"
            }}>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{
                  background: "rgba(212, 175, 55, 0.16)",
                  color: "#ECC369",
                  border: "1px solid rgba(212, 175, 55, 0.4)",
                  padding: "0.38rem 0.95rem",
                  borderRadius: "50px",
                  fontSize: "0.78rem",
                  fontWeight: "900",
                  letterSpacing: "1px",
                  textTransform: "uppercase"
                }}>
                  COACHES &amp; PROFESIONALES
                </span>
                <span style={{ color: "#ECC369", fontSize: "0.88rem", fontWeight: "750" }}>
                  4 Clases
                </span>
              </div>

              <h2 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.85rem",
                color: "#FFFFFF",
                fontWeight: "800",
                marginBottom: "0.8rem",
                lineHeight: "1.25"
              }}>
                Potencia tu Práctica con Inteligencia Artificial
              </h2>

              {/* Bloque Precio */}
              <div style={{
                margin: "0.8rem 0 1.6rem 0",
                padding: "1rem 1.2rem",
                background: "rgba(212, 175, 55, 0.08)",
                borderRadius: "14px",
                border: "1px solid rgba(212, 175, 55, 0.25)",
                display: "flex",
                alignItems: "baseline",
                gap: "0.6rem"
              }}>
                <span style={{ fontSize: "2.2rem", fontWeight: "900", color: "#F7E7CE", fontFamily: "var(--font-display)" }}>
                  $300
                </span>
                <span style={{ fontSize: "1rem", color: "#ECC369", fontWeight: "700" }}>USD</span>
                <span style={{ marginLeft: "auto", fontSize: "0.78rem", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700" }}>
                  Inversión del Pack
                </span>
              </div>

              <p style={{ color: "#CBD5E1", fontSize: "0.98rem", lineHeight: "1.65", marginBottom: "1.6rem" }}>
                Un pack de <strong>4 clases</strong> especialmente diseñado para coaches, mentores, terapeutas y profesionales de servicios que desean sumar a la IA como su copiloto estratégico:
              </p>

              {/* Puntos destacados del pack de IA */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2.2rem" }}>
                
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#D4AF37", fontSize: "1.1rem", lineHeight: 1 }}>🧠</span>
                  <div style={{ color: "#E2E8F0", fontSize: "0.94rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#FFFFFF" }}>Compañero de Viaje Estratégico:</strong> Cómo integrar la IA en tu método de trabajo diario sin perder tu autenticidad ni el factor humano.
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#D4AF37", fontSize: "1.1rem", lineHeight: 1 }}>👥</span>
                  <div style={{ color: "#E2E8F0", fontSize: "0.94rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#FFFFFF" }}>Potenciador para Sesiones 1 a 1:</strong> Creá mapas de diagnóstico rápido, hipótesis de intervención y preguntas poderosas en minutos.
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#D4AF37", fontSize: "1.1rem", lineHeight: 1 }}>🎪</span>
                  <div style={{ color: "#E2E8F0", fontSize: "0.94rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#FFFFFF" }}>Arquitectura para Talleres:</strong> Estructurá dinámicas vivenciales, guiones pedagógicos y ejercicios de alto impacto grupal.
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#D4AF37", fontSize: "1.1rem", lineHeight: 1 }}>⚡</span>
                  <div style={{ color: "#E2E8F0", fontSize: "0.94rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#FFFFFF" }}>Ahorro de Tiempo y Foco:</strong> Automatizá tareas mecánicas y dedicá tu energía a lo que realmente importa: la transformación de tus consultantes.
                  </div>
                </div>

              </div>

              {/* Botón WhatsApp */}
              <div style={{ marginTop: "auto" }}>
                <a 
                  href={linkIaCoaches}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    padding: "1.1rem 1.6rem",
                    background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                    color: "#0E121B",
                    textDecoration: "none",
                    fontWeight: "900",
                    fontSize: "1.02rem",
                    borderRadius: "14px",
                    boxShadow: "0 8px 20px rgba(212, 175, 55, 0.35)",
                    transition: "transform 0.2s, box-shadow 0.2s"
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.981-1.394C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.167-.492-4.448-1.336l-.319-.208-2.966.83.844-2.883-.228-.337A8.156 8.156 0 0 1 3.8 12c0-4.522 3.678-8.2 8.2-8.2 4.521 0 8.2 3.678 8.2 8.2 0 4.522-3.679 8.2-8.2 8.2z"/>
                  </svg>
                  <span>Inscribirme al Pack ($300 USD)</span>
                </a>
              </div>

            </div>


            {/* ================= SERVICIO 4: MENTORÍA PRIVADA CON ROMINA ================= */}
            <div style={{
              background: "linear-gradient(165deg, rgba(32, 26, 18, 0.96) 0%, rgba(15, 13, 10, 0.98) 100%)",
              border: "2.5px solid #D4AF37",
              borderRadius: "24px",
              padding: "2.4rem 2rem",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 25px 50px rgba(0,0,0,0.6), 0 0 40px rgba(212, 175, 55, 0.18)",
              position: "relative"
            }}>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{
                  background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                  color: "#0E121B",
                  padding: "0.42rem 1.05rem",
                  borderRadius: "50px",
                  fontSize: "0.8rem",
                  fontWeight: "900",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase"
                }}>
                  👑 MÁXIMA EXCLUSIVIDAD
                </span>
                <span style={{ color: "#ECC369", fontSize: "0.88rem", fontWeight: "800" }}>
                  Sesión Privada VIP
                </span>
              </div>

              <h2 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.85rem",
                color: "#FFFFFF",
                fontWeight: "800",
                marginBottom: "0.8rem",
                lineHeight: "1.25"
              }}>
                Mentoría Privada 1 a 1 con Romina
              </h2>

              {/* Bloque Precio */}
              <div style={{
                margin: "0.8rem 0 1.6rem 0",
                padding: "1rem 1.2rem",
                background: "rgba(212, 175, 55, 0.12)",
                borderRadius: "14px",
                border: "1.5px solid rgba(212, 175, 55, 0.45)",
                display: "flex",
                alignItems: "baseline",
                gap: "0.6rem"
              }}>
                <span style={{ fontSize: "2.2rem", fontWeight: "900", color: "#F7E7CE", fontFamily: "var(--font-display)" }}>
                  $900
                </span>
                <span style={{ fontSize: "1rem", color: "#ECC369", fontWeight: "700" }}>USD</span>
                <span style={{ marginLeft: "auto", fontSize: "0.78rem", color: "#ECC369", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "800" }}>
                  Inversión VIP Exclusiva
                </span>
              </div>

              <p style={{ color: "#CBD5E1", fontSize: "0.98rem", lineHeight: "1.65", marginBottom: "1.6rem" }}>
                Espacio individual, confidencial y de inmersión estratégica directa con <strong>Romina Lorena Montiel</strong> para responder y resolver exactamente lo que necesitás para activar tu mentalidad de negocios, redefinir tus estrategias o potenciar tus productos:
              </p>

              {/* Lo que incluye la Inmersión VIP */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2.2rem" }}>
                
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#D4AF37", fontSize: "1.1rem", lineHeight: 1 }}>🎯</span>
                  <div style={{ color: "#E2E8F0", fontSize: "0.94rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#FFFFFF" }}>Diagnóstico Estratégico Previo:</strong> Análisis exhaustivo de tu situación actual, desafíos de negocio y bloqueos de mentalidad antes de la sesión.
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#D4AF37", fontSize: "1.1rem", lineHeight: 1 }}>💡</span>
                  <div style={{ color: "#E2E8F0", fontSize: "0.94rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#FFFFFF" }}>Sesión Privada Intensiva 1 a 1:</strong> Tu espacio sin filtros para preguntar todo lo que necesitás, reestructurar tu oferta y destrabar cuellos de botella.
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#D4AF37", fontSize: "1.1rem", lineHeight: 1 }}>🗺️</span>
                  <div style={{ color: "#E2E8F0", fontSize: "0.94rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#FFFFFF" }}>Plan de Acción &amp; Hoja de Ruta:</strong> Conclusiones claras, prioridades por escrito y pasos tácticos para ejecutar sin dudar.
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#D4AF37", fontSize: "1.1rem", lineHeight: 1 }}>📱</span>
                  <div style={{ color: "#E2E8F0", fontSize: "0.94rem", lineHeight: "1.5" }}>
                    <strong style={{ color: "#FFFFFF" }}>Soporte de Seguimiento Directo:</strong> Canal abierto vía WhatsApp durante los días posteriores a la sesión para evacuar dudas en la implementación.
                  </div>
                </div>

              </div>

              {/* Botón WhatsApp */}
              <div style={{ marginTop: "auto" }}>
                <a 
                  href={linkMentoriaPrivada}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    padding: "1.15rem 1.6rem",
                    background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                    color: "#0E121B",
                    textDecoration: "none",
                    fontWeight: "900",
                    fontSize: "1.05rem",
                    borderRadius: "14px",
                    boxShadow: "0 10px 25px rgba(212, 175, 55, 0.45)",
                    transition: "transform 0.2s, box-shadow 0.2s"
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.981-1.394C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.167-.492-4.448-1.336l-.319-.208-2.966.83.844-2.883-.228-.337A8.156 8.156 0 0 1 3.8 12c0-4.522 3.678-8.2 8.2-8.2 4.521 0 8.2 3.678 8.2 8.2 0 4.522-3.679 8.2-8.2 8.2z"/>
                  </svg>
                  <span>Postular a Mentoría Privada ($900 USD)</span>
                </a>
              </div>

            </div>

          </div>

        </section>

        {/* Tarjeta de Contacto Personalizado & Redes con Romina */}
        <section style={{ maxWidth: "880px", margin: "5rem auto 0 auto", padding: "0 1.25rem" }}>
          <div style={{
            background: "#FFFFFF",
            border: "1.5px solid rgba(212, 175, 55, 0.45)",
            borderTop: "6px solid #D4AF37",
            borderRadius: "24px",
            padding: "clamp(2.2rem, 4vw, 3.2rem) clamp(1.2rem, 3vw, 2.5rem)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 0 25px rgba(212, 175, 55, 0.15)"
          }}>
            
            <div style={{
              width: "115px",
              height: "115px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3.5px solid #D4AF37",
              marginBottom: "1.2rem",
              background: "#F8FAFC",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
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
            <p style={{ color: "#0F172A", fontWeight: "750", fontSize: "0.98rem", marginBottom: "1.8rem" }}>
              Mentora de Mentes y de Negocios • Creadora del Método MODO LÍDER
            </p>

            <p style={{ color: "#475569", maxWidth: "680px", fontSize: "1rem", lineHeight: "1.65", marginBottom: "2rem" }}>
              ¿Tenés dudas sobre cuál de estos espacios es el adecuado para tu situación actual? Escribime directamente y evaluamos juntos el paso que tu negocio necesita dar.
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
                {/* Instagram Personal */}
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
                    fontWeight: "750",
                    transition: "all 0.2s",
                    boxShadow: "0 2px 8px rgba(15, 23, 42, 0.06)"
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  <span>@rominalorenamontiel</span>
                </a>

                {/* Instagram Modo Lider */}
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
                    fontWeight: "750",
                    transition: "all 0.2s",
                    boxShadow: "0 2px 8px rgba(120, 75, 8, 0.06)"
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  <span>@modolider.co</span>
                </a>

                {/* YouTube */}
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
                    fontWeight: "750",
                    transition: "all 0.2s",
                    boxShadow: "0 2px 8px rgba(74, 46, 27, 0.06)"
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  <span>YouTube Oficial</span>
                </a>

                {/* WhatsApp Directo de Consulta General */}
                <a 
                  href={contactoGeneral}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.8rem 1.6rem",
                    background: "#FFFFFF",
                    border: "2px solid #000000",
                    borderRadius: "12px",
                    color: "#000000",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    fontWeight: "900",
                    transition: "all 0.2s",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.981-1.394C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.167-.492-4.448-1.336l-.319-.208-2.966.83.844-2.883-.228-.337A8.156 8.156 0 0 1 3.8 12c0-4.522 3.678-8.2 8.2-8.2 4.521 0 8.2 3.678 8.2 8.2 0 4.522-3.679 8.2-8.2 8.2z"/>
                  </svg>
                  <span>Consulta Directa por WhatsApp</span>
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
