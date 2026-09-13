import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-glow-ambient"></div>
      
      {/* Decorative SVG Arcs in Background */}
      <svg className="hero-arcs-bg" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="120" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="4 8" />
          <circle cx="250" cy="250" r="180" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.6" />
          <circle cx="250" cy="250" r="240" stroke="url(#goldGrad)" strokeWidth="1.5" opacity="0.3" />
          <defs>
              <linearGradient id="goldGrad" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F9D976" />
                  <stop offset="0.5" stopColor="#E9B642" />
                  <stop offset="1" stopColor="#C38B1E" stopOpacity="0.2" />
              </linearGradient>
          </defs>
      </svg>

      <div className="hero-container">
          
          {/* Columna Izquierda: Copywriting, Título y Badges */}
          <div className="hero-text-col">
              <div className="hero-pretitle-wrap">
                  <div className="hero-line"></div>
                  <span className="hero-pretitle">MÉTODO</span>
                  <div className="hero-line"></div>
              </div>

              <h1 className="hero-main-title">Modo Líder</h1>

              <p className="hero-statement">
                  Con las herramientas, recursos y guía de procesos adecuados todos podemos <span className="highlight">transformar nuestros bloqueos en potencial</span> para crear, conseguir resultados y prosperar.
              </p>

              {/* Píldoras de los 3 Pilares Científicos y Estratégicos */}
              <div className="hero-pillars-pills">
                  <span className="pillar-pill-item">NEUROCIENCIAS</span>
                  <div className="pillar-dot"></div>
                  <span className="pillar-pill-item">TRANSFORMACIÓN</span>
                  <div className="pillar-dot"></div>
                  <span className="pillar-pill-item">INTELIGENCIA DE NEGOCIOS</span>
              </div>

              {/* Botones de Acción Hero */}
              <div className="hero-actions">
                  <a href="#metodo" className="btn-gold">
                      <span>Descubre el Método</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                  <Link href="/curso" className="btn-outline-gold">
                      <span>🎓 Curso</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                  <Link href="/historia" className="btn-story">
                      <span>Ver mi historia</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
              </div>

              {/* Bloque de Romina Lorena Montiel - Nueva Identidad */}
              <div className="hero-author-card">
                  <img 
                      src="/romina-signature@2x.png" 
                      alt="Lic. Romina Lorena Montiel - Mentora de Mentes y Negocios" 
                      className="hero-signature-img"
                  />
              </div>
          </div>

          {/* Columna Derecha: Retrato de Romina */}
          <div className="hero-visual-col">
              <div className="portrait-wrap">
                  <div className="portrait-glow"></div>
                  <img src="/romina.png" alt="Romina Lorena Montiel - Creadora de Método Modo Líder" className="portrait-img" />
              </div>
          </div>

      </div>
    </section>
  );
}
