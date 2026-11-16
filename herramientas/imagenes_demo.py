"""Dibuja las imágenes de ejemplo de la tienda demo.

Lee catalogo.js y crea, para cada foto que falte, una ilustración simple del tipo de
zapato (botín, bota, zapatilla o sandalia) en el color que le corresponde, con la marca
«DEMO». También dibuja la portada, el logo y los íconos. Correr desde la raíz del
repositorio (necesita Pillow):

    python3 herramientas/imagenes_demo.py            # solo las que faltan
    python3 herramientas/imagenes_demo.py --todas    # vuelve a dibujar todo
"""
import json
import pathlib
import re
import sys

from PIL import Image, ImageDraw, ImageFilter, ImageFont

RAIZ = pathlib.Path(__file__).resolve().parent.parent
TODAS = "--todas" in sys.argv
SS = 2  # se dibuja al doble y se achica: así los bordes quedan suaves

FUENTES = [
    "/usr/share/fonts/opentype/inter/Inter-Bold.otf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/Library/Fonts/Arial Bold.ttf",
    "C:/Windows/Fonts/arialbd.ttf",
]
FUENTES_MEDIA = [
    "/usr/share/fonts/opentype/inter/Inter-Medium.otf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    "/Library/Fonts/Arial.ttf",
    "C:/Windows/Fonts/arial.ttf",
]


def fuente(tam, lista=FUENTES):
    for f in lista:
        if pathlib.Path(f).exists():
            return ImageFont.truetype(f, tam)
    return ImageFont.load_default()


# ---------- colores ----------
def rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def mezcla(a, b, t):
    return tuple(round(x + (y - x) * t) for x, y in zip(a, b))


def luz(c):
    return (0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2]) / 255


BLANCO, NEGRO = (255, 255, 255), (0, 0, 0)


def paleta(hex_color):
    c = rgb(hex_color)
    l = luz(c)
    claro = l > 0.78
    return {
        "base": c,
        "detalle": mezcla(c, NEGRO, 0.28) if l > 0.22 else mezcla(c, BLANCO, 0.22),
        "suela": mezcla(c, NEGRO, 0.55) if claro else (246, 244, 240) if l < 0.5 else mezcla(c, NEGRO, 0.45),
        "fondo": (231, 227, 222) if claro else mezcla(c, BLANCO, 0.9) if l > 0.22 else (241, 239, 236),
        "borde": mezcla(c, NEGRO, 0.3) if claro else None,
    }


# ---------- trazos tipo SVG (M, L, Q, C, Z en coordenadas absolutas) ----------
def puntos(path, esc, dx, dy, espejo=False, ancho=400):
    tokens = re.findall(r"[MLQCZ]|-?\d+(?:\.\d+)?", path)
    pts, i, cur, cmd = [], 0, (0, 0), None
    def num():
        nonlocal i
        v = float(tokens[i]); i += 1
        return v
    while i < len(tokens):
        if tokens[i] in "MLQCZ":
            cmd = tokens[i]; i += 1
            if cmd == "Z":
                continue
        if cmd in ("M", "L"):
            cur = (num(), num()); pts.append(cur)
        elif cmd == "Q":
            c1, fin = (num(), num()), (num(), num())
            for k in range(1, 17):
                t = k / 16
                pts.append(tuple((1 - t) ** 2 * cur[j] + 2 * (1 - t) * t * c1[j] + t ** 2 * fin[j] for j in (0, 1)))
            cur = fin
        elif cmd == "C":
            c1, c2, fin = (num(), num()), (num(), num()), (num(), num())
            for k in range(1, 21):
                t = k / 20
                pts.append(tuple((1 - t) ** 3 * cur[j] + 3 * (1 - t) ** 2 * t * c1[j]
                                 + 3 * (1 - t) * t ** 2 * c2[j] + t ** 3 * fin[j] for j in (0, 1)))
            cur = fin
    return [((ancho - x if espejo else x) * esc + dx, y * esc + dy) for x, y in pts]


