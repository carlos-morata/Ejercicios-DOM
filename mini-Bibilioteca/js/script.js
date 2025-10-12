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

// Título para los libros por defecto
const title1 = document.createElement("h2")
title1.innerHTML = "Libros por defecto"
const textTitle1 = document.createTextNode(title1)
containerMain.appendChild(title1)

// Añadir sección de libros por defecto
const sectionBooks = document.createElement("section")
containerMain.appendChild(sectionBooks)

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

// Contenedor contenido libro
const contentBook = document.createElement("div")
const atributeContentBook = document.createAttribute("class")
atributeContentBook.value = "content-book"
contentBook.setAttributeNode(atributeContentBook)


// Autor
const authorBook = document.createElement("h3")
authorBook.innerHTML = book.author
contentBook.appendChild(authorBook)

// País
const country = document.createElement("p")
country.innerHTML = "País: " + book.country
contentBook.appendChild(country)

// Idioma
const language = document.createElement("p")
language.innerHTML = "Idioma: " + book.language
contentBook.appendChild(language)

// Páginas
const pagesBook = document.createElement("p")
pagesBook.innerHTML = "Páginas: " + book.pages
contentBook.append(pagesBook)

// Año
const yearBook = document.createElement("p")
yearBook.innerHTML = "Año:" + book.year
contentBook.appendChild(yearBook)


// Más información
const infoBook = document.createElement("a")
infoBook.innerHTML = "Más info"
infoBook.href = book.link
contentBook.appendChild(infoBook)

// Atributo target para más información
const infoTarget = document.createAttribute("target")
infoTarget.value = "blank"
infoBook.setAttributeNode(infoTarget)

articleBook.appendChild(contentBook)
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
    "year": 1521
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

// Título para los libros míos
const title2 = document.createElement("h2")
title2.innerHTML = "Libros elegidos por mi"
containerMain.appendChild(title2)

// Añadir sección de libros míos
const sectionBooks2 = document.createElement("section")
containerMain.appendChild(sectionBooks2)

// Bucle for para recorrer "books2" y mostrar todos
for (let book of books2) {
 sectionBooks2.innerHTML += `
  <article class="article-book">
    <img src="${book.imgLink}" alt="Portada del libro - ${book.title}"</img>
    <div class="content-book">
    <h3>${book.author}</h3>
    <p>País: ${book.country}</p>
    <p>Idioma: ${book.language}</p>
    <p>Páginas: ${book.pages}</p>
    <p>Año: ${book.year}</p>
    <a href="${book.link}" target="_blank">Más info</a>
    </div>
  </article>
  `
}