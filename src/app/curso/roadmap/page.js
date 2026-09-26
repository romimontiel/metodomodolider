import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./roadmap.css";

export const metadata = {
  title: "Road Map del Curso | Emprender de Cero a Impacto y Ventas — Método MODO LÍDER",
  description: "Recorrido integral del programa: 5 bloques, 17 clases, 7 pilares de construcción. Desde el autoliderazgo hasta la maestría en ventas.",
};

export default function RoadmapPage() {
  return (
    <>
      <Navbar />

      {/* ═══════════════════════════════════════════════
          HERO — CABECERA DEL PROGRAMA
      ═══════════════════════════════════════════════ */}
      <section className="roadmap-hero" id="roadmap-top">
        <div className="roadmap-hero-container">

          {/* Bloque Autor Superior (Fiel al diseño Modo Líder) */}
          <div className="roadmap-author-block roadmap-animate">
            <img
              src="/romina_historia.png"
              alt="Lic. Romina Lorena Montiel"
              className="roadmap-author-photo"
            />
            <div className="roadmap-author-info">
              <div className="roadmap-author-initials">RM</div>
              <div className="roadmap-author-name">Lic. Romina Lorena Montiel</div>
              <div className="roadmap-author-role">Mentora de Mentes y Negocios</div>
            </div>
          </div>

          {/* Badge Pill Centrada */}
          <div className="roadmap-badge-pill-wrap roadmap-animate roadmap-delay-1">
            <span className="roadmap-badge-pill">Método Modo Líder</span>
          </div>

          {/* Título Principal */}
          <h1 className="roadmap-hero-title roadmap-animate roadmap-delay-1">
            Emprender desde Cero a<br /><em>Impacto y Ventas</em>
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECCIÓN 0 — BIENVENIDA & HOJA DE RUTA DE 3 PASOS
      ═══════════════════════════════════════════════ */}
      <section className="roadmap-section" style={{ background: "#07090E", padding: "3rem 1.5rem 2rem" }}>
        <div className="roadmap-container" style={{ display: "flex", flexDirection: "column", gap: "2.2rem", maxWidth: "980px" }}>

          {/* 1. BIENVENIDA DE ROMINA */}
          <div style={{ background: "linear-gradient(135deg, rgba(20, 26, 38, 0.98) 0%, rgba(13, 17, 26, 0.98) 100%)", border: "1.5px solid #D4AF37", boxShadow: "0 15px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(212, 175, 55, 0.15)", padding: "2.2rem", borderRadius: "16px", color: "#FFFFFF" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
              <img src="/romina-transparente.png" alt="Romina Montiel" style={{ width: "65px", height: "65px", borderRadius: "50%", objectFit: "cover", border: "2px solid #D4AF37" }} />
              <div>
                <h4 style={{ margin: 0, fontSize: "1.15rem", fontWeight: "800", color: "#FCE08B" }}>Lic. Romina Lorena Montiel</h4>
                <p style={{ margin: "0.2rem 0 0", fontSize: "0.85rem", color: "#94A3B8" }}>Tu Mentora en Método Modo Líder</p>
              </div>
            </div>
            <div style={{ fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.3rem" }}>
              <p style={{ fontSize: "1.15rem", fontWeight: "800", color: "#FFFFFF", marginBottom: "0.5rem" }}>¡Bienvenida a tu espacio sagrado de transformación!</p>
              <p style={{ color: "#CBD5E1", margin: 0 }}>Aquí tienes todas tus grabaciones en video en alta calidad listas para reproducir, tus podcasts de audio y los cuadernos de trabajo descargables.</p>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.6rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <li style={{ fontSize: "0.9rem", color: "#E2E8F0" }}><span style={{ color: "#34D399", fontWeight: "bold", marginRight: "0.5rem" }}>✓</span> Presiona Play en el video para comenzar tu formación.</li>
              <li style={{ fontSize: "0.9rem", color: "#E2E8F0" }}><span style={{ color: "#34D399", fontWeight: "bold", marginRight: "0.5rem" }}>✓</span> Disfruta de la bienvenida oficial de Romina.</li>
              <li style={{ fontSize: "0.9rem", color: "#E2E8F0" }}><span style={{ color: "#34D399", fontWeight: "bold", marginRight: "0.5rem" }}>✓</span> Navega carpeta por carpeta para ver cada clase y material.</li>
            </ul>
            <a href="/campus#carpetas" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "linear-gradient(135deg, #FFD700 0%, #D4AF37 100%)", color: "#000000", fontWeight: "900", padding: "0.85rem 1.8rem", borderRadius: "50px", textDecoration: "none", fontSize: "0.92rem", boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)" }}>
              📂 Ir a las Carpetas de Estudio ↓
            </a>
          </div>

          {/* 2. TU HOJA DE RUTA DE 3 PASOS PARA EMPEZAR */}
          <div style={{ background: "#FFFFFF", borderRadius: "16px", padding: "2.2rem", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)", border: "1px solid rgba(212, 175, 55, 0.3)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "1.6rem" }}>🗺️</span>
              <h2 style={{ fontSize: "1.45rem", fontWeight: "900", color: "#0E121B", margin: 0 }}>Tu Hoja de Ruta de 3 Pasos para Empezar</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              <div style={{ background: "#F8FAFC", padding: "1.5rem", borderRadius: "12px", border: "1px solid #E2E8F0" }}>
                <div style={{ fontSize: "1.8rem", fontWeight: "900", color: "#D4AF37", marginBottom: "0.5rem" }}>01</div>
                <div style={{ fontSize: "1.05rem", fontWeight: "800", color: "#0E121B", marginBottom: "0.5rem" }}>Mirá tu clase y completá el Workbook</div>
                <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: "1.5", margin: 0 }}>
                  Mirá la clase correspondiente y desarrollá el Workbook a tu manera y a tu propio ritmo, aplicando cada ejercicio a tu emprendimiento.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", padding: "1.5rem", borderRadius: "12px", border: "1px solid #E2E8F0" }}>
                <div style={{ fontSize: "1.8rem", fontWeight: "900", color: "#D4AF37", marginBottom: "0.5rem" }}>02</div>
                <div style={{ fontSize: "1.05rem", fontWeight: "800", color: "#0E121B", marginBottom: "0.5rem" }}>Coaching Grupal en Vivo</div>
                <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: "1.5", margin: 0 }}>
                  Vení a las clases en vivo: <strong>lunes, martes y miércoles de 19:00 a 20:00 hs</strong>. Un espacio para destrabar desafíos, profundizar y entrenar mentalidad juntas.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", padding: "1.5rem", borderRadius: "12px", border: "1px solid #E2E8F0" }}>
                <div style={{ fontSize: "1.8rem", fontWeight: "900", color: "#D4AF37", marginBottom: "0.5rem" }}>03</div>
                <div style={{ fontSize: "1.05rem", fontWeight: "800", color: "#0E121B", marginBottom: "0.5rem" }}>Inspirate y Potenciate</div>
                <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: "1.5", margin: 0 }}>
                  Inspirate con los testimonios y el contenido que se genera dentro del movimiento grupal durante los vivos y en la comunidad de Emprendedoras Conscientes.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECCIÓN 1 — EL MÉTODO: LOS 7 PILARES
      ═══════════════════════════════════════════════ */}
      <section className="roadmap-section roadmap-section-cream" id="pilares">
        <div className="roadmap-container">

          <div className="roadmap-section-header">
            <span className="roadmap-section-tag roadmap-section-tag-brown">El Método</span>
            <h2 className="roadmap-section-title roadmap-section-title-dark">
              Road Map para pensar tu proceso
            </h2>
            <p className="roadmap-section-desc roadmap-section-desc-dark" style={{ fontSize: "1.15rem", fontWeight: "600", color: "#5A4434" }}>
              Los 7 Pilares de Construcción
            </p>
          </div>

          <div className="roadmap-pilares-grid">
            {/* Pilar 1 */}
            <div className="roadmap-pilar-card roadmap-animate roadmap-delay-1" style={{ backgroundColor: '#ffffff' }}>
              <span className="roadmap-pilar-number">01</span>
              <span className="roadmap-pilar-emoji">❤️</span>
              <h3 className="roadmap-pilar-title">Propósito</h3>
              <p className="roadmap-pilar-desc">Sé para qué hago lo que hago.</p>
            </div>

            {/* Pilar 2 */}
            <div className="roadmap-pilar-card roadmap-animate roadmap-delay-2" style={{ backgroundColor: '#ffffff' }}>
              <span className="roadmap-pilar-number">02</span>
              <span className="roadmap-pilar-emoji">🧭</span>
              <h3 className="roadmap-pilar-title">Dirección</h3>
              <p className="roadmap-pilar-desc">Sé hacia dónde voy y qué quiero construir.</p>
            </div>

            {/* Pilar 3 */}
            <div className="roadmap-pilar-card roadmap-animate roadmap-delay-3" style={{ backgroundColor: '#ffffff' }}>
              <span className="roadmap-pilar-number">03</span>
              <span className="roadmap-pilar-emoji">🧠</span>
              <h3 className="roadmap-pilar-title">Mente</h3>
              <p className="roadmap-pilar-desc">Transformo mi manera de pensar para lograr lo que deseo para mí y para mi negocio.</p>
            </div>

            {/* Pilar 4 */}
            <div className="roadmap-pilar-card roadmap-animate roadmap-delay-4" style={{ backgroundColor: '#ffffff' }}>
              <span className="roadmap-pilar-number">04</span>
              <span className="roadmap-pilar-emoji">💡</span>
              <h3 className="roadmap-pilar-title">Claridad</h3>
              <p className="roadmap-pilar-desc">Entiendo lo que doy y quiénes son mis clientes, y desde este lugar de claridad acciono hacia donde quiero ir.</p>
            </div>

            {/* Pilar 5: Propuestas de Valor y Ventas */}
            <div className="roadmap-pilar-card roadmap-animate roadmap-delay-5" style={{ backgroundColor: '#ffffff' }}>
              <span className="roadmap-pilar-number">05</span>
              <span className="roadmap-pilar-emoji">💰</span>
              <h3 className="roadmap-pilar-title">Propuestas de Valor y Ventas</h3>
              <p className="roadmap-pilar-desc">Convierto el valor que aporto en propuestas que puedo vender, comunicándolas con claridad y sencillez.</p>
            </div>

            {/* Pilar 6: Estrategia */}
            <div className="roadmap-pilar-card roadmap-animate roadmap-delay-6" style={{ backgroundColor: '#ffffff' }}>
              <span className="roadmap-pilar-number">06</span>
              <span className="roadmap-pilar-emoji">🎯</span>
              <h3 className="roadmap-pilar-title">Estrategia</h3>
              <p className="roadmap-pilar-desc">Avanzo de manera equilibrada en los diferentes aspectos que mi negocio necesita: producto, procesos, calidad, comunicación, marca, ventas y finanzas sostenibles.</p>
            </div>

            {/* Pilar 7: Acción (Eje Transversal) */}
            <div className="roadmap-pilar-card roadmap-pilar-transversal roadmap-animate roadmap-delay-7" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #FAF6EE 100%)' }}>
              <span className="roadmap-pilar-number">07</span>
              <div className="roadmap-transversal-badge">
                <span>⚡ EJE TRANSVERSAL A TODO EL MÉTODO</span>
              </div>
              <div className="roadmap-transversal-content">
                <div className="roadmap-transversal-icon-wrap">
                  <span className="roadmap-pilar-emoji" style={{ marginBottom: 0 }}>⚡</span>
                  <h3 className="roadmap-transversal-title">Acción</h3>
                </div>
                <p className="roadmap-transversal-desc">
                  Hago que mis decisiones sucedan, dando pasos concretos y evaluando semana a semana su impacto y validez.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECCIÓN 2 — EL CORAZÓN DEL MÉTODO
      ═══════════════════════════════════════════════ */}
      <section className="roadmap-section roadmap-section-dark" id="corazon">
        <div className="roadmap-container">
          <div className="roadmap-corazon-box">
            <span className="roadmap-section-tag roadmap-section-tag-gold">El Corazón del Método</span>
            <h2 className="roadmap-corazon-title">
              <em>Mentalidad</em> + Liderazgo Interno + Inteligencia de Negocios
            </h2>
            <p className="roadmap-corazon-text">
              Una emprendedora puede tener propósito, dirección, estrategia y hasta ventas, pero si no aprende a <strong>liderarse</strong>, puede volver a caer en la postergación, la dispersión, el perfeccionismo, la dependencia de la desmotivación y procrastinación o la acción sin dirección.
            </p>
            <p className="roadmap-corazon-text">
              La <strong>inteligencia de negocio</strong> te pone en trayectoria: genera dirección, estrategias correctas, te ayuda a tomar decisiones y a entender la acción. Pero la <strong>mentalidad</strong> y el <strong>autoliderazgo interno</strong> te dan la fuerza mental para accionar, tener la mentalidad necesaria para tomar buenas decisiones y superar las limitaciones mentales para poder lograrlo.
            </p>

            <div className="roadmap-corazon-highlight">
              <div className="roadmap-corazon-highlight-label">Esto es Modo Líder</div>
              <p>
                <strong>Método Modo Líder</strong> te propone un autoliderazgo a partir de un cambio concreto de mentalidad, a partir de un paso a paso que además te conduce hacia ese lugar al que deseás llegar: en este caso concreto, saber generar un movimiento que produzca impacto real que me lleve a vender o a vender más.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECCIÓN 3 — EL PROGRAMA: CLASE A CLASE
      ═══════════════════════════════════════════════ */}
      <section className="roadmap-section roadmap-section-white" id="programa">
        <div className="roadmap-container">

          <div className="roadmap-section-header">
            <span className="roadmap-section-tag roadmap-section-tag-brown">El Programa</span>
            <h2 className="roadmap-section-title roadmap-section-title-dark">
              Clase a Clase: La Mentalidad a Lograr
            </h2>
            <p className="roadmap-section-desc roadmap-section-desc-dark">
              17 clases organizadas en 5 bloques clave. Cada encuentro incluye la mentalidad que vas a desarrollar y el paso concreto para avanzar.
            </p>
          </div>

          <div className="roadmap-bloques-wrapper">

            {/* ═══ BLOQUE 1 — ME LIDERO ═══ */}
            <div className="roadmap-bloque">
              <div className="roadmap-bloque-header">
                <span className="roadmap-bloque-emoji">🌱</span>
                <div style={{ flex: 1 }}>
                  <div className="roadmap-bloque-number">Bloque 1</div>
                  <h3 className="roadmap-bloque-name">Me Lidero</h3>
                  <p className="roadmap-bloque-desc">
                    Entender hacia dónde deseo llegar con mi negocio y qué deseo alcanzar este año: <strong>¿Para qué hago este curso? ¿Qué deseo aprender por sobre todo?</strong>
                  </p>
                </div>
              </div>

              <div className="roadmap-clases-list">
                <div className="roadmap-clase-item">
                  <div className="roadmap-clase-number-badge">01</div>
                  <div className="roadmap-clase-content">
                    <h4 className="roadmap-clase-title">¿Qué es ser una emprendedora consciente?</h4>
                    <div className="roadmap-clase-mentalidad">
                      <span className="roadmap-clase-mentalidad-icon">🧠</span>
                      <p className="roadmap-clase-mentalidad-text">
                        &ldquo;Dejo de esperar que mi negocio me transforme y empiezo a transformarme para liderarlo. Mientras construyo mi negocio, preparo y transformo mi mente para convertirme en una emprendedora con mentalidad de empresaria.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="roadmap-clase-item">
                  <div className="roadmap-clase-number-badge">02</div>
                  <div className="roadmap-clase-content">
                    <h4 className="roadmap-clase-title">Mi negocio con propósito</h4>
                    <div className="roadmap-clase-mentalidad">
                      <span className="roadmap-clase-mentalidad-icon">🧠</span>
                      <p className="roadmap-clase-mentalidad-text">
                        &ldquo;Mi propósito no es solo lo que quiero hacer; es el valor que decido aportar.&rdquo;
                      </p>
                    </div>
                    <div style={{
                      marginTop: '0.75rem',
                      padding: '0.85rem 1rem',
                      background: 'linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(243,235,221,0.6) 100%)',
                      borderLeft: '3px solid #B47C13',
                      borderRadius: '0 10px 10px 0',
                    }}>
                      <p style={{ fontWeight: 800, fontSize: '0.82rem', color: '#B47C13', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>
                        🎯 Enfoque de Valor: Las 3 preguntas que definen tu propósito real
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        <li style={{ fontSize: '0.86rem', color: '#4A3B32', fontWeight: 600, display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                          <span style={{ color: '#D4AF37', fontWeight: 800, flexShrink: 0 }}>①</span>
                          <span><strong>¿Qué compra mi cliente cuando compra?</strong> — No compra el producto: compra la transformación, el resultado o la experiencia que le genera.</span>
                        </li>
                        <li style={{ fontSize: '0.86rem', color: '#4A3B32', fontWeight: 600, display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                          <span style={{ color: '#D4AF37', fontWeight: 800, flexShrink: 0 }}>②</span>
                          <span><strong>¿Qué necesidades concretas resuelvo?</strong> — Identificá el problema real, la carencia o el deseo que tu cliente quiere resolver con lo que vos dás.</span>
                        </li>
                        <li style={{ fontSize: '0.86rem', color: '#4A3B32', fontWeight: 600, display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                          <span style={{ color: '#D4AF37', fontWeight: 800, flexShrink: 0 }}>③</span>
                          <span><strong>¿Cuáles miedos o inseguridades ayudo a evitar o enfrentar?</strong> — Cada compra es también una decisión emocional: ¿de qué miedo o inseguridad libero a mi cliente con lo que doy?</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="roadmap-clase-item">
                  <div className="roadmap-clase-number-badge">03</div>
                  <div className="roadmap-clase-content">
                    <h4 className="roadmap-clase-title">Salir de las limitaciones mentales y la procrastinación y generar una mentalidad de autoliderazgo interno</h4>
                    <div className="roadmap-clase-mentalidad">
                      <span className="roadmap-clase-mentalidad-icon">🧠</span>
                      <p className="roadmap-clase-mentalidad-text">
                        &ldquo;No necesito sentirme preparada para actuar; necesito aprender a actuar aun cuando aparezca el miedo.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="roadmap-clase-item">
                  <div className="roadmap-clase-number-badge">04</div>
                  <div className="roadmap-clase-content">
                    <h4 className="roadmap-clase-title">Creencias limitantes: las historias que bloquean mi negocio</h4>
                    <div className="roadmap-clase-mentalidad">
                      <span className="roadmap-clase-mentalidad-icon">🧠</span>
                      <p className="roadmap-clase-mentalidad-text">
                        &ldquo;No todo lo que pienso sobre mí, el dinero o las ventas es verdad.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ═══ BLOQUE 2 — CONSTRUYO ═══ */}
            <div className="roadmap-bloque">
              <div className="roadmap-bloque-header">
                <span className="roadmap-bloque-emoji">🎯</span>
                <div>
                  <div className="roadmap-bloque-number">Bloque 2</div>
                  <h3 className="roadmap-bloque-name">Construyo</h3>
                </div>
              </div>

              <div className="roadmap-clases-list">
                <div className="roadmap-clase-item">
                  <div className="roadmap-clase-number-badge">05</div>
                  <div className="roadmap-clase-content">
                    <h4 className="roadmap-clase-title">De la idea al negocio: ¿qué problema estoy resolviendo?</h4>
                    <div className="roadmap-clase-mentalidad">
                      <span className="roadmap-clase-mentalidad-icon">🧠</span>
                      <p className="roadmap-clase-mentalidad-text">
                        &ldquo;No construyo un negocio alrededor de lo que quiero vender, sino del valor que puedo resolver.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="roadmap-clase-item">
                  <div className="roadmap-clase-number-badge">06</div>
                  <div className="roadmap-clase-content">
                    <h4 className="roadmap-clase-title">Mi cliente ideal: dejar de querer venderle a todo el mundo</h4>
                    <div className="roadmap-clase-mentalidad">
                      <span className="roadmap-clase-mentalidad-icon">🧠</span>
                      <p className="roadmap-clase-mentalidad-text">
                        &ldquo;Elegir a quién sirvo no limita mi negocio: lo hace más claro.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="roadmap-clase-item">
                  <div className="roadmap-clase-number-badge">07</div>
                  <div className="roadmap-clase-content">
                    <h4 className="roadmap-clase-title">Propuesta de valor: ¿por qué deberían elegirme?</h4>
                    <div className="roadmap-clase-mentalidad">
                      <span className="roadmap-clase-mentalidad-icon">🧠</span>
                      <p className="roadmap-clase-mentalidad-text">
                        &ldquo;No necesito convencer; necesito comunicar claramente el valor que aporto.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="roadmap-clase-item">
                  <div className="roadmap-clase-number-badge">08</div>
                  <div className="roadmap-clase-content">
                    <h4 className="roadmap-clase-title">Mi oferta: qué vendo realmente y cómo la construyo</h4>
                    <div className="roadmap-clase-mentalidad">
                      <span className="roadmap-clase-mentalidad-icon">🧠</span>
                      <p className="roadmap-clase-mentalidad-text">
                        &ldquo;Una oferta clara facilita que el cliente comprenda y decida.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="roadmap-clase-item">
                  <div className="roadmap-clase-number-badge">09</div>
                  <div className="roadmap-clase-content">
                    <h4 className="roadmap-clase-title">Modelo de negocio: transformar una idea en ingresos</h4>
                    <div className="roadmap-clase-mentalidad">
                      <span className="roadmap-clase-mentalidad-icon">🧠</span>
                      <p className="roadmap-clase-mentalidad-text">
                        &ldquo;Tener propósito y generar dinero pueden —y deben— convivir.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ═══ BLOQUE 3 — ME HAGO VISIBLE ═══ */}
            <div className="roadmap-bloque">
              <div className="roadmap-bloque-header">
                <span className="roadmap-bloque-emoji">📣</span>
                <div>
                  <div className="roadmap-bloque-number">Bloque 3</div>
                  <h3 className="roadmap-bloque-name">Me Hago Visible</h3>
                </div>
              </div>

              <div className="roadmap-clases-list">
                <div className="roadmap-clase-item">
                  <div className="roadmap-clase-number-badge">10</div>
                  <div className="roadmap-clase-content">
                    <h4 className="roadmap-clase-title">Marca y posicionamiento: cómo quiero ser reconocida</h4>
                    <div className="roadmap-clase-mentalidad">
                      <span className="roadmap-clase-mentalidad-icon">🧠</span>
                      <p className="roadmap-clase-mentalidad-text">
                        &ldquo;No necesito parecerme a otros; necesito ser reconocible por lo que hago diferente.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="roadmap-clase-item">
                  <div className="roadmap-clase-number-badge">11</div>
                  <div className="roadmap-clase-content">
                    <h4 className="roadmap-clase-title">Comunicar para conectar: el mensaje de mi negocio</h4>
                    <div className="roadmap-clase-mentalidad">
                      <span className="roadmap-clase-mentalidad-icon">🧠</span>
                      <p className="roadmap-clase-mentalidad-text">
                        &ldquo;Comunicar no es hablar de mí: es ayudar a mi cliente a comprender por qué puedo ayudarlo.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="roadmap-clase-item">
                  <div className="roadmap-clase-number-badge">12</div>
                  <div className="roadmap-clase-content">
                    <h4 className="roadmap-clase-title">Contenido que atrae: dejar de publicar por publicar</h4>
                    <div className="roadmap-clase-mentalidad">
                      <span className="roadmap-clase-mentalidad-icon">🧠</span>
                      <p className="roadmap-clase-mentalidad-text">
                        &ldquo;No creo contenido para estar presente; creo contenido para generar conexión, confianza y acción.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ═══ BLOQUE 4 — DINERO Y VENTAS ═══ */}
            <div className="roadmap-bloque">
              <div className="roadmap-bloque-header">
                <span className="roadmap-bloque-emoji">💰</span>
                <div>
                  <div className="roadmap-bloque-number">Bloque 4</div>
                  <h3 className="roadmap-bloque-name">Dinero y Ventas</h3>
                </div>
              </div>

              <div className="roadmap-clases-list">
                <div className="roadmap-clase-item">
                  <div className="roadmap-clase-number-badge">13</div>
                  <div className="roadmap-clase-content">
                    <h4 className="roadmap-clase-title">Dinero, precios y rentabilidad: hacer sostenible mi negocio</h4>
                    <div className="roadmap-clase-mentalidad">
                      <span className="roadmap-clase-mentalidad-icon">🧠</span>
                      <p className="roadmap-clase-mentalidad-text">
                        &ldquo;El dinero no contradice mi propósito: permite que mi proyecto exista y crezca.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="roadmap-clase-item">
                  <div className="roadmap-clase-number-badge">14</div>
                  <div className="roadmap-clase-content">
                    <h4 className="roadmap-clase-title">Mentalidad de ventas: vender sin miedo ni culpa</h4>
                    <div className="roadmap-clase-mentalidad">
                      <span className="roadmap-clase-mentalidad-icon">🧠</span>
                      <p className="roadmap-clase-mentalidad-text">
                        &ldquo;Vender no es molestar; es ofrecer una solución a quien la necesita.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="roadmap-clase-item">
                  <div className="roadmap-clase-number-badge">15</div>
                  <div className="roadmap-clase-content">
                    <h4 className="roadmap-clase-title">Vender conectando: conversación, objeciones y cierre</h4>
                    <div className="roadmap-clase-mentalidad">
                      <span className="roadmap-clase-mentalidad-icon">🧠</span>
                      <p className="roadmap-clase-mentalidad-text">
                        &ldquo;No tengo que perseguir clientes; tengo que aprender a acompañarlos a decidir.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ═══ BLOQUE 5 — ME CONVIERTO EN MODO LÍDER ═══ */}
            <div className="roadmap-bloque">
              <div className="roadmap-bloque-header">
                <span className="roadmap-bloque-emoji">👑</span>
                <div>
                  <div className="roadmap-bloque-number">Bloque 5</div>
                  <h3 className="roadmap-bloque-name">Me Convierto en Modo Líder</h3>
                </div>
              </div>

              <div className="roadmap-clases-list">
                <div className="roadmap-clase-item">
                  <div className="roadmap-clase-number-badge">16</div>
                  <div className="roadmap-clase-content">
                    <h4 className="roadmap-clase-title">De emprendedora a empresaria: orden, procesos y Modo Líder</h4>
                    <div className="roadmap-clase-mentalidad">
                      <span className="roadmap-clase-mentalidad-icon">🧠</span>
                      <p className="roadmap-clase-mentalidad-text">
                        &ldquo;Mi negocio no puede depender permanentemente de mi esfuerzo: tengo que aprender a liderarlo.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="roadmap-clase-item">
                  <div className="roadmap-clase-number-badge">17</div>
                  <div className="roadmap-clase-content">
                    <h4 className="roadmap-clase-title">De cero a impacto y ventas: mi plan de acción</h4>
                    <div className="roadmap-clase-mentalidad">
                      <span className="roadmap-clase-mentalidad-icon">🧠</span>
                      <p className="roadmap-clase-mentalidad-text">
                        &ldquo;Dejo de acumular información y empiezo a convertir claridad en decisiones y decisiones en resultados.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA FINAL + FIRMA
      ═══════════════════════════════════════════════ */}
      <section className="roadmap-cta-section">
        <div className="roadmap-cta-box">
          <span className="roadmap-section-tag roadmap-section-tag-gold">Con vos en el proceso</span>
          <h2 className="roadmap-cta-title">Tu camino de Cero a Impacto y Ventas empieza acá</h2>
          <p className="roadmap-cta-desc">
            Este no es un curso más. Es un proceso de transformación diseñado para que dejes de moverte por inercia y comiences a liderar tu proyecto de forma estratégica.
          </p>
          <a href="https://wa.me/543794322272" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: "0.75rem 2rem", fontSize: "0.95rem" }}>
            <span>Quiero ser parte</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>

          <div className="roadmap-cta-signature">
            <span className="roadmap-cta-sig-name">Lic. Romina Lorena Montiel</span>
            <span className="roadmap-cta-sig-brand">Método MODO LÍDER</span>
            <span className="roadmap-cta-sig-rights">Todos los derechos reservados</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
