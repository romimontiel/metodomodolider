import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Mi Historia | Romina Lorena Montiel - Método MODO LÍDER",
  description: "Conoce la historia, visión y trayectoria de Romina Lorena Montiel, creadora del Método MODO LÍDER.",
};

export default function HistoriaPage() {
  return (
    <>
      <Navbar />
      
      <main style={{ minHeight: "100vh", background: "#090A0F", color: "#F3F4F6", paddingBottom: "5rem" }}>
        
        {/* Header / Hero de la Página */}
        <section style={{
          position: "relative",
          padding: "4.5rem 2rem 3.5rem 2rem",
          background: "radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 65%), linear-gradient(180deg, #090A0F 0%, #0E121B 100%)",
          borderBottom: "1px solid rgba(212, 175, 55, 0.25)",
          textAlign: "center"
        }}>
          <div style={{ maxWidth: "850px", margin: "0 auto" }}>
            <Link href="/" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#ECC369",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: "600",
              marginBottom: "1.5rem",
              background: "rgba(212, 175, 55, 0.1)",
              padding: "0.4rem 1rem",
              borderRadius: "50px",
              border: "1px solid rgba(212, 175, 55, 0.3)"
            }}>
              ← Volver al Inicio
            </Link>
            
            <span style={{
              display: "block",
              fontSize: "0.9rem",
              fontWeight: "800",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#D4AF37",
              marginBottom: "0.8rem"
            }}>
              TRAYECTORIA & PROPÓSITO
            </span>

            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "3.5rem",
              fontWeight: "800",
              color: "#FFFFFF",
              marginBottom: "1.2rem",
              lineHeight: 1.15
            }}>
              Mi Historia
            </h1>

            <p style={{
              fontSize: "1.25rem",
              color: "#CBD5E1",
              lineHeight: 1.6,
              maxWidth: "700px",
              margin: "0 auto"
            }}>
              La mujer, los aprendizajes y la visión detrás del <span style={{ color: "#ECC369", fontWeight: "700" }}>Método MODO LÍDER</span>.
            </p>
          </div>
        </section>

        {/* Contenido Principal de Historia */}
        <section style={{ maxWidth: "1140px", margin: "4rem auto 0 auto", padding: "0 2rem" }}>
          
          {/* Grid: Foto Principal + Bloque Biográfico */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "3.5rem",
            alignItems: "start",
            marginBottom: "4.5rem"
          }}>
            
            {/* Texto Narrativo */}
            <div style={{ fontSize: "1.15rem", lineHeight: "1.85", color: "#E2E8F0" }}>
              
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.2rem",
                color: "#FFFFFF",
                marginBottom: "1.5rem",
                lineHeight: 1.2
              }}>
                El Punto de Quiebre: Cuando el talento no alcanza
              </h2>

              <p style={{ marginBottom: "1.6rem" }}>
                Durante años vi cómo profesionales brillantes, líderes y emprendedores con ideas extraordinarias se quedaban estancados en el camino. No por falta de talento, visión o capacidad de trabajo, sino por <strong>barreras invisibles de postergación, sobrecarga y dudas internas</strong> que los mantenían en una parálisis silenciosa.
              </p>

              <div style={{
                background: "rgba(22, 26, 37, 0.85)",
                borderLeft: "4px solid #D4AF37",
                padding: "1.6rem 2rem",
                borderRadius: "0 14px 14px 0",
                margin: "2rem 0",
                fontStyle: "italic",
                color: "#F7E7CE",
                fontSize: "1.15rem",
                boxShadow: "0 8px 25px rgba(0,0,0,0.3)"
              }}>
                &quot;Yo misma atravesé esos momentos donde sabía exactamente lo que tenía que hacer pero, por alguna razón, no lograba accionar con la contundencia que mi negocio demandaba.&quot;
              </div>

              <p style={{ marginBottom: "1.6rem" }}>
                Entendí que el problema nunca fue la falta de información: vivimos en una era saturada de cursos, libros y estrategias. El verdadero desafío está en la <strong>ejecución</strong>, en el dominio de nuestra propia mente y en cómo dirigimos la energía hacia las decisiones que mueven la aguja.
              </p>

              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.2rem",
                color: "#FFFFFF",
                marginTop: "2.5rem",
                marginBottom: "1.5rem",
                lineHeight: 1.2
              }}>
                La Fusión Científica y Estratégica
              </h2>

              <p style={{ marginBottom: "1.6rem" }}>
                Decidí profundizar en qué es lo que biológica y psicológicamente nos frena. Combiné los descubrimientos de las <strong>Neurociencias</strong> para entender cómo optimizar el foco atencional y desactivar el piloto automático del miedo, con la <strong>Psicología Cognitiva</strong> para desarmar creencias limitantes.
              </p>

              <p style={{ marginBottom: "1.6rem" }}>
                A esto le sumé mi <strong>formación profesional en negocios</strong> y mis más de <strong>10 años de experiencia</strong> trabajando con empresas y emprendedores. De esta convergencia nació el <strong>Método MODO LÍDER</strong>: un ecosistema integral que alinea mentalidad, comportamiento y estrategia comercial práctica.
              </p>

            </div>

            {/* Tarjeta de Romina con Foto */}
            <div style={{
              position: "sticky",
              top: "100px",
              background: "linear-gradient(145deg, #121624, #1B2133)",
              padding: "1.5rem",
              borderRadius: "24px",
              border: "1.5px solid rgba(212, 175, 55, 0.35)",
              boxShadow: "0 25px 50px rgba(0,0,0,0.6), 0 0 30px rgba(212, 175, 55, 0.15)",
              textAlign: "center"
            }}>
              <div style={{ overflow: "hidden", borderRadius: "18px", marginBottom: "1.2rem" }}>
                <img 
                  src="/romina2.png" 
                  alt="Romina Lorena Montiel" 
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} 
                />
              </div>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.4rem",
                fontWeight: "800",
                color: "#FFFFFF",
                marginBottom: "0.3rem"
              }}>
                Romina Lorena Montiel
              </h3>
              <p style={{ color: "#ECC369", fontSize: "0.95rem", fontWeight: "600", marginBottom: "1.2rem" }}>
                Mentora de Líderes &amp; Estratega de Negocios
              </p>

              <div style={{
                background: "rgba(0,0,0,0.3)",
                padding: "1rem",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.06)",
                fontSize: "0.9rem",
                color: "#CBD5E1",
                fontStyle: "italic"
              }}>
                &quot;Creá. Liderá. Impactá. Desde quién sos.&quot;
              </div>

              <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                marginTop: "1.5rem",
                paddingTop: "1.2rem",
                borderTop: "1px solid rgba(255,255,255,0.1)"
              }}>
                <img src="/logo modolider.png" alt="Sello Oficial" style={{ height: "45px", width: "45px", borderRadius: "50%" }} />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: "800", color: "#F7E7CE" }}>MÉTODO MODO LÍDER</div>
                  <div style={{ fontSize: "0.75rem", color: "#A0AEC0" }}>Metodología Registrada</div>
                </div>
              </div>
            </div>

          </div>

          {/* Bloque Destacado de Misión & Filosofía */}
          <div style={{
            background: "linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(22, 26, 37, 0.95) 100%)",
            border: "1.5px solid rgba(212, 175, 55, 0.4)",
            borderRadius: "24px",
            padding: "3.5rem 3rem",
            textAlign: "center",
            boxShadow: "0 20px 45px rgba(0,0,0,0.4)"
          }}>
            <span style={{
              fontSize: "0.85rem",
              fontWeight: "800",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#ECC369",
              display: "block",
              marginBottom: "0.8rem"
            }}>
              MI COMPROMISO CONTIGO
            </span>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.4rem",
              color: "#FFFFFF",
              marginBottom: "1.2rem"
            }}>
              Tu visión merece un sistema que la respalde
            </h2>
            <p style={{
              fontSize: "1.15rem",
              color: "#E2E8F0",
              maxWidth: "780px",
              margin: "0 auto 2.5rem auto",
              lineHeight: "1.7"
            }}>
              Mi misión es darte la claridad y el marco de acción exacto para que dirijas tu tiempo, superes la postergación y construyas un negocio de alto impacto con propósito y rentabilidad real.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem", flexWrap: "wrap" }}>
              <Link href="/#metodo" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "1rem 2.2rem",
                background: "linear-gradient(135deg, #F9D976 0%, #E9B642 50%, #C38B1E 100%)",
                color: "#0E121B",
                textDecoration: "none",
                fontWeight: "800",
                fontSize: "1.05rem",
                borderRadius: "50px",
                boxShadow: "0 10px 25px rgba(212, 175, 55, 0.35)"
              }}>
                <span>Conocer el Método</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
              
              <Link href="/curso" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "1rem 2.2rem",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#FFFFFF",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "1.05rem",
                borderRadius: "50px"
              }}>
                <span>🎓 Ver Curso &amp; Campus</span>
              </Link>
            </div>
          </div>

        </section>

      </main>
    </>
  );
}
