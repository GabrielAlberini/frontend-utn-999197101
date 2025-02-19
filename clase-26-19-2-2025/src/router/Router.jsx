import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Clases } from "../pages/Clases"

// El path y la vista -> / -> Home
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clases" element={<Clases />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }