import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "#080A0F",
      borderTop: "1px solid rgba(212, 175, 55, 0.2)",
      padding: "4rem 1.5rem 3rem 1.5rem",
      color: "#94A3B8"
    }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "3rem",
          marginBottom: "3.5rem"
        }}>
          
          {/* Columna 1: Marca & Misión */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
              <img 
                src="/logo modolider.png" 
                alt="Logo Método Modo Líder" 
                style={{ height: "42px", width: "42px", borderRadius: "50%", objectFit: "cover", boxShadow: "0 2px 10px rgba(233, 182, 66, 0.3)" }} 
              />
              <span style={{
                fontSize: "1.2rem",
                fontWeight: 900,
                background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "1.5px"
              }}>
                MÉTODO MODO LÍDER
              </span>
            </div>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "#CBD5E1", marginBottom: "1.2rem" }}>
              La integración definitiva entre <strong>Neurociencias</strong>, <strong>Transformación</strong> e <strong>Inteligencia de Negocios</strong> para erradicar la postergación y liderar con impacto.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#ECC369", fontWeight: "700" }}>
              Romina Lorena Montiel
            </p>
            <p style={{ fontSize: "0.85rem", color: "#94A3B8" }}>
              Lic. en Administración • Neuropsicoeducadora
            </p>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "1.05rem", fontWeight: "800", marginBottom: "1.2rem", textTransform: "uppercase", letterSpacing: "1px" }}>
              Explorar
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li>
                <Link href="/" style={{ color: "#CBD5E1", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}>
                  🏠 Inicio
                </Link>
              </li>
              <li>
                <Link href="/historia" style={{ color: "#CBD5E1", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}>
                  📖 Mi Historia
                </Link>
              </li>
              <li>
                <Link href="/servicios" style={{ color: "#CBD5E1", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}>
                  ✨ Servicios &amp; Mentoría 1 a 1
                </Link>
              </li>
              <li>
                <Link href="/curso" style={{ color: "#CBD5E1", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}>
                  🎓 Curso Modo Líder
                </Link>
              </li>
              <li>
                <Link href="/campus" style={{ color: "#CBD5E1", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}>
                  🔐 Campus Virtual
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes Sociales & Contacto */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "1.05rem", fontWeight: "800", marginBottom: "1.2rem", textTransform: "uppercase", letterSpacing: "1px" }}>
              Redes Sociales Oficiales
            </h4>
            <p style={{ fontSize: "0.9rem", color: "#94A3B8", marginBottom: "1.2rem" }}>
              Conecta conmigo y accede a contenido exclusivo sobre neurociencias y mentalidad de negocios:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              
              {/* Instagram Personal */}
              <a 
                href="https://www.instagram.com/rominalorenamontiel/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  padding: "0.6rem 1rem",
                  background: "rgba(225, 48, 108, 0.12)",
                  border: "1px solid rgba(225, 48, 108, 0.4)",
                  borderRadius: "10px",
                  color: "#FF8BA7",
                  textDecoration: "none",
                  fontSize: "0.92rem",
                  fontWeight: "700",
                  transition: "all 0.2s"
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span>Instagram: @rominalorenamontiel</span>
              </a>

              {/* Instagram Modo Líder */}
              <a 
                href="https://www.instagram.com/modolider.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  padding: "0.6rem 1rem",
                  background: "rgba(212, 175, 55, 0.12)",
                  border: "1px solid rgba(212, 175, 55, 0.4)",
                  borderRadius: "10px",
                  color: "#ECC369",
                  textDecoration: "none",
                  fontSize: "0.92rem",
                  fontWeight: "700",
                  transition: "all 0.2s"
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span>Instagram: @modolider.co</span>
              </a>

              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@RominaLorenaMontiel" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  padding: "0.6rem 1rem",
                  background: "rgba(255, 0, 0, 0.12)",
                  border: "1px solid rgba(255, 0, 0, 0.4)",
                  borderRadius: "10px",
                  color: "#FF6B6B",
                  textDecoration: "none",
                  fontSize: "0.92rem",
                  fontWeight: "700",
                  transition: "all 0.2s"
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                <span>YouTube: @RominaLorenaMontiel</span>
              </a>

              {/* WhatsApp Direct */}
              <a 
                href="https://wa.me/543794322272" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  padding: "0.6rem 1rem",
                  background: "rgba(37, 211, 102, 0.12)",
                  border: "1px solid rgba(37, 211, 102, 0.4)",
                  borderRadius: "10px",
                  color: "#25D366",
                  textDecoration: "none",
                  fontSize: "0.92rem",
                  fontWeight: "700",
                  transition: "all 0.2s"
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.981-1.394C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.167-.492-4.448-1.336l-.319-.208-2.966.83.844-2.883-.228-.337A8.156 8.156 0 0 1 3.8 12c0-4.522 3.678-8.2 8.2-8.2 4.521 0 8.2 3.678 8.2 8.2 0 4.522-3.679 8.2-8.2 8.2z"/>
                </svg>
                <span>WhatsApp: +54 379 432-2272</span>
              </a>

            </div>
          </div>

        </div>

        <div style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          fontSize: "0.85rem"
        }}>
          <p>© {new Date().getFullYear()} Método MODO LÍDER • Romina Lorena Montiel. Todos los derechos reservados.</p>
          <p style={{ color: "#ECC369" }}>De la Mentalidad a las Ventas</p>
        </div>

      </div>
    </footer>
  );
}
