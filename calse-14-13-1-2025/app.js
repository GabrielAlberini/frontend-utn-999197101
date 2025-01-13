const students = ["Juan", "Manuel", "María", "Jose"]



// Longitud de array -> cantidad de elementos
const studentsCount = students.length

// Find -> encontrar -> buscar un elemento basado en una condición
// Encontrar el primer alumno que empiece con J

// 1° iterar el array
// 2° definir la condición
// 3° guardar el elemento encontrado

// Returns the value of the first element in the array where predicate is true, and undefined otherwise.
const firstNameWithJ = students.find((student) => {
  const validateName = student.startsWith("J")

  if (validateName === true) {
    return student
  }
  // Fin del bucle
})

// console.log(firstNameWithJ)

const presentStudents = ["Juan", "Manuel", "Jose"]

const isPresent = presentStudents.find((student) => {
  const mariaIsPresent = student === "María"

  if (mariaIsPresent === true) {
    return student
  }
})

// console.log(isPresent)

const isMariaPresent = presentStudents.includes("María")

if (isMariaPresent === true) {
  // console.log("María está presente :)")
} else {
  // console.log("María no está presente :(")
}

// ------------------------------

// Filter -> filtrar -> genera un nuevo array con las condiciones

const cart = ["parlante", "campera", "remera", "pc", "lampara", "pendorcho"]

// Returns the elements of an array that meet the condition specified in a callback function.

// callback -> función que se ejecuta despues de que pasa algo
// Encontrar todos los productos que comienzan con P
const products = cart.filter((product) => {
  // Forma 1
  if (product.startsWith("P")) {
    return product
  }

  // Forma 2
  // const validateName = product.startsWith("P")
  // if (validateName === true) {
  //   return product
  // }
})

// console.log(products)

// Map -> mapear -> transforma cada elemento

const divNames = document.querySelector("#names")
const namesWithErrors = ["lUcA", "DanIEL", "PablO"]

const namesWithoutErrors = namesWithErrors.map((name) => {
  // divNames.innerHTML += `<h2>${name.toLowerCase()}</h2>`
  return name.toLowerCase()
})

// console.log(namesWithoutErrors)


// Situación: El usuario agrega productos a un carrito. Cada vez que se agrega un producto, se muestra el número total de productos.

// 1° Poder tomar nuevos productos, form
// 2° Conectar form con js
// 3° Reservar espacio en memoria para los productos
// 4° Crear funcionalidad para calcular la cant de prod

const input = document.querySelector("#input-1")
const form = document.querySelector("form")


// Ejemplo 1:
// form.addEventListener("submit", (event) => {
//   event.preventDefault()

//   const valueInput = input.value

//   productsToCart.push(valueInput)

//   // Mostrar el total de productos
//   console.log("La cantidad total de productos es de: " + productsToCart.length)

//   // De todos los productos la pc tiene un 50% de descuento, comunicarselo al usuario si es que compra una
//   const isPC = productsToCart.find((product) => {
//     if (product === "pc") {
//       console.log(product + " se encuentra con 50% de descuento")
//       return product
//     }
//   })

//   input.value = ""
// })

const productsList = document.querySelector("#productsList")
const productsToCart = []

// Ejemplo 2:
form.addEventListener("submit", (event) => {
  event.preventDefault()

  productsToCart.push(input.value)

  productsList.innerHTML = ""

  productsToCart.map((product) => {
    productsList.innerHTML += `<li>${product}</li>`
  })

  input.value = ""
})
