import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Saludo } from "./components/Saludo.jsx"
import { ComponenteSinEstado } from './components/ComponenteSinEstado.jsx'
import { ComponenteConEstado } from './components/ComponenteConEstado.jsx'
import { Popup } from './components/Popup.jsx'
import { PopupRenderizadoCondicional } from './components/PopupRenderizadoCondicional.jsx'
import { Formulario } from './components/Formulario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Saludo nombre="Máximo" />
    <Saludo nombre="Jose" />
    <Saludo nombre="Angelina" /> */}
    {/* <ComponenteConEstado /> */}
    {/* <Popup /> */}
    {/* <PopupRenderizadoCondicional /> */}
    <Formulario />
  </StrictMode>,
)
