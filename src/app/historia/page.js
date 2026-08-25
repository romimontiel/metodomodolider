import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Mi Historia | Romina Lorena Montiel - Lic. en Administración, Neuropsicoeducadora y Mentora de Mentes y de Negocios",
  description: "Conoce el recorrido de Romina Lorena Montiel: Licenciada en Administración, Neuropsicoeducadora y Mentora de Mentes y de Negocios, creadora del Método MODO LÍDER.",
};

export default function HistoriaPage() {
  const hitos = [
    {
      year: "2003 - 2009",
      flag: "🇪🇸",
      title: "Finanzas y Gestión en España",
      desc: "Soy correntina, pero viví en España donde me desempeñé como Contable, Controller y Jefe de Finanzas durante 6 años, administrando estructuras de alta exigencia."
    },
    {
      year: "2009",
      flag: "🧠",
      title: "El Despertar: El Descubrimiento de las Neurociencias",
      desc: "En España conocí las Neurociencias y me cambió la vida para siempre: transformó radicalmente mi forma de trabajar y de autoliderarme. Pasé de vivir nerviosa y sobrecargada a vivir con bienestar y a entregarme desde ese equilibrio a donde sea que voy."
    },
    {
      year: "2010 - 2014",
      flag: "🇦🇷",
      title: "Consultoría y Coaching Gerencial en Córdoba",
      desc: "De regreso en Argentina, trabajé en Córdoba como Consultora Empresarial y Coach Gerencial para dueños de PyMEs durante 4 años, diagnosticando cuellos de botella y liderando equipos."
    },
    {
      year: "2017",
      flag: "🎓",
      title: "Neuropsicoeducadora y Posgrado en Neurociencias",
      desc: "Obtuve mi diploma oficial de NEUROPSICOEDUCADORA y completé mi posgrado en NEUROCIENCIAS DE LAS EMOCIONES, validando científicamente las herramientas de reprogramación mental y conductual."
    },
    {
      year: "Pre-Pandemia",
      flag: "🏫",
      title: "Impacto en Colegios y Proyectos de Vida",
      desc: "Recorrí colegios secundarios brindando talleres vivenciales sobre Gestión de Emociones y Construcción de Proyecto de Vida para jóvenes y educadores."
    },
    {
      year: "2020 - 2022",
      flag: "💻",
      title: "Pandemia: Mindfulness y Regulación Emocional Online",
      desc: "En pleno confinamiento y post-pandemia, dicté talleres online sobre Emociones y Mindfulness, brindando contención, foco y calma mental a cientos de personas en momentos de incertidumbre."
    },
    {
      year: "2023 - 2025",
      flag: "🤝",
      title: "Mentoría 1 a 1 y Consolidación de un Método Propio",
      desc: "Acompañamiento privado e intensivo en sesiones individuales a personas adultas, niños y adolescentes en procesos complejos con éxito en todos los casos, sentando las bases clínicas y prácticas de mi metodología."
    },
    {
      year: "Marzo 2025",
      flag: "📖",
      title: "Publicación de mi Libro \"Primero Ámate\"",
      desc: "En marzo de 2025 presenté mi libro 'Primero Ámate', editado por Tinta Libre. Tuve el honor de presentarlo en la Feria del Libro en los escenarios de Goya y Corrientes, inspirando a cientos de personas en el autoliderazgo y amor propio."
    },
    {
      year: "2026",
      flag: "👑",
      title: "Integración Total: Método MODO LÍDER",
      desc: "Nació el Método MODO LÍDER como la convergencia definitiva entre las Neurociencias, la reprogramación mental y la Inteligencia Estratégica de Negocios para erradicar la postergación y liderar con impacto."
    },
    {
      year: "HOY",
      flag: "🚀",
      title: "Lo Que Hago Hoy: De la Mentalidad a las Ventas",
      desc: "Hoy trabajo junto a empresarios y emprendedores creando sus modelos de negocio desde cero o transformando su mentalidad e instalando la Inteligencia de Negocios adecuada para que todo su impacto y propuesta de valor se traduzca en clientes y ventas reales."
    }
  ];

  return (
    <>
      <Navbar />
      
      <main style={{ minHeight: "100vh", background: "#090A0F", color: "#F3F4F6", paddingBottom: "6rem" }}>
        
        {/* Hero Header */}
        <section style={{
          position: "relative",
          padding: "4.5rem 2rem 4rem 2rem",
          background: "radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.16) 0%, transparent 65%), linear-gradient(180deg, #090A0F 0%, #0E121B 100%)",
          borderBottom: "1px solid rgba(212, 175, 55, 0.25)",
          textAlign: "center"
        }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
              fontSize: "0.9rem",
              fontWeight: "800",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#D4AF37",
              marginBottom: "0.8rem"
            }}>
              TRAYECTORIA • CIENCIA • NEGOCIOS
            </span>

            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "3.6rem",
              fontWeight: "800",
              color: "#FFFFFF",
              marginBottom: "1.2rem",
              lineHeight: 1.15
            }}>
              Mi Historia
            </h1>

            <p style={{
              fontSize: "1.28rem",
              color: "#E2E8F0",
              lineHeight: 1.65,
              maxWidth: "760px",
              margin: "0 auto"
            }}>
              De las finanzas corporativas y la consultoría empresarial al descubrimiento de las <span style={{ color: "#ECC369", fontWeight: "700" }}>Neurociencias</span>: el camino que dio origen al <span style={{ color: "#ECC369", fontWeight: "700" }}>Método MODO LÍDER</span>.
            </p>
          </div>
        </section>

        {/* Sección Biográfica Principal */}
        <section style={{ maxWidth: "1160px", margin: "4.5rem auto 0 auto", padding: "0 2rem" }}>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.18fr 0.82fr",
            gap: "3.5rem",
            alignItems: "start",
            marginBottom: "5rem"
          }}>
            
            {/* Narrativa Escrita */}
            <div style={{ fontSize: "1.15rem", lineHeight: "1.85", color: "#E2E8F0" }}>
              
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "0.4rem 0.9rem",
                background: "rgba(212, 175, 55, 0.12)",
                borderLeft: "3px solid #D4AF37",
                borderRadius: "0 8px 8px 0",
                color: "#F7E7CE",
                fontSize: "0.95rem",
                fontWeight: "750",
                marginBottom: "1.5rem"
              }}>
                👋 ¡Hola! Soy Romina Lorena Montiel
              </div>

              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.3rem",
                color: "#FFFFFF",
                marginBottom: "1.4rem",
                lineHeight: 1.2
              }}>
                De los números a la mente: un puente entre dos mundos
              </h2>

              <p style={{ marginBottom: "1.5rem" }}>
                Soy <strong>correntina</strong>, pero mi viaje profesional me llevó a vivir en <strong>España</strong> durante muchos años. Allí me desempeñé como <strong>Contable, Controller y Jefe de Finanzas</strong> por más de 6 años, inmersa en la exigencia de balances, auditorías y presión constante.
              </p>

              <p style={{ marginBottom: "1.5rem" }}>
                Fue allí, en <strong>2009</strong>, cuando descubrí las <strong>Neurociencias</strong>. Ese encuentro marcó un antes y un después absoluto: <strong>me cambió la vida, mi forma de trabajar y mi manera de autoliderarme</strong>. Pasé de vivir con estrés y nerviosismo a vivir desde un bienestar genuino, y desde ese lugar me entrego a donde sea que voy.
              </p>

              <div style={{
                background: "linear-gradient(135deg, rgba(22, 26, 37, 0.95) 0%, rgba(14, 18, 27, 0.95) 100%)",
                borderLeft: "4px solid #D4AF37",
                padding: "1.6rem 2rem",
                borderRadius: "0 14px 14px 0",
                margin: "2.2rem 0",
                fontStyle: "italic",
                color: "#F7E7CE",
                fontSize: "1.15rem",
                boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                borderRight: "1px solid rgba(255,255,255,0.05)",
                borderBottom: "1px solid rgba(255,255,255,0.05)"
              }}>
                &quot;No podés liderar un negocio próspero ni sostener tus metas si primero no aprendés a liderar tu propia biología y tus estados mentales.&quot;
              </div>

              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.1rem",
                color: "#FFFFFF",
                marginTop: "2.8rem",
                marginBottom: "1.4rem",
                lineHeight: 1.2
              }}>
                La experiencia en terreno con PyMEs y Personas
              </h2>

              <p style={{ marginBottom: "1.5rem" }}>
                A mi regreso a Argentina, trabajé en <strong>Córdoba</strong> durante 4 años como <strong>Consultora Empresarial y Coach Gerencial para dueños de PyMEs</strong>. Allí confirmé una realidad cotidiana: los negocios no se traban por falta de ideas, sino por bloqueos emocionales, postergación en la toma de decisiones y falta de claridad de sus líderes.
              </p>

              <p style={{ marginBottom: "1.5rem" }}>
                En <strong>2017</strong> me gradué con diploma oficial como <strong>NEUROPSICOEDUCADORA</strong> y realicé un posgrado en <strong>NEUROCIENCIAS DE LAS EMOCIONES</strong>. Comencé brindando talleres en colegios secundarios sobre emociones y proyecto de vida, y luego entre <strong>2020 y 2022</strong> talleres online de Mindfulness y contención emocional.
              </p>

              <p style={{ marginBottom: "1.5rem" }}>
                Entre <strong>2023 y 2025</strong> consolidé mi <strong>método propio</strong> acompañando en sesiones privadas 1 a 1 a adultos, niños y adolescentes en procesos complejos, con éxito en todos los casos.
              </p>

              <p style={{ marginBottom: "1.5rem" }}>
                En <strong>marzo de 2025</strong> alcancé un hito muy especial en mi vocación: publiqué mi libro <strong>&quot;Primero Ámate&quot;</strong>, editado por <strong>Tinta Libre</strong>, y tuve el gran honor de presentarlo en la <strong>Feria del Libro en los escenarios de Goya y Corrientes</strong>, transmitiendo el valor del autoliderazgo y la autovaloración como cimiento de cualquier proyecto.
              </p>

              <p style={{ marginBottom: "1.5rem" }}>
                En <strong>2026</strong> integré de manera definitiva toda mi trayectoria en el <strong>Método MODO LÍDER</strong>: un sistema diseñado no para darte más teoría, sino para alinear tu mentalidad, dominar tu tiempo y ejecutar con impacto.
              </p>

              <p style={{ marginBottom: "1.5rem", color: "#F9D976", fontWeight: "750", fontSize: "1.2rem", lineHeight: "1.6" }}>
                Hoy me presento con orgullo de ser quien soy: <span style={{ color: "#FFFFFF" }}>Licenciada en Administración y Neuropsicoeducadora</span>. Hoy me identifico como <span style={{ color: "#ECC369" }}>Mentora de Mentes y de Negocios</span>.
              </p>

              <div style={{
                marginTop: "2rem",
                padding: "1.6rem 1.8rem",
                background: "linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(26, 32, 48, 0.9) 100%)",
                borderRadius: "14px",
                border: "1.5px solid rgba(212, 175, 55, 0.4)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
              }}>
                <span style={{ fontSize: "0.85rem", fontWeight: "800", letterSpacing: "2.5px", textTransform: "uppercase", color: "#ECC369", display: "block", marginBottom: "0.6rem" }}>
                  🎯 MI TRABAJO Y MISIÓN HOY
                </span>
                <p style={{ margin: 0, fontSize: "1.08rem", lineHeight: "1.75", color: "#F3F4F6" }}>
                  Hoy trabajo junto a <strong>empresarios y emprendedores</strong> creando sus negocios desde cero o transformando su mentalidad e instalando la <strong>Inteligencia de Negocios adecuada</strong> para que todo el impacto y valor que generan hacia el exterior se traduzca de forma contundente en <strong>clientes, ventas reales y crecimiento sostenible</strong>.
                </p>
              </div>

            </div>

            {/* Tarjeta Visual Lateral */}
            <div style={{
              position: "sticky",
              top: "100px",
              background: "linear-gradient(145deg, #121624, #1B2133)",
              padding: "1.6rem",
              borderRadius: "24px",
              border: "1.5px solid rgba(212, 175, 55, 0.35)",
              boxShadow: "0 25px 50px rgba(0,0,0,0.6), 0 0 30px rgba(212, 175, 55, 0.15)",
              textAlign: "center"
            }}>
              <div style={{
                overflow: "hidden",
                borderRadius: "18px",
                marginBottom: "1.4rem",
                background: "radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.22) 0%, rgba(10, 13, 20, 0.95) 80%)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                padding: "0.5rem"
              }}>
                <img 
                  src="/romina_historia.png" 
                  alt="Romina Lorena Montiel" 
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "contain", maxHeight: "480px" }} 
                />
              </div>

              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.45rem",
                fontWeight: "800",
                color: "#FFFFFF",
                marginBottom: "0.3rem"
              }}>
                Romina Lorena Montiel
              </h3>

              <p style={{ color: "#ECC369", fontSize: "0.92rem", fontWeight: "700", marginBottom: "0.3rem" }}>
                Lic. en Administración • Neuropsicoeducadora
              </p>

              <p style={{ color: "#F7E7CE", fontSize: "0.95rem", fontWeight: "800", marginBottom: "0.6rem" }}>
                Mentora de Mentes y de Negocios
              </p>

              <p style={{ color: "#A0AEC0", fontSize: "0.85rem", marginBottom: "1.3rem" }}>
                Instagram: <strong style={{ color: "#F7E7CE" }}>@rominalorenamontiel</strong>
              </p>

              <div style={{
                background: "rgba(0,0,0,0.35)",
                padding: "1.1rem",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.08)",
                fontSize: "0.95rem",
                color: "#CBD5E1",
                fontStyle: "italic",
                lineHeight: "1.5"
              }}>
                &quot;Creá. Liderá. Impactá. Desde quién sos.&quot;
              </div>

              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                marginTop: "1.5rem",
                paddingTop: "1.3rem",
                borderTop: "1px solid rgba(255,255,255,0.1)"
              }}>
                <img src="/logo modolider.png" alt="Sello Oficial" style={{ height: "48px", width: "48px", borderRadius: "50%", boxShadow: "0 2px 10px rgba(212,175,55,0.3)" }} />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "0.88rem", fontWeight: "800", color: "#F7E7CE" }}>MÉTODO MODO LÍDER</div>
                  <div style={{ fontSize: "0.75rem", color: "#A0AEC0" }}>Creá • Liderá • Impactá</div>
                </div>
              </div>
            </div>

          </div>

          {/* Línea de Tiempo Visual de Hitos (Timeline) */}
          <div style={{ marginTop: "2rem", marginBottom: "5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span style={{ color: "#D4AF37", fontSize: "0.85rem", fontWeight: "800", letterSpacing: "3px", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                EL CAMINO RECORRIDO
              </span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "#FFFFFF", fontWeight: "800" }}>
                Los Hitos de Mi Trayectoria
              </h2>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem"
            }}>
              {hitos.map((hito, idx) => (
                <div key={idx} style={{
                  background: "linear-gradient(180deg, #131724 0%, #0E121C 100%)",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                  borderTop: "3px solid #D4AF37",
                  borderRadius: "16px",
                  padding: "1.8rem 1.5rem",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                  display: "flex",
                  flexDirection: "column"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                    <span style={{ fontSize: "1.6rem" }}>{hito.flag}</span>
                    <span style={{
                      background: "rgba(212, 175, 55, 0.15)",
                      color: "#ECC369",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "50px",
                      fontSize: "0.8rem",
                      fontWeight: "800",
                      border: "1px solid rgba(212, 175, 55, 0.3)"
                    }}>
                      {hito.year}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#FFFFFF", marginBottom: "0.6rem", lineHeight: "1.3" }}>
                    {hito.title}
                  </h3>
                  <p style={{ color: "#A0AEC0", fontSize: "0.9rem", lineHeight: "1.6", flex: 1 }}>
                    {hito.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bloque Destacado de Cierre & CTA */}
          <div style={{
            background: "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(22, 26, 37, 0.98) 100%)",
            border: "1.5px solid rgba(212, 175, 55, 0.45)",
            borderRadius: "24px",
            padding: "4rem 3rem",
            textAlign: "center",
            boxShadow: "0 25px 50px rgba(0,0,0,0.5), 0 0 35px rgba(212, 175, 55, 0.15)"
          }}>
            <span style={{
              fontSize: "0.85rem",
              fontWeight: "800",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#ECC369",
              display: "block",
              marginBottom: "0.8rem"
            }}>
              ACTIVÁ TU MODO LÍDER
            </span>

            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.5rem",
              color: "#FFFFFF",
              marginBottom: "1.2rem"
            }}>
              Trabajemos juntos en la transformación de tu negocio
            </h2>

            <p style={{
              fontSize: "1.18rem",
              color: "#E2E8F0",
              maxWidth: "800px",
              margin: "0 auto 2.8rem auto",
              lineHeight: "1.7"
            }}>
              Integrá la ciencia de tu cerebro, la reprogramación de patrones limitantes y las tácticas de negocios que te permitirán liderar con claridad y atraer resultados reales.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem", flexWrap: "wrap" }}>
              <Link href="/#metodo" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "1.1rem 2.4rem",
                background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                color: "#0E121B",
                textDecoration: "none",
                fontWeight: "800",
                fontSize: "1.08rem",
                borderRadius: "50px",
                boxShadow: "0 12px 30px rgba(212, 175, 55, 0.4)"
              }}>
                <span>Descubrir el Método</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
              
              <Link href="/curso" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "1.1rem 2.4rem",
                background: "rgba(212, 175, 55, 0.15)",
                border: "1.5px solid #D4AF37",
                color: "#F7E7CE",
                textDecoration: "none",
                fontWeight: "750",
                fontSize: "1.08rem",
                borderRadius: "50px"
              }}>
                <span>🎓 Ver Curso &amp; Campus</span>
              </Link>
            </div>
          </div>

        </section>

      </main>
    </>
  );
}
