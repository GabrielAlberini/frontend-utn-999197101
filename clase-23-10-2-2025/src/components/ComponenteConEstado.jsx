import { useState } from "react"

// HOOK -> es una funcionalidad existente en react que proporciona una acción en concreto

// .find() -> que encuentra la primer coinciencia dentro de un array

// useState() -> crea un estado para uso interno del componente

const ComponenteConEstado = () => {
  // destructuring de array
  // voy a extraer el estado y la función que lo actualiza

  // en el primer lugar el estado (click)
  // en el segundo lugar una función que puede modificar al estado (setClick)
  const [click, setClick] = useState(0)

  const mensaje = "Insuficiente stock!"

  const producto = {
    nombre: "mochila",
    precio: 2000,
    color: ["negro", "rojo", "amarillo"],
    stock: 16
  }

  const sumar = () => {
    if (click <= producto.stock) {
      setClick(click + 1)
    }
  }

  const restar = () => {
    if (click > 0) {
      setClick(click - 1)
    }
  }

  return (
    <>
      <h1>Tienda virtual</h1>
      <p>Producto seleccionado: {producto.nombre}</p>
      <p>Precio: ${producto.precio}</p>
      <ul>Colores: {
        producto.color.map((color) => <li>{color}</li>)
      }</ul>
      {
        click <= producto.stock ? <h2>Cantidad de {producto.nombre}: {click}</h2> : <h2>{mensaje}</h2>
      }
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
    </>
  )
}

export { ComponenteConEstado }

