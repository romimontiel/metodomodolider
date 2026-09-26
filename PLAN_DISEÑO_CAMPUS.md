# 📋 PLAN DE DISEÑO Y ARQUITECTURA OFICIAL — CAMPUS MÉTODO MODO LÍDER
**Documento Maestro de Especificaciones, Arquitectura Pedagógica y Lineamientos de UI/UX**  
*Lic. Romina Lorena Montiel — Método Modo Líder*  
Última actualización: 26/09/2026

---

## 🎯 1. PROPÓSITO DEL CAMPUS
Plataforma de estudio, transformación y acompañamiento exclusivo para alumnas del programa **"Emprender de Cero a Impacto y Ventas"** y del ecosistema **Modo Líder**.

El campus brinda una experiencia formativa inmersiva, ordenada por carpetas de estudio y con visores interactivos de clases optimizados para dispositivos móviles (100% Mobile-First y Responsive).

---

## 🏛️ 2. LINEAMIENTO OBLIGATORIO Y PERMANENTE DE DISEÑO Y ORGANIZACIÓN DE SECCIONES

> ⚠️ **REGLA DE ORO DE EXPERIENCIA DE USUARIO (UX) Y DISEÑO VISUAL:**  
> **Todas y cada una de las secciones, visores y módulos del Campus Modo Líder DEBEN seguir exactamente la misma estructura de diseño y navegación.**  
> Esta directiva es obligatoria tanto para la versión de celular como para escritorio.

### Estructura Universal Inmutable por Sección:
1. **📁 1. Carpetas de Estudio Arriba de Todo:**  
   En la cabecera del área o visor se presenta la grilla/lista de **Carpetas de Estudio** (`#carpetas`) como tarjetas táctiles grandes, limpias y prestigiosas (Icono, Título en mayúsculas, Badge de estado como *FREE PASS*, *CLAVE VIP* o *MÓDULO BASE*, y breve subtítulo descriptivo). Idéntico al patrón visual del Hub de Campus.
2. **⬇️ 2. El Material se Despliega Abajo:**  
   Al tocar o hacer clic en cualquier carpeta, la tarjeta se activa visualmente con iluminación dorada/coral y el material completo de esa carpeta **se despliega abajo** en la misma pantalla sin redirecciones confusas, respetando siempre la jerarquía de 3 pilares:
   - **🎬 1º Video Oficial:** Embebido en reproductor interno de alta definición (con selector de partes si la sesión es multi-video).
   - **🎙️ 2º Audio / Podcast:** Reproductor de sintonización y mentalidad en HTML5 sin botones de descarga.
   - **📥 3º Contenido Descargable:** Materiales de trabajo donde **únicamente los Workbooks oficiales en PDF son descargables**, junto con enlaces a sus versiones web interactivas y presentaciones.
3. **🔝 3. Botones Obligatorios al Final de Todo el Material:**  
   Al pie de cada carpeta desplegada se ubica un contenedor de navegación claro con:
   - **Botón `↑ Regresar a las Carpetas de Estudio`:** Realiza un scroll suave automático hacia la grilla superior de carpetas para que la alumna pueda seleccionar otro módulo con un solo toque desde su celular.
   - **Botón `← Volver al Campus Principal`:** Permite retornar de inmediato al portal central en cualquier momento.
4. **🔐 4. Salida Clara en Bloqueos de Seguridad:**  
   Si una carpeta requiere credenciales de Alumna Activa y la usuaria no posee la contraseña, el modal de bloqueo cuenta siempre con un botón visible y destacado: **`← Volver al Campus Principal`**, asegurando que jamás quede atrapada en una pantalla cerrada.

---

## 🗂️ 3. LAS 4 ÁREAS DE ESTUDIO ESPECIALIZADAS (VISORES INDEPENDIENTES)

Para garantizar una navegación limpia, pedagógica y sin saturación, el campus se organiza en **4 Áreas de Estudio Dedicadas e Independientes**:

```
METODOMODOLIDER/
├── campus_modo_lider.html         ← Hub Central del Campus (Directorio de Carpetas)
│
├── clases_visor.html              ← ÁREA 1: CURSO COMPLETO (Clases 1 a 5 Oficiales)
├── coaching_visor.html            ← ÁREA 2: COACHING GRUPAL CLASES GRABADAS (Intro, Martes, Miércoles)
├── emprendimiento_visor.html      ← ÁREA 3: MI EMPRENDIMIENTO (Networking en Vivo y Presentaciones)
└── mentalidad_visor.html          ← ÁREA 4: HERRAMIENTAS PARA CREAR MENTALIDAD CORRECTA (7 Audios)
```

---

## 📁 4. DETALLE DE CONTENIDOS POR ÁREA

