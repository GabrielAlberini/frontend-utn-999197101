// Inventar una función que de manera aleatoria cambie el fondo de la pantalla

const body = document.querySelector("body")

const colores = ["red", "yellow", "brown", "blue", "violet", "green", "yellowgreen", "lightblue", "crimson", "tomato", "purple"]

function cambiarColor() {
  const numeroAleatorio = Math.floor(Math.random() * colores.length)

  const colorAleatorio = colores[numeroAleatorio]

  body.style.backgroundColor = colorAleatorio
}

cambiarColor()