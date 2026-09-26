# 📋 PLAN MAESTRO DE DISEÑO, ESTRUCTURA Y ENTORNO DE LA APP — MÉTODO MODO LÍDER
**Documento Arquitectónico y Guía Oficial de UI/UX, Navegación y Ecosistema de la Plataforma**  
*Lic. Romina Lorena Montiel — Método Modo Líder*  
Última actualización: 26/09/2026

---

## 🎯 1. VISIÓN GENERAL Y PROPÓSITO DEL ENTORNO DE LA APP

La plataforma y el Campus Virtual del **Método MODO LÍDER** constituyen el entorno sagrado de estudio, autoliderazgo y crecimiento para las alumnas del programa troncal **"Emprender de Cero a Impacto y Ventas"** y de las mentorías de la **Lic. Romina Lorena Montiel**.

El entorno fue concebido con un estándar de **lujo sobrio y excelencia visual** (Dark Mode de alto contraste, tipografía Montserrat de alta legibilidad, acentos en Oro Maestro, Rubí/Coral, Amatista y Esmeralda). Su ingeniería garantiza una navegación **100% Mobile-First**: rápida, intuitiva y sin fricciones en pantallas de teléfonos celulares y computadoras de escritorio.

---

## 🏛️ 2. LINEAMIENTO UNIVERSAL Y PERMANENTE DE DISEÑO Y NAVEGACIÓN (REGLA DE ORO)

> ⚠️ **DIRECTIVA ARQUITECTÓNICA INMUTABLE:**  
> **Todas y cada una de las secciones, módulos y visores de la aplicación DEBEN mantener rigurosamente la misma estructura de diseño, jerarquía y comportamiento de navegación.**  
> Esta coherencia garantiza que cualquier alumna, sin importar la pantalla o dispositivo desde el que acceda, entienda de forma inmediata cómo navegar y aprovechar sus materiales.

### 📐 Estructura Universal por Módulo / Visor:
1. **📁 1. Grilla de Carpetas Arriba de Todo (`#carpetas`):**  
   - En la parte superior de la pantalla se despliega el menú de navegación por carpetas como tarjetas táctiles grandes y prestigiosas.
   - Cada pestaña o carpeta contiene: icono representativo, insignia de estado (*FREE PASS*, *⚡ ACCESO FREE*, *🔐 CLAVE VIP*, *MÓDULO BASE*), título principal en mayúsculas y descripción concisa.
   - La carpeta activa se ilumina con halo dorado, borde enriquecido y fondo contrastado.

2. **⬇️ 2. El Material se Despliega Abajo en la Misma Pantalla:**  
   - Al tocar o hacer clic sobre cualquier carpeta, el material completo se presenta debajo en la misma página, sin redirecciones confusas ni recargas molestas.
   - El contenido se ordena de manera estricta e inquebrantable en 3 pilares:
     - **🎬 1º Video Oficial:** Embebido en reproductor de alta definición HTML5 (con selector o playlist de partes si el módulo contiene varios videos grabados).
     - **🎙️ 2º Audio / Podcast:** Reproductor de sintonización y mentalidad en HTML5 con diseño dark integrado (sin botones de descarga de audio).
     - **📥 3º Materiales y Workbooks Descargables:** Materiales pedagógicos donde **únicamente los Workbooks oficiales en PDF son descargables**, acompañados de enlaces de visualización web interactiva ("👁️ Ver Online") y descarga directa ("⬇️ Descargar").

3. **🔝 3. Botones Obligatorios al Final de Todo el Material:**  
   - Al concluir el recorrido del material desplegado, se ubica siempre un contenedor de navegación claro con:
     - **Botón `↑ Regresar a las Carpetas de Estudio` (`.btn-return-folders`):** Realiza un scroll suave hacia la grilla superior `#carpetas` para que la alumna elija otra clase en un solo toque desde su celular.
     - **Botón `← Volver al Campus Principal`:** En los visores externos, permite retornar de inmediato al Hub central del Campus.

