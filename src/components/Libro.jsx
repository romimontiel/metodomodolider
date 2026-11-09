export default function Libro() {
  const bookstores = [
    {
      country: "🇦🇷 Argentina • Oficial",
      name: "Tinta Libre Ediciones",
      format: "Libro Impreso (Papel) y E-book",
      url: "https://www.tintalibre.com.ar/book/2058/Primero-amate",
      primary: true,
      cta: "Adquirir en Editorial Oficial"
    },
    {
      country: "🇦🇷 Argentina",
      name: "Librerías Yenny - El Ateneo",
      format: "Ejemplar Físico • Envíos a todo el país",
      url: "https://www.yenny-elateneo.com/productos/primero-amate/",
      primary: true,
      cta: "Comprar en Yenny - El Ateneo"
    },
    {
      country: "🇦🇷 Argentina",
      name: "Mercado Libre Argentina",
      format: "Ejemplar Impreso • Envío Rápido",
      url: "https://listado.mercadolibre.com.ar/libro-primero-amate-romina-lorena-montiel",
      primary: false,
      cta: "Ver en Mercado Libre"
    },
    {
      country: "🇦🇷 Argentina",
      name: "Cúspide Libros",
      format: "Librerías Físicas y Online",
      url: "https://cuspide.com/?s=Primero+amate&post_type=product",
      primary: false,
      cta: "Buscar en Cúspide"
    },
    {
      country: "🌎 Internacional",
      name: "Bajalibros",
      format: "E-book Digital (Lectura inmediata)",
      url: "https://www.bajalibros.com/AR/Buscar?q=Primero+amate+Romina+Lorena+Montiel",
      primary: false,
      cta: "Descargar E-book"
    },
    {
      country: "🇪🇸 España",
      name: "La Casa del Libro",
      format: "E-book Digital • España y Europa",
      url: "https://www.casadellibro.com/?query=Primero%20amate%20Romina%20Lorena%20Montiel",
      primary: false,
      cta: "Ver en La Casa del Libro"
    },
    {
      country: "🇲🇽 México",
      name: "Librerías Gonvill",
      format: "E-book Digital • México",
      url: "https://www.gonvill.com.mx/busqueda/listaLibros.php?tipoBus=full&palabrasBusqueda=Primero+amate+Romina+Lorena+Montiel",
      primary: false,
      cta: "Ver en Gonvill"
    },
    {
      country: "🇺🇾 Uruguay & 🇵🇦 Panamá",
      name: "Bookshop (UY) • El Hombre de la Mancha (PA)",
      format: "Catálogo Internacional de E-books",
      url: "https://www.tintalibre.com.ar/book/2058/Primero-amate",
      primary: false,
      cta: "Ver Catálogo Digital"
    }
  ];

  return (
    <section className="libro-section" id="libro">
      <div className="container">
        
        {/* Encabezado de la Sección */}
        <div className="libro-header">
          <span className="section-tag" style={{ color: "#ECC369" }}>
            Autora Publicada • Obra Literaria
          </span>
          <h2 className="libro-title">Libro «Primero Ámate»</h2>
          <p className="libro-subtitle">
            Una guía práctica respaldada por la neurociencia, la psicología y el coaching para descubrir tu verdadero valor personal, desbloquear tu mente y liderar tu vida desde el amor propio.
          </p>
        </div>

        {/* Grilla Principal: Portada + Sinopsis Oficial */}
        <div className="libro-main-grid">
          
          {/* Columna Izquierda: Portada del Libro e Hitos */}
          <div className="libro-cover-col">
            <div className="libro-cover-card">
              <div className="libro-cover-glow"></div>
              <span className="libro-editorial-badge">
                📖 Tinta Libre Ediciones
              </span>
              <img
                src="/tapa_libro_primero_amate.png"
                alt="Portada del libro Primero Ámate de la Lic. Romina Lorena Montiel"
                className="libro-cover-img"
              />
              <div className="libro-author-caption">
                <strong>Lic. Romina Lorena Montiel</strong>
                <span>Edición Impresa (Papel) &amp; Formato Digital (E-book)</span>
              </div>
            </div>

            {/* Hitos Literarios */}
            <div className="libro-milestones">
              <div className="libro-milestone-item">
                <span className="libro-milestone-icon">🎤</span>
                <div>
                  <strong>Feria Provincial del Libro (2025)</strong>
                  <p>Presentación oficial en escenario en Corrientes Capital y Goya.</p>
                </div>
              </div>
              <div className="libro-milestone-item">
                <span className="libro-milestone-icon">🏛️</span>
                <div>
                  <strong>Feria Internacional del Libro de Buenos Aires (2026)</strong>
                  <p>Obra presente con exhibición y venta de ejemplares.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Sinopsis Oficial y Los 4 Ejes */}
          <div className="libro-content-col">
            <div className="libro-synopsis-badge">
              SINOPSIS OFICIAL DE LA OBRA
            </div>

            <h3 className="libro-question-lead">
              «¿Te has detenido a pensar en ti? ¿Cuán valiosa te sientes?»
            </h3>

            <div className="libro-synopsis-text">
              <p>
                A través de una combinación única de <strong>neurociencia, psicología, coaching, narración de historias y técnicas prácticas de autoconocimiento</strong>, este libro brinda una guía paso a paso para ayudarte a descubrir tu verdadero valor personal, reconectar contigo mismo y encender la chispa del amor propio que reside en ti.
              </p>
              <p>
                La obra explora, con sensibilidad y claridad, los obstáculos más comunes que afectan nuestra autoestima: <strong>el perfeccionismo, la rumiación mental, los bloqueos emocionales, la ansiedad, el trauma, las heridas emocionales, la dependencia emocional y el estrés</strong>, entre otros.
              </p>
              <p>
                <em>Primero ámate</em> ofrece herramientas respaldadas por la ciencia, como ejercicios de autoconocimiento, formas de autocuidado, técnicas de respiración consciente, prácticas de atención plena y meditación. Herramientas que te ayudarán a comprender y gestionar las situaciones difíciles que puedas estar atravesando.
              </p>
            </div>

            {/* Los 4 Ejes de Transformación */}
            <div className="libro-pillars-box">
              <h4 className="libro-pillars-title">
                Los 4 Pilares que recorre «Primero Ámate»:
              </h4>
              <div className="libro-pillars-grid">
                <div className="libro-pillar-chip">
                  <span className="chip-num">01</span>
                  <span>Abrazar tu Autoestima</span>
                </div>
                <div className="libro-pillar-chip">
                  <span className="chip-num">02</span>
                  <span>Alcanzar tu Paz Mental</span>
                </div>
                <div className="libro-pillar-chip">
                  <span className="chip-num">03</span>
                  <span>Equilibrar tus Emociones</span>
                </div>
                <div className="libro-pillar-chip">
                  <span className="chip-num">04</span>
                  <span>Crear Abundancia</span>
                </div>
              </div>
            </div>

            {/* Botones Rápidos Principales */}
            <div className="libro-primary-actions">
              <a
                href="https://www.tintalibre.com.ar/book/2058/Primero-amate"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold libro-btn-main"
              >
                <span>📖 Adquirir Libro (Papel / E-book)</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a
                href="https://www.yenny-elateneo.com/productos/primero-amate/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold libro-btn-secondary"
              >
                <span>🛒 Comprar en Yenny - El Ateneo</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Vidriera de Librerías y Plataformas Internacionales */}
        <div className="libro-stores-box" id="comprar-libro">
          <div className="libro-stores-header">
            <span className="libro-stores-tag">DISPONIBILIDAD INTERNACIONAL • FÍSICO Y DIGITAL</span>
            <h3>¿Dónde adquirir tu ejemplar de «Primero Ámate»?</h3>
            <p>
              Elegí tu plataforma o librería más cercana en Argentina, España y toda Latinoamérica:
            </p>
          </div>

          <div className="libro-stores-grid">
            {bookstores.map((store, idx) => (
              <a
                key={idx}
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`libro-store-card ${store.primary ? "libro-store-primary" : ""}`}
              >
                <div className="store-card-top">
                  <span className="store-country">{store.country}</span>
                  {store.primary && <span className="store-badge-destacado">Destacado</span>}
                </div>
                <h4 className="store-name">{store.name}</h4>
                <p className="store-format">{store.format}</p>
                <span className="store-cta">
                  {store.cta} →
                </span>
              </a>
            ))}
          </div>

          {/* Opción de contacto directo para ejemplar dedicado */}
          <div className="libro-whatsapp-bar">
            <p>
              ✨ ¿Querés consultar por un <strong>ejemplar impreso dedicado por Romina</strong> o envíos directos?
            </p>
            <a
              href="https://wa.me/543794322272?text=Hola%20Romi!%20Quiero%20adquirir%20tu%20libro%20Primero%20%C3%81mate"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-story"
            >
              <span>Pedir por WhatsApp Directo</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
