/*
  CATÁLOGO DE DEMO STORE
  ======================
  Lo más fácil es editarlo desde el panel: tu-pagina/admin
  También se puede editar aquí: los precios van sin punto ni signo (22990), las tallas como
  "35-40" o { "35": 2, "36": 4 }, y cada elemento de una lista va separado por una coma.
  La explicación completa está en el README del repositorio.
*/
window.CATALOGO = {
  "negocio": {
    "nombre": "Demo Store",
    "rubro": "Calzado",
    "whatsapp": "56900000000",
    "whatsappVisible": "+56 9 0000 0000",
    "instagram": "",
    "facebook": "",
    "correo": "",
    "direccion": "",
    "sector": "",
    "ciudad": "Santiago",
    "region": "Metropolitana",
    "mapa": "",
    "mapaBusqueda": "",
    "retiroEnTienda": true,
    "nombreRetiro": "Retiro en Santiago (demo)",
    "notaRetiro": "Solo en Santiago. Es un ejemplo: aquí va dónde y cómo se retira.",
    "retiroComuna": "Santiago",
    "envioPorPagar": true,
    "envioGratisDesde": 0,
    "envios": [
      {
        "nombre": "Santiago",
        "detalle": "1 a 2 días hábiles (ejemplo)",
        "comunas": [
          "Santiago",
          "Providencia",
          "Ñuñoa",
          "Las Condes"
        ]
      },
      {
        "nombre": "Resto de Chile",
        "detalle": "3 a 5 días hábiles (ejemplo)",
        "regiones": [
          "*"
        ]
      }
    ],
    "pagos": [
      "Transferencia",
      "Efectivo al retirar"
    ],
    "cambios": "Texto de ejemplo: aquí van las condiciones de cambios y devoluciones de la tienda.",
    "garantia": "",
    "politicas": [
      {
        "titulo": "Cambios y devoluciones",
        "texto": "Texto de ejemplo. Aquí la tienda explica si acepta cambios o devoluciones, en qué plazo y en qué condiciones."
      },
      {
        "titulo": "Reservas",
        "texto": "Texto de ejemplo. Aquí va si se pueden reservar productos y por cuánto tiempo."
      },
      {
        "titulo": "Envíos",
        "texto": "Texto de ejemplo. En esta demo los envíos son por pagar: el despacho se paga al recibirlo."
      },
      {
        "titulo": "Plazos de entrega",
        "texto": "Texto de ejemplo. Los plazos que se muestran son referenciales."
      }
    ]
  },
  "tema": {
    "color": "#27496d",
    "colorDestacado": "#b98a3e"
  },
  "anuncio": [
    "Tienda de demostración",
    "Productos, precios e imágenes de ejemplo",
    "Compra fácil por WhatsApp"
  ],
  "horario": null,
  "horarioConfirmado": false,
  "diasCerrados": [],
  "portada": [
    {
      "titulo": "Tienda\nde prueba",
      "bajada": "Esta es una tienda demo: los productos, los precios y las fotos son de ejemplo.",
      "foto": "img/portada-1.webp",
      "boton": "Ver catálogo demo",
      "enlace": "#/catalogo"
    },
    {
      "titulo": "Botas\nde ejemplo",
      "bajada": "Texto de ejemplo para la segunda imagen de la portada.",
      "foto": "img/portada-2.webp",
      "boton": "Ver botas",
      "enlace": "#/c/botas"
    },
    {
      "titulo": "Artículos\nde prueba",
      "bajada": "Agrega, edita o borra productos desde el panel de administración.",
      "foto": "img/portada-3.webp",
      "boton": "Ver el catálogo",
      "enlace": "#/catalogo"
    }
  ],
  "temporada": {
    "etiqueta": "",
    "titulo": "",
    "bajada": "",
    "foto": "",
    "boton": "",
    "enlace": ""
  },
  "textos": {
    "catalogo": {
      "titulo": "Catálogo",
      "bajada": "Catálogo de demostración: todos los artículos son de prueba, en tallas 35 a la 40.",
      "destacado": ""
    },
    "destacados": {
      "titulo": "Destacados",
      "bajada": "",
      "destacado": ""
    },
    "tallas": {
      "titulo": "Guía de tallas",
      "bajada": "Mide tu pie en centímetros, del talón al dedo más largo, de pie y sobre una hoja. Ojo: varios modelos tienen horma pequeña, así que conviene pedir una talla más.",
      "destacado": ""
    },
    "tienda": {
      "titulo": "Visita la tienda demo",
      "bajada": "",
      "destacado": ""
    },
    "pasos": {
      "titulo": "Comprar es simple",
      "bajada": "",
      "destacado": ""
    },
    "politicas": {
      "titulo": "Políticas de compra",
      "bajada": "Textos de ejemplo de las políticas de compra.",
      "destacado": ""
    }
  },
  "pasos": [
    {
      "icono": "talla",
      "titulo": "Elige tu talla",
      "texto": "Los artículos demo van de la 35 a la 40. Algunos traen aviso de horma para que veas cómo se muestra."
    },
    {
      "icono": "camion",
      "titulo": "Completa tus datos",
      "texto": "Envío a domicilio o retiro en Santiago. El envío se paga al recibirlo."
    },
    {
      "icono": "wsp",
      "titulo": "Confirmamos por WhatsApp",
      "texto": "Te llega el detalle del pedido por WhatsApp. En esta demo el número es de ejemplo."
    }
  ],
  "regiones": [
    "Arica y Parinacota",
    "Tarapacá",
    "Antofagasta",
    "Atacama",
    "Coquimbo",
    "Valparaíso",
    "Metropolitana",
    "O'Higgins",
    "Maule",
    "Ñuble",
    "Biobío",
    "La Araucanía",
    "Los Ríos",
    "Los Lagos",
    "Aysén",
    "Magallanes"
  ],
  "guiaTallas": [
    {
      "talla": "35",
      "cm": "22,5",
      "us": "5"
    },
    {
      "talla": "36",
      "cm": "23,0",
      "us": "5,5"
    },
    {
      "talla": "37",
      "cm": "23,5",
      "us": "6,5"
    },
    {
      "talla": "38",
      "cm": "24,5",
      "us": "7,5"
    },
    {
      "talla": "39",
      "cm": "25,0",
      "us": "8"
    },
    {
      "talla": "40",
      "cm": "25,5",
      "us": "8,5"
    }
  ],
  "cupones": [
    {
      "codigo": "DEMO10",
      "tipo": "porcentaje",
      "valor": 10,
      "tope": 5000
    },
    {
      "codigo": "TEST5000",
      "tipo": "monto",
      "valor": 5000,
      "minimo": 40000
    }
  ],
  "portadaSegundos": 4,
  "categorias": [
    {
      "id": "botines",
      "nombre": "Botines",
      "foto": "img/catalogo/botin-demo-01-camel.webp",
      "productos": [
        {
          "id": "botin-demo-01",
          "nombre": "Botín Demo 01",
          "precio": 22990,
          "fotos": [
            "img/catalogo/botin-demo-01-camel.webp",
            "img/catalogo/botin-demo-01-negro.webp"
          ],
          "detalle": "Botín de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma pequeña: se recomienda pedir una talla más.",
          "colores": [
            {
              "nombre": "Camel",
              "hex": "#a9682f"
            },
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [],
          "tallas": "35-40",
          "destacado": true
        },
        {
          "id": "botin-demo-02",
          "nombre": "Botín Demo 02",
          "precio": 21990,
          "fotos": [
            "img/catalogo/botin-demo-02-negro.webp"
          ],
          "detalle": "Botín de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma pequeña: se recomienda pedir una talla más.",
          "colores": [
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [],
          "tallas": "35-40"
        },
        {
          "id": "botin-demo-03",
          "nombre": "Botín Demo 03",
          "precio": 19990,
          "fotos": [
            "img/catalogo/botin-demo-03-negro.webp"
          ],
          "detalle": "Botín de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma normal.",
          "colores": [
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [
            "oferta"
          ],
          "tallas": {
            "35": 1,
            "36": 1,
            "37": 1,
            "38": 1,
            "39": 1,
            "40": 1
          },
          "precioAntes": 22990,
          "destacado": true
        },
        {
          "id": "botin-demo-04",
          "nombre": "Botín Demo 04",
          "precio": 19990,
          "fotos": [
            "img/catalogo/botin-demo-04-marron.webp"
          ],
          "detalle": "Botín de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma normal.",
          "colores": [
            {
              "nombre": "Marrón",
              "hex": "#4a2d20"
            }
          ],
          "etiquetas": [
            "oferta"
          ],
          "tallas": "35-40",
          "precioAntes": 22990
        },
        {
          "id": "botin-demo-05",
          "nombre": "Botín Demo 05",
          "precio": 18990,
          "fotos": [
            "img/catalogo/botin-demo-05-camel.webp",
            "img/catalogo/botin-demo-05-negro.webp"
          ],
          "detalle": "Botín de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma pequeña: se recomienda pedir una talla más.",
          "colores": [
            {
              "nombre": "Camel",
              "hex": "#b1763a"
            },
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [],
          "tallas": "35-40"
        }
      ]
    },
    {
      "id": "botas",
      "nombre": "Botas",
      "foto": "img/catalogo/bota-demo-01-blanco.webp",
      "productos": [
        {
          "id": "bota-demo-01",
          "nombre": "Bota Demo 01",
          "precio": 24990,
          "fotos": [
            "img/catalogo/bota-demo-01-blanco.webp",
            "img/catalogo/bota-demo-01-negro.webp"
          ],
          "detalle": "Bota de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma pequeña: se recomienda pedir una talla más.",
          "colores": [
            {
              "nombre": "Blanco",
              "hex": "#f2f0ec"
            },
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [
            "oferta"
          ],
          "tallas": "35-40",
          "precioAntes": 30990,
          "destacado": true
        },
        {
          "id": "bota-demo-02",
          "nombre": "Bota Demo 02",
          "precio": 24990,
          "fotos": [
            "img/catalogo/bota-demo-02-camel.webp"
          ],
          "detalle": "Bota de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma pequeña: se recomienda pedir una talla más.",
          "colores": [
            {
              "nombre": "Camel",
              "hex": "#a9682f"
            }
          ],
          "etiquetas": [
            "oferta"
          ],
          "tallas": "35-40",
          "precioAntes": 32990
        },
        {
          "id": "bota-demo-03",
          "nombre": "Bota Demo 03",
          "precio": 24990,
          "fotos": [
            "img/catalogo/bota-demo-03-negro.webp"
          ],
          "detalle": "Bota de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma pequeña: se recomienda pedir una talla más.",
          "colores": [
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [
            "oferta"
          ],
          "tallas": "35-40",
          "precioAntes": 29990
        },
        {
          "id": "bota-demo-04",
          "nombre": "Bota Demo 04",
          "precio": 21990,
          "fotos": [
            "img/catalogo/bota-demo-04-negro.webp"
          ],
          "detalle": "Bota de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma pequeña: se recomienda pedir una talla más.",
          "colores": [
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [
            "oferta"
          ],
          "tallas": "35-40",
          "precioAntes": 25990
        },
        {
          "id": "bota-demo-05",
          "nombre": "Bota Demo 05",
          "precio": 21990,
          "fotos": [
            "img/catalogo/bota-demo-05-terracota.webp",
            "img/catalogo/bota-demo-05-negro.webp"
          ],
          "detalle": "Bota de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma pequeña: se recomienda pedir una talla más.",
          "colores": [
            {
              "nombre": "Terracota",
              "hex": "#7d3b2e"
            },
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [],
          "tallas": {
            "35": 1,
            "36": 1,
            "37": 1,
            "38": 1,
            "39": 1,
            "40": 1
          }
        }
      ]
    },
    {
      "id": "zapatillas",
      "nombre": "Zapatillas",
      "foto": "img/catalogo/zapatilla-demo-01-cafe.webp",
      "productos": [
        {
          "id": "zapatilla-demo-01",
          "nombre": "Zapatilla Demo 01",
          "precio": 18990,
          "fotos": [
            "img/catalogo/zapatilla-demo-01-cafe.webp",
            "img/catalogo/zapatilla-demo-01-negro.webp"
          ],
          "detalle": "Zapatilla de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma normal.",
          "colores": [
            {
              "nombre": "Café",
              "hex": "#6b4a37",
              "tallas": {
                "35": 1,
                "36": 1,
                "37": 1,
                "38": 1,
                "39": 1,
                "40": 1
              }
            },
            {
              "nombre": "Negro",
              "hex": "#1d1d1f",
              "tallas": {
                "35": 1,
                "36": 1,
                "37": 1,
                "38": 1,
                "39": 1,
                "40": 1
              }
            }
          ],
          "etiquetas": [],
          "tallas": {
            "35": 1,
            "36": 1,
            "37": 1,
            "38": 1,
            "39": 1,
            "40": 1
          },
          "destacado": true
        },
        {
          "id": "zapatilla-demo-02",
          "nombre": "Zapatilla Demo 02",
          "precio": 18990,
          "fotos": [
            "img/catalogo/zapatilla-demo-02-rosado-y-blanco.webp"
          ],
          "detalle": "Zapatilla de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma normal.",
          "colores": [
            {
              "nombre": "Rosado y blanco",
              "hex": "#e8c9cd"
            }
          ],
          "etiquetas": [],
          "tallas": "35-40"
        },
        {
          "id": "zapatilla-demo-03",
          "nombre": "Zapatilla Demo 03",
          "precio": 12990,
          "fotos": [
            "img/catalogo/zapatilla-demo-03-negro.webp",
            "img/catalogo/zapatilla-demo-03-cafe.webp",
            "img/catalogo/zapatilla-demo-03-rojo.webp"
          ],
          "detalle": "Zapatilla de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma normal.",
          "colores": [
            {
              "nombre": "Negro",
              "hex": "#1d1d1f",
              "tallas": {
                "35": 1,
                "36": 1,
                "37": 1,
                "38": 1,
                "39": 1,
                "40": 1
              }
            },
            {
              "nombre": "Café",
              "hex": "#6b4a37",
              "tallas": {
                "35": 1,
                "36": 1,
                "37": 1,
                "38": 1,
                "39": 1,
                "40": 1
              }
            },
            {
              "nombre": "Rojo",
              "hex": "#9b2c2c",
              "tallas": {
                "35": 1,
                "36": 1,
                "37": 1,
                "38": 1,
                "39": 1,
                "40": 1
              }
            }
          ],
          "etiquetas": [],
          "tallas": {
            "35": 1,
            "36": 3,
            "37": 0,
            "38": 1,
            "39": 1,
            "40": 0
          }
        },
        {
          "id": "zapatilla-demo-04",
          "nombre": "Zapatilla Demo 04",
          "precio": 17990,
          "fotos": [
            "img/catalogo/zapatilla-demo-04-blanca.webp",
            "img/catalogo/zapatilla-demo-04-negro-gamuza.webp"
          ],
          "detalle": "Zapatilla de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma normal.",
          "colores": [
            {
              "nombre": "Blanca",
              "hex": "#f2f0ec"
            },
            {
              "nombre": "Negro gamuza",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [
            "oferta"
          ],
          "tallas": "35-40",
          "precioAntes": 22990
        },
        {
          "id": "zapatilla-demo-05",
          "nombre": "Zapatilla Demo 05",
          "precio": 17990,
          "fotos": [
            "img/catalogo/zapatilla-demo-05-blanca.webp",
            "img/catalogo/zapatilla-demo-05-negro.webp"
          ],
          "detalle": "Zapatilla de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma normal.",
          "colores": [
            {
              "nombre": "Blanca",
              "hex": "#f2f0ec"
            },
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [
            "oferta"
          ],
          "tallas": "35-40",
          "precioAntes": 22990
        },
        {
          "id": "zapatilla-demo-06",
          "nombre": "Zapatilla Demo 06",
          "precio": 17990,
          "fotos": [
            "img/catalogo/zapatilla-demo-06-blanca.webp",
            "img/catalogo/zapatilla-demo-06-negro.webp"
          ],
          "detalle": "Zapatilla de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma normal.",
          "colores": [
            {
              "nombre": "Blanca",
              "hex": "#f2f0ec"
            },
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [
            "oferta"
          ],
          "tallas": "35-40",
          "precioAntes": 22990
        },
        {
          "id": "zapatilla-demo-07",
          "nombre": "Zapatilla Demo 07",
          "precio": 17990,
          "fotos": [
            "img/catalogo/zapatilla-demo-07-negro-charol.webp"
          ],
          "detalle": "Zapatilla de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma normal.",
          "colores": [
            {
              "nombre": "Negro charol",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [
            "oferta"
          ],
          "tallas": "35-40",
          "precioAntes": 22990
        },
        {
          "id": "zapatilla-demo-08",
          "nombre": "Zapatilla Demo 08",
          "precio": 17990,
          "fotos": [
            "img/catalogo/zapatilla-demo-08-blanca.webp"
          ],
          "detalle": "Zapatilla de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma normal.",
          "colores": [
            {
              "nombre": "Blanca",
              "hex": "#f2f0ec"
            }
          ],
          "etiquetas": [
            "nuevo"
          ],
          "tallas": "35-40"
        },
        {
          "id": "zapatilla-demo-09",
          "nombre": "Zapatilla Demo 09",
          "precio": 13990,
          "fotos": [
            "img/catalogo/zapatilla-demo-09-pink.webp",
            "img/catalogo/zapatilla-demo-09-negro.webp"
          ],
          "detalle": "Zapatilla de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma normal.",
          "colores": [
            {
              "nombre": "Pink",
              "hex": "#e0a9b8"
            },
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [
            "oferta"
          ],
          "tallas": "35-40",
          "precioAntes": 16990
        },
        {
          "id": "zapatilla-demo-10",
          "nombre": "Zapatilla Demo 10",
          "precio": 15990,
          "fotos": [
            "img/catalogo/zapatilla-demo-10-negro.webp",
            "img/catalogo/zapatilla-demo-10-gris.webp"
          ],
          "detalle": "Zapatilla de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma normal.",
          "colores": [
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            },
            {
              "nombre": "Gris",
              "hex": "#9a9aa0"
            }
          ],
          "etiquetas": [
            "oferta"
          ],
          "tallas": "35-40",
          "precioAntes": 19990
        },
        {
          "id": "zapatilla-demo-11",
          "nombre": "Zapatilla Demo 11",
          "precio": 15990,
          "fotos": [
            "img/catalogo/zapatilla-demo-11-gris.webp"
          ],
          "detalle": "Zapatilla de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma normal.",
          "colores": [
            {
              "nombre": "Gris",
              "hex": "#9a9aa0"
            }
          ],
          "etiquetas": [],
          "tallas": "35-40"
        },
        {
          "id": "zapatilla-demo-12",
          "nombre": "Zapatilla Demo 12",
          "precio": 14990,
          "fotos": [
            "img/catalogo/zapatilla-demo-12-negro.webp"
          ],
          "detalle": "Zapatilla de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma pequeña: se recomienda pedir una talla más.",
          "colores": [
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [],
          "tallas": "35-40"
        }
      ]
    },
    {
      "id": "sandalias",
      "nombre": "Sandalias",
      "foto": "img/catalogo/sandalia-demo-01-negro.webp",
      "productos": [
        {
          "id": "sandalia-demo-01",
          "nombre": "Sandalia Demo 01",
          "precio": 16990,
          "fotos": [
            "img/catalogo/sandalia-demo-01-negro.webp"
          ],
          "detalle": "Sandalia de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma pequeña: se recomienda pedir una talla más.",
          "colores": [
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [
            "nuevo"
          ],
          "tallas": "35-40"
        },
        {
          "id": "sandalia-demo-02",
          "nombre": "Sandalia Demo 02",
          "precio": 15990,
          "fotos": [
            "img/catalogo/sandalia-demo-02-gris.webp"
          ],
          "detalle": "Sandalia de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma pequeña: se recomienda pedir una talla más.",
          "colores": [
            {
              "nombre": "Gris",
              "hex": "#9a9aa0"
            }
          ],
          "etiquetas": [],
          "tallas": "35-40"
        },
        {
          "id": "sandalia-demo-03",
          "nombre": "Sandalia Demo 03",
          "precio": 18990,
          "fotos": [
            "img/catalogo/sandalia-demo-03-negro.webp"
          ],
          "detalle": "Sandalia de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma pequeña: se recomienda pedir una talla más.",
          "colores": [
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [],
          "tallas": "35-40"
        },
        {
          "id": "sandalia-demo-04",
          "nombre": "Sandalia Demo 04",
          "precio": 18990,
          "fotos": [
            "img/catalogo/sandalia-demo-04-negro.webp"
          ],
          "detalle": "Sandalia de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma pequeña: se recomienda pedir una talla más.",
          "colores": [
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [],
          "tallas": "35-40"
        },
        {
          "id": "sandalia-demo-05",
          "nombre": "Sandalia Demo 05",
          "precio": 15990,
          "fotos": [
            "img/catalogo/sandalia-demo-05-blanco.webp",
            "img/catalogo/sandalia-demo-05-negro.webp"
          ],
          "detalle": "Sandalia de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma pequeña: se recomienda pedir una talla más.",
          "colores": [
            {
              "nombre": "Blanco",
              "hex": "#f2f0ec"
            },
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [],
          "tallas": "35-40"
        },
        {
          "id": "sandalia-demo-06",
          "nombre": "Sandalia Demo 06",
          "precio": 15990,
          "fotos": [
            "img/catalogo/sandalia-demo-06-blanco.webp",
            "img/catalogo/sandalia-demo-06-negro.webp"
          ],
          "detalle": "Sandalia de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma normal.",
          "colores": [
            {
              "nombre": "Blanco",
              "hex": "#f2f0ec"
            },
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [],
          "tallas": "35-40"
        },
        {
          "id": "sandalia-demo-07",
          "nombre": "Sandalia Demo 07",
          "precio": 15990,
          "fotos": [
            "img/catalogo/sandalia-demo-07-negro.webp",
            "img/catalogo/sandalia-demo-07-blanco.webp"
          ],
          "detalle": "Sandalia de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma normal.",
          "colores": [
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            },
            {
              "nombre": "Blanco",
              "hex": "#f2f0ec"
            }
          ],
          "etiquetas": [],
          "tallas": "35-40"
        },
        {
          "id": "sandalia-demo-08",
          "nombre": "Sandalia Demo 08",
          "precio": 11990,
          "fotos": [
            "img/catalogo/sandalia-demo-08-negro.webp",
            "img/catalogo/sandalia-demo-08-blanco.webp"
          ],
          "detalle": "Sandalia de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma normal.",
          "colores": [
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            },
            {
              "nombre": "Blanco",
              "hex": "#f2f0ec"
            }
          ],
          "etiquetas": [],
          "tallas": "35-40"
        },
        {
          "id": "sandalia-demo-09",
          "nombre": "Sandalia Demo 09",
          "precio": 11990,
          "fotos": [
            "img/catalogo/sandalia-demo-09-cafe.webp",
            "img/catalogo/sandalia-demo-09-negro.webp"
          ],
          "detalle": "Sandalia de prueba para mostrar cómo se ve un artículo en la tienda.",
          "descripcion": "Este es un texto de ejemplo. Aquí va la descripción del artículo: cómo es, para qué ocasión sirve y qué lo hace especial.\nSe cambia desde el panel de administración, en la pestaña Productos.",
          "material": "Material de ejemplo",
          "cuidados": "Cuidados de ejemplo: aquí va cómo limpiar y guardar el artículo.",
          "nota": "Horma normal.",
          "colores": [
            {
              "nombre": "Café",
              "hex": "#b08a6a"
            },
            {
              "nombre": "Negro",
              "hex": "#1d1d1f"
            }
          ],
          "etiquetas": [],
          "tallas": "35-40"
        }
      ]
    }
  ]
};
