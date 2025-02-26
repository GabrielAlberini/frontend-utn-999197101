import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home.jsx"
import { Dashboard } from "../pages/Dashboard.jsx"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="*" element={<h1>Página no existente...</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }