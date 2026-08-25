export default function Metodo() {
  return (
    <section className="metodo-section" id="metodo">
      <div className="container">
          
          <div className="metodo-header">
              <h2 className="metodo-title">El Método MODO LÍDER</h2>
              <p className="metodo-subtitle">Una metodología única donde integro neurociencias, mentalidad y ejecución de alto impacto para resultados reales y sostenibles.</p>
          </div>

          {/* Los 3 Pilares */}
          <div className="fundamentos-grid">
              <div className="fundamento-card">
                  <div className="fundamento-icon-wrap" style={{ width: "58px", height: "58px", background: "#1E1612", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.4rem", color: "#FFFFFF", boxShadow: "0 6px 16px rgba(0,0,0,0.15)" }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"/>
                          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"/>
                      </svg>
                  </div>
                  <h3>Neurociencias</h3>
                  <p>Te enseño la biología de tu cerebro para hackear hábitos improductivos, optimizar tu foco atencional y reprogramar respuestas neurológicas hacia el éxito sin caer en el agotamiento extremo.</p>
              </div>

              <div className="fundamento-card">
                  <div className="fundamento-icon-wrap" style={{ width: "58px", height: "58px", background: "#1E1612", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.4rem", color: "#FFFFFF", boxShadow: "0 6px 16px rgba(0,0,0,0.15)" }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/>
                          <path d="M9 21h6"/>
                          <path d="M10 17v-2"/>
                          <path d="M14 17v-2"/>
                      </svg>
                  </div>
                  <h3>Transformación</h3>
                  <p>Identifico y transformo tus patrones de pensamiento limitantes y el autosabotaje inconsciente, alineando tus creencias con la ambición y altura de tus objetivos.</p>
              </div>

              <div className="fundamento-card">
                  <div className="fundamento-icon-wrap" style={{ width: "58px", height: "58px", background: "#1E1612", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.4rem", color: "#FFFFFF", boxShadow: "0 6px 16px rgba(0,0,0,0.15)" }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                      </svg>
                  </div>
                  <h3>Inteligencia de Negocios</h3>
                  <p>Estrategia clave y aplicable. Te acompaño en la detección de las estrategias adecuadas para tu negocio, la toma ágil de decisiones, la estructuración de procesos eficientes y una visión táctica para dirigir tu empresa hacia la conexión y el impacto que atraen ventas reales.</p>
              </div>
          </div>

          {/* Los 3 Problemas Paralizantes */}
          <div className="problemas-wrapper">
              <h3 className="problemas-title">Diseñado para erradicar los <span>3 problemas más paralizantes</span>:</h3>
              
              <div className="problemas-grid">
                  <div className="problema-item">
                      <div className="problema-icon" style={{ color: "#6B7280", display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"/>
                              <polyline points="12 6 12 12 16 14"/>
                          </svg>
                      </div>
                      <h4>La Postergación</h4>
                      <p>Elimino la procrastinación en tus decisiones críticas. Transformo tu inercia mental en acción contundente y constante.</p>
                  </div>

                  <div className="problema-item">
                      <div className="problema-icon" style={{ color: "#6B7280", display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"/>
                              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                          </svg>
                      </div>
                      <h4>Falta de Autoliderazgo</h4>
                      <p>Te ayudo a recuperar el dominio total sobre tu tiempo, tus emociones y tus prioridades. Lideras tu mente primero.</p>
                  </div>

                  <div className="problema-item">
                      <div className="problema-icon" style={{ color: "#6B7280", display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                          </svg>
                      </div>
                      <h4>Bloqueo Mental</h4>
                      <p>Rompo de raíz tu parálisis por análisis. Ganas una claridad mental absoluta para ejecutar sin dudas.</p>
                  </div>
              </div>
          </div>

      </div>
    </section>
  );
}
