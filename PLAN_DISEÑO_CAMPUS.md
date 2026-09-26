# 📋 PLAN DE DISEÑO — CAMPUS MÉTODO MODO LÍDER
**Archivo de referencia y diseño oficial del proyecto**  
*Lic. Romina Lorena Montiel — Método Modo Líder*  
Última actualización: 25/09/2026

---

## 🎯 1. PROPÓSITO DEL CAMPUS
Plataforma de estudio, transformación y acompañamiento exclusivo para alumnas del programa **"Emprender de Cero a Impacto y Ventas"** y del ecosistema **Modo Líder**.

El campus brinda una experiencia formativa inmersiva, ordenada por carpetas de estudio y con un visor interactivo de clases accesible tanto en computadoras de escritorio como en dispositivos móviles (100% responsive).

---

## 🗂️ 2. ARQUITECTURA DE ARCHIVOS Y RUTAS

```
METODOMODOLIDER/
├── campus_modo_lider.html        ← Portal Principal de Estudio (Hub de carpetas)
├── clases_visor.html             ← Visor de Clases carpeta a carpeta
├── PLAN_DISEÑO_CAMPUS.md         ← Este documento (Reglas maestras de diseño)
├── clase1_emprender_conscientemente/
├── clase2_proposito_y_direccion/
├── CURSO EMPRENDER DE CERO A IMPACTO Y VENTAS/
│   ├── CLASE 3 Propuesta de Valor y Posicionamiento/
│   ├── CLASE 4 Regresar a mi y reconectar con mi Negocio/
│   ├── CLASE 5 Cliente Ideal y Posicionamiento/
│   ├── COACHING GRUPAL/
│   │   └── ¿QUE ES SER UNA EMPRENDEDORA CONSCIENTE/
│   │       └── COACHING GRUPAL 1/
│   └── VIDEOS DE CLASES COMPLETAS/
├── introduccion/
├── testimonios/
├── videos_campus/
└── audios/
```

---

## 📁 3. ZONA DE CARPETAS DE ESTUDIO (campus_modo_lider.html)

En la sección **"Carpetas de Estudio del Curso"** se encuentran las 7 áreas clave:

| # | Carpeta | Icono | Tipo de Acceso | Estado |
|---|---|---|---|---|
| 1 | **INTRODUCCIÓN** | 📁 | Abierto / Libre | ✅ Activa con video y podcast |
| 2 | **MINICURSO PROCRASTINACIÓN** | ⚡ | Abierto / Libre | ✅ Activa con masterclass |
| 3 | **CLASE 1** | 📁 | 🔓 FREE PASS (Acceso Libre) | ✅ Activa (Emprender Conscientemente) |
| 4 | **CLASE 2** | 📁 | 🔓 FREE PASS (Acceso Libre) | ✅ Activa (Propósito y Dirección) |
| 5 | **DESAFÍOS** | 🎯 | Abierto / Libre | ✅ Retos prácticos |
| 6 | **TESTIMONIOS** | 📁 | Abierto / Libre | ✅ Casos de éxito y entrevistas |
| 7 | **ACCESO A CURSO COMPLETO** | 🔐 | Fondo amarillo, letras negras. Solicita clave de acceso | ✅ Navegación a `clases_visor.html` |
| 8 | **COACHING GRUPAL CLASES GRABADAS** | 👥 | 🔐 Protegido | ✅ Acceso exclusivo para alumnas activas |

---

## 🎬 4. VISOR DE CLASES (clases_visor.html) Y POLÍTICAS DE ACCESO

### Estructura de Secciones Carpeta a Carpeta:

