import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/clases">Clases</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export { Header }