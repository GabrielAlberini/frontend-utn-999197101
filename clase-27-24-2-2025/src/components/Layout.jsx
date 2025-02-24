import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className="navbar is-dark">
        <div>
          <div className="navbar-brand">
            <Link to="/" className="navbar-item has-text-white">
              Home
            </Link>
            <Link to="/admin" className="navbar-item has-text-white">
              Dashboard
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div>{children}</div>
      </main>
      <footer className="footer has-background-dark has-text-white">
        <div className="content has-text-centered">
          <p>Sitio desarrollado por UTN</p>
        </div>
      </footer>
    </>
  );
};

export { Layout };