| Sección / Carpeta | Nivel | Credenciales Requeridas |
|---|---|---|
| **Carpeta 1: Emprender Conscientemente** | Nivel Inicial | 🔓 **FREE PASS** (Libre acceso) |
| **Carpeta 2: Propósito y Dirección** | Nivel Inicial | 🔓 **FREE PASS** (Libre acceso) |
| **Carpeta 3: Propuesta de Valor y Posicionamiento** | Avanzado Alumna | **🔐 REQUIERE ACCESO** |
| **Carpeta 4: Regresar a mí y Reconectar con mi Negocio** | Avanzado Alumna | **🔐 REQUIERE ACCESO** |
| **Carpeta 5: Cliente Ideal y Posicionamiento** | Avanzado Alumna | **🔐 REQUIERE ACCESO** |
| **👑 COACHING GRUPAL CLASES GRABADAS:** | | |
| ↳ **Introducción: ¿PARA qué REGRESAR a mí?** | Acompañamiento VIP | **🔐 REQUIERE ACCESO** |
| ↳ **Volver a Mí — Grupo Martes** | Acompañamiento VIP | **🔐 REQUIERE ACCESO** |
| ↳ **Volver a Mí — Grupo Miércoles** | Acompañamiento VIP | **🔐 REQUIERE ACCESO** |
| **🚀 MI EMPRENDIMIENTO (Networking en Vivo)** | Comunidad Activa | **🔐 REQUIERE ACCESO** |
| **🧠 MÚSICA PARA CREAR NUEVAS REDES POSITIVAS** | Reprogramación VIP | **🔐 REQUIERE ACCESO** (7 Audios de Foco) |

---

### 📱 JERARQUÍA Y EXPERIENCIA MÓVIL OBLIGATORIA (DISPOSITIVOS CELULARES):

> 📌 **REGLA DE ARQUITECTURA MÓVIL EN EL VISOR DE CLASES:**  
> En vista para teléfonos celulares y tablets, la navegación y el contenido deben respetar estrictamente el siguiente patrón de diseño:
>
> 1. **📁 Carpetas Arriba de Todo (Barra Superior Sticky):**  
>    El selector de carpetas (`.mob-bar`) se ubica en la parte superior fija de la pantalla, pegado justo debajo del encabezado institucional (`position: sticky; top: 62px; z-index: 150;`), con efecto *backdrop-filter* translúcido y deslizamiento táctil horizontal fluido. La alumna tiene siempre a la vista todas las carpetas del curso para cambiar de módulo en cualquier instante sin necesidad de scroll vertical excesivo.
>
> 2. **⬇️ Despliegue Vertical Estricto del Contenido por Carpeta:**  
>    Al seleccionar cualquier carpeta, el contenido se despliega hacia abajo siguiendo de forma obligatoria y secuencial el siguiente orden pedagógico (idéntico en todas las áreas del curso):
>    - **🎬 1º EL VIDEO DE CLASE:** Reproductor de video oficial embebido al tope del módulo (grabación en vivo o clase en video HD) con sus botones de selección de partes.
>    - **🎙️ 2º EL AUDIO / PODCAST:** Reproductor HTML5 interno de sintonización y mentalidad ubicado inmediatamente debajo del video, sin botones de descarga.
>    - **📥 3º EL CONTENIDO DESCARGABLE:** Bloque de Materiales y Workbooks donde **únicamente los Workbooks oficiales en PDF son descargables**, junto con el acceso a sus versiones interactivas online y presentaciones web.
>    - **🧭 4º NAVEGACIÓN INFERIOR:** Botones para avanzar a la carpeta correlativa o volver al Campus Principal.

---

## 🔐 5. SISTEMA DE AUTENTICACIÓN Y CREDENCIALES

Para proteger el contenido exclusivo a partir de la Clase 3 y los Coachings Grupales, el campus implementa un sistema de validación integrado:

### ⛔ POLÍTICA ESTRICTA DE SEGURIDAD (CONFIDENCIALIDAD TOTAL):
> **NO COLOCAR LAS CONTRASEÑAS EN NINGÚN CASO EN LA INTERFAZ NI EN TEXTOS PÚBLICOS.**  
> Las contraseñas y accesos son confidenciales y **SE ENVÍAN EXCLUSIVAMENTE POR CORREO ELECTRÓNICO** a cada alumna activa al momento de su inscripción. Ningún campo, formulario, modal o placeholder del campus debe sugerir, precargar ni mostrar las claves.

