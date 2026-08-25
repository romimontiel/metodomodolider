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
                  <img src="/romina_historia.png" alt="Romina Lorena Montiel" style={{ background: "radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.22) 0%, rgba(10, 13, 20, 0.95) 80%)", objectFit: "contain" }} />
                  <div className="historia-card-caption">
                      <h4>Romina Lorena Montiel</h4>
                      <p style={{ fontSize: "0.95rem", color: "#ECC369", fontWeight: "700", margin: "0.2rem 0" }}>Lic. en Administración • Neuropsicoeducadora</p>
                      <p style={{ fontSize: "0.9rem", color: "#F7E7CE", fontWeight: "800", marginBottom: "0.5rem" }}>Mentora de Mentes y de Negocios</p>
                      <Link href="/historia" style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginTop: "1rem",
                        padding: "0.65rem 1.2rem",
                        background: "rgba(212, 175, 55, 0.18)",
                        border: "1.5px solid rgba(212, 175, 55, 0.55)",
                        borderRadius: "8px",
                        color: "#F7E7CE",
                        textDecoration: "none",
                        fontSize: "0.88rem",
                        fontWeight: "750",
                        transition: "all 0.25s ease",
                        boxShadow: "0 4px 15px rgba(212, 175, 55, 0.15)"
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
