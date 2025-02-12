import { useState } from "react";
import "./Form.css"

const Form = (props) => {
  const [name, setName] = useState("")
  const [color, setColor] = useState()
  const [file, setFile] = useState()
  const [previewView, setPreviewView] = useState()
  const { saludo } = props

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
    const archivo = event.target.files[0]
    const previewView = URL.createObjectURL(archivo)
    setFile(archivo)
    setPreviewView(previewView)
  }

  return (
    <>
      <h2>{saludo}</h2>
      <form style={{ backgroundColor: color }} onSubmit={handleSubmit}>
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
        />
        <button>Enviar</button>
      </form>
      {
        previewView && <div>
          <img src={previewView} alt="imagen de prueba" />
        </div>
      }
    </>
  )
}

export { Form }