# Cada zapato es una lista de (parte, trazo) en un lienzo de 400 × 300, con la punta a la derecha.
DORADO = (201, 160, 72)
ZAPATOS = {
    "zapatilla": [
        ("base", "M70 212 L72 150 Q73 128 95 126 L128 124 Q140 124 146 138 Q156 160 182 164 L250 170 Q305 176 336 198 Q350 208 348 214 Z"),
        ("detalle", "M80 142 Q102 126 134 132 Q118 142 82 148 Z"),
        ("detalle", "M64 152 L72 150 L74 206 L66 206 Z"),
        ("detalle", "M150 200 Q205 176 270 184 L276 194 Q210 190 158 210 Z"),
        ("suela", "M58 210 L346 210 Q362 212 360 225 Q358 238 340 238 L74 238 Q56 238 56 224 Q56 210 58 210 Z"),
        ("detalle", "M60 226 L358 226 L357 229 L60 229 Z"),
        ("cordon", "M164 150 L172 146 L176 156 L168 160 Z"),
        ("cordon", "M184 155 L192 151 L196 161 L188 165 Z"),
        ("cordon", "M204 160 L212 156 L216 166 L208 170 Z"),
        ("cordon", "M224 164 L232 160 L236 170 L228 174 Z"),
    ],
    "botin": [
        ("detalle", "M78 200 L122 200 L118 238 L82 238 Z"),
        ("base", "M76 210 L78 92 Q78 80 90 80 L150 80 Q162 80 162 92 L164 150 Q168 178 205 186 L290 196 Q336 202 346 218 L120 218 L118 210 Z"),
        ("detalle", "M77 108 L163 108 L163 120 L77 120 Z"),
        ("detalle", "M77 132 L164 132 L164 144 L77 144 Z"),
        ("dorado", "M146 104 L162 104 L162 124 L146 124 Z"),
        ("dorado", "M146 128 L162 128 L162 148 L146 148 Z"),
        ("detalle", "M84 80 L96 80 L96 64 Q90 58 84 64 Z"),
        ("suela", "M118 214 L332 214 Q352 216 352 228 Q350 238 336 238 L116 238 Z"),
    ],
    "bota": [
        ("detalle", "M86 194 L126 194 L120 238 L92 238 Z"),
        ("base", "M84 206 L82 30 Q82 20 94 20 L156 20 Q168 20 168 30 L166 150 Q170 178 207 186 L290 196 Q336 202 346 218 L124 218 L122 206 Z"),
        ("detalle", "M158 30 L162 30 L161 178 L157 176 Z"),
        ("detalle", "M83 20 L168 20 L168 34 L83 34 Z"),
        ("suela", "M122 214 L332 214 Q352 216 352 228 Q350 238 336 238 L120 238 Z"),
    ],
    "sandalia": [
        ("suela", "M56 206 Q56 196 68 196 L336 196 Q356 196 356 212 L356 228 Q356 240 340 240 L70 240 Q56 240 56 228 Z"),
        ("detalle", "M58 204 L354 204 L354 208 L58 208 Z"),
        ("base", "M232 198 Q262 150 312 160 Q332 166 336 198 L320 198 Q314 176 300 174 Q262 170 248 198 Z"),
        ("base", "M150 198 Q168 140 210 138 Q232 140 238 160 L226 166 Q218 152 206 154 Q178 158 166 198 Z"),
        ("base", "M76 198 Q70 150 96 120 Q112 108 130 112 L134 124 Q114 122 104 132 Q86 156 92 198 Z"),
        ("base", "M90 128 Q120 112 160 124 L158 136 Q120 126 96 140 Z"),
        ("dorado", "M150 118 L164 118 L164 136 L150 136 Z"),
    ],
}
TIPO_POR_CATEGORIA = {"botines": "botin", "botas": "bota", "zapatillas": "zapatilla", "sandalias": "sandalia"}


def dibujar_zapato(capa, tipo, colores, esc, dx, dy, espejo=False, sombra=True):
    """Dibuja un zapato sobre `capa` (RGBA). esc/dx/dy ya vienen multiplicados por SS."""
    d = ImageDraw.Draw(capa)
    if sombra:
        s = Image.new("L", capa.size, 0)
        ImageDraw.Draw(s).ellipse([60 * esc + dx, 232 * esc + dy, 360 * esc + dx, 250 * esc + dy], fill=70)
        s = s.filter(ImageFilter.GaussianBlur(8 * esc))
        capa.paste((0, 0, 0, 255), None, s)
        d = ImageDraw.Draw(capa)
    for parte, trazo in ZAPATOS[tipo]:
        color = DORADO if parte == "dorado" else colores["suela"] if parte == "cordon" else colores[parte]
        p = puntos(trazo, esc, dx, dy, espejo)
        borde = colores.get("borde")
        if borde and parte in ("base", "suela"):
            d.polygon(p, fill=color + (255,), outline=borde + (255,), width=max(2, round(1.2 * esc)))
        else:
            d.polygon(p, fill=color + (255,))


def marca_demo(im, tam, color_marca):
    d = ImageDraw.Draw(im)
    f = fuente(tam)
    w = d.textlength("DEMO", font=f)
    x, y = round(tam * 1.4), round(im.height - tam * 3.3)  # abajo a la izquierda: arriba van las cintas de oferta
    d.rounded_rectangle([x, y, x + w + tam * 1.3, y + tam * 1.9], radius=tam, fill=color_marca)
    d.text((x + tam * 0.65, y + tam * 0.95), "DEMO", font=f, fill=BLANCO, anchor="lm")


def nota(im, texto, tam, color):
    d = ImageDraw.Draw(im)
    d.text((im.width - tam * 1.6, im.height - tam * 1.6), texto, font=fuente(tam, FUENTES_MEDIA), fill=color, anchor="rs")


def guardar(im, ruta, miniatura=False):
    ruta.parent.mkdir(parents=True, exist_ok=True)
    im.save(ruta, quality=84, method=6)
    if miniatura:
        im.resize((700, round(700 * im.height / im.width)), Image.LANCZOS).save(
            ruta.with_name(ruta.stem + "-700.webp"), quality=82, method=6)
    print("hecha:", ruta.relative_to(RAIZ))


# ---------- fotos de los productos ----------
def foto_producto(ruta, tipo, hex_color, nombre_color, color_marca):
    W, H = 1400, 1050
    col = paleta(hex_color)
    im = Image.new("RGBA", (W * SS, H * SS), col["fondo"] + (255,))
    esc = 3.1 * SS
    dibujar_zapato(im, tipo, col, esc, (W * SS - 400 * esc) / 2, (H * SS - 300 * esc) / 2 + 30 * SS)
    im = im.resize((W, H), Image.LANCZOS).convert("RGB")
    marca_demo(im, 30, color_marca)
    nota(im, "Imagen de ejemplo · " + nombre_color, 26, mezcla(col["fondo"], NEGRO, 0.5))
    guardar(im, ruta, miniatura=True)


# ---------- portada ----------
def portada(ruta, piezas, fondo, color_marca):
    W, H = 1500, 1020
    im = Image.new("RGBA", (W * SS, H * SS), fondo + (255,))
    d = ImageDraw.Draw(im)
    d.text((W * SS * 0.62, H * SS * 0.42), "DEMO", font=fuente(300 * SS), fill=mezcla(fondo, BLANCO, 0.45) + (255,), anchor="mm")
    for tipo, hex_color, esc, x, y, espejo in piezas:
        dibujar_zapato(im, tipo, paleta(hex_color), esc * SS, x * SS, y * SS, espejo)
    im = im.resize((W, H), Image.LANCZOS).convert("RGB")
    nota(im, "Imagen de ejemplo", 26, mezcla(fondo, NEGRO, 0.45))
    guardar(im, ruta)


