import { useState } from "react"

const Formulario = () => {
  const [nombre, setNombre] = useState("")
  const [pass, setPass] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const nuevoUsuario = {
      username: nombre,
      password: pass
    }
    console.log(nuevoUsuario)
  }

  const handleChangeName = (e) => {
    setNombre(e.target.value)
  }

  const handleChangePass = (e) => {
    setPass(e.target.value)
  }

  return (
    <>
      {
        nombre && <h4>Hola, {nombre}</h4>
      }
      {
        pass && <h4>Tu contraseña es: {pass}</h4>
      }
      <form onSubmit={handleSubmit}>
        <input onChange={handleChangeName} type="text" placeholder="Ingrese su nombre" />
        <input onChange={handleChangePass} type="password" placeholder="Ingrese la contraseña" />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export { Formulario }