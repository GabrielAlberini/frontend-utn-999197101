// Un bucles es una estructura de control que repite acciones
// Array -> lista -> una colección de elementos listados

const cart = ["tv", "celular", "remera", "mesa", "tenedores", "manteles", "lapices"]

// console.log(cart)

const listaDeAlumnos = ["maría", "angelina", "jose", "juan"]

// console.log(listaDeAlumnos)

// Funcion flecha -> () => {}

cart.forEach((producto, indice) => {
  // ---------------- Empieza el bucle
  const posicion = indice + 1

  console.log(posicion + "° " + "compre un/una" + " " + producto)
  // ---------------- Termina el bucle
})

console.log("Fuera del bucle")