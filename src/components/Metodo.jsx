export default function Metodo() {
  return (
    <section className="metodo-section" id="metodo">
      <div className="container">
          
          <div className="metodo-header">
              <span className="section-tag">Fundamentos Científicos y Estratégicos</span>
              <h2 className="metodo-title">El Método MODO LÍDER</h2>
              <p className="metodo-subtitle">Una metodología única que integra ciencia del comportamiento, mentalidad y ejecución de alto impacto para resultados reales y sostenibles.</p>
          </div>

          {/* Los 3 Pilares */}
          <div className="fundamentos-grid">
              <div className="fundamento-card">
                  <div className="fundamento-icon-wrap">🧠</div>
                  <h3>Neurociencias</h3>
                  <p>Entendemos la biología de tu cerebro para hackear hábitos improductivos, optimizar tu foco atencional y reprogramar respuestas neurológicas hacia el éxito sin caer en el agotamiento extremo.</p>
              </div>

              <div className="fundamento-card">
                  <div className="fundamento-icon-wrap">🧩</div>
                  <h3>Psicología Cognitiva</h3>
                  <p>Identificamos y transformamos los patrones de pensamiento limitantes y el autosabotaje inconsciente, alineando tus creencias con la ambición y altura de tus objetivos.</p>
              </div>

              <div className="fundamento-card">
                  <div className="fundamento-icon-wrap">💼</div>
                  <h3>Inteligencia de Negocios</h3>
                  <p>Estrategia pura y aplicable. Toma de decisiones con agilidad, estructuración de procesos eficientes y visión táctica para dirigir tu empresa hacia el crecimiento exponencial.</p>
              </div>
          </div>

          {/* Los 3 Problemas Paralizantes */}
          <div className="problemas-wrapper">
              <h3 className="problemas-title">Diseñado para erradicar los <span>3 problemas más paralizantes</span>:</h3>
              
              <div className="problemas-grid">
                  <div className="problema-item">
                      <div className="problema-icon">⏳</div>
                      <h4>La Postergación</h4>
                      <p>Eliminamos la procrastinación en decisiones críticas. Transformamos la inercia mental en acción contundente y constante.</p>
                  </div>

                  <div className="problema-item">
                      <div className="problema-icon">🧭</div>
                      <h4>Falta de Autoliderazgo</h4>
                      <p>Recuperas el dominio total sobre tu tiempo, tus emociones y tus prioridades. Lideras tu mente primero.</p>
                  </div>

                  <div className="problema-item">
                      <div className="problema-icon">🧱</div>
                      <h4>Bloqueo Mental</h4>
                      <p>Rompemos de raíz la parálisis por análisis. Ganas una claridad mental absoluta para ejecutar sin dudas.</p>
                  </div>
              </div>
          </div>

      </div>
    </section>
  );
}
