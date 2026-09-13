import Link from "next/link";

export default function Historia() {
  return (
    <section className="historia-section" id="historia">
      <div className="container">
          <span className="section-tag">Trayectoria & Propósito</span>
          <h2 className="section-title-dark">Así Nació Método Modo Líder</h2>
          
          <div className="historia-grid">
              <div className="historia-text">
                  <p>Durante años vi cómo profesionales brillantes y emprendedores con ideas increíbles se quedaban estancados. No por falta de talento, visión o capacidad de trabajo, sino por <strong>barreras invisibles de postergación y sobrecarga</strong> que los mantenían en una parálisis silenciosa.</p>
                  
                  <div className="historia-quote-box">
                      &quot;Yo misma atravesé esos momentos donde sabía exactamente lo que tenía que hacer pero, por alguna razón, no lograba accionar con la contundencia que mi negocio demandaba.&quot;
                  </div>

                  <p>Fue entonces cuando decidí investigar a fondo qué es lo que realmente nos frena: combinando las bases biológicas de las <strong>Neurociencias</strong> y la <strong>reprogramación de patrones</strong>, a las que sumé mi <strong>formación en negocios</strong> junto a mis <strong>10 años de experiencia</strong> para integrar al <strong>Método MODO LÍDER</strong> una <strong>Inteligencia Estratégica de Negocios</strong> adecuada a los tiempos que corren.</p>
                  
                  <p>Así nació el <strong>Método MODO LÍDER</strong>: un sistema diseñado no para darte más teoría, sino para desbloquear tu autoliderazgo y poner tu accionar en sintonía con lo que necesita tu negocio para crear impacto, conectar con tus clientes y atraer ventas.</p>
              </div>

              <div className="historia-card-portrait">
                  <img src="/romina_historia.png" alt="Romina Lorena Montiel" style={{ background: "#FFFFFF", objectFit: "contain" }} />
                  <div className="historia-card-caption">
                      <h4>Romina Lorena Montiel</h4>
                      <p style={{ fontSize: "0.95rem", color: "#8A6405", fontWeight: "750", margin: "0.2rem 0" }}>Lic. en Administración • Neuropsicoeducadora</p>
                      <p style={{ fontSize: "0.9rem", color: "#0F172A", fontWeight: "800", marginBottom: "0.5rem" }}>Mentora de Mentes y de Negocios</p>
                      <Link href="/historia" style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginTop: "1rem",
                        padding: "0.7rem 1.4rem",
                        background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                        borderRadius: "50px",
                        color: "#0E121B",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: "800",
                        transition: "all 0.25s ease",
                        boxShadow: "0 6px 18px rgba(212, 175, 55, 0.35)"
                      }}>
                        <span>✨ Conoce Mi Historia Completa</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}