4. **🔐 4. Salida Segura en Bloqueos de Contenido:**  
   - Si un módulo requiere credenciales de Alumna Activa (VIP) y la usuaria no posee la clave, el modal o caja de acceso restringido cuenta de forma obligatoria con el botón visible **`← Volver al Campus Principal`**, impidiendo que la usuaria quede atascada.

---

## 🎬 3. ARQUITECTURA DEL HERO SUPERIOR, VIDEO DE BIENVENIDA Y BOTÓN "TU HOJA DE RUTA"

### A. Hero Superior del Campus
- **Título Oficial:** `CURSO: EMPRENDER DE CERO A IMPACTO Y VENTAS`.
- **Autoría:** Dictado por **Lic. Romina Lorena Montiel** (Licenciada en Administración, Neuropsicoeducadora y Mentora de Líderes).
- **Métricas Oficiales (Reemplazo definitivo de "Acceso Total"):**
  1. 🎬 **10+ Videos Reales** (Grabaciones y masterclasses).
  2. 🎙️ **PODCASTS: Desafíos Prácticos y +** (Episodios y audios de integración).
  3. 📄 **PDF + DOCX Descargas** (Workbooks, guías y hojas de trabajo).
- **Acceso a Directorio:** Botón redondo de alto impacto **"MIEMBROS ACTIVOS / COMPRAME ↗"** que enlaza al catálogo y directorio de emprendedoras.

### B. Video de Bienvenida & Botón "🗺️ Tu Hoja de Ruta"
1. **Espacio del Video de Bienvenida:**  
   - Reproductor cinematográfico HD centrado (`#welcomeVideoPlayer`) con la bienvenida oficial de Romina.
2. **Botón Directo e Inmediato Debajo del Video:**  
   - **`🗺️ Tu Hoja de Ruta →`** (`.btn-tu-hoja-de-ruta`): Botón dorado amplio, prominente y táctil que conduce al área dedicada de Roadmap (`/curso/roadmap`), manteniendo el Campus central ágil y sin secciones redundantes.
3. **Página Dedicada de Roadmap (`/curso/roadmap`):**
   - **1º Bloque (Imagen 1): Mensaje de Bienvenida e Instrucciones de Romina:**  
     - Card con estética nocturna y borde dorado (`.welcome-info-card`).
     - Avatar oficial de la Lic. Romina Lorena Montiel y su título de mentora.
     - Título: *"¡Bienvenida a tu espacio sagrado de transformación!"*.
     - Checklist de 3 pasos (Play al video, Bienvenida de Romina, Navegación de carpetas).
     - Botón de retorno rápido: **`📂 Ir a las Carpetas de Estudio ↓`** hacia `/campus#carpetas`.
   - **2º Bloque (Imagen 2): Tu Hoja de Ruta de 3 Pasos para Empezar (`.manifesto-card`):**  
     - **Paso 01: Mirá tu clase y completá el Workbook.**
     - **Paso 02: Coaching Grupal en Vivo.**
     - **Paso 03: Inspirate y Potenciate.**
   - **Continuación con el Método Completo:** Los 7 Pilares de Construcción y el desglose de las 17 clases.
4. **Comunidad y Manifiesto Oficial:**  
   - Tarjeta de invitación al **Grupo Oficial de WhatsApp de Emprendedoras Conscientes**.
   - Manifiesto institucional: *"Podemos ser emprendedoras. Pero mientras exploramos nuestros productos o servicios, también podemos entrenarnos en una mentalidad de empresaria. Y eso lo cambia todo."* con la firma de Romina.

---

## ⚡ 4. MINICURSO DE PROCRASTINACIÓN: BOTÓN "MINICURSO SALIR DE LA PROCRASTINACION FREE PASS"

El Minicurso **"Salir del Modo Procrastinación"** se presenta de forma destacada y autónoma en el Campus:
- **Botón Destacado sobre las Carpetas (`.btn-minicurso-freepass`):**  
  En lugar de ser una carpeta más en la grilla de módulos, se implementa como un botón protagónico de alta visibilidad:
  - Texto oficial: **`MINICURSO SALIR DE LA PROCRASTINACIÓN`**
  - Insignia luminosa: **`FREE PASS`**
  - Estilo: Borde y acentos verde esmeralda (`#10B981` / `#34D399`), fondo degradado oscuro y efecto hover brillante.
  - Al hacer clic: Activa el panel `#panel-procrastinacion` y realiza un desplazamiento suave hacia el contenido del minicurso.
