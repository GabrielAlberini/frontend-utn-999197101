import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { PerroAleatorio } from "../pages/PerroAleatorio/PerroAleatorio"
import { Contacto } from "../pages/Contacto/Contacto"

// "/" -> Home
// "/perro-aleatorio" -> PerroAleatorio
// "/contacto" -> Contacto

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Para cada ruta defino el path y la vista */}
        <Route path="/" element={<Home />} />
        <Route path="/perro-aleatorio" element={<PerroAleatorio />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }