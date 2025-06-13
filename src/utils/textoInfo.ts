import { reWhatsapp } from "./refactor"

export const textoInfo = [
  {
    id: 1,
    descripcion: "Mil Delicias nació en el segundo semestre del 2024 como una idea inspirada en una tendencia de TikTok. Todo comenzó con un sencillo postre de limón, pero pronto se convirtió en algo más grande: una oportunidad de transformar un antojo en un emprendimiento con sabor y corazón.",
  },
  {
    id: 2,
    descripcion: "Lo que empezó como una prueba entre recetas caseras se volvió realidad cuando compartí los primeros vasitos con mi familia y amigos de la Universidad de Pamplona y del área de fotografía. Las reacciones fueron tan positivas que decidí dar el siguiente paso: llevar mi dulce idea al campus y comenzar con ventas informales.",
  },
  {
    id: 3,
    descripcion: "Aunque al principio el mayor reto fue encontrar tiempo entre clases y estudios para preparar los postres, la emoción y la satisfacción de ver a la gente disfrutar cada cucharada hicieron que todo valiera la pena.",
  },
  {
    id: 4,
    descripcion: "Hoy, Mil Delicias ofrece mucho más que el sabor original de limón: he creado combinaciones únicas como maracuyá, lulo y Oreo, todo sobre una base suave de crema de leche y galletas Ducales que encantan a cualquiera que los prueba.",
  }
]

export const personas = [
  {
    id: 1,
    nombre: "Mariana Fernanda Maya",
    foto: "./fotos/foto1.jpg",
    redes: [
      {
        id: 1,
        nombre: "Gmail",
        url: "mailto:colombiaenunsabor@gmail.com",
      },
      {
        id: 2, 
        nombre: "WhatsApp",
        url: reWhatsapp("3103711948"),
      }
    ]
  },
  {
    id: 2,
    nombre: "Yurani Melissa Gallardo",
    foto: "./fotos/foto2.jpg",
    redes: [
      {
        id: 1,
        nombre: "Gmail",
        url: "mailto:Melissagallardo2004@gmail.com",
      },
      {
        id: 2, 
        nombre: "WhatsApp",
        url: reWhatsapp("3166575625"),
      }
    ]
  },
  {
    id: 3,
    nombre: "María Fernanda Ibarra",
    foto: "./fotos/foto3.jpg",
    redes: [
      {
        id: 1,
        nombre: "Gmail",
        url: "mailto:fernandaibarra190405@gmail.com",
      }
      ,
      {
        id: 2, 
        nombre: "WhatsApp",
        url: reWhatsapp("3204392230"),
      }
    ]
  }
]