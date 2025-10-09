// Crear título de Bienvenidos
const section = document.querySelector(".section-1")

const titleBienvenidos = document.createElement("h2")
titleBienvenidos.innerText = "Bienvenidos"
section.appendChild(titleBienvenidos)

// Crear Imagen de Bienvenidos

const img = document.createElement("img")
img.src = "./img/atardecer.jpg"
section.appendChild(img)

// Crear sección de Recomendados

// Crear título de Recomendados
const section2 = document.querySelector(".section-2")
const titleRecomendados = document.createElement("h2")
titleRecomendados.innerText = "Recomendados"
section2.appendChild(titleRecomendados)

// Div
const divRecomendados = document.createElement("div")
const atributoDiv = document.createAttribute("class")
divRecomendados.className = "section-articles"
section2.appendChild(divRecomendados)

// Crear artículos de Recomendados
const viajes = [
    {
        title: "Viaje 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic deleniti animi odio voluptatum enim reprehenderit eos tenetur ut aperiam consectetur porro iure at quia, praesentium impedit natus earum quaerat.",
        url_image: "./img/viajes-1.jpg",
        atribute: "Imagen de mujer en playa paradisiaca encima de una hamaca"
    },
    {
        title: "Viaje 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic deleniti animi odio voluptatum enim reprehenderit eos tenetur ut aperiam consectetur porro iure at quia, praesentium impedit natus earum quaerat.",
        url_image: "./img/viajes-2.jpg",
        atribute: "Imagen de un mar con pasarela de madera"
    },
    {
        title: "Viaje 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic deleniti animi odio voluptatum enim reprehenderit eos tenetur ut aperiam consectetur porro iure at quia, praesentium impedit natus earum quaerat.",
        url_image: "./img/viajes-3.jpg",
        atribute: "Imagen cartel con distintas ubicaciones"
    }
]
for(let i = 0; i < viajes.length; i++) {
const viaje = viajes[i]

const sectionArticles = document.querySelector(".section-articles")
const article = document.createElement("article")
article.className = "articles"


// IMG
const img = document.createElement("img")
img.src = viaje.url_image
img.alt = viaje.atribute
article.appendChild(img)


// DIV
const div = document.createElement("div")
article.appendChild(div)

// Título
const title = document.createElement("h3")
title.textContent = viaje.title
div.appendChild(title)

// Texto
const text = document.createElement("p")
text.textContent = viaje.description
div.appendChild(text)

sectionArticles.appendChild(article)
}

const destinos = [
    "Selecciona tu ciudad","Madrid", "Cancún", "Maldivas", "Barcelona", "Burgos", "Sevilla", "Armenia"
]

const section3 = document.querySelector(".section-3")
const titleDestinos = document.createElement("h2")
titleDestinos.innerText = "Destinos"
section3.appendChild(titleDestinos)

const select = document.createElement("select")
select.id = "select"
select.name = "select"

destinos.forEach(sitio => {
    const option = document.createElement("option")
    option.value = sitio
    option.innerText = sitio
    select.appendChild(option)
    
    section3.appendChild(select)
})