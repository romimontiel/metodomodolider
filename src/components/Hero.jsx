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
                  No te dice qué hacer. Te da el <span className="highlight">sistema</span> para que dejes de postergar y dirijas tu <span className="highlight">accionar</span> hacia lo que <span className="highlight">tu negocio</span> necesita hoy de vos.
              </p>

              {/* Píldoras de los 3 Pilares Científicos y Estratégicos */}
              <div className="hero-pillars-pills">
                  <span className="pillar-pill-item">NEUROCIENCIAS</span>
                  <div className="pillar-dot"></div>
                  <span className="pillar-pill-item">MENTALIDAD</span>
                  <div className="pillar-dot"></div>
                  <span className="pillar-pill-item">INTELIGENCIA DE NEGOCIOS</span>
              </div>

              {/* Botón CTA */}
              <div className="hero-actions">
                  <a href="#metodo" className="btn-gold">
                      <span>Descubre el Método</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                  <Link href="/curso" className="btn-gold" style={{ background: "rgba(212, 175, 55, 0.15)", color: "#F7E7CE", border: "1.5px solid #D4AF37", boxShadow: "0 8px 25px rgba(212, 175, 55, 0.25)" }}>
                      <span>🎓 Curso & Campus Alumnas</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                  <a href="#historia" className="btn-secondary-link">
                      <span>Conoce mi historia</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                  </a>
              </div>

              {/* Bloque de Romina Lorena Montiel */}
              <div className="hero-author-card">
                  <div className="author-monogram">RM</div>
                  <div className="author-details">
                      <div className="author-name">ROMINA LORENA MONTIEL</div>
                      <div className="author-role">Creadora de Método Modo Líder</div>
                      <div className="author-quote">&quot;Creá. Liderá. Impactá. Desde quién sos.&quot;</div>
                  </div>
              </div>
          </div>

          {/* Columna Derecha: Retrato de Romina & Sello Dorado Integrado */}
          <div className="hero-visual-col">
              <div className="portrait-wrap">
                  <div className="portrait-glow"></div>
                  <img src="/romina.png" alt="Romina Lorena Montiel - Creadora de Método Modo Líder" className="portrait-img" />
                  
                  {/* Sello de Marca Flotante Oficial */}
                  <img src="/logo modolider.png" alt="Método Modo Líder - Sello Oficial" className="gold-badge-seal" />
              </div>
          </div>

      </div>
    </section>
  );
}
