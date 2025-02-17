import { useEffect, useState } from "react"
import { Layout } from "../../components/Layout/Layout"
import "./PerroAleatorio.css"

const PerroAleatorio = () => {
  const [perro, setPerro] = useState("https://images.dog.ceo/breeds/setter-irish/n02100877_738.jpg")

  // const handleFetch = () => {
  //   fetch()
  //     .then()
  //     .then()
  // }

  const handleFetch = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await response.json()
    console.log(data)
    setPerro(data.message)
  }

  // hook que se ejecuta luego que se renderiza el componente
  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <Layout>
      <div className="cont-img-perro-aleatorio">
        <button onClick={handleFetch}>Otro perro!</button>
        {/* {perro && <img src={perro} alt="imagen de perro aleatorio" />}
        {!perro && <h2>Actualmente no hay imagen de perro...</h2>} */}
        {
          perro
            ? <img src={perro} alt="imagen de perro aleatorio" />
            : <h2>Actualmente no hay imagen de perro...</h2>
        }
      </div>
    </Layout>
  )
}

export { PerroAleatorio }