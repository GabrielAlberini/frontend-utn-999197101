const Card = (props) => {
  const { titulo, url } = props
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <img src={url} alt={"imagen de " + titulo} />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, non fugiat. Suscipit, cupiditate est.</p>
    </div>
  )
}

export { Card }