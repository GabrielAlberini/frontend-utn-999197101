// Paso 1: Conectar el botón y el div
let button = document.querySelector("button")
let div = document.querySelector("div")

// Mostrar lo almacenado en la consola
// console.log(button, div)

// Javascript manipula el DOM -> Document object model (HTML)

// Paso 2: Detectar el click en el botón
button.addEventListener("click", analizarDiv)

function analizarDiv() {
  // Paso 3: Enseñarle a la pc que si el div tiene la clase "mostrar" se la elimine y le agregue "ocultar" y viceversa

  if (div.classList.contains("mostrar")) {
    div.classList.remove("mostrar")
    div.classList.add("ocultar")
    button.style.backgroundColor = "red"
  } else {
    div.classList.remove("ocultar")
    div.classList.add("mostrar")
    button.style.backgroundColor = "yellowgreen"
  }
}