- **Contenido del Panel Desplegable (`#panel-procrastinacion`):**
  1. **🎬 5 Videos Grabados con Playlist Interactiva:**
     - 1. Soñás en grande pero procrastinás (Video Principal).
     - 2. El sentimiento de culpa detrás de la procrastinación.
     - 3. Método de Stanford para empezar en 30s.
     - 4. El ciclo de la Procrastinación en 1 minuto.
     - 5. Tu mente es lo que te bloquea.
  2. **🧠 Módulo Especial: Neurociencia de la Procrastinación:**
     - Enlace directo a la **Guía Interactiva "Los 7 Arquetipos de la Procrastinación"** (`/materiales/neurociencia-procrastinacion.html`) con test de diagnóstico y estrategias de neuroplasticidad.
  3. **📄 5 Workbooks y Artículos Oficiales en PDF:**
     - *5 Pasos: Emoción tras la Procrastinación* (Diagnóstico).
     - *¿Qué tipo de procrastinadora eres?* (Test & Perfil).
     - *Primer Paso para Salir de la Procrastinación* (Guía práctica).
     - *Artículo: Método Primer Paso* (Artículo editorial).
     - *Artículo: Lic. Romina Lorena Montiel* (Manifiesto reflexivo).
     - Cada material cuenta con botón "👁️ Ver Online" y botón "⬇️ Descargar".
  4. **🔝 Botón de Retorno:** `↑ Regresar a carpetas de estudio del curso`.

---

## 🗂️ 5. LAS 4 ÁREAS DE ESTUDIO ESPECIALIZADAS (VISORES INDEPENDIENTES)

El ecosistema divide su material de estudio en 4 áreas funcionales, cada una alojada en su propio visor especializado y vinculado desde el Campus Hub:

```
METODOMODOLIDER/
├── campus_modo_lider.html         ← HUB CENTRAL DEL CAMPUS (Directorio, Bienvenida y Carpetas)
│
├── clases_visor.html              ← ÁREA 1: CURSO COMPLETO (Clases 1 a 5 Oficiales)
├── coaching_visor.html            ← ÁREA 2: COACHING GRUPAL CLASES GRABADAS (Intro, Martes, Miércoles)
├── emprendimiento_visor.html      ← ÁREA 3: MI EMPRENDIMIENTO (Networking en Vivo y Presentaciones)
└── mentalidad_visor.html          ← ÁREA 4: HERRAMIENTAS PARA CREAR MENTALIDAD CORRECTA (7 Audios)
```

### 🎓 ÁREA 1: CURSO COMPLETO (`clases_visor.html`)
Formación troncal con las 5 clases centrales del Método:
- **Carpeta 1: Emprender Conscientemente** (🔓 FREE PASS) — 2 Videos, 1 Podcast, Workbook Interactivo + PDF.
- **Carpeta 2: Propósito y Dirección** (🔓 FREE PASS) — 2 Videos, 1 Audio, Workbook Interactivo + PDF, Reto Cuadro del Propósito.
- **Carpeta 3: Propuesta de Valor y Posicionamiento** (🔐 VIP) — 3 Videos, 2 Audios, Workbook Interactivo + PDF.
- **Carpeta 4: Reconectar con mi Negocio y Volver a Mí** (🔐 VIP) — 1 Video, 1 Audio, Guía Oficial en PDF.
- **Carpeta 5: Cliente Ideal y Posicionamiento de Autoridad** (🔐 VIP) — Diapositivas, Workbook Interactivo + PDF.
- **Navegación:** Botón superior `#carpetas` y botones finales `↑ Regresar a las Carpetas de Estudio` + `← Volver al Campus Principal`.

