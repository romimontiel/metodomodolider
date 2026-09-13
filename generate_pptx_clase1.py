import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE

def create_presentation():
    prs = Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]

    # Paleta de colores MODO LÍDER
    C_DARK_NAVY = RGBColor(14, 18, 27)      # #0E121B (fondo oscuro lujo)
    C_SURFACE_DARK = RGBColor(22, 26, 37)   # #161A25
    C_LIGHT_BG = RGBColor(248, 249, 251)    # #F8F9FB (fondo claro limpio y moderno)
    C_CARD_WHITE = RGBColor(255, 255, 255)  # #FFFFFF
    C_GOLD = RGBColor(212, 175, 55)         # #D4AF37
    C_GOLD_DARK = RGBColor(180, 135, 30)    # #B4871E
    C_GOLD_BG = RGBColor(254, 249, 235)     # #FEF9EB
    C_CORAL = RGBColor(233, 69, 96)         # #E94560
    C_CORAL_BG = RGBColor(255, 243, 245)    # #FFF3F5
    C_EMERALD = RGBColor(16, 149, 106)      # #10956A
    C_EMERALD_BG = RGBColor(238, 250, 244)  # #EEFAF4
    C_TEXT_DARK = RGBColor(27, 31, 42)      # #1B1F2A
    C_TEXT_MUTED = RGBColor(90, 100, 115)   # #5A6473
    C_TEXT_LIGHT = RGBColor(245, 245, 247)  # #F5F5F7
    C_BORDER_LIGHT = RGBColor(226, 230, 238)# #E2E6EE

    FONT_MAIN = "Montserrat"

    def set_bg(slide, color):
        bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
        bg.fill.solid()
        bg.fill.fore_color.rgb = color
        bg.line.fill.background()
        return bg

    def add_header(slide, title_text, category_text="CLASE 1 • EL EMPRESARIO CONSCIENTE", is_dark=False):
        # Header category
        cat_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.4), Inches(11.733), Inches(0.35))
        tf_c = cat_box.text_frame
        tf_c.word_wrap = True
        tf_c.margin_left = tf_c.margin_top = tf_c.margin_right = tf_c.margin_bottom = 0
        p_c = tf_c.paragraphs[0]
        p_c.text = category_text.upper()
        p_c.font.name = FONT_MAIN
        p_c.font.size = Pt(10)
        p_c.font.bold = True
        p_c.font.color.rgb = C_GOLD if is_dark else C_GOLD_DARK

        # Main title
        t_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.75), Inches(11.733), Inches(0.85))
        tf_t = t_box.text_frame
        tf_t.word_wrap = True
        tf_t.margin_left = tf_t.margin_top = tf_t.margin_right = tf_t.margin_bottom = 0
        p_t = tf_t.paragraphs[0]
        p_t.text = title_text
        p_t.font.name = FONT_MAIN
        p_t.font.size = Pt(21)
        p_t.font.bold = True
        p_t.font.color.rgb = C_TEXT_LIGHT if is_dark else C_TEXT_DARK

    def add_card(slide, left, top, width, height, bg_color=C_CARD_WHITE, border_color=C_BORDER_LIGHT):
        card = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
        card.fill.solid()
        card.fill.fore_color.rgb = bg_color
        if border_color:
            card.line.color.rgb = border_color
            card.line.width = Pt(1)
        else:
            card.line.fill.background()
        return card

    # ==========================================
    # SLIDE 1: PORTADA (OSCURA)
    # ==========================================
    s1 = prs.slides.add_slide(blank_layout)
    set_bg(s1, C_DARK_NAVY)

    # Accent bar
    dec = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(2.2), Inches(0.12), Inches(3.2))
    dec.fill.solid()
    dec.fill.fore_color.rgb = C_GOLD
    dec.line.fill.background()

    tb1 = s1.shapes.add_textbox(Inches(1.2), Inches(2.0), Inches(11.0), Inches(0.5))
    p = tb1.text_frame.paragraphs[0]
    p.text = "CURSO: CREAR UN NEGOCIO DE CERO A IMPACTO Y VENTAS"
    p.font.name = FONT_MAIN
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = C_GOLD

    tb2 = s1.shapes.add_textbox(Inches(1.2), Inches(2.5), Inches(11.0), Inches(2.0))
    p = tb2.text_frame.paragraphs[0]
    p.text = "CLASE 1: EL EMPRESARIO CONSCIENTE\nGESTIONAR DESDE LA CLARIDAD"
    p.font.name = FONT_MAIN
    p.font.size = Pt(32)
    p.font.bold = True
    p.font.color.rgb = C_TEXT_LIGHT

    tb3 = s1.shapes.add_textbox(Inches(1.2), Inches(4.7), Inches(11.0), Inches(0.8))
    p = tb3.text_frame.paragraphs[0]
    p.text = "MÉTODO MODO LÍDER • ROMINA MONTIEL"
    p.font.name = FONT_MAIN
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = RGBColor(180, 190, 205)

    # ==========================================
    # SLIDE 2: EL GRAN CAMBIO DE PARADIGMA (CLARA)
    # ==========================================
    s2 = prs.slides.add_slide(blank_layout)
    set_bg(s2, C_LIGHT_BG)
    add_header(s2, "¿Qué significa realmente ser un Empresario Consciente?", "FUNDAMENTOS • MODO LÍDER")

    # Card Izquierda - El mito
    add_card(s2, Inches(0.8), Inches(1.7), Inches(5.6), Inches(5.1), C_CARD_WHITE, C_BORDER_LIGHT)
    tb = s2.shapes.add_textbox(Inches(1.1), Inches(1.9), Inches(5.0), Inches(4.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "LO QUE MUCHOS CREEN"
    p.font.name = FONT_MAIN
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = C_CORAL

    p2 = tf.add_paragraph()
    p2.text = "• Creer que ser consciente es solo 'trabajar la mente' o meditar.\n• Pensar que el propósito está reñido con ganar dinero.\n• Gestionar por intuición o urgencias cotidianas.\n• Sentir culpa por cobrar bien o decir que no a clientes.\n• Caer en la reflexión permanente sin ejecutar."
    p2.font.name = FONT_MAIN
    p2.font.size = Pt(13)
    p2.font.color.rgb = C_TEXT_DARK
    p2.space_before = Pt(12)

    # Card Derecha - La Realidad Modo Líder
    add_card(s2, Inches(6.8), Inches(1.7), Inches(5.7), Inches(5.1), C_GOLD_BG, C_GOLD)
    tb = s2.shapes.add_textbox(Inches(7.1), Inches(1.9), Inches(5.1), Inches(4.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "LA VERDAD DEL EMPRESARIO CONSCIENTE"
    p.font.name = FONT_MAIN
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = C_GOLD_DARK

    p2 = tf.add_paragraph()
    p2.text = "Ser consciente es liderar un negocio desde:\n\n" \
              "🧭 1. Claridad absoluta sobre qué construyes y para qué.\n" \
              "💰 2. Números reales, rentabilidad y flujo financiero.\n" \
              "🎯 3. Ventas y comunicación basada en valor genuino.\n" \
              "⚙️ 4. Estrategia y ejecución disciplinada.\n" \
              "🤝 5. Liderazgo responsable con límites firmes."
    p2.font.name = FONT_MAIN
    p2.font.size = Pt(13)
    p2.font.color.rgb = C_TEXT_DARK
    p2.space_before = Pt(10)

    # ==========================================
    # SLIDE 3: LOS 7 PILARES (OVERVIEW - OSCURA)
    # ==========================================
    s3 = prs.slides.add_slide(blank_layout)
    set_bg(s3, C_DARK_NAVY)
    add_header(s3, "Los 7 Pilares del Empresario Consciente", "MAPA ESTRATÉGICO • MODO LÍDER", is_dark=True)

    pilares = [
        ("1. Gestiona desde la Claridad", "Punto de partida: rumbo, límites y decisiones alineadas."),
        ("2. Se Conoce y se Autolidera", "El negocio es un reflejo de quien lo lidera."),
        ("3. Entiende el Dinero", "Cero miedo y cero romanticismo: números y rentabilidad."),
        ("4. Vende y Comunica con Valor", "Vender no es perseguir, es conectar y servir."),
        ("5. Decide y Ejecuta", "Consciencia con acción ágil; salir de la parálisis."),
        ("6. Gestiona para Crecer", "Procesos, KPIs y escala sin agotar tu energía."),
        ("7. Lidera con Responsabilidad", "Límites claros y conversaciones difíciles.")
    ]

    # Grid 4 + 3 cards
    for idx, (titulo, desc) in enumerate(pilares):
        if idx < 4:
            left = Inches(0.8 + idx * 2.95)
            top = Inches(1.8)
        else:
            left = Inches(1.5 + (idx - 4) * 3.45)
            top = Inches(4.3)
        w = Inches(2.8) if idx < 4 else Inches(3.3)
        h = Inches(2.2)

        add_card(s3, left, top, w, h, C_SURFACE_DARK, C_GOLD if idx == 0 else RGBColor(40, 50, 70))
        tb = s3.shapes.add_textbox(left + Inches(0.15), top + Inches(0.15), w - Inches(0.3), h - Inches(0.3))
        tf = tb.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = titulo
        p.font.name = FONT_MAIN
        p.font.size = Pt(12)
        p.font.bold = True
        p.font.color.rgb = C_GOLD if idx == 0 else C_TEXT_LIGHT

        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.name = FONT_MAIN
        p2.font.size = Pt(10.5)
        p2.font.color.rgb = RGBColor(170, 180, 195)
        p2.space_before = Pt(6)

    # ==========================================
    # SLIDE 4: PILAR 1 • GESTIONA DESDE LA CLARIDAD
    # ==========================================
    s4 = prs.slides.add_slide(blank_layout)
    set_bg(s4, C_LIGHT_BG)
    add_header(s4, "Pilar 1: Gestiona desde la Claridad (El Punto de Partida)", "PILAR 1 • MODO LÍDER")

    # Banner quote arriba
    add_card(s4, Inches(0.8), Inches(1.6), Inches(11.733), Inches(1.1), C_GOLD_BG, C_GOLD)
    tb = s4.shapes.add_textbox(Inches(1.1), Inches(1.75), Inches(11.1), Inches(0.8))
    p = tb.text_frame.paragraphs[0]
    p.text = "“Antes de hablar de dinero, ventas, estrategia o liderazgo, tiene que existir una dirección. La claridad es el punto de partida de todo.”"
    p.font.name = FONT_MAIN
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = C_GOLD_DARK

    # 2 Columnas de Claridad
    add_card(s4, Inches(0.8), Inches(2.9), Inches(5.7), Inches(4.0), C_CARD_WHITE, C_BORDER_LIGHT)
    tb = s4.shapes.add_textbox(Inches(1.1), Inches(3.1), Inches(5.1), Inches(3.6))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "¿SOBRE QUÉ DEBES TENER CLARIDAD TOTAL?"
    p.font.name = FONT_MAIN
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = C_TEXT_DARK

    p2 = tf.add_paragraph()
    p2.text = "🎯 Qué quieres construir y para qué.\n📦 Qué productos o servicios ofreces exactamente.\n👥 A qué tipo de clientes quieres atender (y a quiénes no).\n💡 Qué problema específico resuelves y qué valor aportas."
    p2.font.name = FONT_MAIN
    p2.font.size = Pt(12.5)
    p2.font.color.rgb = C_TEXT_DARK
    p2.space_before = Pt(10)

    add_card(s4, Inches(6.8), Inches(2.9), Inches(5.7), Inches(4.0), C_CARD_WHITE, C_BORDER_LIGHT)
    tb = s4.shapes.add_textbox(Inches(7.1), Inches(3.1), Inches(5.1), Inches(3.6))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "¿CÓMO DECIDES HACER NEGOCIOS?"
    p.font.name = FONT_MAIN
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = C_TEXT_DARK

    p2 = tf.add_paragraph()
    p2.text = "⚖️ Cuáles son los valores que guían tus decisiones.\n🚫 Qué estás dispuesto a hacer y qué NO estás dispuesto a hacer.\n🛡️ Cuáles son tus límites innegociables y cuáles son tus 'NO'.\n🧭 Tu brújula ética, comercial y de tiempo de vida."
    p2.font.name = FONT_MAIN
    p2.font.size = Pt(12.5)
    p2.font.color.rgb = C_TEXT_DARK
    p2.space_before = Pt(10)

    # ==========================================
    # SLIDE 5: PILAR 1 • EL PODER DEL "NO" Y LOS LÍMITES
    # ==========================================
    s5 = prs.slides.add_slide(blank_layout)
    set_bg(s5, C_LIGHT_BG)
    add_header(s5, "Pilar 1: El Poder del 'NO' y los Límites Conscientes", "PILAR 1 • MODO LÍDER")

    # 3 Cards de alerta
    items_no = [
        ("NO TODO CLIENTE", "No todo cliente es un buen cliente para tu negocio.", "Atender clientes desalineados agota tu energía y destruye tu rentabilidad."),
        ("NO TODA OPORTUNIDAD", "No toda oportunidad es una buena oportunidad.", "Aprende a distinguir entre una verdadera oportunidad y una distracción brillante."),
        ("NO TODO CRECIMIENTO", "No todo crecimiento es crecimiento saludable.", "Crecer sin estructura ni margen genera caos, deudas y burnout.")
    ]

    for idx, (t, sub, desc) in enumerate(items_no):
        left = Inches(0.8 + idx * 3.95)
        add_card(s5, left, Inches(1.7), Inches(3.8), Inches(3.4), C_CARD_WHITE, C_BORDER_LIGHT)
        tb = s5.shapes.add_textbox(left + Inches(0.2), Inches(1.9), Inches(3.4), Inches(3.0))
        tf = tb.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = t
        p.font.name = FONT_MAIN
        p.font.size = Pt(12)
        p.font.bold = True
        p.font.color.rgb = C_CORAL

        p2 = tf.add_paragraph()
        p2.text = sub
        p2.font.name = FONT_MAIN
        p2.font.size = Pt(12)
        p2.font.bold = True
        p2.font.color.rgb = C_TEXT_DARK
        p2.space_before = Pt(8)

        p3 = tf.add_paragraph()
        p3.text = desc
        p3.font.name = FONT_MAIN
        p3.font.size = Pt(11)
        p3.font.color.rgb = C_TEXT_MUTED
        p3.space_before = Pt(8)

    # Gran Card de Conclusión
    add_card(s5, Inches(0.8), Inches(5.3), Inches(11.733), Inches(1.5), C_GOLD_BG, C_GOLD)
    tb = s5.shapes.add_textbox(Inches(1.1), Inches(5.45), Inches(11.1), Inches(1.2))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "LA CLARIDAD TE DA EL PODER DE DECIR:"
    p.font.name = FONT_MAIN
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = C_GOLD_DARK

    p2 = tf.add_paragraph()
    p2.text = "“Esto SÍ es para mi negocio. Esto NO. Por acá voy. Por acá NO.”\nY desde esa claridad, recién entonces puedes gestionar."
    p2.font.name = FONT_MAIN
    p2.font.size = Pt(14)
    p2.font.bold = True
    p2.font.color.rgb = C_TEXT_DARK
    p2.space_before = Pt(4)

    # ==========================================
    # SLIDE 6: PILAR 2 • SE CONOCE Y SE AUTOLIDERA
    # ==========================================
    s6 = prs.slides.add_slide(blank_layout)
    set_bg(s6, C_LIGHT_BG)
    add_header(s6, "Pilar 2: Se Conoce y se Autolidera", "PILAR 2 • MODO LÍDER")

    add_card(s6, Inches(0.8), Inches(1.7), Inches(5.7), Inches(5.1), C_CARD_WHITE, C_BORDER_LIGHT)
    tb = s6.shapes.add_textbox(Inches(1.1), Inches(1.9), Inches(5.1), Inches(4.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "EL NEGOCIO REFLEJA A SU LÍDER"
    p.font.name = FONT_MAIN
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = C_GOLD_DARK

    p2 = tf.add_paragraph()
    p2.text = "El negocio está directamente atravesado por quien lo dirige.\n\nTus miedos, tus bloqueos con el dinero, tu incapacidad para delegar o tu falta de límites se trasladan inmediatamente a tus resultados empresariales."
    p2.font.name = FONT_MAIN
    p2.font.size = Pt(12.5)
    p2.font.color.rgb = C_TEXT_DARK
    p2.space_before = Pt(10)

    add_card(s6, Inches(6.8), Inches(1.7), Inches(5.7), Inches(5.1), C_CARD_WHITE, C_BORDER_LIGHT)
    tb = s6.shapes.add_textbox(Inches(7.1), Inches(1.9), Inches(5.1), Inches(4.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "¿QUÉ HACE EL LÍDER CONSCIENTE?"
    p.font.name = FONT_MAIN
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = C_TEXT_DARK

    p2 = tf.add_paragraph()
    p2.text = "🧠 Reconoce sus patrones, creencias limitantes y emociones.\n🛡️ No permite que el miedo o el ego tomen las decisiones estratégicas.\n🎯 Desarrolla templanza emocional ante la incertidumbre.\n⚡ Gestiona su energía vital para sostener el ritmo de crecimiento."
    p2.font.name = FONT_MAIN
    p2.font.size = Pt(12.5)
    p2.font.color.rgb = C_TEXT_DARK
    p2.space_before = Pt(10)

    # ==========================================
    # SLIDE 7: PILAR 3 • ENTIENDE EL DINERO
    # ==========================================
    s7 = prs.slides.add_slide(blank_layout)
    set_bg(s7, C_LIGHT_BG)
    add_header(s7, "Pilar 3: Entiende el Dinero (Sin Miedo ni Romanticismo)", "PILAR 3 • MODO LÍDER")

    # Banner superior
    add_card(s7, Inches(0.8), Inches(1.6), Inches(11.733), Inches(1.1), C_EMERALD_BG, C_EMERALD)
    tb = s7.shapes.add_textbox(Inches(1.1), Inches(1.75), Inches(11.1), Inches(0.8))
    p = tb.text_frame.paragraphs[0]
    p.text = "“Un negocio con propósito también tiene que ser rentable para poder sostenerse, generar impacto y crecer.”"
    p.font.name = FONT_MAIN
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = C_EMERALD

    # 3 Pilares del dinero
    cards_dinero = [
        ("NÚMEROS CLAROS", "Conoce sus costos reales fijos y variables. No adivina sus finanzas."),
        ("PRECIOS & RENTABILIDAD", "Cobra por el valor y la transformación, con un margen saludable."),
        ("FLUJO & OBJETIVOS", "Monitorea su flujo de caja y define metas económicas precisas.")
    ]
    for idx, (t, d) in enumerate(cards_dinero):
        left = Inches(0.8 + idx * 3.95)
        add_card(s7, left, Inches(2.9), Inches(3.8), Inches(3.9), C_CARD_WHITE, C_BORDER_LIGHT)
        tb = s7.shapes.add_textbox(left + Inches(0.2), Inches(3.2), Inches(3.4), Inches(3.3))
        tf = tb.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = t
        p.font.name = FONT_MAIN
        p.font.size = Pt(13)
        p.font.bold = True
        p.font.color.rgb = C_TEXT_DARK

        p2 = tf.add_paragraph()
        p2.text = d
        p2.font.name = FONT_MAIN
        p2.font.size = Pt(12)
        p2.font.color.rgb = C_TEXT_MUTED
        p2.space_before = Pt(10)

    # ==========================================
    # SLIDE 8: PILAR 4 • VENDE Y COMUNICA CON VALOR
    # ==========================================
    s8 = prs.slides.add_slide(blank_layout)
    set_bg(s8, C_LIGHT_BG)
    add_header(s8, "Pilar 4: Vende y Comunica con Valor", "PILAR 4 • MODO LÍDER")

    add_card(s8, Inches(0.8), Inches(1.7), Inches(5.7), Inches(5.1), C_CORAL_BG, C_CORAL)
    tb = s8.shapes.add_textbox(Inches(1.1), Inches(1.9), Inches(5.1), Inches(4.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "LO QUE NO ES VENDER"
    p.font.name = FONT_MAIN
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = C_CORAL

    p2 = tf.add_paragraph()
    p2.text = "❌ Vender NO es perseguir personas.\n❌ NO es convencer a quien no necesita tu servicio.\n❌ NO es manipular ni rebajar tus precios por inseguridad.\n❌ NO es rogar por una respuesta."
    p2.font.name = FONT_MAIN
    p2.font.size = Pt(13)
    p2.font.color.rgb = C_TEXT_DARK
    p2.space_before = Pt(14)

    add_card(s8, Inches(6.8), Inches(1.7), Inches(5.7), Inches(5.1), C_GOLD_BG, C_GOLD)
    tb = s8.shapes.add_textbox(Inches(7.1), Inches(1.9), Inches(5.1), Inches(4.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "LA VENTA CONSCIENTE EN MODO LÍDER"
    p.font.name = FONT_MAIN
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = C_GOLD_DARK

    p2 = tf.add_paragraph()
    p2.text = "✨ Comunicar con total nitidez el valor de lo que ofreces.\n✨ Conectar con la necesidad real del cliente calificado.\n✨ Posicionarte como la solución experta y de confianza.\n✨ Acompañar al cliente para que tome la mejor decisión."
    p2.font.name = FONT_MAIN
    p2.font.size = Pt(13)
    p2.font.color.rgb = C_TEXT_DARK
    p2.space_before = Pt(14)

    # ==========================================
    # SLIDE 9: PILAR 5 • DECIDE Y EJECUTA
    # ==========================================
    s9 = prs.slides.add_slide(blank_layout)
    set_bg(s9, C_LIGHT_BG)
    add_header(s9, "Pilar 5: Decide y Ejecuta (Vencer la Parálisis)", "PILAR 5 • MODO LÍDER")

    # Banner quote
    add_card(s9, Inches(0.8), Inches(1.6), Inches(11.733), Inches(1.1), C_GOLD_BG, C_GOLD)
    tb = s9.shapes.add_textbox(Inches(1.1), Inches(1.75), Inches(11.1), Inches(0.8))
    p = tb.text_frame.paragraphs[0]
    p.text = "“La consciencia sin acción se convierte en reflexión permanente. No esperes tener todo perfecto para avanzar.”"
    p.font.name = FONT_MAIN
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = C_GOLD_DARK

    # Ciclo de Ejecución (5 pasos)
    pasos = [
        ("1. PRIORIZA", "Elige qué mueve la aguja hoy."),
        ("2. PRUEBA", "Lanza sin esperar perfección."),
        ("3. MIDE", "Evalúa con datos y hechos."),
        ("4. CORRIGE", "Ajusta con rapidez y sin culpa."),
        ("5. REACCIONA", "Vuelve a ejecutar con foco.")
    ]
    for idx, (p_tit, p_sub) in enumerate(pasos):
        left = Inches(0.8 + idx * 2.38)
        add_card(s9, left, Inches(2.9), Inches(2.2), Inches(3.9), C_CARD_WHITE, C_BORDER_LIGHT)
        tb = s9.shapes.add_textbox(left + Inches(0.1), Inches(3.3), Inches(2.0), Inches(3.0))
        tf = tb.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = p_tit
        p.font.name = FONT_MAIN
        p.font.size = Pt(12)
        p.font.bold = True
        p.font.color.rgb = C_TEXT_DARK

        p2 = tf.add_paragraph()
        p2.text = p_sub
        p2.font.name = FONT_MAIN
        p2.font.size = Pt(11)
        p2.font.color.rgb = C_TEXT_MUTED
        p2.space_before = Pt(8)

    # ==========================================
    # SLIDE 10: PILAR 6 • GESTIONA PARA CRECER
    # ==========================================
    s10 = prs.slides.add_slide(blank_layout)
    set_bg(s10, C_LIGHT_BG)
    add_header(s10, "Pilar 6: Gestiona para Crecer (Salir de lo Urgente)", "PILAR 6 • MODO LÍDER")

    add_card(s10, Inches(0.8), Inches(1.7), Inches(5.7), Inches(5.1), C_CARD_WHITE, C_BORDER_LIGHT)
    tb = s10.shapes.add_textbox(Inches(1.1), Inches(1.9), Inches(5.1), Inches(4.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "DEJAR EL 'MODO BOMBERO'"
    p.font.name = FONT_MAIN
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = C_CORAL

    p2 = tf.add_paragraph()
    p2.text = "Muchos emprendedores pasan sus días apagando incendios y resolviendo solo lo urgente.\n\nEso no es liderar un negocio, es ser esclavo de las operaciones diarias sin tiempo para construir el futuro."
    p2.font.name = FONT_MAIN
    p2.font.size = Pt(12.5)
    p2.font.color.rgb = C_TEXT_DARK
    p2.space_before = Pt(10)

    add_card(s10, Inches(6.8), Inches(1.7), Inches(5.7), Inches(5.1), C_CARD_WHITE, C_BORDER_LIGHT)
    tb = s10.shapes.add_textbox(Inches(7.1), Inches(1.9), Inches(5.1), Inches(4.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "CONSTRUIR ESCALABILIDAD REAL"
    p.font.name = FONT_MAIN
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = C_GOLD_DARK

    p2 = tf.add_paragraph()
    p2.text = "📊 Mira indicadores y resultados reales (KPIs).\n⚙️ Estandariza procesos repetitivos y operaciones.\n👥 Optimiza la experiencia y retención de clientes.\n🔋 Construye un negocio que crezca sin depender 100% de tu energía física."
    p2.font.name = FONT_MAIN
    p2.font.size = Pt(12.5)
    p2.font.color.rgb = C_TEXT_DARK
    p2.space_before = Pt(10)

    # ==========================================
    # SLIDE 11: PILAR 7 • LIDERA CON RESPONSABILIDAD
    # ==========================================
    s11 = prs.slides.add_slide(blank_layout)
    set_bg(s11, C_LIGHT_BG)
    add_header(s11, "Pilar 7: Lidera con Responsabilidad", "PILAR 7 • MODO LÍDER")

    # 3 Cards
    cards_lider = [
        ("CUIDAR LAS RELACIONES", "Cuida el vínculo con clientes, colaboradores y proveedores desde el respeto mutuo y la excelencia.", C_TEXT_DARK),
        ("NO COMPLACER A TODOS", "Liderazgo consciente NO es complacer a todo el mundo. Es sostener la visión y la coherencia del negocio.", C_CORAL),
        ("CONVERSACIONES DIFÍCILES", "Tener límites innegociables, sostener conversaciones incómodas y tomar decisiones difíciles con templanza.", C_GOLD_DARK)
    ]

    for idx, (t, d, col) in enumerate(cards_lider):
        left = Inches(0.8 + idx * 3.95)
        add_card(s11, left, Inches(1.7), Inches(3.8), Inches(5.1), C_CARD_WHITE, C_BORDER_LIGHT)
        tb = s11.shapes.add_textbox(left + Inches(0.2), Inches(2.2), Inches(3.4), Inches(4.3))
        tf = tb.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = t
        p.font.name = FONT_MAIN
        p.font.size = Pt(13)
        p.font.bold = True
        p.font.color.rgb = col

        p2 = tf.add_paragraph()
        p2.text = d
        p2.font.name = FONT_MAIN
        p2.font.size = Pt(12.5)
        p2.font.color.rgb = C_TEXT_DARK
        p2.space_before = Pt(12)

    # ==========================================
    # SLIDE 12: LA SECUENCIA DE ÉXITO MODO LÍDER
    # ==========================================
    s12 = prs.slides.add_slide(blank_layout)
    set_bg(s12, C_DARK_NAVY)
    add_header(s12, "La Secuencia de Éxito en Modo Líder", "MÉTODO MODO LÍDER", is_dark=True)

    secuencia = [
        ("1. CLARIDAD", "Saber exactamente qué construyes, a quién sirves y cuáles son tus límites."),
        ("2. DIRECCIÓN", "Trazar el rumbo estratégico y los objetivos financieros innegociables."),
        ("3. GESTIÓN", "Organizar números, procesos, ventas y decisiones diarias con disciplina."),
        ("4. CRECIMIENTO", "Escalar con rentabilidad, impacto sostenible y libertad personal.")
    ]

    for idx, (tit, desc) in enumerate(secuencia):
        left = Inches(0.8 + idx * 2.95)
        top = Inches(2.2)
        add_card(s12, left, top, Inches(2.8), Inches(4.2), C_SURFACE_DARK, C_GOLD if idx == 0 else RGBColor(50, 60, 80))
        tb = s12.shapes.add_textbox(left + Inches(0.15), top + Inches(0.3), Inches(2.5), Inches(3.6))
        tf = tb.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = tit
        p.font.name = FONT_MAIN
        p.font.size = Pt(14)
        p.font.bold = True
        p.font.color.rgb = C_GOLD

        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.name = FONT_MAIN
        p2.font.size = Pt(12)
        p2.font.color.rgb = C_TEXT_LIGHT
        p2.space_before = Pt(12)

    # ==========================================
    # SLIDE 13: EL MANIFIESTO DEL EMPRESARIO CONSCIENTE (OSCURA)
    # ==========================================
    s13 = prs.slides.add_slide(blank_layout)
    set_bg(s13, C_DARK_NAVY)

    # Marco dorado elegante
    border_gold = s13.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(1.2), Inches(1.2), Inches(10.933), Inches(5.1))
    border_gold.fill.solid()
    border_gold.fill.fore_color.rgb = C_SURFACE_DARK
    border_gold.line.color.rgb = C_GOLD
    border_gold.line.width = Pt(2)

    tb = s13.shapes.add_textbox(Inches(1.8), Inches(1.6), Inches(9.733), Inches(4.3))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "DEFINICIÓN DEFINITIVA"
    p.font.name = FONT_MAIN
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = C_GOLD

    p2 = tf.add_paragraph()
    p2.text = "“Un empresario consciente no es aquel que hace negocios de manera perfecta.\n\n" \
              "Es aquel que sabe desde dónde está gestionando, hacia dónde quiere ir, " \
              "qué quiere construir y qué está dispuesto —y qué no— a hacer para conseguirlo.”"
    p2.font.name = FONT_MAIN
    p2.font.size = Pt(20)
    p2.font.bold = True
    p2.font.color.rgb = C_TEXT_LIGHT
    p2.space_before = Pt(14)

    p3 = tf.add_paragraph()
    p3.text = "Primero Claridad. Después Dirección. Después Gestión. Y finalmente Crecimiento."
    p3.font.name = FONT_MAIN
    p3.font.size = Pt(14)
    p3.font.bold = True
    p3.font.color.rgb = C_GOLD
    p3.space_before = Pt(16)

    # ==========================================
    # SLIDE 14: EJERCICIO PRÁCTICO & ACTIVACIÓN
    # ==========================================
    s14 = prs.slides.add_slide(blank_layout)
    set_bg(s14, C_LIGHT_BG)
    add_header(s14, "Tu Activación: Diagnóstico de Claridad Modo Líder", "ACTIVACIÓN PRÁCTICA • CLASE 1")

    add_card(s14, Inches(0.8), Inches(1.7), Inches(5.7), Inches(5.1), C_CARD_WHITE, C_BORDER_LIGHT)
    tb = s14.shapes.add_textbox(Inches(1.1), Inches(1.9), Inches(5.1), Inches(4.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "PARTE 1: AUTOEVALUACIÓN DE LOS 7 PILARES"
    p.font.name = FONT_MAIN
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = C_TEXT_DARK

    p2 = tf.add_paragraph()
    p2.text = "Califica del 1 al 10 en tu Workbook:\n\n" \
              "1. Claridad de rumbo y propuesta de valor.\n" \
              "2. Autoliderazgo y dominio emocional.\n" \
              "3. Control de números y rentabilidad.\n" \
              "4. Comunicación y ventas basadas en valor.\n" \
              "5. Decisión y agilidad de ejecución.\n" \
              "6. Procesos e indicadores de crecimiento.\n" \
              "7. Firmeza de límites y liderazgo responsable."
    p2.font.name = FONT_MAIN
    p2.font.size = Pt(11.5)
    p2.font.color.rgb = C_TEXT_DARK
    p2.space_before = Pt(8)

    add_card(s14, Inches(6.8), Inches(1.7), Inches(5.7), Inches(5.1), C_GOLD_BG, C_GOLD)
    tb = s14.shapes.add_textbox(Inches(7.1), Inches(1.9), Inches(5.1), Inches(4.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "PARTE 2: DEFINICIÓN DE LÍMITES Y DIRECCIÓN"
    p.font.name = FONT_MAIN
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = C_GOLD_DARK

    p2 = tf.add_paragraph()
    p2.text = "Responde en tu cuaderno de trabajo:\n\n" \
              "✍️ ¿Cuáles son los 3 'SÍ' fundamentales de tu negocio hoy?\n\n" \
              "🚫 ¿Cuáles son los 3 'NO' innegociables que debes empezar a sostener de inmediato (clientes, precios, tiempo)?\n\n" \
              "🎯 ¿Cuál es el pilar que más necesitas fortalecer este mes?"
    p2.font.name = FONT_MAIN
    p2.font.size = Pt(12)
    p2.font.color.rgb = C_TEXT_DARK
    p2.space_before = Pt(10)

    # Guardar presentación
    output_dir = os.path.join(os.path.dirname(__file__), "clase1_emprender_conscientemente")
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, "Clase_1_Emprender_Conscientemente_MODOLIDER.pptx")
    prs.save(output_path)
    print(f"Presentación guardada exitosamente en: {output_path}")

if __name__ == "__main__":
    create_presentation()
