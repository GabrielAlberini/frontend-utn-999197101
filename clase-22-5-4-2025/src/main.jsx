import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// importación por defecto
// import Pepito from "./Card.jsx"

// importación nombrada
import { Card } from "./components/Card.jsx"
// import { Prueba } from './components/Prueba.jsx'
import { Header } from './components/Header.jsx'


// creación del virtual DOM
// react es un arbol de componentes 
createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <Header />
    <section className='cont-grid'>
      <Card nombre="Maximo Verdi" rol="Product Manager" localidad="Buenos Aires" usuario="maximoverdi" />
      <Card nombre="Rocío Mendonca Gainza" rol="UX/UI" localidad="Nueva Zelanda" usuario="k-hroma" />
    </section>
  </StrictMode>
  ,
)
