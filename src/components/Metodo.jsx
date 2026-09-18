export default function Metodo() {
  return (
    <section className="metodo-section" id="metodo">
      <div className="container">
          
          <div className="metodo-header">
              <span className="section-tag">Metodología Comprobada</span>
              <h2 className="metodo-title">El Método MODO LÍDER</h2>
              <p className="metodo-subtitle">Una metodología única donde integro neurociencias, desbloqueo mental e inteligencia estratégica de negocios para potenciar tu marca, hacerte visible y generar ventas reales.</p>
          </div>

          {/* Los 3 Pilares */}
          <div className="fundamentos-grid">
              <div className="fundamento-card">
                  <div className="fundamento-icon-wrap" style={{ width: "58px", height: "58px", background: "#1E150F", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.4rem", color: "#D4AF37", boxShadow: "0 6px 16px rgba(0,0,0,0.08)" }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"/>
                          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"/>
                      </svg>
                  </div>
                  <h3>Neurociencias</h3>
                  <p>Te enseño la biología de tu cerebro para hackear hábitos improductivos, optimizar tu foco atencional y reprogramar respuestas neurológicas hacia el éxito sin caer en el agotamiento extremo.</p>
              </div>

              <div className="fundamento-card">
                  <div className="fundamento-icon-wrap" style={{ width: "58px", height: "58px", background: "#1E150F", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.4rem", color: "#D4AF37", boxShadow: "0 6px 16px rgba(0,0,0,0.08)" }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/>
                          <path d="M9 21h6"/>
                          <path d="M10 17v-2"/>
                          <path d="M14 17v-2"/>
                      </svg>
                  </div>
                  <h3>Desbloqueo Mental</h3>
                  <p>Identifico y transformo los bloqueos y patrones limitantes que te impiden avanzar, alineando tu mentalidad con la ambición de tu marca y la altura de tus objetivos de negocio.</p>
              </div>

              <div className="fundamento-card">
                  <div className="fundamento-icon-wrap" style={{ width: "58px", height: "58px", background: "#1E150F", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.4rem", color: "#D4AF37", boxShadow: "0 6px 16px rgba(0,0,0,0.08)" }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                      </svg>
                  </div>
                  <h3>Inteligencia de Negocios</h3>
                  <p>Estrategia clave y aplicable. Te acompaño en la detección de las estrategias adecuadas para tu negocio, la toma ágil de decisiones, la estructuración de procesos eficientes y una visión táctica para dirigir tu empresa hacia la conexión y el impacto que atraen ventas reales.</p>
              </div>
          </div>

          {/* Los 3 Resultados Clave */}
          <div className="problemas-wrapper">
              <h3 className="problemas-title">Lo que álcanzan quienes trabajan con el método: <span>3 resultados reales y sostenibles</span>:</h3>
              
              <div className="problemas-grid">
                  <div className="problema-item">
                      <div className="problema-icon" style={{ color: "#8A6405", display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                              <path d="M2 17l10 5 10-5"/>
                              <path d="M2 12l10 5 10-5"/>
                          </svg>
                      </div>
                      <h4>Marca Personal Visible</h4>
                      <p>Posicionás tu marca con claridad y autoridad. Tu mensaje llega al cliente ideal y te diferenciás en un mercado saturado con una presencia que atrae e impacta.</p>
                  </div>

                  <div className="problema-item">
                      <div className="problema-icon" style={{ color: "#8A6405", display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"/>
                              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"/>
                          </svg>
                      </div>
                      <h4>Mente Desbloqueada</h4>
                      <p>Desbloqueamos los patrones que te frenaban y alineamos tu mentalidad con tus metas. Ejecutás con foco, claridad y la confianza de quien sabe exactamente hacia dónde va.</p>
                  </div>

                  <div className="problema-item">
                      <div className="problema-icon" style={{ color: "#8A6405", display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="12" y1="1" x2="12" y2="23"/>
                              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                          </svg>
                      </div>
                      <h4>Negocio que Vende</h4>
                      <p>Te enseño a aplicar inteligencia de negocio accionable + estrategias correctas para que tu negocio surja, produzca impacto y genere ventas.</p>
                  </div>
              </div>
          </div>

      </div>
    </section>
  );
}