### Reglas de funcionamiento:
1. Al intentar hacer clic en la **Clase 3**, **Clase 4**, **Clase 5**, en **COACHING GRUPAL** o en **MI EMPRENDIMIENTO**, si la alumna no ha iniciado sesión, se despliega automáticamente una ventana modal elegante y profesional pidiendo su usuario y clave recibida por correo.
2. La validación se persiste en `localStorage` del navegador del dispositivo.
3. Una vez autenticada, la alumna navega libremente por todos los videos, audios y workbooks de las clases desbloqueadas y los coachings sin necesidad de reingresar las credenciales.
4. Se provee un indicador visual de estado en el encabezado (*"Alumna Verificada ✅"*) con opción de cerrar sesión.
5. **Botón Obligatorio de Retorno al Campus:** Todo modal de acceso (tanto en el portal general como en el visor de clases) dispone de forma clara y visible en la parte inferior de un botón destacado: **"← Volver al Campus Principal"**. Esto garantiza que si una alumna no conoce o no tiene a mano su contraseña recibida por correo, pueda retornar inmediatamente a los contenidos libres (Free Pass) sin fricción ni quedar atrapada en el formulario.

---

## 📥 6. POLÍTICA ESTRICTA DE DESCARGAS Y REPRODUCTORES

### ⛔ REGLA FUNDAMENTAL DE DESCARGAS:
> **SOLO EL WORKBOOK SE PUEDE BAJAR.**  
> Ningún otro archivo (videos, audios, presentaciones PPTX, textos introductorios, retos visuales) tendrá enlace ni botón de descarga directa para las usuarias.

| Tipo de Recurso | ¿Se puede Ver Online? | ¿Se puede Descargar? | Comportamiento en la Interfaz |
|---|:---:|:---:|---|
| **Workbooks (PDF)** | ✅ Sí | **✅ SÍ (ÚNICO PERMITIDO)** | Botón `"Descargar Workbook PDF"` y `"Ver Online"` |
| **Videos de Clase** | ✅ Sí | ❌ **NO** | Embebidos en reproductor interno con atributo `controlsList="nodownload"` |
| **Audios / Podcasts** | ✅ Sí | ❌ **NO** | Reproductor HTML5 interno sin botón de descarga |
| **Presentaciones (PPTX/PDF)** | ✅ Sí | ❌ **NO** | Visualizador web interactivo online |
| **Introducciones Escritas** | ✅ Sí | ❌ **NO** | Lectura directa en el visor |

---

## 🚫 7. REGLA ESTRICTA DE VIDEOS (PROHIBICIÓN TOTAL DE LA OPCIÓN DE MIRAR EN YOUTUBE)

> ⛔ **NO PUEDE EXISTIR LA OPCIÓN DE MIRAR EN YOUTUBE BAJO NINGÚN CONCEPTO.**  
> Todos los videos del Método Modo Líder deben reproducirse **exclusiva y obligatoriamente dentro del reproductor interno del campus**.  
> Está terminantemente prohibido incluir:
> - Botones, enlaces o textos del tipo *"Mirar en YouTube"*, *"Ver en YouTube"*, *"Abrir en YouTube"* o *"Ver en pestaña externa"*.
> - Badges, rótulos o indicadores con la palabra *"YouTube Oficial HD"* (se denominan siempre *"Video Oficial HD"* o *"Clase en Video HD"*).
> - Redirecciones de cualquier tipo a enlaces externos de YouTube (`youtu.be` o `youtube.com`).
> - Parámetros o enlaces de descarga/apertura externa en scripts (`driveDirectBtn`, `ytUrl`, etc.).

### Implementación técnica en todos los visores:
1. **Embebido Seguro:** Todos los iframes utilizan el reproductor embebido sin cookies (`https://www.youtube-nocookie.com/embed/...`) con parámetros de contención `rel=0&modestbranding=1&controls=1&showinfo=0`.
2. **Sin Botones Externos:** Ningún visor posee botones `driveDirectBtn`, enlaces hacia YouTube ni opciones de derivación a plataformas externas.
3. **Nomenclatura Institucional Limpia:** Todas las barras de información y badges indican *"Video Oficial HD"*, eliminando cualquier mención publicitaria o externa a YouTube.
4. **Intercambio Interno:** Al alternar entre clases, grabaciones o módulos, el cambio de video se realiza modificando únicamente el `src` del reproductor embebido dentro del propio contenedor, manteniendo a la alumna 100% inmersa en el campus.

---

## 👥 8. SECTOR ESPECIAL: COACHING GRUPAL CLASES GRABADAS

Este espacio está reservado para que las alumnas activas revivan y estudien los encuentros en vivo con Romina. Se estructura en subcarpetas temáticas especializadas:

- **Ubicación:** Disponible tanto como carpeta destacada en el campus y como sección exclusiva en el visor de clases.
- **Acceso:** **🔐 Protegido** (Las contraseñas no se publican en el sitio; **se envían exclusivamente por correo electrónico** a cada alumna activa).
- **Carpetas Integradas:**
  1. **Carpeta: Introducción — ¿PARA qué REGRESAR a mí?**:
     * Video introductorio oficial (`REGRESAR A MI Y RECONECTAR CON MI NEGOCIO.mp4`).
     * Audio oficial de reflexión y anclaje (`QUE PASO EN ESTA CLASE.mpeg`).
     * **Workbook: 7 Días para Reconectar Conmigo** (Cuaderno práctico oficial descargable en PDF).
     * **Guía Oficial: Volver a Mí y Reconectar con mi Negocio** (Lectura online exclusiva).
  2. **Carpeta: Volver a Mí — Grupo Martes** *(Valores, Identidad y Autoliderazgo)*:
     * Grabación en video de la sesión en vivo (YouTube embebido: `ojcVKLS0Rzw`).
     * **Workbook: Mis Valores, Mi Vida y Mi Negocio** (Formato interactivo HTML y PDF descargable).
     * **Guía Oficial: Volver a Mí y Reconectar con mi Negocio** (Lectura online exclusiva).
  3. **Carpeta: Volver a Mí — Grupo Miércoles** *(Valores, Identidad y Autoliderazgo)*:
     * Grabación en video de la sesión en vivo (YouTube embebido: `O9Tf3gBkdFo`).
     * **Workbook: Mis Valores, Mi Vida y Mi Negocio** (Formato interactivo HTML y PDF descargable).
     * **Guía Oficial: Volver a Mí y Reconectar con mi Negocio** (Lectura online exclusiva).

---

## 🚀 8.1 CARPETA APARTE: MI EMPRENDIMIENTO

Ubicada inmediatamente después de las sesiones de Coaching Grupal, esta carpeta especial funciona como espacio de comunidad, networking y sinergia:

- **Contenido Principal:** Clase grabada *"Nos Presentamos y Presentamos Nuestros Emprendimientos"* (YouTube embebido: `uincuU4f_xg`).
- **Propósito:** Ronda estratégica y participativa en vivo de alumnas presentando sus proyectos, desafíos y modelos de negocio con mentoría directa de Romina.
- **Acceso:** **🔐 Protegido** (Alumnas Activas).

## ☁️ 9. INTEGRACIÓN DE RECURSOS DESDE GOOGLE DRIVE

La Lic. Romina Lorena Montiel incorporará periódicamente nuevas carpetas, videos y materiales a través de su carpeta oficial de Google Drive.

### Protocolo de actualización técnica:
1. **Nuevos videos:** Se vinculan mediante enlace de previsualización protegido de Drive (`/preview`) o se procesan para el reproductor interno del campus, garantizando que nunca se expongan botones externos de descarga o navegación hacia YouTube.
2. **Nuevos workbooks:** Se generan en formato PDF institucional (estilo oficial MODO LÍDER: tipografía Montserrat, grafito oscuro `#07090E`, dorado `#D4AF37`, coral `#FF5A78`) y se habilita su botón de descarga.
3. **Nuevas clases:** Se habilitan en el visor asignando la protección de credenciales correspondiente.

---

## 📱 10. ESTÁNDARES DE DISEÑO VISUAL Y EXPERIENCIA MÓVIL

- **Tipografía Institucional:** Montserrat (Google Fonts, pesos 400 a 900).
- **Paleta de Colores:**
  * Fondo Principal: `#07090E` (grafito profundo con gradientes sutiles)
  * Superficies y Tarjetas: `#151B28` y `#0E121C`
  * Dorado Institucional: `#D4AF37` / Gradiente Dorado `#FCE08B → #E5B544 → #B88214`
  * Coral de Acento / Energía: `#FF5A78` / `#E94560`
  * Verde Éxito: `#10B981`
  * Texto Principal: `#F8FAFC`
  * Texto Secundario: `#94A3B8`
- **Experiencia Móvil (Responsive):**
  * Toda la navegación, pestañas, modales de acceso y reproductores están adaptados a pantallas táctiles de celulares.
  * Barra de acceso rápido por chips deslizables en móviles.
  * Botones de tamaño táctil mínimo de 44px de alto.
  * Modales con ajuste dinámico y prevención de desborde de pantalla.

---

