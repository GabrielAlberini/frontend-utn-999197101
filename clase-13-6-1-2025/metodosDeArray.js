const frutas = ["manzana", "pera", "frutilla", "ciruela"]

// console.log(frutas)

// Memoria rigida y memoria RAM

// push -> agrega un elemento al final de un array
frutas.push("limón")
console.log(frutas)

// pop -> elimina el último elemento
frutas.pop()
console.log(frutas)

// unshift() -> agrega un elemento al comienzo de un array
frutas.unshift("arandano")
console.log(frutas)

// shift() -> elemina el primer elemento de un array
frutas.shift()
console.log(frutas)

// splice -> elimina un elemento x de un array
frutas.splice(2, 1)
console.log(frutas)