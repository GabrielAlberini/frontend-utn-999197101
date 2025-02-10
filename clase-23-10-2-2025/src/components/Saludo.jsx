
// function Saludo() { }

const Saludo = (props) => {
  //destructuring
  const { nombre } = props
  // props.nombre -> sin destructuring
  // nombre -> destructuring de nombre

  return <h1>Hola {nombre}!</h1>
}

export { Saludo }