## 💻 11. STACK TECNOLÓGICO Y ARQUITECTURA TÉCNICA

El desarrollo del Campus Método Modo Líder y sus módulos formativos está construido bajo estándares modernos de alto rendimiento, ligereza extrema, seguridad y portabilidad:

### 1. Framework y Núcleo Web
- **Next.js 16 (App Router):** Arquitectura híbrida con Server Components y Client Components (`'use client'`) para máxima velocidad de respuesta y modularidad.
- **React 19:** Biblioteca base (`react`, `react-dom`) para la reactividad de componentes interactivos y gestión de vistas en tiempo real.
- **JavaScript Moderno (ES6+ / JSX):** Código estructurado, asíncrono y desacoplado, sin sobrecargas de dependencias innecesarias.

### 2. Estructura y Estilos (Vanilla-First)
- **HTML5 Semántico Puro:** Para los visores de estudio autónomos (`campus_modo_lider.html`, `clases_visor.html`, intros interactivas y presentaciones) garantizando carga instantánea, independencia de servidor y accesibilidad universal.
- **Vanilla CSS3 Avanzado:**
  - Variables nativas CSS (Design Tokens de marca) para paleta institucional, bordes, radios y sombras.
  - Maquetación con **CSS Grid** y **Flexbox** fluidos.
  - Efectos visuales de vanguardia: **Glassmorphism** (`backdrop-filter: blur`), gradientes dorados y corales, y microanimaciones suaves (`@keyframes`).
  - **Cero dependencias externas:** Sin frameworks pesados ni TailwindCSS, asegurando control milimétrico del diseño y peso mínimo en transferencia.
- **Adaptabilidad 100% Mobile-First:** Experiencia táctil optimizada en smartphones y tablets, con chips deslizables horizontales y áreas de toque ergonómicas (mínimo 44px).
- **Modo Editorial e Impresión (@media print):** Maquetación A4 limpia en los Workbooks interactivos; al imprimir o exportar a PDF se suprimen automáticamente barras de navegación, botones y fondos pesados, dejando los renglones y cajas listas para escritura manual.

### 3. Lógica de Interfaz y Autenticación en Cliente
- **Vanilla JavaScript:** Control de navegación de paneles (`c-panel`), sincronización entre barras móviles y barra lateral de escritorio, y control unificado de reproductores multimedia.
- **Gestión de Sesión:** Persistencia de estado de alumna verificada mediante `localStorage` en el navegador del dispositivo, evitando bloqueos por latencia de red.
- **Seguridad y Confidencialidad:** Modales de acceso protegidos; las credenciales son confidenciales y se envían de forma privada y exclusiva por correo electrónico.

### 4. Reproducción Multimedia y Protección de Propiedad Intelectual
- **Video Seguro en Contenedor Interno:** Reproductores embebidos bajo modo sin cookies (`youtube-nocookie.com/embed/...`) con parámetros de contención (`rel=0&modestbranding=1&controls=1&showinfo=0`). Prohibición absoluta de botones o enlaces de derivación externa hacia YouTube o plataformas terceras.
- **Audio HTML5 Nativo:** Elementos `<audio>` con directiva `controlsList="nodownload"` y prevención de clic derecho/menú contextual.
- **Política Restrictiva de Descargas:** Solo los Workbooks oficiales en PDF cuentan con autorización y botones de descarga activa (`download`). Los videos, audios y presentaciones son de visualización exclusiva dentro de la plataforma.

### 5. Herramientas de Automatización Editorial (Backend & Tooling)
- **Python 3:** Scripts utilitarios para compilación de materiales, conversión y generación automatizada de Workbooks oficiales (`python-docx`, maquetación documental y generación de PDFs alineados con la identidad visual del método).

### 6. Despliegue, Infraestructura y Distribución (CDN)
- **Hosting & Despliegue:** **Vercel** con integración continua, optimización automática en el Edge y serverless endpoints.
- **Assets Estáticos:** Directorio estructurado `/public` para distribución de PDFs, audios en streaming, portadas en alta resolución y recursos gráficos.
- **Tipografía Web:** **Google Fonts (Montserrat)** en pesos 400 a 900 para consistencia institucional en cualquier navegador y sistema operativo.

---

*Documento técnico de diseño — Campus Método Modo Líder — Lic. Romina Lorena Montiel*
