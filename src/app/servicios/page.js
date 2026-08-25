import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Servicios y Mentoría | Método MODO LÍDER - Romina Lorena Montiel",
  description: "Descubre los servicios de Mentoría 1 a 1 y el Curso Método MODO LÍDER con Romina Lorena Montiel. Ciencia del comportamiento y estrategia de negocios para tu transformación.",
};

export default function ServiciosPage() {
  const whatsappBase = "https://wa.me/543794322272";
  const mentoriaLink = `${whatsappBase}?text=${encodeURIComponent("Hola Romina, me interesa solicitar información y disponibilidad para la Mentoría 1 a 1.")}`;
  const cursoLink = `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero inscribirme en el Curso Método Modo Líder.")}`;
  const contactoGeneral = `${whatsappBase}?text=${encodeURIComponent("Hola Romina, quiero hacerte una consulta sobre tus servicios.")}`;

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
          <div style={{ maxWidth: "850px", margin: "0 auto" }}>
            
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
              SERVICIOS & ACOMPAÑAMIENTO PROFESIONAL
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
              fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
              color: "#E2E8F0",
              lineHeight: 1.65,
              maxWidth: "750px",
              margin: "0 auto"
            }}>
              Dos caminos diseñados para alinear tu mentalidad con tu negocio o proyecto de vida, erradicar la postergación y activar tu <span style={{ color: "#ECC369", fontWeight: "700" }}>Modo Líder</span>.
            </p>
          </div>
        </section>

        {/* Grilla de los 2 Servicios Activos */}
        <section style={{ maxWidth: "1180px", margin: "4rem auto 0 auto", padding: "0 1.25rem" }}>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "stretch"
          }}>
            
            {/* ================= TARJETA 1: MENTORÍA 1 A 1 ================= */}
            <div style={{
              background: "linear-gradient(165deg, rgba(26, 32, 48, 0.95) 0%, rgba(14, 18, 27, 0.98) 100%)",
              border: "2px solid rgba(212, 175, 55, 0.5)",
              borderRadius: "24px",
              padding: "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.4rem)",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 45px rgba(0,0,0,0.5), 0 0 30px rgba(212, 175, 55, 0.12)",
              position: "relative"
            }}>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{
                  background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                  color: "#0E121B",
                  padding: "0.4rem 1rem",
                  borderRadius: "50px",
                  fontSize: "0.8rem",
                  fontWeight: "900",
                  letterSpacing: "1px",
                  textTransform: "uppercase"
                }}>
                  ACOMPAÑAMIENTO EXCLUSIVO
                </span>
                <span style={{ color: "#ECC369", fontSize: "0.9rem", fontWeight: "700" }}>
                  Sesiones Privadas
                </span>
              </div>

              <h2 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2rem",
                color: "#FFFFFF",
                fontWeight: "800",
                marginBottom: "1rem",
                lineHeight: "1.2"
              }}>
                Mentoría 1 a 1
              </h2>

              <p style={{ color: "#CBD5E1", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
                Acompañamiento individual, confidencial e intensivo directamente con <strong>Romina Lorena Montiel</strong>. Diseñado a la medida exacta de tus desafíos para transformar tu mentalidad e instalar la Inteligencia de Negocios necesaria para que tus objetivos se traduzcan en ventas e impacto real.
              </p>

              {/* Botón WhatsApp */}
              <div style={{ marginTop: "auto" }}>
                <a 
                  href={mentoriaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    padding: "1.15rem 1.8rem",
                    background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontWeight: "800",
                    fontSize: "1.08rem",
                    borderRadius: "14px",
                    boxShadow: "0 10px 25px rgba(37, 211, 102, 0.35)",
                    transition: "transform 0.2s, box-shadow 0.2s"
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.981-1.394C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.167-.492-4.448-1.336l-.319-.208-2.966.83.844-2.883-.228-.337A8.156 8.156 0 0 1 3.8 12c0-4.522 3.678-8.2 8.2-8.2 4.521 0 8.2 3.678 8.2 8.2 0 4.522-3.679 8.2-8.2 8.2z"/>
                  </svg>
                  <span>Solicitar Mentoría 1 a 1</span>
                </a>
              </div>

            </div>


            {/* ================= TARJETA 2: EL CURSO ================= */}
            <div style={{
              background: "linear-gradient(165deg, rgba(22, 26, 37, 0.95) 0%, rgba(12, 15, 22, 0.98) 100%)",
              border: "2px solid rgba(212, 175, 55, 0.35)",
              borderRadius: "24px",
              padding: "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.4rem)",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 45px rgba(0,0,0,0.5), 0 0 30px rgba(212, 175, 55, 0.08)",
              position: "relative"
            }}>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{
                  background: "rgba(212, 175, 55, 0.15)",
                  color: "#ECC369",
                  border: "1px solid rgba(212, 175, 55, 0.4)",
                  padding: "0.4rem 1rem",
                  borderRadius: "50px",
                  fontSize: "0.8rem",
                  fontWeight: "900",
                  letterSpacing: "1px",
                  textTransform: "uppercase"
                }}>
                  PROGRAMA DE FORMACIÓN ACTIVO
                </span>
                <span style={{ color: "#94A3B8", fontSize: "0.9rem", fontWeight: "700" }}>
                  Campus Virtual
                </span>
              </div>

              <h2 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2rem",
                color: "#FFFFFF",
                fontWeight: "800",
                marginBottom: "1rem",
                lineHeight: "1.2"
              }}>
                Curso Método MODO LÍDER
              </h2>

              <div style={{ color: "#CBD5E1", fontSize: "1.02rem", lineHeight: "1.7", marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                <p>
                  Vas a aprender a construir un negocio <strong>DESDE CERO</strong>, que te represente y que nazca de tu propósito.
                </p>
                <p>
                  Pero no vamos a romantizar el emprender: un negocio no solo debe nutrir el alma, también debe <strong>generar ingresos</strong> que sostengan tu vida y tu estilo de vida.
                </p>
                <p>
                  Vamos a trabajar comunicación y conexión con tus clientes, dinero, ventas, mentalidad, patrones limitantes y autoliderazgo, integrando estrategias y acción consciente para crear una marca con valor, impacto real y capacidad de generar ingresos.
                </p>
              </div>

              {/* Botones de Acción para el Curso */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", marginTop: "auto" }}>
                <a 
                  href={cursoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    padding: "1.1rem 1.8rem",
                    background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                    color: "#0E121B",
                    textDecoration: "none",
                    fontWeight: "900",
                    fontSize: "1.05rem",
                    borderRadius: "14px",
                    boxShadow: "0 10px 25px rgba(212, 175, 55, 0.35)",
                    transition: "transform 0.2s"
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.981-1.394C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.167-.492-4.448-1.336l-.319-.208-2.966.83.844-2.883-.228-.337A8.156 8.156 0 0 1 3.8 12c0-4.522 3.678-8.2 8.2-8.2 4.521 0 8.2 3.678 8.2 8.2 0 4.522-3.679 8.2-8.2 8.2z"/>
                  </svg>
                  <span>Inscribirme por WhatsApp</span>
                </a>

                <Link 
                  href="/curso"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.95rem 1.6rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1.5px solid rgba(212, 175, 55, 0.4)",
                    color: "#F7E7CE",
                    textDecoration: "none",
                    fontWeight: "700",
                    fontSize: "0.98rem",
                    borderRadius: "14px",
                    transition: "all 0.2s"
                  }}
                >
                  <span>Ver Contenido Detallado del Curso →</span>
                </Link>
              </div>

            </div>

          </div>

        </section>

        {/* Tarjeta de Contacto Personalizado con Romina */}
        <section style={{ maxWidth: "850px", margin: "4.5rem auto 0 auto", padding: "0 1.25rem" }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(22, 26, 37, 0.95) 100%)",
            border: "1.5px solid rgba(212, 175, 55, 0.4)",
            borderRadius: "24px",
            padding: "clamp(2rem, 4vw, 3rem) clamp(1.2rem, 3vw, 2.5rem)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            boxShadow: "0 20px 45px rgba(0,0,0,0.4)"
          }}>
            
            <div style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid #D4AF37",
              marginBottom: "1.2rem",
              background: "radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, rgba(10, 13, 20, 0.9) 100%)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)"
            }}>
              <img 
                src="/romina_historia.png" 
                alt="Romina Lorena Montiel" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </div>

            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.55rem",
              fontWeight: "800",
              color: "#FFFFFF",
              marginBottom: "0.3rem"
            }}>
              Romina Lorena Montiel
            </h3>

            <p style={{ color: "#ECC369", fontWeight: "700", fontSize: "0.98rem", marginBottom: "1rem" }}>
              Licenciada en Administración • Neuropsicoeducadora | Mentora de Mentes y de Negocios
            </p>

            <p style={{ color: "#CBD5E1", fontSize: "1.02rem", maxWidth: "600px", lineHeight: "1.65", marginBottom: "1.8rem" }}>
              ¿Tienes dudas sobre cuál de los servicios se adapta mejor a tu momento actual? Escríbeme directamente a mi WhatsApp y te oriento personalmente.
            </p>

            <a 
              href={contactoGeneral}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.95rem 2.2rem",
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                border: "none",
                color: "#FFFFFF",
                textDecoration: "none",
                fontWeight: "800",
                fontSize: "1.05rem",
                borderRadius: "50px",
                boxShadow: "0 10px 25px rgba(37, 211, 102, 0.35)",
                marginBottom: "2rem",
                transition: "all 0.2s"
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.981-1.394C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.167-.492-4.448-1.336l-.319-.208-2.966.83.844-2.883-.228-.337A8.156 8.156 0 0 1 3.8 12c0-4.522 3.678-8.2 8.2-8.2 4.521 0 8.2 3.678 8.2 8.2 0 4.522-3.679 8.2-8.2 8.2z"/>
              </svg>
              <span>Contactar a Romina por WhatsApp</span>
            </a>

            {/* Bloque de Redes Sociales */}
            <div style={{
              width: "100%",
              maxWidth: "680px",
              paddingTop: "1.8rem",
              borderTop: "1px solid rgba(212, 175, 55, 0.25)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem"
            }}>
              <span style={{
                fontSize: "0.85rem",
                fontWeight: "800",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#ECC369"
              }}>
                SEGUIME EN MIS REDES SOCIALES
              </span>

              <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "0.8rem",
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
                    padding: "0.75rem 1.3rem",
                    background: "rgba(225, 48, 108, 0.12)",
                    border: "1px solid rgba(225, 48, 108, 0.45)",
                    borderRadius: "12px",
                    color: "#FF8BA7",
                    textDecoration: "none",
                    fontSize: "0.92rem",
                    fontWeight: "750",
                    transition: "all 0.2s"
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
                    padding: "0.75rem 1.3rem",
                    background: "rgba(212, 175, 55, 0.12)",
                    border: "1px solid rgba(212, 175, 55, 0.45)",
                    borderRadius: "12px",
                    color: "#ECC369",
                    textDecoration: "none",
                    fontSize: "0.92rem",
                    fontWeight: "750",
                    transition: "all 0.2s"
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
                    padding: "0.75rem 1.3rem",
                    background: "rgba(255, 0, 0, 0.12)",
                    border: "1px solid rgba(255, 0, 0, 0.45)",
                    borderRadius: "12px",
                    color: "#FF6B6B",
                    textDecoration: "none",
                    fontSize: "0.92rem",
                    fontWeight: "750",
                    transition: "all 0.2s"
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  <span>YouTube Oficial</span>
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