### 👥 ÁREA 2: COACHING GRUPAL CLASES GRABADAS (`coaching_visor.html`)
Espacio exclusivo de mentoría colectiva y resolución de trabas en vivo con Romina Lorena Montiel:
- **Entorno Visual:** **100% NEGRO Y AMARILLO (Sin rojo / Sin coral)**.
- **Iconografía Oficial:** **Sin coronas (`👑` eliminadas por completo)**. Se utiliza el icono institucional de comunidad `👥` y de foco `🎯`.
- **Paleta Cromática:** Negro profundo `#07090E` / `#000000`, superficie `#0E121A`, amarillo vibrante `#FFD700`, gradiente oro `#FFF085` a `#FFD700`, y bordes luminosos `rgba(255, 215, 0, 0.35)`.
- **Navegación Superior en Cabecera (Header):**
  - Se sustituyó el icono/badge de "Alumna Verificada" por el botón directo: **`🎓 Ir a las Clases Teóricas →`** (`.hdr-teoricas-btn`), permitiendo a las alumnas alternar al instante entre el coaching y las clases teóricas troncales (`clases_visor.html`).
- **Arquitectura y Estructura Oficial de Diseño (Regla Institucional de Jerarquía):**
  - **Carpeta Contenedora Principal por Tema:** Cada ciclo de coaching se organiza dentro de una **Carpeta Grande del Tema** (`.theme-folder-master-box`) con el formato obligatorio:  
    **`TEMA: [NOMBRE DEL TEMA]`** (ejemplo actual: **`TEMA: VOLVER A MÍ`**).
  - **Eliminación de Carpeta 'Introducción' Aislada:** No se muestran carpetas sueltas de introducción.
  - **Subcarpetas Vinculadas a los Días de Coaching Asociados al Tema:** Dentro de la carpeta grande del tema se alojan las subcarpetas de los días de encuentro:
    - **Subcarpeta: GRUPO MARTES** (`#tab-coach-martes` / `#p-coach-martes`): Grabación completa en vivo (`ojcVKLS0Rzw`), Diario "15 Días para Volver a Mí", Reto "7 Días para Reconectar Conmigo" y Workbook Central interactivo/descargable.
    - **Subcarpeta: GRUPO MIÉRCOLES** (`#tab-coach-miercoles` / `#p-coach-miercoles`): Grabación completa en vivo (`O9Tf3gBkdFo`), Matriz de Valores, Protocolo de Autoliderazgo y Workbook Central interactivo/descargable.
  - **Despliegue y Retorno:** Al tocar cada subcarpeta, se abre el material correspondiente en la zona inferior, concluyendo siempre con el botón a Clases Teóricas y el botón obligatorio `Regresar a las Carpetas de Coaching`.

### 🚀 ÁREA 3: MI EMPRENDIMIENTO (`emprendimiento_visor.html`)
Networking colaborativo, visibilidad de marca y presentación de modelos de negocio:
- **Carpeta 1: Presentación en Vivo — Nos Presentamos y Presentamos Nuestros Emprendimientos** — Grabación de la sesión participativa, análisis de propuestas de valor y devoluciones en tiempo real de Romina.
- **Carpeta 2: Guía de Propuesta de Valor y Pitch** — Guía interactiva de comunicación de alto impacto y psicología del comprador consciente.
- **Identidad:** Acentos en Ámbar Dorado (`#FFD700`, `#F59E0B`).

### 🧠 ÁREA 4: HERRAMIENTAS PARA CREAR LA MENTALIDAD CORRECTA (`mentalidad_visor.html`)
Música para crear nuevas redes positivas, neuroplasticidad y frecuencias de foco creativo:
- **Pista 01:** *Creer en Vos y en tus Sueños Potencia tu Poder* (19:27 min) — Reprogramación y certeza interior.
- **Pista 02:** *Despierta tu Mente, Enfócate en tus Logros* (17:25 min) — Meditación guiada paso a paso por Romina.
- **Pista 03:** *Preparar tu Día y Reconfigurar tu Energía* (15:35 min) — Sintonización matutina proactiva.
- **Pista 04:** *Mantra para Conectar con tu Alma y Sanarla* (1:01:51 hrs) — Frecuencias armónicas y regeneración profunda.
- **Pista 05:** *Yo Me Bendigo* (04:20 min) — Autoliderazgo y decreto diario de alta potencia.
- **Pista 06:** *Yo Soy Sanación* (13:01 min) — Armonización somática y alivio del estrés.
- **Pista 07:** *Afrobeats de la Mañana: Alegría, Paz y Buena Energía* (1:25:21 hrs) — Sesión flow para trabajo creativo.
- **Identidad:** Acentos en Amatista / Violeta (`#8B5CF6`, `#C4B5FD`).