# ---------- logo e íconos ----------
def icono(ruta, lado, color_marca, margen=0.0, redondo=True):
    im = Image.new("RGBA", (lado * SS, lado * SS), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    if redondo:
        d.rounded_rectangle([0, 0, lado * SS - 1, lado * SS - 1], radius=lado * SS * 0.19, fill=color_marca + (255,))
    else:
        d.rectangle([0, 0, lado * SS, lado * SS], fill=color_marca + (255,))
    util = lado * SS * (1 - 2 * margen)
    esc = util * 0.78 / 400
    col = {"base": BLANCO, "detalle": mezcla(color_marca, BLANCO, 0.75), "suela": (255, 197, 61), "borde": None}
    dibujar_zapato(im, "zapatilla", col, esc, (lado * SS - 400 * esc) / 2, (lado * SS - 300 * esc) / 2 - 10 * esc, sombra=False)
    im = im.resize((lado, lado), Image.LANCZOS)
    ruta.parent.mkdir(parents=True, exist_ok=True)
    im.save(ruta)
    print("hecha:", ruta.relative_to(RAIZ))


def logo(ruta, color_marca):
    L = 600
    im = Image.new("RGBA", (L * SS, L * SS), BLANCO + (255,))
    d = ImageDraw.Draw(im)
    d.ellipse([20 * SS, 20 * SS, (L - 20) * SS, (L - 20) * SS], fill=color_marca + (255,))
    d.ellipse([44 * SS, 44 * SS, (L - 44) * SS, (L - 44) * SS], outline=(255, 255, 255, 255), width=4 * SS)
    col = {"base": BLANCO, "detalle": mezcla(color_marca, BLANCO, 0.75), "suela": (255, 197, 61), "borde": None}
    esc = 0.95 * SS
    dibujar_zapato(im, "zapatilla", col, esc, (L * SS - 400 * esc) / 2, 150 * SS, sombra=False)
    d = ImageDraw.Draw(im)
    d.text((L * SS / 2, 168 * SS), "DEMO WEB", font=fuente(62 * SS), fill=BLANCO, anchor="mm")
    d.text((L * SS / 2, 440 * SS), "TIENDA DE PRUEBA", font=fuente(30 * SS, FUENTES_MEDIA), fill=(255, 210, 120), anchor="mm")
    im = im.resize((L, L), Image.LANCZOS).convert("RGB")
    guardar(im, ruta)


# ---------- todo ----------
def main():
    texto = (RAIZ / "catalogo.js").read_text(encoding="utf-8")
    C = json.loads(texto[texto.index("window.CATALOGO = ") + 18:].rstrip().rstrip(";"))
    marca = rgb(C.get("tema", {}).get("color") or "#27496d")

    for cat in C["categorias"]:
        tipo = TIPO_POR_CATEGORIA.get(cat["id"], "zapatilla")
        for p in cat["productos"]:
            for i, f in enumerate(p.get("fotos", [])):
                ruta = RAIZ / f
                if not f.startswith("img/catalogo/") or (ruta.exists() and not TODAS):
                    continue
                color = p["colores"][min(i, len(p["colores"]) - 1)] if p.get("colores") else {"nombre": "", "hex": "#9a9aa0"}
                foto_producto(ruta, tipo, color["hex"], color["nombre"], marca)

    img = RAIZ / "img"
    if TODAS or not (img / "portada-1.webp").exists():
        portada(img / "portada-1.webp", [("zapatilla", "#e0a9b8", 1.9, 420, 150, False),
                                         ("zapatilla", "#1d1d1f", 1.9, 640, 330, False)], (238, 232, 244), marca)
        portada(img / "portada-2.webp", [("bota", "#a9682f", 2.2, 380, 190, False),
                                         ("bota", "#1d1d1f", 2.2, 640, 250, False)], (241, 233, 224), marca)
        portada(img / "portada-3.webp", [("sandalia", "#f2f0ec", 2.1, 330, 250, False),
                                         ("botin", "#7d3b2e", 2.1, 700, 260, False)], (226, 236, 240), marca)
    if TODAS or not (img / "logo-demo.webp").exists():
        logo(img / "logo-demo.webp", marca)
    if TODAS or not (img / "icono-512.png").exists():
        icono(img / "icono-180.png", 180, marca, redondo=False)
        icono(img / "icono-192.png", 192, marca)
        icono(img / "icono-512.png", 512, marca)
        icono(img / "icono-512-maskable.png", 512, marca, margen=0.1, redondo=False)


if __name__ == "__main__":
    main()
