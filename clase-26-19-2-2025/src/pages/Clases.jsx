import { Card } from "../components/Card"
import { Header } from "../components/Header"

const Clases = () => {
  return (
    <div>
      <Header />
      <h1>Bienvenidos a las clases de UTN</h1>
      {/* <img src="https://www.utn.edu.ar/images/Secretarias/ACYPI/2021/utn-mdp.png" alt="imagen de la facultad" /> */}

      <Card titulo="UTN edificio" url="https://www.utn.edu.ar/images/Secretarias/ACYPI/2021/utn-mdp.png" />
      <Card url="https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100" titulo="Perro fachero" />
    </div>
  )
}

export { Clases }