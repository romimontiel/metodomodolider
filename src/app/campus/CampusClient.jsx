'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import './campus.css';

export default function CampusClient() {
  const [activeFolder, setActiveFolder] = useState('intro');
  const [clase1Video, setClase1Video] = useState({
    src: 'https://www.youtube-nocookie.com/embed/6bYxRQYJqgo?rel=0&modestbranding=1',
    title: '1. Video Clase: ¿Qué es ser una Emprendedora Consciente?',
    poster: '/MINIATURA_PARA_VIDEO_PRINCIPAL.png',
    activeIndex: 0,
    isYouTube: true
  });

  const [clase2Video, setClase2Video] = useState({
    src: 'https://www.youtube-nocookie.com/embed/0ZYdjwNX3zo?rel=0&modestbranding=1',
    title: '1. Clase 2: Entender lo que es el Propósito (Video Oficial HD)',
    activeIndex: 0
  });

  const [clase3Video, setClase3Video] = useState({
    src: '/videos/CLASE%203%20Propuesta%20de%20Valor%20y%20Posicionamiento/CLASE%203%20PROPUESTA%20DE%20VALOR%20PARTE%201.mp4',
    title: '1. Clase 3: Propuesta de Valor (Parte 1 - 711 MB)',
    activeIndex: 0
  });

  const clase1VideoRef = useRef(null);
  const clase3VideoRef = useRef(null);

  const handleClase2Video = (src, title, index) => {
    setClase2Video({ src, title, activeIndex: index });
  };

  const switchFolder = (folderId) => {
    setActiveFolder(folderId);
    const elem = document.getElementById('carpetas');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClase1Video = (src, title, poster, index, isYouTube = false) => {
    setClase1Video({ src, title, poster, activeIndex: index, isYouTube });
    if (!isYouTube && clase1VideoRef.current) {
      clase1VideoRef.current.src = src;
      if (poster) {
        clase1VideoRef.current.poster = poster;
      }
      clase1VideoRef.current.play().catch((e) => console.log('Autoplay prevented:', e));
    }
  };

  const handleClase3Video = (src, title, index) => {
    setClase3Video({ src, title, activeIndex: index });
    if (clase3VideoRef.current) {
      clase3VideoRef.current.src = src;
      clase3VideoRef.current.play().catch((e) => console.log('Autoplay prevented:', e));
    }
  };

  return (
    <>
{/* TOP HEADER BAR: CAMPUS MODO LIDER */}
    <header className="campus-header">
        <div className="header-inner">
            <div className="brand-area">
                <a href="#inicio" className="campus-logo-badge">
                    <div className="logo-icon-box">👑</div>
                    <div className="logo-text-group">
                        <span className="campus-title">CAMPUS MODO LIDER</span>
                        <span className="campus-subtitle">Portal de Estudio Exclusivo de Alumnas</span>
                    </div>
                </a>
            </div>

            <div className="header-meta">
                <div className="student-pill">
                    <div className="status-dot"></div>
                    <span>Alumna Activa • Cohorte 2026</span>
                </div>
                <a href="https://wa.me/5491130190250?text=Hola%20Romina,%20soy%20alumna%20del%20Campus%20Modo%20Líder%20y%20tengo%20una%20consulta" target="_blank" rel="noopener noreferrer" className="btn-whatsapp-support">
                    <span>💬 WhatsApp con Romina</span>
                </a>
            </div>
        </div>
    </header>

    <main className="container" id="inicio">

        {/* COURSE TITLE HERO BANNER */}
        <section className="course-hero-banner">
            <div className="course-hero-left">
                <div className="course-hero-text">
                    <div style={{ "display": "inline-flex", "alignItems": "center", "gap": "0.5rem", "background": "rgba(212, 175, 55, 0.15)", "border": "1px solid var(--border-gold)", "padding": "0.25rem 0.8rem", "borderRadius": "50px", "fontSize": "0.72rem", "fontWeight": "800", "color": "var(--gold-light)", "marginBottom": "0.8rem", "textTransform": "uppercase" }}>
                        ✨ Formación Oficial
                    </div>
                    <h1>CURSO: <span>EMPRENDER DE CERO A IMPACTO Y VENTAS</span></h1>
                    <div className="course-hero-author">
                        <img src="/romina-transparente.png" alt="Lic. Romina Lorena Montiel" className="mentor-avatar" />
                        <span>Dictado por <strong>Lic. Romina Lorena Montiel</strong> • Mentora de Líderes y Emprendedoras</span>
                    </div>
                </div>

                <div className="course-stats-badges">
                    <div className="stat-badge">
                        <span className="num">🎬 10+</span>
                        <span className="label">Videos Reales</span>
                    </div>
                    <div className="stat-badge">
                        <span className="num">🎙️ PODCASTS</span>
                        <span className="label">Desafíos Prácticos y +</span>
                    </div>
                    <div className="stat-badge">
                        <span className="num">PDF + DOCX</span>
                        <span className="label">Descargas</span>
                    </div>
                </div>
            </div>

            {/* BOTÓN REDONDO DE MIEMBROS ACTIVOS "BUY ME" A LA DERECHA */}
            <div className="course-hero-right">
                <a href="/miembros_activos.html" className="hero-buyme-round-btn" title="Ver Directorio de Miembros Activos y Comprar">
                    <div className="buyme-glow-ring"></div>
                    <div className="buyme-round-content">
                        <div className="buyme-subtitle">MIEMBROS ACTIVOS</div>
                        <div className="buyme-pill">COMPRAME ↗</div>
                    </div>
                </a>
            </div>
        </section>

        {/* ESPACIO PARA VER EL VIDEO DE BIENVENIDA */}
        <section className="welcome-section" id="bienvenida">
            <div className="section-header-row">
                <div className="section-title-group">
                    <span className="section-icon">🎬</span>
                    <h2 className="section-title">Espacio del Video de Bienvenida</h2>
                </div>
                <span className="section-badge">Paso 1 Obligatorio</span>
            </div>

            <div className="video-theatre-grid">
                {/* Video Screen con Video Real MP4 (Exclusivo en Campus) */}
                <div className="video-theatre-box">
                    <video 
                        id="welcomeVideoPlayer" 
                        className="video-player-real" 
                        controls 
                        controlsList="nodownload" 
                        onContextMenu={(e) => e.preventDefault()} 
                        preload="metadata" 
                        poster="/miniatura_bienvenida.png?v=2">
                        <source src="/videos_campus/bienvenida_modo_lider.mp4" type="video/mp4" />
                        Tu navegador no soporta reproducción directa de video HTML5.
                    </video>

                    {/* Barra del Video de Bienvenida Oficial */}
                    <div className="video-playlist-bar" style={{ "justifyContent": "space-between" }}>
                        <div style={{ "display": "flex", "alignItems": "center", "gap": "0.6rem" }}>
                            <span className="playlist-label" style={{ "marginRight": "0" }}>Video de Entrada:</span>
                            <span style={{ "fontSize": "0.82rem", "fontWeight": "700", "color": "var(--gold-light)" }}>▶ 1. Bienvenida al Curso</span>
                        </div>
                        <span style={{ "fontSize": "0.75rem", "color": "var(--text-muted)" }}>Video Oficial • Romina Lorena Montiel</span>
                    </div>
                </div>

                {/* Info Card */}
                <div className="welcome-info-card">
                    <div>
                        <div className="mentor-quote-box">
                            <img src="/romina-transparente.png" alt="Romina Montiel" className="mentor-photo-circle" />
                            <div className="mentor-name-title">
                                <h4>Lic. Romina Lorena Montiel</h4>
                                <p>Tu Mentora en Método Modo Líder</p>
                            </div>
                        </div>
                        <div className="welcome-message-body">
                            <p><strong>¡Bienvenida a tu espacio sagrado de transformación!</strong></p>
                            <p>Aquí tienes todas tus grabaciones en video en alta calidad listas para reproducir, tus podcasts de audio y los cuadernos de trabajo descargables.</p>
                        </div>
                        <ul className="welcome-checklist">
                            <li><span className="check-icon">✓</span> Presiona Play en el video para comenzar tu formación.</li>
                            <li><span className="check-icon">✓</span> Disfruta de la bienvenida oficial de Romina.</li>
                            <li><span className="check-icon">✓</span> Navega carpeta por carpeta para ver cada clase y material.</li>
                        </ul>
                    </div>
                    <a href="#carpetas" className="btn-start-now">
                        📂 Ir a las Carpetas de Estudio ↓
                    </a>
                </div>
            </div>
        </section>

        {/* ================================================================= */}
        {/* SECTOR: BIENVENIDA AL MÉTODO MODO LÍDER & COMUNIDAD DE EMPRENDEDORAS */}
        {/* ================================================================= */}
        <section className="welcome-manifesto-section" id="bienvenida-introduccion">

            {/* 1. HEADER HERO: BIENVENIDA AL MÉTODO MODO LÍDER */}
            <div className="manifesto-header-box">
                <span className="manifesto-tag">✨ MÓDULO 00 • INTRODUCCIÓN</span>
                <h2 className="manifesto-title">Bienvenida al Método MODO LÍDER</h2>
                <p className="manifesto-subtitle">
                    Mensaje oficial y guía de primeros pasos para transformar tu negocio desde el autoliderazgo consciente.
                </p>
            </div>

            {/* 2. CARD: BIENVENIDA & FIRMA OFICIAL */}
            <div className="manifesto-card">
                <p>
                    ¡Qué emoción darte la bienvenida a este espacio! Si estás aquí es porque tomaste una decisión que pocas personas se animan a tomar: <strong>asumir el liderazgo total de tu vida y de tu emprendimiento.</strong>
                </p>
                <p>
                    No viniste a coleccionar teoría. Viniste a construir un negocio con alma que te dé libertad financiera y paz mental. En este camino vamos a derrumbar mitos: no vamos a romantizar el emprender, pero tampoco vamos a resignar tu bienestar.
                </p>
                <div className="manifesto-highlight-quote">
                    "Liderar tu negocio empieza por aprender a liderarte a ti misma."
                </div>

                {/* FIRMA OFICIAL: LIC. ROMINA LORENA MONTIEL */}
                <div className="manifesto-signature-block">
                    <img src="/romina-transparente.png" alt="Lic. Romina Lorena Montiel" className="manifesto-sig-avatar" />
                    <div>
                        <div className="manifesto-sig-name">Lic. Romina Lorena Montiel</div>
                        <div className="manifesto-sig-title">Licenciada en Administración • Neuropsicoeducadora • Mentora</div>
                    </div>
                </div>
            </div>

            {/* 3. CARD: HOJA DE RUTA DE 3 PASOS PARA EMPEZAR (El Proceso de Transformación) */}
            <div className="manifesto-card">
                <h2>🗺️ Tu Hoja de Ruta de 3 Pasos para Empezar</h2>
                <div className="roadmap-steps-grid">
                    <div className="roadmap-step-item">
                        <div className="roadmap-step-num">01</div>
                        <div className="roadmap-step-title">Mirá tu clase y completá el Workbook</div>
                        <p className="roadmap-step-desc">
                            Mirá la clase correspondiente y desarrollá el Workbook a tu manera y a tu propio ritmo, aplicando cada ejercicio a tu emprendimiento.
                        </p>
                    </div>
                    <div className="roadmap-step-item">
                        <div className="roadmap-step-num">02</div>
                        <div className="roadmap-step-title">Coaching Grupal en Vivo</div>
                        <p className="roadmap-step-desc">
                            Vení a las clases en vivo: <strong>lunes, martes y miércoles de 19:00 a 20:00 hs</strong>. Un espacio para destrabar desafíos, profundizar y entrenar mentalidad juntas.
                        </p>
                    </div>
                    <div className="roadmap-step-item">
                        <div className="roadmap-step-num">03</div>
                        <div className="roadmap-step-title">Inspirate y Potenciate</div>
                        <p className="roadmap-step-desc">
                            Inspirate con los testimonios y el contenido que se genera dentro del movimiento grupal durante los vivos y en la comunidad de Emprendedoras Conscientes.
                        </p>
                    </div>
                </div>

                {/* BANNER DE ACCESO E INVITACIÓN A LA COMUNIDAD DE WHATSAPP */}
                <div className="whatsapp-community-invite-box">
                    <div className="invite-content-left">
                        <div className="invite-badge">
                            <span style={{ "fontSize": "1.1rem" }}>💬</span>
                            <span>GRUPO OFICIAL DE WHATSAPP</span>
                        </div>
                        <h3 className="invite-title">Comunidad de Emprendedoras Conscientes</h3>
                        <p className="invite-desc">
                            Este es nuestro vínculo directo de acompañamiento y movimiento grupal. <strong>¡Sumate y también invitá a otras emprendedoras</strong> a participar y nutrirse de nuestra comunidad!
                        </p>
                    </div>
                    <div className="invite-action-right">
                        <a href="https://chat.whatsapp.com/L4UDQmtCHazAV6Q3Skqjpg?s=sh&p=a&ilr=4" target="_blank" rel="noopener noreferrer" className="btn-whatsapp-community">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.976.58 1.964.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824z"/></svg>
                            <span>Unirme al Grupo de WhatsApp</span>
                        </a>
                        <span className="invite-hint">✨ Invitá a tus colegas y amigas emprendedoras</span>
                    </div>
                </div>
            </div>

            {/* 4. CARD: BIENVENIDA A LA COMUNIDAD DE EMPRENDEDORAS CONSCIENTES (Manifiesto con firma de Romina) */}
            <div className="community-letter-card">
                <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center", "flexWrap": "wrap", "gap": "1rem", "marginBottom": "1.2rem" }}>
                    <span className="community-tag-badge" style={{ "marginBottom": "0" }}>👑 COMUNIDAD EXCLUSIVA</span>
                    <a href="/miembros_activos.html" className="btn-members-round">
                        <span>👥 Ver Miembros Activos</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                    </a>
                </div>
                <h2 style={{ "fontSize": "1.65rem", "fontWeight": "900", "color": "#0E121B", "marginBottom": "1.3rem", "display": "flex", "alignItems": "center", "gap": "0.6rem" }}>
                    Bienvenida a la Comunidad de Emprendedoras Conscientes
                </h2>

                <div className="community-quote-lead">
                    &ldquo;Podemos ser emprendedoras. Pero mientras exploramos nuestros productos o servicios, también podemos entrenarnos en una mentalidad de empresaria.&rdquo;
                </div>

                <div className="community-quote-impact">
                    Y eso lo cambia todo.
                </div>

                <p style={{ "fontSize": "1.02rem", "color": "#2D3748", "lineHeight": "1.8", "marginBottom": "1.2rem" }}>
                    No es solo un cambio de vocabulario. Es un cambio profundo en cómo nos posicionamos frente a la vida, frente a nuestro negocio y frente a nosotras mismas. Nos sentimos diferentes — <strong style={{ "color": "#0A0D14" }}>porque empezamos a pensar diferente</strong>.
                </p>

                <p style={{ "fontSize": "1.02rem", "color": "#2D3748", "lineHeight": "1.8", "marginBottom": "1.2rem" }}>
                    Y esa mentalidad, sumada a los nuevos conocimientos que vamos incorporando en el camino, es lo que nos permite tomar mejores decisiones para nuestro emprendimiento. <strong style={{ "color": "#0A0D14" }}>No decisiones perfectas: decisiones conscientes.</strong>
                </p>

                <div style={{ "background": "#FDF9EE", "border": "1.5px solid #D4AF37", "borderRadius": "var(--radius-md)", "padding": "1.4rem 1.8rem", "margin": "1.8rem 0", "boxShadow": "0 4px 15px rgba(0,0,0,0.03)" }}>
                    <p style={{ "fontSize": "1.05rem", "fontWeight": "700", "color": "#402E05", "margin": "0", "lineHeight": "1.65" }}>
                        ⚡ Por eso este no es un contenido para <em>&ldquo;algún día, cuando seas empresaria&rdquo;</em>. Es para hoy, mientras todavía estás construyendo — porque la mentalidad se entrena antes de que el negocio esté &ldquo;listo&rdquo;, no después.
                    </p>
                </div>

                {/* Bloque de Firma Oficial Romina */}
                <div className="community-signature-block">
                    <div className="signature-author-wrap">
                        <img src="/romina-transparente.png" alt="Lic. Romina Lorena Montiel" className="signature-avatar" />
                        <div className="signature-details">
                            <h4>Lic. Romina Lorena Montiel</h4>
                            <p>Mentora de Mentes y Negocios • Creadora del Método MODO LÍDER</p>
                        </div>
                    </div>

                    <div className="signature-warm-phrase">
                        &ldquo;Te abrazo y te deseo una hermosa jornada y mucho éxito en este camino que hoy comenzamos a transitar juntas.&rdquo;
                    </div>
                </div>
            </div>

        </section>

        {/* SECTOR: CARPETAS DE ESTUDIO DEL CURSO */}
        <section className="folders-section" id="carpetas">
            <div className="folders-header">
                <h2>📁 Carpetas de Estudio del Curso</h2>
                <p>Haz click en cualquier carpeta para acceder directamente a sus videos, podcasts y archivos descargables.</p>
            </div>

            {/* FOLDER NAVIGATION TABS */}
            <div className="folder-nav-tabs">
                {/* Tab 0: INTRODUCCIÓN */}
                <div className={`folder-nav-tab ${activeFolder === "intro" ? "active" : ""}`} id="tab-intro" onClick={() => switchFolder("intro")} style={{ cursor: "pointer" }}>
                    <div className="tab-top-row">
                        <span className="tab-icon">📁</span>
                        <span className="tab-badge">Módulo 0</span>
                    </div>
                    <span className="tab-title">INTRODUCCIÓN</span>
                    <span className="tab-desc">Workflow & Metodología de Trabajo</span>
                </div>

                {/* Tab 1: CLASE 1 */}
                <div className={`folder-nav-tab ${activeFolder === "clase1" ? "active" : ""}`} id="tab-clase1" onClick={() => switchFolder("clase1")} style={{ cursor: "pointer" }}>
                    <div className="tab-top-row">
                        <span className="tab-icon">📁</span>
                        <span className="tab-badge">Clase 1</span>
                    </div>
                    <span className="tab-title">CLASE 1</span>
                    <span className="tab-desc">Emprender Conscientemente</span>
                </div>

                {/* Tab 2: CLASE 2 */}
                <div className={`folder-nav-tab ${activeFolder === "clase2" ? "active" : ""}`} id="tab-clase2" onClick={() => switchFolder("clase2")} style={{ cursor: "pointer" }}>
                    <div className="tab-top-row">
                        <span className="tab-icon">📁</span>
                        <span className="tab-badge">Clase 2</span>
                    </div>
                    <span className="tab-title">CLASE 2</span>
                    <span className="tab-desc">Propósito & Dirección</span>
                </div>

                {/* Tab 3: CLASE 3 */}
                <div className={`folder-nav-tab ${activeFolder === "clase3" ? "active" : ""}`} id="tab-clase3" onClick={() => switchFolder("clase3")} style={{ cursor: "pointer" }}>
                    <div className="tab-top-row">
                        <span className="tab-icon">📁</span>
                        <span className="tab-badge">Clase 3</span>
                    </div>
                    <span className="tab-title">CLASE 3</span>
                    <span className="tab-desc">Propuesta de Valor (Partes 1 y 2)</span>
                </div>

                {/* Tab 4: CLASE 4 */}
                <div className={`folder-nav-tab ${activeFolder === "clase4" ? "active" : ""}`} id="tab-clase4" onClick={() => switchFolder("clase4")} style={{ cursor: "pointer" }}>
                    <div className="tab-top-row">
                        <span className="tab-icon">📁</span>
                        <span className="tab-badge">Clase 4</span>
                    </div>
                    <span className="tab-title">CLASE 4</span>
                    <span className="tab-desc">Regresar a mí & Reconexión</span>
                </div>

                {/* Tab 5: TESTIMONIOS */}
                <div className={`folder-nav-tab ${activeFolder === "testimonios" ? "active" : ""}`} id="tab-testimonios" onClick={() => switchFolder("testimonios")} style={{ cursor: "pointer" }}>
                    <div className="tab-top-row">
                        <span className="tab-icon">📁</span>
                        <span className="tab-badge">Casos Reales</span>
                    </div>
                    <span className="tab-title">TESTIMONIOS</span>
                    <span className="tab-desc">Video Analía Soto & Casos</span>
                </div>

                {/* Tab ESPECIAL: ACCESO A CURSO COMPLETO */}
                <a href="/clases_visor.html" className="folder-nav-tab" id="tab-acceso-curso" style={{ textDecoration: "none", background: "#FFD700", border: "2px solid #E6B800", boxShadow: "0 8px 25px rgba(255, 215, 0, 0.4)", position: "relative", overflow: "hidden", transform: "scale(1.02)" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", background: "#000000" }}></div>
                    <div className="tab-top-row">
                        <span className="tab-icon" style={{ fontSize: "1.3rem" }}>🔐</span>
                        <span className="tab-badge" style={{ background: "#000000", color: "#FFD700", border: "1px solid #333333", fontWeight: 900, fontSize: "0.68rem" }}>CLAVE VIP</span>
                    </div>
                    <span className="tab-title" style={{ color: "#000000", fontSize: "0.88rem", fontWeight: 900, textTransform: "uppercase" }}>ACCESO A CURSO COMPLETO</span>
                    <span className="tab-desc" style={{ color: "#111111", fontWeight: 700, fontSize: "0.74rem" }}>Visor Carpeta a Carpeta ↗</span>
                </a>

                {/* Tab ESPECIAL 2: COACHING GRUPAL */}
                <a href="/clases_visor.html#coaching" className="folder-nav-tab" id="tab-coaching-grupal" style={{ textDecoration: "none", background: "linear-gradient(145deg, #181224 0%, #100C18 100%)", border: "1.5px solid rgba(212, 175, 55, 0.6)", boxShadow: "0 8px 24px rgba(212, 175, 55, 0.15)", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "3px", background: "linear-gradient(90deg, #FCE08B, #D4AF37)" }}></div>
                    <div className="tab-top-row">
                        <span className="tab-icon">👑</span>
                        <span className="tab-badge" style={{ background: "rgba(212, 175, 55, 0.15)", color: "#F7E7CE", border: "1px solid rgba(212, 175, 55, 0.4)" }}>🔐 VIP</span>
                    </div>
                    <span className="tab-title" style={{ color: "#F7E7CE", fontSize: "0.84rem" }}>COACHING GRUPAL</span>
                    <span className="tab-desc" style={{ color: "rgba(247, 231, 206, 0.7)" }}>Martes y Miércoles ↗</span>
                </a>

                {/* Tab ESPECIAL 3: MÚSICA PARA CREAR NUEVAS REDES POSITIVAS */}
                <a href="/clases_visor.html#musica" className="folder-nav-tab" id="tab-musica-positiva" style={{ textDecoration: "none", background: "linear-gradient(145deg, #17112E 0%, #0F0D1C 100%)", border: "1.5px solid rgba(167, 139, 250, 0.6)", boxShadow: "0 8px 24px rgba(124, 58, 237, 0.18)", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "3px", background: "linear-gradient(90deg, #C4B5FD, #8B5CF6)" }}></div>
                    <div className="tab-top-row">
                        <span className="tab-icon">🎵</span>
                        <span className="tab-badge" style={{ background: "rgba(167, 139, 250, 0.18)", color: "#DDD6FE", border: "1px solid rgba(167, 139, 250, 0.45)" }}>7 AUDIOS</span>
                    </div>
                    <span className="tab-title" style={{ color: "#DDD6FE", fontSize: "0.84rem" }}>REDES POSITIVAS</span>
                    <span className="tab-desc" style={{ color: "rgba(221, 214, 254, 0.7)" }}>Música & Meditación ↗</span>
                </a>
            </div>

            {/* FOLDER CONTENT PANELS */}
            <div className="folder-view-container">

                {/* PANEL 0: INTRODUCCIÓN */}
                <div className="folder-panel" id="panel-intro" style={{ display: activeFolder === "intro" ? "block" : "none" }}>
                    <div className="folder-active-banner">
                        <div className="active-folder-header">
                            <span className="big-icon">📂</span>
                            <div>
                                <h3>CARPETA: INTRODUCCIÓN Y METODOLOGÍA</h3>
                                <p>Fundamentos del Método Modo Líder, Foco, Dirección y Metodología 30/30.</p>
                            </div>
                        </div>
                        <div className="folder-materials-count">
                            <span className="material-chip chip-video">🎬 1 Video Masterclass</span>
                            <span className="material-chip chip-audio">🎙️ 1 Audio Podcast</span>
                            <span className="material-chip chip-docs">📄 1 Documento</span>
                        </div>
                    </div>

                    <div className="folder-pillars-grid">
                        {/* 1. Video Player Real + Explicación del Método al Costado */}
                        <div className="pillar-card">
                            <div className="pillar-header">
                                <div className="pillar-title">
                                    <span>🎬</span>
                                    <span id="title-video-intro">1. Video: Workflow y Propósito del Curso & Metodología de Trabajo</span>
                                </div>
                                <span className="pillar-badge">Video Real MP4 & Método</span>
                            </div>

                            <div className="intro-video-methodology-grid">
                                {/* Columna Izquierda: Video Player Real */}
                                <div>
                                    <div className="folder-video-screen">
                                        <video 
                                            id="videoElement-intro" 
                                            controls 
                                            controlsList="nodownload" 
                                            onContextMenu={(e) => e.preventDefault()} 
                                            preload="metadata" 
                                            poster="/miniatura_workflow.png?v=2">
                                            <source src="/videos_campus/workflow_proposito_curso.mp4" type="video/mp4" />
                                            Tu navegador no soporta reproducción directa de video HTML5.
                                        </video>
                                    </div>
                                    <div className="video-playlist-bar" style={{ "justifyContent": "space-between" }}>
                                        <div style={{ "display": "flex", "alignItems": "center", "gap": "0.6rem" }}>
                                            <span className="playlist-label" style={{ "marginRight": "0" }}>Video de Introducción:</span>
                                            <span style={{ "fontSize": "0.82rem", "fontWeight": "700", "color": "var(--gold-light)" }}>▶ Workflow y Propósito del Curso (275 MB)</span>
                                        </div>
                                    </div>
                                    <div className="video-description-box" id="desc-video-intro" style={{ "marginTop": "0.8rem" }}>
                                        💡 <strong>Enfoque:</strong> Romina te enseña el mapa de trabajo (Workflow), el propósito de tu proyecto y cómo el liderazgo consciente redefine tu forma de vender.
                                    </div>

                                    {/* Material Oficial Adjunto: Arquitectura de Marca Modo Líder */}
                                    <div className="download-card" style={{ "marginTop": "1.2rem", "background": "#FFFFFF", "border": "1.5px solid rgba(212, 175, 55, 0.45)", "boxShadow": "0 8px 25px rgba(0, 0, 0, 0.08)" }}>
                                        <div className="doc-icon-header">
                                            <div className="doc-format-badge badge-pdf">PDF</div>
                                            <div className="doc-meta">
                                                <h5>Arquitectura de Marca Modo Líder</h5>
                                                <span>PDF Oficial • Lectura Online</span>
                                            </div>
                                        </div>
                                        <p className="doc-desc">Estructura visual, pilares de marca y ADN de la propuesta formativa.</p>
                                        <div className="doc-action-btns">
                                            <a href="/Modo-Lider-Arquitectura-de-Marca.pdf#toolbar=0" target="_blank" className="btn-download-primary" style={{ "justifyContent": "center", "width": "100%" }}>
                                                <span>👁️ Ver Online</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Columna Derecha: Explicación Escrita del Método del Curso (Al costado) */}
                                <div className="methodology-side-card">
                                    <div>
                                        <div className="methodology-badge">
                                            <span>⚡ METODOLOGÍA DEL CURSO</span>
                                        </div>
                                        <h4 className="methodology-title">¿Cómo trabajamos en este programa?</h4>
                                        <p className="methodology-intro">
                                            Un curso adaptado para <strong>impulsar y acompañar el desarrollo de un negocio que se inicia</strong> o la <strong>transformación por adecuación al mercado de uno ya en marcha</strong>.
                                        </p>
                                    </div>

                                    <div className="methodology-points-list">
                                        <div className="methodology-point-item">
                                            <span className="point-icon">🎬</span>
                                            <div>
                                                <strong>Videos, Podcasts y Workbooks precisos:</strong>
                                                <p>Videos, podcasts y workbook precisos que impulsan tu formación en mentalidad de empresaria, conducen y apoyan en tus reflexiones diarias sobre tu negocio y te guían durante tu participación en el coaching grupal semanal online.</p>
                                            </div>
                                        </div>

                                        <div className="methodology-point-item">
                                            <span className="point-icon">🧠</span>
                                            <div>
                                                <strong>Coaching Grupal Online Semanal:</strong>
                                                <p>Un espacio en vivo que te reúne con otras emprendedoras y junto a la mentora <strong>Romina Lorena Montiel</strong> se crea un espacio de coaching de mentalidad, autoliderazgo y desarrollo de negocios.</p>
                                            </div>
                                        </div>

                                        <div className="methodology-point-item">
                                            <span className="point-icon">👑</span>
                                            <div>
                                                <strong>El Poder del Movimiento Grupal:</strong>
                                                <p>Apertura mental al vincularte con otras emprendedoras, escuchando y compartiendo problemáticas, retos, aprendizajes y éxitos colectivos.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Audio Podcast */}
                        <div className="pillar-card">
                            <div className="pillar-header">
                                <div className="pillar-title">
                                    <span>🎙️</span>
                                    <span>2. Podcast de Bienvenida: Mentalidad de Líder</span>
                                </div>
                                <span className="pillar-badge">Audio Oficial de Integración</span>
                            </div>
                            <div className="audio-player-box">
                                <div className="audio-track-info">
                                    <div className="track-details">
                                        <div className="podcast-cover-icon">🎙️</div>
                                        <div className="track-title-box">
                                            <h4>Episodio 00: El Salto Cuántico Interior</h4>
                                            <p>Por Lic. Romina Lorena Montiel • Audio de Mentalidad</p>
                                        </div>
                                    </div>
                                </div>
                                <audio controls className="real-audio-element">
                                    <source src="/videos/CLASE%203%20Propuesta%20de%20Valor%20y%20Posicionamiento/MI%20HISTORIA%20CON%20MARKETING%20CLASE%203.mp3" type="audio/mpeg" />
                                </audio>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PANEL 1: CLASE 1 */}
                <div className="folder-panel" id="panel-clase1" style={{ display: activeFolder === "clase1" ? "block" : "none" }}>
                    <div className="folder-active-banner">
                        <div className="active-folder-header">
                            <span className="big-icon">📂</span>
                            <div>
                                <h3>CARPETA: CLASE 1 - EMPRENDER CONSCIENTEMENTE</h3>
                                <p>Rompe el techo de cristal, entrena tu mentalidad de empresaria y construye bases sólidas de negocio.</p>
                            </div>
                        </div>
                        <div className="folder-materials-count">
                            <span className="material-chip chip-video">🎬 3 Videos Grabados</span>
                            <span className="material-chip chip-audio">🎙️ 1 Audio Guía</span>
                            <span className="material-chip chip-docs">📄 4 Materiales Online</span>
                        </div>
                    </div>

                    <div className="folder-pillars-grid">
                        {/* 1. Video Player Real */}
                        <div className="pillar-card">
                            <div className="pillar-header">
                                <div className="pillar-title">
                                    <span>🎬</span>
                                    <span id="title-video-clase1">{clase1Video.title}</span>
                                </div>
                                <span className="pillar-badge">{clase1Video.isYouTube ? "Video Oficial HD" : "Video Real MP4"}</span>
                            </div>
                            <div className="folder-video-screen">
                                {clase1Video.isYouTube ? (
                                    <iframe 
                                        id="iframeElement-clase1"
                                        src={clase1Video.src} 
                                        title={clase1Video.title}
                                        style={{ width: '100%', aspectRatio: '16 / 9', border: 'none', display: 'block' }}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerPolicy="strict-origin-when-cross-origin" 
                                        allowFullScreen 
                                    />
                                ) : (
                                    <video id="videoElement-clase1" ref={clase1VideoRef} controls controlsList="nodownload" onContextMenu={(e) => e.preventDefault()} preload="none" poster={clase1Video.poster}>
                                        <source src={clase1Video.src} type="video/mp4" />
                                    </video>
                                )}
                            </div>
                            {/* Selector de videos de la Clase 1 */}
                            <div className="video-playlist-bar">
                                <span className="playlist-label">Opciones de Video:</span>
                                <button className={`playlist-btn ${clase1Video.activeIndex === 0 ? "active" : ""}`} onClick={() => handleClase1Video('https://www.youtube-nocookie.com/embed/6bYxRQYJqgo?rel=0&modestbranding=1', '1. Video Clase: ¿Qué es ser una Emprendedora Consciente?', '/MINIATURA_PARA_VIDEO_PRINCIPAL.png', 0, true)}>
                                    ▶ 1. Video Clase Oficial
                                </button>
                                <button className={`playlist-btn ${clase1Video.activeIndex === 1 ? "active" : ""}`} onClick={() => handleClase1Video('https://drive.google.com/file/d/126kZK09iW73ShPt3utyLhx2Qk1scy-Kf/preview', '2. Clase 1: ¿Qué es ser una Emprendedora Consciente?', '', 1, true)}>
                                    ▶ 2. Grabación en Vivo
                                </button>
                            </div>
                            <div className="video-description-box" id="desc-video-clase1">
                                💡 <strong>Contenido de la Clase:</strong> Rompe con la culpa de cobrar, define tu postura ante el cliente y establece las bases para escalar tu negocio con mentalidad de líder.
                            </div>
                        </div>

                        {/* 2. Audio Podcast */}
                        <div className="pillar-card">
                            <div className="pillar-header">
                                <div className="pillar-title">
                                    <span>🎙️</span>
                                    <span>2. Podcast Clase 1: Liderazgo y Autoliderazgo</span>
                                </div>
                                <span className="pillar-badge">Audio Oficial</span>
                            </div>
                            <div className="audio-player-box">
                                <div className="audio-track-info">
                                    <div className="track-details">
                                        <div className="podcast-cover-icon">🎙️</div>
                                        <div className="track-title-box">
                                            <h4>Episodio 01: El Salto de la Emprendedora Agotada a Líder</h4>
                                            <p>Por Lic. Romina Lorena Montiel • Audio Guía</p>
                                        </div>
                                    </div>
                                </div>
                                <audio controls className="real-audio-element">
                                    <source src="/videos/CLASE%202%20Prop%C3%B3sito%20y%20Direcci%C3%B3n/WhatsApp%20Audio%202026-09-01%20at%2010.41.48.mpeg" type="audio/mpeg" />
                                </audio>
                            </div>
                        </div>

                        {/* 3. Materiales Online de la Clase 1 (Solo Visualización) */}
                        <div className="pillar-card">
                            <div className="pillar-header">
                                <div className="pillar-title">
                                    <span>📄</span>
                                    <span>3. Materiales de la Clase 1</span>
                                </div>
                                <span className="pillar-badge">Lectura y Visualización Online</span>
                            </div>
                            <div className="downloads-grid">
                                {/* Doc 1: Introducción Escrita Clase 1 */}
                                <div className="download-card">
                                    <div className="doc-icon-header">
                                        <div className="doc-format-badge badge-docx">DOCX</div>
                                        <div className="doc-meta">
                                            <h5>Introducción Escrita Clase 1</h5>
                                            <span>Lectura Online • Fundamento</span>
                                        </div>
                                    </div>
                                    <p className="doc-desc">Texto preparatorio de Romina: de mentalidad emprendedora a empresaria consciente.</p>
                                    <div className="doc-action-btns">
                                        <a href="/clase1_emprender_conscientemente/INTRO_ESCRITA_CLASE_1.html" target="_blank" className="btn-download-primary" style={{ "justifyContent": "center", "width": "100%" }}>
                                            <span>👁️ Ver Online</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Doc 2: PDF Workbook Oficial (Solo Lectura Online) */}
                                <div className="download-card">
                                    <div className="doc-icon-header">
                                        <div className="doc-format-badge badge-pdf">PDF</div>
                                        <div className="doc-meta">
                                            <h5>Workbook Oficial: Emprender Conscientemente</h5>
                                            <span>PDF Oficial • Lectura Online</span>
                                        </div>
                                    </div>
                                    <p className="doc-desc">Cuaderno de trabajo paso a paso: ejercicios de diagnóstico, visión de negocio y autoliderazgo.</p>
                                    <div className="doc-action-btns">
                                        <a href="/clase1_emprender_conscientemente/Workbook_Clase_1_Emprender_Conscientemente_Oficial.pdf#toolbar=0" target="_blank" className="btn-download-primary" style={{ "justifyContent": "center", "width": "100%" }}>
                                            <span>👁️ Ver Workbook Online</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Doc 3: Workbook Activa tu Mentalidad (Solo Lectura Online) */}
                                <div className="download-card">
                                    <div className="doc-icon-header">
                                        <div className="doc-format-badge badge-pdf">PDF</div>
                                        <div className="doc-meta">
                                            <h5>Activa tu Mentalidad de Negocios</h5>
                                            <span>Workbook PDF • Lectura Online</span>
                                        </div>
                                    </div>
                                    <p className="doc-desc">Guía profunda de transformación mental para pasar de autoempleada a empresaria.</p>
                                    <div className="doc-action-btns">
                                        <a href="/videos/CLASE%201%20Emprender%20Conscientemente/woorkBook%20ACTIVA%20TU%20MENTALIDAD%20DE%20NEGOCIOS.pdf#toolbar=0" target="_blank" className="btn-download-primary" style={{ "justifyContent": "center", "width": "100%" }}>
                                            <span>👁️ Ver Guía Online</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Doc 4: Presentación Diapositivas PPTX (Visualizador Web Online sin descarga) */}
                                <div className="download-card">
                                    <div className="doc-icon-header">
                                        <div className="doc-format-badge badge-pptx">PPTX</div>
                                        <div className="doc-meta">
                                            <h5>Presentación Clase 1 (Diapositivas)</h5>
                                            <span>Visualizador Web Online</span>
                                        </div>
                                    </div>
                                    <p className="doc-desc">Diapositivas completas proyectadas por Romina. Navega las láminas interactivamente sin descargar.</p>
                                    <div className="doc-action-btns">
                                        <a href="/clase1_emprender_conscientemente/Presentacion_Clase_1_Interactiva.html" target="_blank" className="btn-download-primary" style={{ "justifyContent": "center", "width": "100%" }}>
                                            <span>🚀 Ver Presentación Online</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PANEL 2: CLASE 2 */}
                <div className="folder-panel" id="panel-clase2" style={{ display: activeFolder === "clase2" ? "block" : "none" }}>
                    <div className="folder-active-banner">
                        <div className="active-folder-header">
                            <span className="big-icon">📂</span>
                            <div>
                                <h3>CARPETA: CLASE 2 - PROPÓSITO Y DIRECCIÓN</h3>
                                <p>Descubre el rumbo de tu negocio, alinea tus metas y conecta con tu audiencia ideal.</p>
                            </div>
                        </div>
                        <div className="folder-materials-count">
                            <span className="material-chip chip-video">🎬 Videos Grabados</span>
                            <span className="material-chip chip-docs">📄 4 Materiales Online</span>
                        </div>
                    </div>

                    <div className="folder-pillars-grid">
                        {/* 1. Video Player Real */}
                        <div className="pillar-card">
                            <div className="pillar-header">
                                <div className="pillar-title">
                                    <span>🎬</span>
                                    <span>{clase2Video.title}</span>
                                </div>
                                <span className="pillar-badge">Video Oficial HD</span>
                            </div>
                            <div className="folder-video-screen">
                                <iframe 
                                    id="iframeElement-clase2"
                                    src={clase2Video.src} 
                                    title={clase2Video.title} 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen
                                    style={{ display: "block", width: "100%", height: "100%", border: "none" }}>
                                </iframe>
                            </div>
                            {/* Selector de videos de la Clase 2 (Reproducción Exclusiva en el Campus) */}
                            <div className="video-playlist-bar">
                                <span className="playlist-label">Videos de la Clase:</span>
                                <button className={`playlist-btn ${clase2Video.activeIndex === 0 ? "active" : ""}`} onClick={() => handleClase2Video('https://www.youtube-nocookie.com/embed/0ZYdjwNX3zo?rel=0&modestbranding=1', '1. Qué es el Propósito (Video Oficial HD)', 0)}>
                                    ▶ 1. Qué es el Propósito
                                </button>
                                <button className={`playlist-btn ${clase2Video.activeIndex === 1 ? "active" : ""}`} onClick={() => handleClase2Video('https://www.youtube-nocookie.com/embed/zV2kFpcSSl8?rel=0&modestbranding=1', '2. El Antes y Después de Descubrir tu Propósito (Video Oficial HD)', 1)}>
                                    ▶ 2. El Antes y Después
                                </button>
                            </div>
                            <div className="video-description-box">
                                💡 <strong>Grabación de la Clase 2:</strong> Sesión intensiva de propósito, dirección y visión estratégica para ordenar tu oferta.
                            </div>
                        </div>

                        {/* 2. Audio Oficial de la Clase 2 */}
                        <div className="pillar-card">
                            <div className="pillar-header">
                                <div className="pillar-title">
                                    <span>🎙️</span>
                                    <span>2. Audio Reflexivo: Lo que tu Cliente Desea Comprar</span>
                                </div>
                                <span className="pillar-badge">Audio Oficial de Romina</span>
                            </div>
                            <div className="audio-player-box">
                                <div className="audio-track-info">
                                    <div className="track-details">
                                        <div className="podcast-cover-icon">🎙️</div>
                                        <div className="track-title-box">
                                            <h4>Haber creado un producto que te encanta no implica algo que tu cliente desea comprar</h4>
                                            <p>Por Lic. Romina Lorena Montiel • Audio Reflexivo de Dirección Estratégica</p>
                                        </div>
                                    </div>
                                </div>
                                <audio controls className="real-audio-element" style={{ width: "100%", borderRadius: "8px" }}>
                                    <source src="/audios/reflexion_producto_cliente_compra.mpeg" type="audio/mpeg" />
                                </audio>
                            </div>
                        </div>

                        {/* 3. Materiales Online de la Clase 2 */}
                        <div className="pillar-card">
                            <div className="pillar-header">
                                <div className="pillar-title">
                                    <span>📄</span>
                                    <span>3. Materiales de la Clase 2: Propósito y Dirección</span>
                                </div>
                                <span className="pillar-badge">Lectura y Descarga Oficial</span>
                            </div>
                            <div className="downloads-grid">
                                {/* Doc 1: Introducción Escrita Clase 2 */}
                                <div className="download-card">
                                    <div className="doc-icon-header">
                                        <div className="doc-format-badge badge-docx">DOCX</div>
                                        <div className="doc-meta">
                                            <h5>Introducción Escrita Clase 2</h5>
                                            <span>Lectura Online • Solo Visualización</span>
                                        </div>
                                    </div>
                                    <p className="doc-desc">Texto preparatorio de Romina: emprender es construir un negocio que genere libertad y una vida sostenible.</p>
                                    <div className="doc-action-btns">
                                        <a href="/clase2_proposito_y_direccion/INTRO_ESCRITA_CLASE_2.html" target="_blank" className="btn-download-primary" style={{ justifyContent: "center", width: "100%" }}>
                                            <span>👁️ Ver Online</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Doc 2: PDF Workbook Clase 2 */}
                                <div className="download-card">
                                    <div className="doc-icon-header">
                                        <div className="doc-format-badge badge-pdf">PDF</div>
                                        <div className="doc-meta">
                                            <h5>Workbook Clase 2: Propósito y Dirección</h5>
                                            <span>PDF Oficial • Lectura & Descarga</span>
                                        </div>
                                    </div>
                                    <p className="doc-desc">Cuaderno de trabajo interactivo: ejercicios de autodiagnóstico, matriz del propósito y mapa de ruta.</p>
                                    <div className="doc-action-btns">
                                        <a href="/clase2_proposito_y_direccion/Workbook_Clase_2_Proposito_y_Direccion.html" target="_blank" className="btn-view-secondary" style={{ flex: 1, justifyContent: "center" }}>
                                            <span>✨ Abrir Interactivo</span>
                                        </a>
                                        <a href="/clase2_proposito_y_direccion/Workbook_Clase_2_Proposito_y_Direccion.pdf" download="Workbook_Clase_2_Proposito_y_Direccion.pdf" className="btn-download-primary" style={{ flex: 1, justifyContent: "center" }}>
                                            <span>⬇️ Descargar</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Doc 3: Presentación Web (Solo Mirar) */}
                                <div className="download-card">
                                    <div className="doc-icon-header">
                                        <div className="doc-format-badge badge-pptx">PPTX</div>
                                        <div className="doc-meta">
                                            <h5>Presentación Diapositivas Clase 2</h5>
                                            <span>Visualizador Web Online • Solo Visualización</span>
                                        </div>
                                    </div>
                                    <p className="doc-desc">Diapositivas completas proyectadas por Romina. Navega las láminas interactivamente desde el Campus.</p>
                                    <div className="doc-action-btns">
                                        <a href="/clase2_proposito_y_direccion/Presentacion_Clase_2_Proposito_y_Direccion.html" target="_blank" className="btn-download-primary" style={{ justifyContent: "center", width: "100%" }}>
                                            <span>🚀 Ver Presentación Online</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Doc 4: Reto Práctico */}
                                <div className="download-card">
                                    <div className="doc-icon-header">
                                        <div className="doc-format-badge badge-pdf" style={{ background: "rgba(16, 185, 129, 0.2)", color: "#34D399", borderColor: "rgba(16, 185, 129, 0.4)" }}>RETO</div>
                                        <div className="doc-meta">
                                            <h5>Reto Final: Cuadro del Propósito</h5>
                                            <span>Esquema Visual de Aplicación</span>
                                        </div>
                                    </div>
                                    <p className="doc-desc">Consigna práctica de cierre: completa el cuadro del propósito antes de iniciar la Clase 3.</p>
                                    <div className="doc-action-btns">
                                        <a href="/clase2_proposito_y_direccion/El reto final de esta clase es lograr completar el cuadro del PROPOSITO.PNG" target="_blank" className="btn-download-primary" style={{ justifyContent: "center", width: "100%" }}>
                                            <span>🎯 Ver Cuadro del Reto</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PANEL 3: CLASE 3 */}
                <div className="folder-panel" id="panel-clase3" style={{ display: activeFolder === "clase3" ? "block" : "none" }}>
                    <div className="folder-active-banner">
                        <div className="active-folder-header">
                            <span className="big-icon">📂</span>
                            <div>
                                <h3>CARPETA: CLASE 3 - PROPUESTA DE VALOR Y POSICIONAMIENTO</h3>
                                <p>Crea tu propuesta de valor irresistible, define precios y comprende qué compra tu cliente.</p>
                            </div>
                        </div>
                        <div className="folder-materials-count">
                            <span className="material-chip chip-video">🎬 2 Videos Grabados (Partes 1 y 2)</span>
                            <span className="material-chip chip-audio">🎙️ 1 Audio Podcast</span>
                            <span className="material-chip chip-docs">📥 4 Documentos</span>
                        </div>
                    </div>

                    <div className="folder-pillars-grid">
                        {/* 1. Video Player Real */}
                        <div className="pillar-card">
                            <div className="pillar-header">
                                <div className="pillar-title">
                                    <span>🎬</span>
                                    <span id="title-video-clase3">1. Video: Clase 3 - Propuesta de Valor (Parte 1)</span>
                                </div>
                                <span className="pillar-badge">Video Real MP4</span>
                            </div>
                            <div className="folder-video-screen">
                                <video id="videoElement-clase3" ref={clase3VideoRef} controls controlsList="nodownload" onContextMenu={(e) => e.preventDefault()} preload="metadata" poster="/banner_modo_lider.png">
                                    <source src="/videos/CLASE%203%20Propuesta%20de%20Valor%20y%20Posicionamiento/CLASE%203%20PROPUESTA%20DE%20VALOR%20PARTE%201.mp4" type="video/mp4" />
                                </video>
                            </div>
                            {/* Selector de Parte 1 y Parte 2 */}
                            <div className="video-playlist-bar">
                                <span className="playlist-label">Partes de la Clase 3:</span>
                                <button className={`playlist-btn ${clase3Video.activeIndex === 0 ? "active" : ""}`} onClick={() => handleClase3Video('/videos/CLASE%203%20Propuesta%20de%20Valor%20y%20Posicionamiento/CLASE%203%20PROPUESTA%20DE%20VALOR%20PARTE%201.mp4', '1. Clase 3: Propuesta de Valor (Parte 1 - 711 MB)', 0)}>
                                    ▶ Ver Parte 1 (711 MB)
                                </button>
                                <button className={`playlist-btn ${clase3Video.activeIndex === 1 ? "active" : ""}`} onClick={() => handleClase3Video('/videos/CLASE%203%20Propuesta%20de%20Valor%20y%20Posicionamiento/CLASE%203%20MI%20PROPUESTA%20DE%20VALOR%20PARTE%202.mp4', '2. Clase 3: Mi Propuesta de Valor (Parte 2 - 2.6 GB)', 1)}>
                                    ▶ Ver Parte 2 (2.6 GB)
                                </button>
                            </div>
                            <div className="video-description-box">
                                💡 <strong>Clase 3:</strong> Aprende la fórmula exacta para armar una propuesta de valor atractiva y los miedos psicológicos que frenan la compra de tus clientas.
                            </div>
                        </div>

                        {/* 2. Audio Podcast Real */}
                        <div className="pillar-card">
                            <div className="pillar-header">
                                <div className="pillar-title">
                                    <span>🎙️</span>
                                    <span>2. Podcast Clase 3: Mi Historia con Marketing</span>
                                </div>
                                <span className="pillar-badge">Audio Oficial MP3</span>
                            </div>
                            <div className="audio-player-box">
                                <div className="audio-track-info">
                                    <div className="track-details">
                                        <div className="podcast-cover-icon">🎙️</div>
                                        <div className="track-title-box">
                                            <h4>Episodio 03: Mi Historia con Marketing</h4>
                                            <p>Por Lic. Romina Lorena Montiel • Audio Reflexivo Oficial</p>
                                        </div>
                                    </div>
                                </div>
                                <audio controls className="real-audio-element">
                                    <source src="/videos/CLASE%203%20Propuesta%20de%20Valor%20y%20Posicionamiento/MI%20HISTORIA%20CON%20MARKETING%20CLASE%203.mp3" type="audio/mpeg" />
                                </audio>
                            </div>
                        </div>

                        {/* 3. Descargables */}
                        <div className="pillar-card">
                            <div className="pillar-header">
                                <div className="pillar-title">
                                    <span>📥</span>
                                    <span>3. Descargar Materiales de la Clase 3</span>
                                </div>
                                <span className="pillar-badge">Presentaciones Completas en PDF</span>
                            </div>
                            <div className="downloads-grid">
                                {/* Doc 1: Presentacion Propuesta de Valor */}
                                <div className="download-card">
                                    <div className="doc-icon-header">
                                        <div className="doc-format-badge badge-pdf">PDF</div>
                                        <div className="doc-meta">
                                            <h5>Presentación: Propuesta de Valor</h5>
                                            <span>PDF Oficial • 940 KB</span>
                                        </div>
                                    </div>
                                    <p className="doc-desc">Diapositivas de la Clase 3: cómo diseñar tu propuesta de valor y destacar en el mercado.</p>
                                    <div className="doc-action-btns">
                                        <a href="/Presentacion_Clase_3_Propuesta_de_Valor.pdf" download className="btn-download-primary">
                                            <span>📥 Descargar PDF</span>
                                        </a>
                                        <a href="/Presentacion_Clase_3_Propuesta_de_Valor.pdf" target="_blank" className="btn-view-secondary">
                                            <span>👁️ Abrir</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Doc 2: Presentacion Los Miedos del Cliente */}
                                <div className="download-card">
                                    <div className="doc-icon-header">
                                        <div className="doc-format-badge badge-pdf">PDF</div>
                                        <div className="doc-meta">
                                            <h5>Los Miedos Detrás de lo que Compran</h5>
                                            <span>PDF Oficial • 725 KB</span>
                                        </div>
                                    </div>
                                    <p className="doc-desc">Análisis psicológico de las decisiones de compra y claves para transmitir certeza absoluta.</p>
                                    <div className="doc-action-btns">
                                        <a href="/Presentacion_Los_Miedos_Detras_de_lo_que_Nos_Compran_Nuestros_Clientes.pdf" download className="btn-download-primary">
                                            <span>📥 Descargar PDF</span>
                                        </a>
                                        <a href="/Presentacion_Los_Miedos_Detras_de_lo_que_Nos_Compran_Nuestros_Clientes.pdf" target="_blank" className="btn-view-secondary">
                                            <span>👁️ Abrir</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Doc 3: Workbook Clase 3 */}
                                <div className="download-card">
                                    <div className="doc-icon-header">
                                        <div className="doc-format-badge badge-pdf">PDF</div>
                                        <div className="doc-meta">
                                            <h5>Workbook: Mi Propuesta de Valor</h5>
                                            <span>PDF Oficial • 1.0 MB</span>
                                        </div>
                                    </div>
                                    <p className="doc-desc">Cuaderno de ejercicios para construir tu propuesta paso a paso.</p>
                                    <div className="doc-action-btns">
                                        <a href="/videos/CLASE%203%20Propuesta%20de%20Valor%20y%20Posicionamiento/Workbook%20Clase%203%20%E2%80%94%20Mi%20Propuesta%20de%20Valor%20_%20MODO%20L%C3%8DDER.pdf" download className="btn-download-primary">
                                            <span>📥 Descargar PDF</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Doc 4: Web Interactiva */}
                                <div className="download-card">
                                    <div className="doc-icon-header">
                                        <div className="doc-format-badge badge-html">WEB</div>
                                        <div className="doc-meta">
                                            <h5>Diapositivas Web Clase 3</h5>
                                            <span>Versión Web Online</span>
                                        </div>
                                    </div>
                                    <p className="doc-desc">Diapositivas interactivas proyectables desde cualquier dispositivo.</p>
                                    <div className="doc-action-btns">
                                        <a href="/videos/CLASE%203%20Propuesta%20de%20Valor%20y%20Posicionamiento/Presentacion_Clase_3_Propuesta_de_Valor.html" target="_blank" className="btn-download-primary">
                                            <span>🚀 Abrir Diapositivas</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PANEL 4: CLASE 4 */}
                <div className="folder-panel" id="panel-clase4" style={{ "display": "none" }}>
                    <div className="folder-active-banner">
                        <div className="active-folder-header">
                            <span className="big-icon">📂</span>
                            <div>
                                <h3>CARPETA: CLASE 4 - REGRESAR A MÍ Y RECONECTAR CON MI NEGOCIO</h3>
                                <p>Sostenibilidad emocional, autocuidado y retorno al centro del negocio sin burnout.</p>
                            </div>
                        </div>
                        <div className="folder-materials-count">
                            <span className="material-chip chip-video">🎬 1 Video Masterclass (120 MB)</span>
                            <span className="material-chip chip-docs">📥 1 Guía Completa</span>
                        </div>
                    </div>

                    <div className="folder-pillars-grid">
                        {/* 1. Video Player Real */}
                        <div className="pillar-card">
                            <div className="pillar-header">
                                <div className="pillar-title">
                                    <span>🎬</span>
                                    <span>1. Video Masterclass: Regresar a Mí y Reconectar con mi Negocio</span>
                                </div>
                                <span className="pillar-badge">Video Real MP4</span>
                            </div>
                            <div className="folder-video-screen">
                                <video id="videoElement-clase4" controls controlsList="nodownload" onContextMenu={(e) => e.preventDefault()} preload="metadata" poster="/romina2.png">
                                    <source src="/videos/CLASE%204%20Regresar%20a%20mi%20y%20reconectar%20con%20mi%20Negocio/REGRESAR%20A%20MI%20Y%20RECONECTAR%20CON%20MI%20NEGOCIO.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="video-description-box">
                                💡 <strong>Clase de Reconexión:</strong> Cómo volver a enamorarte de tu proyecto, gestionar tu energía y liderar sin desgastarte.
                            </div>
                        </div>

                        {/* 2. Descargables */}
                        <div className="pillar-card">
                            <div className="pillar-header">
                                <div className="pillar-title">
                                    <span>📥</span>
                                    <span>2. Descargar Guía de la Clase 4</span>
                                </div>
                                <span className="pillar-badge">Material Exclusivo</span>
                            </div>
                            <div className="downloads-grid">
                                <div className="download-card">
                                    <div className="doc-icon-header">
                                        <div className="doc-format-badge badge-pdf">PDF</div>
                                        <div className="doc-meta">
                                            <h5>Guía para Volver a Mí y Reconectar</h5>
                                            <span>PDF Oficial • 47 MB</span>
                                        </div>
                                    </div>
                                    <p className="doc-desc">Guía profunda de reconexión personal, balance de vida y autoliderazgo.</p>
                                    <div className="doc-action-btns">
                                        <a href="/videos/CLASE%204%20Regresar%20a%20mi%20y%20reconectar%20con%20mi%20Negocio/GUIA%20PARA%20VOLVER%20A%20MI%20Y%20RECONECTAR%20CON%20MI%20NEGOCIO%20(1).pdf" download className="btn-download-primary">
                                            <span>📥 Descargar Guía PDF</span>
                                        </a>
                                        <a href="/videos/CLASE%204%20Regresar%20a%20mi%20y%20reconectar%20con%20mi%20Negocio/GUIA%20PARA%20VOLVER%20A%20MI%20Y%20RECONECTAR%20CON%20MI%20NEGOCIO%20(1).pdf" target="_blank" className="btn-view-secondary">
                                            <span>👁️ Abrir</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PANEL 5: TESTIMONIOS */}
                <div className="folder-panel" id="panel-testimonios" style={{ "display": "none" }}>
                    <div className="folder-active-banner">
                        <div className="active-folder-header">
                            <span className="big-icon">📂</span>
                            <div>
                                <h3>CARPETA: TESTIMONIOS Y CASOS DE ÉXITO</h3>
                                <p>Historias reales de alumnas que aplicaron el Método Modo Líder y transformaron sus negocios.</p>
                            </div>
                        </div>
                        <div className="folder-materials-count">
                            <span className="material-chip chip-video">🎬 1 Video Testimonio Real</span>
                            <span className="material-chip chip-audio">🎙️ 1 Audio Real</span>
                            <span className="material-chip chip-docs">📥 3 Documentos</span>
                        </div>
                    </div>

                    <div className="folder-pillars-grid">
                        {/* 1. Video Real Analia Soto */}
                        <div className="pillar-card">
                            <div className="pillar-header">
                                <div className="pillar-title">
                                    <span>🎬</span>
                                    <span>1. Video Testimonio: Analía Soto (Coach)</span>
                                </div>
                                <span className="pillar-badge">Video Real MP4 • 147 MB</span>
                            </div>
                            <div className="folder-video-screen">
                                <video 
                                    id="videoElement-testimonios" 
                                    controls 
                                    controlsList="nodownload" 
                                    onContextMenu={(e) => e.preventDefault()} 
                                    preload="metadata" 
                                    poster="/miniatura_testimonio_analiasoto.png?v=2">
                                    <source src="/videos_campus/testimonio_analia_soto.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="video-description-box">
                                💡 <strong>Testimonio Real:</strong> Analía Soto comparte en primera persona cómo el Método Modo Líder le dio la estructura y seguridad para elevar el valor de sus servicios de coaching.
                            </div>
                        </div>

                        {/* 2. Audio Podcast Real */}
                        <div className="pillar-card">
                            <div className="pillar-header">
                                <div className="pillar-title">
                                    <span>🎙️</span>
                                    <span>2. Audio Mensaje de Alumna</span>
                                </div>
                                <span className="pillar-badge">Audio Real de WhatsApp</span>
                            </div>
                            <div className="audio-player-box">
                                <div className="audio-track-info">
                                    <div className="track-details">
                                        <div className="podcast-cover-icon">🎙️</div>
                                        <div className="track-title-box">
                                            <h4>Mensaje de Voz: Experiencia en Primera Persona</h4>
                                            <p>Alumna Método Modo Líder • Grabación Real</p>
                                        </div>
                                    </div>
                                </div>
                                <audio controls className="real-audio-element">
                                    <source src="/videos/TESTIMONIOS/WhatsApp%20Audio%202026-09-03%20at%2011.17.30.ogg" type="audio/ogg" />
                                </audio>
                            </div>
                        </div>

                        {/* 3. Descargables */}
                        <div className="pillar-card">
                            <div className="pillar-header">
                                <div className="pillar-title">
                                    <span>📥</span>
                                    <span>3. Documentos y Fichas de Casos de Éxito</span>
                                </div>
                                <span className="pillar-badge">Descargas en Word y Web</span>
                            </div>
                            <div className="downloads-grid">
                                {/* Doc 1: Word Casos de Exito */}
                                <div className="download-card">
                                    <div className="doc-icon-header">
                                        <div className="doc-format-badge badge-docx">DOCX</div>
                                        <div className="doc-meta">
                                            <h5>01. Casos de Éxito Detallados</h5>
                                            <span>Word Editable • 38 KB</span>
                                        </div>
                                    </div>
                                    <p className="doc-desc">Ficha completa de los 5 casos de estudio documentados con métricas y aprendizajes.</p>
                                    <div className="doc-action-btns">
                                        <a href="/testimonios/01_Casos_de_Exito_Detallados_Modo_Lider.docx" download className="btn-download-primary">
                                            <span>📥 Descargar Word</span>
                                        </a>
                                        <a href="/testimonios/Testimonios_Casos_de_Exito.html" target="_blank" className="btn-view-secondary">
                                            <span>👁️ Ver Online</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Doc 2: Word Plantilla Testimonio */}
                                <div className="download-card">
                                    <div className="doc-icon-header">
                                        <div className="doc-format-badge badge-docx">DOCX</div>
                                        <div className="doc-meta">
                                            <h5>02. Plantilla para Enviar tu Testimonio</h5>
                                            <span>Word Editable • 37 KB</span>
                                        </div>
                                    </div>
                                    <p className="doc-desc">Guía para estructurar y compartir tu propia historia de transformación al finalizar el curso.</p>
                                    <div className="doc-action-btns">
                                        <a href="/testimonios/02_Guia_y_Plantilla_para_Enviar_Testimonio.docx" download className="btn-download-primary">
                                            <span>📥 Descargar Word</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Doc 3: Web Casos Interactivos */}
                                <div className="download-card">
                                    <div className="doc-icon-header">
                                        <div className="doc-format-badge badge-html">WEB</div>
                                        <div className="doc-meta">
                                            <h5>Muro Interactivo de Testimonios</h5>
                                            <span>Galería Web de Alumnas</span>
                                        </div>
                                    </div>
                                    <p className="doc-desc">Visualiza las historias completas, antes/después y capturas en pantalla.</p>
                                    <div className="doc-action-btns">
                                        <a href="/testimonios/Testimonios_Casos_de_Exito.html" target="_blank" className="btn-download-primary">
                                            <span>🚀 Abrir Muro Web</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. Resumen Visual de los 5 Casos */}
                        <div className="pillar-card">
                            <div className="pillar-header">
                                <div className="pillar-title">
                                    <span>⭐</span>
                                    <span>Las 5 Alumnas Documentadas</span>
                                </div>
                                <span className="pillar-badge">Casos Reales</span>
                            </div>
                            <div className="testimonials-grid">
                                <div className="testimonial-student-card">
                                    <div>
                                        <div className="testimonial-header">
                                            <div className="testimonial-avatar">MT</div>
                                            <div className="testimonial-info">
                                                <h4>Maira Traub</h4>
                                                <p>Servicios de Estética & Cuidado</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-quote" style={{ "marginTop": "0.8rem" }}>
                                            "Pasé de cobrar $300.000 con culpa y agotamiento extremo, a facturar $2.000.000 mensuales ordenando mis horarios y reestructurando mi oferta."
                                        </p>
                                    </div>
                                    <div className="testimonial-metric">
                                        🚀 Multiplicó por 6 sus ingresos
                                    </div>
                                </div>

                                <div className="testimonial-student-card">
                                    <div>
                                        <div className="testimonial-header">
                                            <div className="testimonial-avatar">ER</div>
                                            <div className="testimonial-info">
                                                <h4>Elena R.</h4>
                                                <p>Estudio de Arquitectura</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-quote" style={{ "marginTop": "0.8rem" }}>
                                            "Aprendí a poner límites claros en mis presupuestos. Hoy tengo clientes que valoran mis proyectos y pagan el valor que realmente valgo."
                                        </p>
                                    </div>
                                    <div className="testimonial-metric">
                                        📐 Propuestas de Alto Valor
                                    </div>
                                </div>

                                <div className="testimonial-student-card">
                                    <div>
                                        <div className="testimonial-header">
                                            <div className="testimonial-avatar">RM</div>
                                            <div className="testimonial-info">
                                                <h4>Rosalía M.</h4>
                                                <p>Indumentaria & Diseño</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-quote" style={{ "marginTop": "0.8rem" }}>
                                            "La metodología 30/30 me salvó del colapso. Pude delegar y aumentar mis ventas online sin perder la presencia con mis hijos."
                                        </p>
                                    </div>
                                    <div className="testimonial-metric">
                                        ⏱️ +15 Horas libres por semana
                                    </div>
                                </div>

                                <div className="testimonial-student-card">
                                    <div>
                                        <div className="testimonial-header">
                                            <div className="testimonial-avatar">SB</div>
                                            <div className="testimonial-info">
                                                <h4>Stefania B.</h4>
                                                <p>Consultoría de Imagen</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-quote" style={{ "marginTop": "0.8rem" }}>
                                            "El curso me dio la seguridad interna que no conseguía en ningún otro lugar. Dejé de dudar y lancé mi programa premium."
                                        </p>
                                    </div>
                                    <div className="testimonial-metric">
                                        💎 100% de Confianza y Lanzamiento
                                    </div>
                                </div>

                                <div className="testimonial-student-card">
                                    <div>
                                        <div className="testimonial-header">
                                            <div className="testimonial-avatar">SG</div>
                                            <div className="testimonial-info">
                                                <h4>Sandra G.</h4>
                                                <p>Nutrición & Bienestar</p>
                                            </div>
                                        </div>
                                        <p className="testimonial-quote" style={{ "marginTop": "0.8rem" }}>
                                            "Pude transformar consultas individuales de bajo costo en programas de acompañamiento integral valorados por mis pacientes."
                                        </p>
                                    </div>
                                    <div className="testimonial-metric">
                                        🥗 Programa de Alto Impacto
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    </main>

    {/* FOOTER: EXCLUSIVO CAMPUS MODO LIDER */}
    <footer className="campus-footer">
        <p className="signature">CAMPUS MODO LIDER • Lic. Romina Lorena Montiel</p>
        <p>Espacio privado y confidencial para alumnas del Método Modo Líder.</p>
        <p style={{ "fontSize": "0.72rem", "color": "#64748B", "marginTop": "0.5rem" }}>
            © 2026 Modo Líder. Todos los derechos reservados. Prohibida su distribución no autorizada.
        </p>
    </footer>

    {/* INTERACTIVE JAVASCRIPT ENGINE */}
    </>
  );
}
