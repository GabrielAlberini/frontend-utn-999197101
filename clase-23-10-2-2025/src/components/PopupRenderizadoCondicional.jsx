import { useState } from "react"

const PopupRenderizadoCondicional = () => {
  const [mostrar, setMostrar] = useState(false)

  const handleMostrar = () => {
    setMostrar(true)
  }

  const handleOcultar = () => {
    setMostrar(false)
  }

  return (
    <>
      <h1>UTN - Clase de estados</h1>
      <button onClick={handleMostrar}>Abrir popup</button>
      {
        mostrar === true && <div className="popup">
          <button className="cerrar" onClick={handleOcultar}>x</button>
          <h2>Suscribirse a nuestro newletter!</h2>
          <button>Suscribirse</button>
        </div>
      }
    </>
  )
}

export { PopupRenderizadoCondicional }