---

## 🎨 6. SISTEMA DE DISEÑO, PALETA CROMÁTICA Y TIPOGRAFÍA

| Elemento | Token / Valor | Aplicación |
|---|---|---|
| **Tipografía Oficial** | `Montserrat`, sans-serif (400, 600, 700, 800, 900) | Todo el texto, botones, titulares e interfaces |
| **Fondo Profundo** | `#07090E` / `#0A0A0F` / `#000000` | Fondos de página y contrastes maestros en negro |
| **Superficie de Tarjetas** | `#0E121C` / `#121622` | Cards, módulos y paneles interactivos |
| **Amarillo Vibrante / Oro** | `#FFD700` / `#FFF085` | **Coaching Grupal (entorno Negro y Amarillo, sin rojo)**, botones VIP |
| **Oro Maestro Primario** | `#D4AF37` / `#FCE08B` | Bordes, insignias del curso, botones primarios y logos |
| **Violeta / Neurociencia**| `#8B5CF6` / `#C4B5FD` | Mentalidad, frecuencias y neuroplasticidad |
| **Verde Esmeralda** | `#10B981` / `#34D399` | Insignias `FREE PASS` y `⚡ ACCESO FREE` |
| **Bordes de Lujo** | `rgba(255, 215, 0, 0.35)` | Delimitaciones luminosas doradas y amarillas |

---

## 🔄 7. REGLA ESTRICTA DE SINCRONIZACIÓN Y ESPEJO (PARIDAD TOTAL)

Para asegurar que cualquier despliegue (sea estático mediante HTML puro o dinámico a través de Next.js/React) sea idéntico en producción:

1. **Espejo entre Raíz y Carpeta `public/`:**  
   Todo cambio realizado en los archivos raíz:
   - `campus_modo_lider.html`
   - `clases_visor.html`
   - `coaching_visor.html`
   - `emprendimiento_visor.html`
   - `mentalidad_visor.html`  
   **debe replicarse de forma inmediata y automática en la carpeta `public/`**.

2. **Paridad con Next.js (`src/app/campus/CampusClient.jsx`):**  
   El componente React del Campus debe incorporar con exactitud la misma estructura de JSX, estados, botones ("Tu Hoja de Ruta", "Regresar a Carpetas"), clases CSS y paneles de contenido.

3. **Doble Repositorio Git y Despliegue en Vercel:**  
   Todo commit debe subirse a ambos remotes:
   - `origin`: `https://github.com/romimontiel/metodomodolider.git`
   - `deploy-vercel`: `https://github.com/romimontiel/rominalorenamontielmodolider.git`  
   Seguido del despliegue en producción con `npx vercel deploy --prod --yes`.

---

## 🔒 8. POLÍTICA ESTRICTA DE SEGURIDAD Y ACCESOS

1. **Confidencialidad Total:** Las credenciales y claves VIP **NUNCA se exponen en textos públicos ni en campos precargados**. Se envían de forma privada y exclusiva por correo electrónico a cada alumna activa.
2. **Validación Unificada:** La sesión de Alumna Activa se almacena de forma segura en `localStorage ('alumna_activa_modo_lider')`, compartiéndose entre el Campus Hub y los 4 visores especializados.
3. **Botón de Escape Obligatorio:** Todo diálogo o modal de contraseña dispone de un botón `← Volver al Campus Principal` para evitar bloqueos involuntarios.
