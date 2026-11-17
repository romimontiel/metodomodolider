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

              <p className="hero-tagline" style={{ fontSize: "1.08rem", fontWeight: 800, color: "#8A6405", letterSpacing: "0.5px", marginBottom: "0.4rem", textTransform: "uppercase" }}>
                  Convertí tu talento en un negocio visible, rentable y con impacto.
              </p>
              
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0F172A", marginBottom: "1.1rem", fontFamily: "var(--font-heading)" }}>
                  Activá tu Modo Líder.
              </div>

              <p className="hero-statement">
                  Desarrollá la mentalidad, el liderazgo y la inteligencia estratégica que necesitás para <span className="highlight">transformar tus conocimientos en una propuesta de valor diferenciadora, atraer clientes y generar ventas</span>.
              </p>

              {/* Pilares Científicos y Estratégicos */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", flexWrap: "wrap", marginBottom: "2rem", fontFamily: "var(--font-heading)", fontSize: "0.92rem", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase" }}>
                  <span style={{ color: "#0F172A" }}>NEUROCIENCIAS</span>
                  <span style={{ color: "#B4871E", fontWeight: 700 }}>+</span>
                  <span style={{ color: "#0F172A" }}>MENTALIDAD EMPRESARIAL</span>
                  <span style={{ color: "#B4871E", fontWeight: 700 }}>+</span>
                  <span style={{ color: "#0F172A" }}>INTELIGENCIA DE NEGOCIOS</span>
              </div>

              {/* Botones de Acción Hero */}
              <div className="hero-actions">
                  <Link href="/servicios" className="btn-gold">
                      <span>✨ Ver Servicios &amp; Mentoría</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
                  <a href="#metodo" className="btn-outline-gold">
                      <span>Descubre el Método</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                  <Link href="/libroprimeroamate" className="btn-outline-gold">
                      <span>📖 Libro Primero Amate</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                  <Link href="/historia" className="btn-story">
                      <span>Mi Historia</span>
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
