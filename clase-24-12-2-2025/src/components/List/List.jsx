import { useState, useEffect } from "react";
import "./List.css"

const List = () => {
  const [randomDog, setRandomDog] = useState("")

  const colores = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF6", "#FF9933", "#A133FF", "#33FF99", "#FF3357", "#333FFF"];

  const handleFetch = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        setRandomDog(data)
      })
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <div className="cont-list">
      <h2>Mi lista de colores</h2>
      <ul>
        {/* <li style={{ color: colores[0] }}>Color 1</li> */}
        {
          colores.map((color, index) => (
            <li key={index} className="item-list" style={{ color }}>Color n° {index + 1}</li>
          ))
        }
      </ul>

      {
        randomDog && <img src={randomDog.message} alt="imagen de perrito random" />
      }
    </div>
  )
}

export { List }