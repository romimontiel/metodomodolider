export default function CtaLibroFirmado() {
  return (
    <section className="cta-libro-firmado-section" id="libro-firmado">
      <div className="container">
        <div className="cta-libro-firmado-box">
          
          {/* Columna Izquierda: Libro Mockup 3D */}
          <div className="cta-libro-visual-left">
            <img 
              src="/libro_3d_mockup.png" 
              alt="Libro Primero Ámate - Edición Especial Firmada" 
              className="cta-libro-img"
            />
          </div>

          {/* Columna Central: Textos y Botón WhatsApp */}
          <div className="cta-libro-content">
            <span className="section-tag" style={{ color: '#ECC369', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>
              EDICIÓN EXCLUSIVA • FIRMA Y DEDICATORIA
            </span>
            <h2 className="cta-libro-title">
              ¿Querés tu libro firmado y dedicado por mí?
            </h2>
            <p className="cta-libro-desc">
              Adquirí tu ejemplar físico de <strong>«Primero Ámate»</strong> con dedicatoria exclusiva y autógrafo personalizado para vos o para regalar. Envíos directos a todo el país y atención personalizada.
            </p>
            <a 
              href="https://wa.me/543794322272?text=Hola%20Romi!%20Quiero%20pedir%20mi%20ejemplar%20firmado%20y%20dedicado%20de%20tu%20libro%20Primero%20%C3%81mate"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold cta-libro-btn"
            >
              <span>✍️ Pedir Mi Libro Firmado por WhatsApp</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* Columna Derecha: Foto de Romina */}
          <div className="cta-libro-visual-right">
            <img 
              src="/romina_banner_libro.png" 
              alt="Lic. Romina Lorena Montiel - Autora de Primero Ámate" 
              className="cta-romina-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
