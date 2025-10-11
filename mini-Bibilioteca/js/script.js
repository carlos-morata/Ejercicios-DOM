// LIBROS POR DEFECTO
const books = [
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "./img/Things Fall Apart.webp",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    title: "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "imageLink": "./img/Fairy Tales.jpg",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    title: "Fairy tales",
    "year": 1836
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "imageLink": "./img/The Divine Comedy.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "pages": 928,
    title: "The Divine Comedy",
    "year": 1315
  },
  {
    "author": "Unknown",
    "country": "Sumer and Akkadian Empire",
    "imageLink": "./img/The Epic of Gilgamesh.jpg",
    "language": "Akkadian",
    "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    "pages": 160,
    title: "The Epic Of Gilgamesh",
    "year": -1700
  },
  {
    "author": "Unknown",
    "country": "Achaemenid Empire",
    "imageLink": "./img/The book of job.jpg",
    "language": "Hebrew",
    "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
    "pages": 176,
    title: "The Book Of Job",
    "year": -600
}]

// PRÁCTICA CON NODOS - DOM JS
const containerMain = document.getElementById("container-main")

// Añadir sección de libros por defecto
const sectionBooks = document.createElement("section")
containerMain.appendChild(sectionBooks)

// Título para los libros por defecto
const title1 = document.createElement("h2")
title1.innerHTML = "Libros por defecto"
const textTitle1 = document.createTextNode(title1)
sectionBooks.appendChild(title1)

// Bucle for para recorrer "books" y mostrar todos
for(let book of books) {

// Añadir sección de artículo de cada libro
const articleBook = document.createElement("article")
sectionBooks.appendChild(articleBook)

// Atributo de class para los article de libros
const atributeBook = document.createAttribute("class")
atributeBook.value = "article-book"
articleBook.setAttributeNode(atributeBook)


// Portada de libros
const frontBook = document.createElement("img")
frontBook.src = book.imageLink
articleBook.appendChild(frontBook)

// Autor
const authorBook = document.createElement("h3")
authorBook.innerHTML = "Autor: " + book.author
articleBook.appendChild(authorBook)

// País
const country = document.createElement("p")
country.innerHTML = "País: " + book.country
articleBook.appendChild(country)

// Idioma
const language = document.createElement("p")
language.innerHTML = "Idioma: " + book.language
articleBook.appendChild(language)

// Páginas
const pagesBook = document.createElement("p")
pagesBook.innerHTML = "Páginas: " + book.pages
articleBook.append(pagesBook)

// Año
const yearBook = document.createElement("p")
yearBook.innerHTML = "Año:" + book.year
articleBook.appendChild(yearBook)


// Más información
const infoBook = document.createElement("a")
infoBook.innerHTML = "Más info"
infoBook.href = book.link
articleBook.appendChild(infoBook)

// Atributo target para más información
const infoTarget = document.createAttribute("target")
infoTarget.value = "blank"
infoBook.setAttributeNode(infoTarget)
}

// PRÁCTICA CON TEMPLATE STRING - DOM JS

// LIBROS MIOS
const books2 = [
 {
   "author": "Sun Tzu",
   "country": "China",
   "imgLink": "./img/arte de la guerra.jpg",
   "language": "Chino clásico",
   "link": "https://es.wikipedia.org/wiki/El_arte_de_la_guerra",
   "pages": 160,
    "title": "El arte de la guerra",
    "year": ""
  },
  {
    "author": "Brian Tracy",
    "country": "Estados Unidos",
    "imgLink": "./img/Habla menos, actúa más.jpg",
    "language": "Inglés",
    "link": "https://www.amazon.es/Habla-menos-act%C3%BAa-m%C3%A1s-conquistar-ebook/dp/B01N2RTBXQ",
    "pages": 120,
    "title": "Habla menos, actúa más",
    "year": 2023,
  },
  {
    "author": "Gabriel Orozco Frutos",
    "country": "España",
    "imgLink": "./img/relatos programación.jpg",
    "language": "Español",
    "link": "https://www.amazon.es/Relatos-cortos-para-entender-programaci%C3%B3n/dp/1980223572",
    "title": "Relatos cortos para entender la programación",
    "pages": 57,
    "year": 2018,
  },
  {
    "author": "Stephen R. Covey",
    "country": "Estados Unidos",
    "imgLink": "./img/7 hábitos.jpg",
    "language": "Inglés",
    "link": "https://es.wikipedia.org/wiki/Los_siete_h%C3%A1bitos_de_la_gente_altamente_efectiva",
    "title": "Los 7 hábitos de la gente altamente efectiva",
    "pages": 480,
    "year": 1989,
  },
  {
    "author": "Robert Kiyosaki y Sharon Lechter",
    "country": "Estados Unidos",
    "imgLink": "./img/padre rico, padre pobre.jpg",
    "language": "Inglés",
    "link": "https://en.wikipedia.org/wiki/Rich_Dad_Poor_Dad",
    "title": "Padre Rico, Padre Pobre",
    "pages": 336,
    "year": 1997,
  }
]

// Añadir sección de libros míos
const sectionBooks2 = document.createElement("section")
containerMain.appendChild(sectionBooks2)

// Título para los libros míos
const title2 = document.createElement("h2")
title2.innerHTML = "Libros elegidos por mi"
const textTitle2 = document.createTextNode(title2)
sectionBooks2.appendChild(title2)

for (let book of books2) {
  // Añadir artículo para cada libro
  const articleBook2 = document.createElement("article")
  sectionBooks2.appendChild(articleBook2)

  // Atributo de class para los article de libros
  const atributeBook2 = document.createAttribute("class")
  atributeBook2.value = "article-book"
  articleBook2.setAttributeNode(atributeBook2)

  // Portada 
  const frontBook2 = document.createElement("img")
  frontBook2.src = book.imgLink
  articleBook2.appendChild(frontBook2)

  // Autor 
  const authorBook2 = document.createElement("h3")
  authorBook2.innerHTML = "Autor: " + book.author
  articleBook2.appendChild(authorBook2)

  // País
  const countryBook2 = document.createElement("p")
  countryBook2.innerHTML = "País: " + book.country
  articleBook2.appendChild(countryBook2)

  // Iidioma
  const languageBook2 = document.createElement("p")
  languageBook2.innerHTML = "Idioma: " + book.language
  articleBook2.appendChild(languageBook2)

  // Páginas
  const pagesBook2 = document.createElement("p")
  pagesBook2.innerHTML = "Páginas: " +  book.pages
  articleBook2.appendChild(pagesBook2)

  // Año
  const yearBook2 = document.createElement("p")
  yearBook2.innerHTML = "Año: " + book.year
  articleBook2.appendChild(yearBook2)

  // Más info
  const infoBook2 = document.createElement("a")
  infoBook2.innerHTML = "Más info"
  articleBook2.appendChild(infoBook2)

  // Atributo href (enlace)
  const infoBookLink2 = document.createAttribute("href")
  infoBookLink2.value = book.link
  infoBook2.setAttributeNode(infoBookLink2)

  // Atributo target a enlaces
  const infoTarget2 = document.createAttribute("target")
  infoTarget2.value = "blank"
  infoBook2.setAttributeNode(infoTarget2)
}