### 🎓 ÁREA 1: CURSO COMPLETO (`clases_visor.html`)
Formación troncal con las 5 clases centrales del Método:
- **Carpeta 1: Emprender Conscientemente** (🔓 FREE PASS) — 2 Videos, 1 Podcast, Workbook Interactivo + PDF.
- **Carpeta 2: Propósito y Dirección** (🔓 FREE PASS) — 2 Videos, 1 Audio, Workbook Interactivo + PDF, Reto Cuadro del Propósito.
- **Carpeta 3: Propuesta de Valor y Posicionamiento** (🔐 VIP) — 3 Videos, 2 Audios, Workbook Interactivo + PDF.
- **Carpeta 4: Reconectar con mi Negocio y Volver a Mí** (🔐 VIP) — 1 Video, 1 Audio, Guía Oficial en PDF.
- **Carpeta 5: Cliente Ideal y Posicionamiento de Autoridad** (🔐 VIP) — Diapositivas, Workbook Interactivo + PDF.

---

### 👑 ÁREA 2: COACHING GRUPAL CLASES GRABADAS (`coaching_visor.html`)
Espacio exclusivo de transformación interior y mentoría colectiva con Romina Lorena Montiel:
- **Carpeta 1: Introducción — ¿Para qué regresar a mí?** — Masterclass en video, audio de sintonización, Workbook "Mis Valores, Mi Vida y Mi Negocio" interactivo y descargable.
- **Carpeta 2: Volver a Mí · Grupo Martes** — Grabación completa en vivo, Diario "15 Días para Volver a Mí", Reto "7 Días para Reconectar Conmigo".
- **Carpeta 3: Volver a Mí · Grupo Miércoles** — Grabación completa en vivo, matriz de valores y protocolo de autoliderazgo.

---

### 🚀 ÁREA 3: MI EMPRENDIMIENTO (`emprendimiento_visor.html`)
Comunidad activa, networking y visibilidad de proyectos:
- **Carpeta 1: Presentación en Vivo — Nos Presentamos y Presentamos Nuestros Emprendimientos** — Grabación de la sesión participativa con análisis de propuestas de valor y devoluciones en tiempo real.
- **Carpeta 2: Guía de Propuesta de Valor y Pitch** — Guía interactiva de comunicación de alto impacto y psicología del comprador consciente.

---

### 🧠 ÁREA 4: HERRAMIENTAS PARA CREAR LA MENTALIDAD CORRECTA (`mentalidad_visor.html`)
Colección de 7 pistas maestras seleccionadas por Romina Lorena Montiel para neuroplasticidad, sintonización y foco de alto rendimiento:
- **Pista 01:** *Creer en Vos y en tus Sueños Potencia tu Poder* (19:27 min) — Reprogramación y certeza interior.
- **Pista 02:** *Despierta tu Mente, Enfócate en tus Logros* (17:25 min) — Meditación guiada paso a paso por Romina.
- **Pista 03:** *Preparar tu Día y Reconfigurar tu Energía* (15:35 min) — Sintonización matutina proactiva.
- **Pista 04:** *Mantra para Conectar con tu Alma y Sanarla* (1:01:51 hrs) — Frecuencias armónicas y regeneración profunda.
- **Pista 05:** *Yo Me Bendigo* (04:20 min) — Autoliderazgo y decreto diario de alta potencia.
- **Pista 06:** *Yo Soy Sanación* (13:01 min) — Armonización somática y alivio del estrés.
- **Pista 07:** *Afrobeats de la Mañana: Alegría, Paz y Buena Energía* (1:25:21 hrs) — Sesión flow para trabajo creativo.

---

## 🎨 5. PALETA CROMÁTICA INSTITUCIONAL Y TIPOGRAFÍA

- **Tipografía Oficial:** `Montserrat` (Google Fonts: regular 400, semi-bold 600, bold 700, black 900).
- **Fondo Base:** Negro noche `#07090E` y grafito profundo `#0E121C` con gradientes radiales sutiles.
- **Acento Dorado Maestro (Curso & Liderazgo):**
  - Oro Primario: `#D4AF37`
  - Oro Brillante: `#FFD700`
  - Gradiente Dorado: `linear-gradient(135deg, #FCE08B 0%, #E5B544 50%, #B88214 100%)`
- **Acento Coral / Rubí (Coaching Grupal):**
  - Coral Primario: `#FF5A78` / `#E94560`
  - Gradiente Coral: `linear-gradient(135deg, #FF758C 0%, #FF5A78 50%, #E94560 100%)`
- **Acento Amatista / Violeta (Mentalidad & Frecuencias):**
  - Violeta Suave: `#C4B5FD`
  - Violeta Profundo: `#8B5CF6`
  - Gradiente Violeta: `linear-gradient(135deg, #C4B5FD 0%, #8B5CF6 50%, #6D28D9 100%)`
- **Acento Esmeralda (Free Pass / Verificado):** `#10B981` y `#34D399`.

---

## 🔒 6. POLÍTICA ESTRICTA DE SEGURIDAD Y ACCESOS

1. **Confidencialidad Total:** Las credenciales y claves VIP **NUNCA se exponen en textos públicos ni en campos precargados**. Se envían de forma privada y exclusiva por correo electrónico a cada alumna activa.
2. **Validación Unificada:** La sesión de Alumna Activa se almacena de forma segura en `localStorage ('alumna_activa_modo_lider')`, compartiéndose entre los 4 visores especializados.
3. **Botón de Escape Obligatorio:** Todo diálogo o modal de contraseña dispone de un botón `← Volver al Campus Principal` para evitar bloqueos involuntarios.
