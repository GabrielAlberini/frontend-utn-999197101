import { Link } from "react-router-dom"
import "./Layout.css"

// nombre
const Layout = (props) => {
  return (
    <>
      <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png?20150906031702" alt="imagen de logo" />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/perro-aleatorio">Perro aleatorio</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        <p>Sitio desarrollado por Gabriel Alberini</p>
      </footer>
    </>
  )
}

export { Layout }