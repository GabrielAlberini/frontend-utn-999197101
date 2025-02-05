// Componentes 
// Un componente es una función que retorna JSX (html)
// Aislar lógica
// Los componentes son fragmentos de código reutilizables



function Card(props) {
  console.log(props) // props -> propiedades -> son datos que se inyectan en el componente
  return (
    // fragment
    <div className="cont-card">
      <img src={`http://github.com/${props.usuario}.png`} alt="" />
      <h2>{props.nombre}</h2>
      <p>{props.rol} - UTN</p>
      <p>{props.localidad}</p>
    </div>
  )
}

// exportación por defecto -> da la libertad de importarlo con cualquier nombre
// export default Card

// exportación nombrada -> se importa con el mismo nombre
export { Card }

// 1 - seleccionar un elemnto desde el html
// 2 - cambiar su contenido con innerHTML 
// 3 - renderizar su nuevo contenido
