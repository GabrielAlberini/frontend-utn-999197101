import { useState } from "react"

const Popup = () => {
  const [mostrar, setMostrar] = useState(false)

  console.log(mostrar)

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
      <div className={mostrar === true ? "mostrar popup" : "ocultar popup"}>
        <button className="cerrar" onClick={handleOcultar}>x</button>
        <h2>Suscribirse a nuestro newletter!</h2>
        <button>Suscribirse</button>
      </div>
    </>
  )
}

export { Popup }