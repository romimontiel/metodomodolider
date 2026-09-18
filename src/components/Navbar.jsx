import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="top-nav">
      <Link href="/" className="nav-brand">
        <img 
          src="/logo modolider.png" 
          alt="Logo Método Modo Líder" 
          className="nav-brand-logo"
        />
        <span className="brand-logo-text">
          MÉTODO MODO LÍDER
        </span>
      </Link>
      
      <div className="nav-actions">
        <Link href="/servicios" className="nav-link-item nav-link-servicios">
          ✨ Servicios & Mentoría
        </Link>
        <Link href="/curso" className="nav-link-item nav-link-curso">
          🎓 Info del Curso
        </Link>
        <Link href="/campus" className="nav-link-item nav-link-campus">
          🏛️ Campus Alumnas
        </Link>
      </div>
    </nav>
  );
}

