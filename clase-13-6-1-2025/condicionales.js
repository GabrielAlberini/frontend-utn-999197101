// Una condición es una estructura de control que realiza algo segun un hecho

// Sintáxis -> como se escribe
// Funcionalidad -> que hace

const nombre = "lalala"

// Palabra reservada
// Condición
// Scope o zona privada
if (nombre === "Gabriel") {
  console.log("Hola Gabriel, te estabamos esperando acá esta tu entrada.")
} else if (nombre === "Marito") {
  console.log("Hola Marito, te estabamos esperando acá esta tu entrada.")
} else {
  console.log("No sos Gabriel, hola" + " " + nombre + " " + "no estas en la lista :(")
}

console.log("Fuera del if")