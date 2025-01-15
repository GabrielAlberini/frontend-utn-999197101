// Funciones -> fragmentos de código que se pueden reutilizar, cada una realiza una acción en particular

// Realizar un programa que salude a alumnos
// const saludo = document.querySelector("#saludo")

// const nombre1 = prompt("Ingrese su nombre")

// saludo.textContent = "Hola " + nombre1

// setTimeout(() => {
//   const nombre2 = prompt("Ingrese su nombre 2")
//   saludo.textContent = "Hola " + nombre2
// }, 5000)

// setTimeout(() => {
//   const nombre2 = prompt("Ingrese su nombre 2")
//   saludo.textContent = "Hola " + nombre2
// }, 10000)

// FUNCIÓN NOMBRADA
// Palabra reservada
// Nombre de función
// Parametros
// Scope (zona privada)


// 1° declaración de función (enseñarle a la pc que tiene que hacer)
function saludar() {
  console.log("HOLA!")
}

// 2° invocación de función (ejecutar la acción)
// saludar()
// saludar()

// Hoisting -> elevación de funciones al comienzo del script


// Parámetro -> una variable local que se utiliza dentro de la función
// function saludarConNombre(nombre) {
//   if (nombre === null) {
//     saludo.textContent = "Hola desconocido"
//   } else {
//     saludo.textContent = "Hola " + nombre
//   }
// }

// Argumento -> valor que le damos al parámetro
// saludarConNombre("Pepe")

// const nombre = prompt("Ingrese su nombre:")
// saludarConNombre(nombre)

// const resultado = document.querySelector("#resultado")

// function calcular(numero1, operacion, numero2) {
//   if (operacion === "suma") {
//     resultado.textContent = numero1 + numero2
//   } else if (operacion === "resta") {
//     resultado.textContent = numero1 - numero2
//   } else if (operacion === "multiplicación") {
//     resultado.textContent = numero1 * numero2
//   } else if (operacion === "división") {
//     if (numero2 === 0) {
//       resultado.textContent = "No se puede dividir por 0"
//     } else {
//       resultado.textContent = numero1 / numero2
//     }
//   } else if (operacion === "exponencia") {
//     resultado.textContent = numero1 ** numero2
//   } else {
//     resultado.textContent = "Operación no valida"
//   }
// }

// const n1 = +prompt("Ingrese número 1:")
// const operacion = prompt("Ingrese que operación desea hacer:")
// const n2 = +prompt("Ingrese número 2:")

// calcular(n1, operacion, n2)

// number, string, boolean, undefined, null, array, NaN
// NaN -> not a number

// return -> lo que devuelve una función

// const texto = document.querySelector("#texto")

// function crearSaludo() {
//   console.log("Paso 1")
//   const saludo = "Hola todos, como estan?"
//   return saludo
//   console.log("Paso 2")
//   console.log("Paso 3")
//   console.log("Paso 4")
// }

// // "Hola todos, como estan?"

// const saludoCreado = crearSaludo()

// texto.textContent = saludoCreado

// Fabrica de tortas

const text = document.querySelector("#text")

// Máquina 1: Mezclar ingredientes (sin return, solo muestra el mensaje)

function mezclarIngredientes() {
  console.log("Mezclando ingredientes...")
}

// Máquina 2: Hornear la torta (usa return para devolver la torta horneada)
function hornearTorta() {
  console.log("Horneando torta...")
  return "Torta horneada"
}

// Máquina 3: Decorar la torta (usa el resultado de la máquina 2)
function decorarTorta(torta) {
  if (torta === undefined) {
    console.log("No hay torta para decorar")
    return
  }

  console.log("Decorando torta...")
  return "Torta decorada"
}

// Proceso completo de la fábrica
function fabricarTorta() {
  // Paso 1: Mezclar ingredientes
  mezclarIngredientes()

  // Paso 2: Hornear la torta
  const tortaHorneada = hornearTorta()

  // Paso 3: Decorar torta
  const tortaDecorada = decorarTorta()

  // Mostrar torta final decorada

  if (tortaDecorada === undefined) {
    text.textContent = "Falló el proceso"
  } else {
    text.textContent = "Fin del proceso: " + tortaDecorada
  }
}

// Ejecución de la fabrica de tortas
fabricarTorta()


