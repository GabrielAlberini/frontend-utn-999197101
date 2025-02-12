import { useState } from "react";
import "./Form.css"

const Form = () => {
  const [name, setName] = useState("")
  const [color, setColor] = useState()
  const [file, setFile] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Enviado!")
    setName("")
  }

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleChangeColor = (event) => {
    setColor(event.target.value)
  }

  const handleChangeFile = (event) => {
    console.log(event.target.value)
  }

  return (
    <form style={{ backgroundColor: color }} onSubmit={handleSubmit}>
      <h2>El valor del nombre es: {name}</h2>
      <label>Nombre:</label>
      <input
        type="text"
        name="name"
        required
        onChange={handleChange}
        value={name}
        autoComplete="off"
        placeholder="Ingrese su nombre"
      />
      <label>Elige un color:</label>
      <input
        type="color"
        name="color"
        required
        onChange={handleChangeColor}
        value={color}
      />
      <input
        type="file"
        name="file"
        required
        onChange={handleChangeFile}
        value={file}
      />
      <button>Enviar</button>
    </form>
  )
}

export { Form }