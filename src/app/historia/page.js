import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mi Historia | Romina Lorena Montiel - Lic. en Administración, Neuropsicoeducadora y Mentora de Mentes y de Negocios",
  description: "Conoce el recorrido de Romina Lorena Montiel: Licenciada en Administración, Neuropsicoeducadora y Mentora de Mentes y de Negocios, creadora del Método MODO LÍDER.",
};

export default function HistoriaPage() {
  return (
    <>
      <Navbar />
      
      <main style={{ minHeight: "100vh", background: "#FAF6F0", color: "#1E293B", paddingBottom: "6rem" }}>
        
        {/* Hero Header */}
        <section style={{
          position: "relative",
          padding: "4.5rem 2rem 4rem 2rem",
          background: "#FAF6F0",
          borderBottom: "1px solid #EAE3D2",
          textAlign: "center"
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
              background: "#FAF7F2",
              padding: "0.45rem 1.1rem",
              borderRadius: "50px",
              border: "1px solid #E2D9CC",
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
              color: "#8A6405",
              marginBottom: "0.8rem"
            }}>
              TRAYECTORIA • CIENCIA • NEGOCIOS
            </span>

            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 6vw, 3.6rem)",
              fontWeight: "900",
              color: "#0F172A",
              marginBottom: "1.2rem",
              lineHeight: 1.15
            }}>
              Mi Historia
            </h1>

            <p style={{
              fontSize: "clamp(1.05rem, 2.5vw, 1.28rem)",
              color: "#475569",
              lineHeight: 1.65,
              maxWidth: "760px",
              margin: "0 auto"
            }}>
              De las finanzas corporativas y la consultoría empresarial al descubrimiento de las <span style={{ color: "#8A6405", fontWeight: "700" }}>Neurociencias</span>: el camino que dio origen al <span style={{ color: "#8A6405", fontWeight: "700" }}>Método MODO LÍDER</span>.
            </p>
          </div>
        </section>

        {/* Sección Biográfica Principal */}
        <section style={{ maxWidth: "1160px", margin: "4.5rem auto 0 auto", padding: "0 1.25rem" }}>
          
          <div className="historia-page-grid">
            
            {/* Narrativa Escrita */}
            <div style={{ fontSize: "1.15rem", lineHeight: "1.85", color: "#334155" }}>
              
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "0.45rem 1rem",
                background: "#FFF9E6",
                borderLeft: "4px solid #D4AF37",
                borderRadius: "0 8px 8px 0",
                color: "#8A6405",
                fontSize: "0.95rem",
                fontWeight: "800",
                marginBottom: "1.5rem"
              }}>
                👋 ¡Hola! Soy Romina Lorena Montiel
              </div>

              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.3rem",
                color: "#0F172A",
                fontWeight: "900",
                marginBottom: "1.4rem",
                lineHeight: 1.2
              }}>
                De los números a la mente: un puente entre dos mundos
              </h2>

              <p style={{ marginBottom: "1.5rem", color: "#334155" }}>
                Soy <strong style={{ color: "#0F172A" }}>correntina</strong>, pero mi viaje profesional me llevó a vivir en <strong style={{ color: "#0F172A" }}>España</strong> durante muchos años. Allí me desempeñé como <strong style={{ color: "#0F172A" }}>Contable, Controller y Jefe de Finanzas</strong> por más de 6 años, inmersa en la exigencia de balances, auditorías y presión constante.
              </p>

              <p style={{ marginBottom: "1.5rem", color: "#334155" }}>
                Fue allí, en <strong style={{ color: "#0F172A" }}>2009</strong>, cuando descubrí las <strong style={{ color: "#8A6405" }}>Neurociencias</strong>. Ese encuentro marcó un antes y un después absoluto: <strong style={{ color: "#0F172A" }}>me cambió la vida, mi forma de trabajar y mi manera de autoliderarme</strong>. Pasé de vivir con estrés y nerviosismo a vivir desde un bienestar genuino, y desde ese lugar me entrego a donde sea que voy.
              </p>

              <div style={{
                background: "#FAF8F2",
                borderLeft: "4px solid #D4AF37",
                padding: "1.6rem 2rem",
                borderRadius: "0 14px 14px 0",
                margin: "2.2rem 0",
                fontStyle: "italic",
                color: "#1E293B",
                fontSize: "1.15rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                border: "1px solid #EAE3D2",
                borderLeftWidth: "4px"
              }}>
                &quot;No podés liderar un negocio próspero ni sostener tus metas si primero no aprendés a liderar tu propia mente y tus estados emocionales.&quot;
              </div>

              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.1rem",
                color: "#0F172A",
                fontWeight: "900",
                marginTop: "2.8rem",
                marginBottom: "1.4rem",
                lineHeight: 1.2
              }}>
                La experiencia en terreno con PyMEs y Personas
              </h2>

              <p style={{ marginBottom: "1.5rem", color: "#334155" }}>
                A mi regreso a Argentina, trabajé en <strong style={{ color: "#0F172A" }}>Córdoba</strong> durante 4 años como <strong style={{ color: "#0F172A" }}>Consultora Empresarial y Coach Gerencial para dueños de PyMEs</strong>. Allí confirmé una realidad cotidiana: los negocios no se traban por falta de ideas, sino por bloqueos emocionales, postergación en la toma de decisiones y falta de claridad de sus líderes.
              </p>

              <p style={{ marginBottom: "1.5rem", color: "#334155" }}>
                En <strong style={{ color: "#0F172A" }}>2017</strong> me gradué con diploma oficial como <strong style={{ color: "#8A6405" }}>NEUROPSICOEDUCADORA</strong> y realicé un posgrado en <strong style={{ color: "#8A6405" }}>NEUROCIENCIAS DE LAS EMOCIONES</strong>. Comencé brindando talleres en colegios secundarios sobre emociones y proyecto de vida, y luego entre <strong style={{ color: "#0F172A" }}>2020 y 2022</strong> dicté online <strong style={{ color: "#0F172A" }}>Talleres de Educación Emocional y Mindfulness</strong>.
              </p>

              <p style={{ marginBottom: "1.5rem", color: "#334155" }}>
                Entre <strong style={{ color: "#0F172A" }}>2023 y 2025</strong> consolidé mi <strong style={{ color: "#0F172A" }}>método propio</strong> acompañando en sesiones privadas 1 a 1 a adultos, niños y adolescentes en <strong style={{ color: "#0F172A" }}>procesos de ansiedad complejos</strong>, con éxito en todos los casos. Durante esos años también comencé a trabajar con éxito con <strong style={{ color: "#0F172A" }}>empresarios, emprendedores y profesionales</strong> en procesos de acompañamiento vinculados a avanzar en sus negocios o alcanzar logros puntuales en sus carreras profesionales.
              </p>

              <p style={{ marginBottom: "1.5rem", color: "#334155" }}>
                En <strong style={{ color: "#0F172A" }}>marzo de 2025</strong> alcancé un hito muy especial en mi vocación: publiqué mi libro <strong style={{ color: "#0F172A" }}>&quot;Primero Ámate&quot;</strong>, editado por <strong style={{ color: "#0F172A" }}>Tinta Libre Ediciones</strong>, presentándolo en el escenario principal de la <strong style={{ color: "#0F172A" }}>7.° Feria del Libro de Goya (2025)</strong>, firmando ejemplares junto a la <strong style={{ color: "#0F172A" }}>SADE Corrientes en la Feria del Libro de Corrientes Capital (2025)</strong> y con exhibición y venta de ejemplares en el <strong style={{ color: "#0F172A" }}>Stand de Tinta Libre Ediciones en la Feria Internacional del Libro de Buenos Aires (2026)</strong>.
              </p>

              {/* Fotos de Presentación del Libro en Goya y Corrientes Capital */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.2rem",
                margin: "1.8rem 0 2rem 0"
              }}>
                <div style={{
                  background: "#FFFFFF",
                  border: "1.5px solid #E5D9C3",
                  borderBottom: "3px solid #D4AF37",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
                }}>
                  <img
                    src="/feria_libro_goya_2025.jpg"
                    alt="Presentación en Escenario Principal - 7.° Feria del Libro de Goya 2025"
                    style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }}
                  />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <strong style={{ display: "block", fontSize: "0.95rem", color: "#0F172A" }}>
                      🎤 7.° Feria del Libro de Goya (2025)
                    </strong>
                    <span style={{ fontSize: "0.85rem", color: "#64748B" }}>
                      Presentación en Escenario Principal
                    </span>
                  </div>
                </div>

                <div style={{
                  background: "#FFFFFF",
                  border: "1.5px solid #E5D9C3",
                  borderBottom: "3px solid #D4AF37",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
                }}>
                  <img
                    src="/feria_libro_corrientes_sade_2025.jpg"
                    alt="Firma de libro junto a SADE Corrientes en Feria del Libro de Corrientes Capital 2025"
                    style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }}
                  />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <strong style={{ display: "block", fontSize: "0.95rem", color: "#0F172A" }}>
                      ✍️ Feria del Libro Corrientes Capital (2025)
                    </strong>
                    <span style={{ fontSize: "0.85rem", color: "#64748B" }}>
                      Firma de ejemplares junto a SADE Corrientes
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: "1.8rem" }}>
                <a
                  href="https://www.instagram.com/stories/highlights/18059316080266921/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.75rem 1.35rem",
                    background: "#FFFFFF",
                    border: "1.5px solid #D4AF37",
                    borderRadius: "50px",
                    color: "#0F172A",
                    textDecoration: "none",
                    fontSize: "0.92rem",
                    fontWeight: "800",
                    boxShadow: "0 4px 14px rgba(212, 175, 55, 0.18)"
                  }}
                >
                  <span>📲 Ver Historias Destacadas de la Feria del Libro (@rominalorenamontiel)</span>
                </a>
              </div>

              <p style={{ marginBottom: "1.5rem", color: "#334155" }}>
                En <strong style={{ color: "#0F172A" }}>2026</strong> integré de manera definitiva toda mi trayectoria en el <strong style={{ color: "#8A6405" }}>Método MODO LÍDER</strong>: un sistema diseñado no para darte más teoría, sino para alinear tu mentalidad con tu marca, tu negocio y/o con tu proyecto profesional.
              </p>

              <p style={{ marginBottom: "1.5rem", color: "#8A6405", fontWeight: "750", fontSize: "1.2rem", lineHeight: "1.6" }}>
                Hoy me presento con orgullo de ser quien soy: <span style={{ color: "#0F172A", fontWeight: "800" }}>Licenciada en Administración y Neuropsicoeducadora</span>. Hoy me identifico como <span style={{ color: "#B47C13", fontWeight: "800" }}>Mentora de Mentes y de Negocios</span>.
              </p>

              <div style={{
                marginTop: "2rem",
                padding: "1.8rem 2rem",
                background: "linear-gradient(135deg, #FFFDF8 0%, #FAF6EE 100%)",
                borderRadius: "16px",
                border: "1.5px solid #E6D7BD",
                boxShadow: "0 8px 25px rgba(212, 175, 55, 0.1)"
              }}>
                <span style={{ fontSize: "0.85rem", fontWeight: "800", letterSpacing: "2.5px", textTransform: "uppercase", color: "#8A6405", display: "block", marginBottom: "0.6rem" }}>
                  🎯 MI TRABAJO Y MISIÓN HOY
                </span>
                <p style={{ margin: 0, fontSize: "1.08rem", lineHeight: "1.75", color: "#1E293B" }}>
                  Hoy trabajo junto a <strong style={{ color: "#0F172A" }}>empresarios, emprendedores y profesionales</strong> creando sus negocios desde cero o transformando los que ya tienen desde dos áreas: la transformación necesaria para <strong style={{ color: "#8A6405" }}>habitar una mentalidad adecuada</strong> + el aprendizaje de la <strong style={{ color: "#8A6405" }}>inteligencia de negocios adecuada</strong> para que su marca, negocio o profesión impacte, genere valor y se traduzca en ventas.
                </p>
              </div>

            </div>

            {/* Tarjeta Visual Lateral */}
            <div style={{
              position: "sticky",
              top: "100px",
              background: "#FFFFFF",
              padding: "1.6rem",
              borderRadius: "24px",
              border: "1.5px solid #E2E8F0",
              boxShadow: "0 20px 40px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)",
              textAlign: "center"
            }}>
              <div style={{
                overflow: "hidden",
                borderRadius: "18px",
                marginBottom: "1.4rem",
                background: "#FFFFFF",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                padding: "0.5rem",
                border: "1px solid #F1F5F9"
              }}>
                <img 
                  src="/romina_historia.png?v=20261117" 
                  alt="Romina Lorena Montiel" 
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "contain", maxHeight: "480px" }} 
                />
              </div>

              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.45rem",
                fontWeight: "800",
                color: "#0F172A",
                marginBottom: "0.3rem"
              }}>
                Romina Lorena Montiel
              </h3>

              <p style={{ color: "#8A6405", fontSize: "0.92rem", fontWeight: "750", marginBottom: "0.3rem" }}>
                Lic. en Administración • Neuropsicoeducadora
              </p>

              <p style={{ color: "#0F172A", fontSize: "0.95rem", fontWeight: "800", marginBottom: "0.6rem" }}>
                Mentora de Mentes y de Negocios
              </p>

              <p style={{ color: "#64748B", fontSize: "0.88rem", marginBottom: "1.3rem" }}>
                Instagram: <strong style={{ color: "#8A6405" }}>@rominalorenamontiel</strong>
              </p>

              <div style={{
                background: "#F8FAFC",
                padding: "1.1rem",
                borderRadius: "14px",
                border: "1px solid #E2E8F0",
                fontSize: "0.95rem",
                color: "#334155",
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
                borderTop: "1px solid #E2E8F0"
              }}>
                <img src="/logo modolider.png" alt="Sello Oficial" style={{ height: "48px", width: "48px", borderRadius: "50%", boxShadow: "0 2px 10px rgba(212,175,55,0.25)" }} />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "0.88rem", fontWeight: "800", color: "#0F172A" }}>MÉTODO MODO LÍDER</div>
                  <div style={{ fontSize: "0.75rem", color: "#64748B" }}>Creá • Liderá • Impactá</div>
                </div>
              </div>
            </div>

          </div>

          {/* Bloque Destacado de Cierre & CTA */}
          <div className="historia-cta-box" style={{ background: "#000000", marginTop: "4rem" }}>
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

            <h2 className="historia-cta-title">
              Trabajemos juntos en la transformación de tu negocio
            </h2>

            <p className="historia-cta-desc" style={{
              fontSize: "1.18rem",
              color: "#E2E8F0",
              maxWidth: "800px",
              margin: "0 auto 2.5rem auto",
              lineHeight: "1.7"
            }}>
              Integrá la ciencia de tu cerebro, la reprogramación de patrones limitantes y las tácticas de negocios que te permitirán liderar con claridad y atraer resultados reales.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem", flexWrap: "wrap" }}>
              <Link href="/servicios" style={{
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
                <span>✨ Productos y Servicios</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>

              <Link href="/libroprimeroamate" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "1.1rem 2.4rem",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1.5px solid rgba(212, 175, 55, 0.7)",
                color: "#ECC369",
                textDecoration: "none",
                fontWeight: "750",
                fontSize: "1.08rem",
                borderRadius: "50px"
              }}>
                <span>📖 Libro Primero Amate</span>
              </Link>
            </div>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
