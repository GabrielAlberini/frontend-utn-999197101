// ESTADO: Una variable que cuando cambiar re-renderiza el componente

let clicks = 0

const handleClcick = () => {
  console.log(clicks)
  // La viriable clicks se modifica pero el componente no sabe que tiene que hacer
  return clicks += 1
}

// 1 - Creación de un estado
// 2 - Modificación del estado
// 3 - En efecto el componente se vuelve a renderizar


const ComponenteSinEstado = () => {
  return (
    <>
      <h2>Cantidad de clicks: {clicks}</h2>
      <button onClick={handleClcick}>Haz click!</button>
    </>
  )
}

export { ComponenteSinEstado }