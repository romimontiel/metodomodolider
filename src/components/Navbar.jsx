import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="top-nav" style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.9rem 2.5rem",
      background: "rgba(10, 13, 20, 0.95)",
      borderBottom: "1px solid rgba(212, 175, 55, 0.25)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      backdropFilter: "blur(12px)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.4)"
    }}>
      <Link href="/" className="nav-brand" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.9rem" }}>
        <img 
          src="/logo modolider.png" 
          alt="Logo Método Modo Líder" 
          style={{ height: "42px", width: "42px", borderRadius: "50%", objectFit: "cover", boxShadow: "0 2px 10px rgba(233, 182, 66, 0.3)" }} 
        />
        <span className="brand-logo-text" style={{
          fontSize: "1.25rem",
          fontWeight: 900,
          background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "2px"
        }}>
          MÉTODO MODO LÍDER
        </span>
      </Link>
      
      <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
        <Link href="/servicios" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          background: "rgba(212, 175, 55, 0.12)",
          border: "1.5px solid rgba(212, 175, 55, 0.4)",
          color: "#ECC369",
          textDecoration: "none",
          padding: "0.6rem 1.1rem",
          borderRadius: "8px",
          fontWeight: 700,
          fontSize: "0.88rem",
          transition: "all 0.2s"
        }}>
          ✨ Servicios & Mentoría
        </Link>
        <Link href="/curso" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          background: "rgba(255, 255, 255, 0.06)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          color: "#F7E7CE",
          textDecoration: "none",
          padding: "0.6rem 1.1rem",
          borderRadius: "8px",
          fontWeight: 700,
          fontSize: "0.88rem",
          transition: "all 0.2s"
        }}>
          🎓 Info del Curso
        </Link>
        <Link href="/campus" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
          color: "#0E121B",
          textDecoration: "none",
          padding: "0.6rem 1.2rem",
          borderRadius: "8px",
          fontWeight: 800,
          fontSize: "0.88rem",
          boxShadow: "0 4px 15px rgba(212, 175, 55, 0.35)",
          transition: "all 0.2s"
        }}>
          👑 Campus
        </Link>
      </div>
    </nav>
  );
}
