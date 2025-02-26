import { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import { getServices } from "../services/service";

const Home = () => {
  const [servicios, setServicios] = useState([]);

  // Cargar los servicios desde Firebase al montar el componente
  useEffect(() => {
    const fetchServices = async () => {
      const data = await getServices();
      setServicios(data);
    };
    fetchServices();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">Protegemos tu empresa contra amenazas</h1>
            <p className="subtitle is-4">
              Servicios de ciberseguridad de primer nivel
            </p>
            <a className="button is-light is-large mt-4">Descubrir más</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-content has-text-centered">
                  <span className="icon is-large">
                    <i style={{ fontSize: "30px" }} className="fas fa-bolt fa-3x"></i>
                  </span>
                  <h2 className="title is-4">Rápido y Eficiente</h2>
                  <p>Optimizado para ofrecerte la mejor velocidad de carga.</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content has-text-centered">
                  <span className="icon is-large">
                    <i style={{ fontSize: "30px" }} className="fas fa-lock fa-3x"></i>
                  </span>
                  <h2 className="title is-4">Seguro y Confiable</h2>
                  <p>Protegemos tus datos con la mejor seguridad.</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content has-text-centered">
                  <span className="icon is-large">
                    <i style={{ fontSize: "30px" }} className="fas fa-user-friends fa-3x"></i>
                  </span>
                  <h2 className="title is-4">Fácil de Usar</h2>
                  <p>Una interfaz intuitiva para una mejor experiencia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="section has-background-light">
        <div className="container">
          <h2 className="title is-3 has-text-centered">Nuestros Servicios</h2>
          <div className="columns is-multiline">
            {servicios.length === 0 ? (
              <div className="has-text-centered" style={{ width: "100%", minHeight: "200px" }}>
                <h2 className="title is-4 mt-5">Cargando...</h2>
              </div>
            ) : (
              servicios.map((servicio) => (
                <div key={servicio.id} className="column is-4">
                  <div className={`card ${servicio.color}`}>
                    <div className="card-content has-text-centered">
                      <span className="icon is-large" style={{ fontSize: "10px" }}>
                        <i className={`${servicio.icono} fa-3x`}></i>
                      </span>
                      <h3 className="title is-4">{servicio.titulo}</h3>
                      <p>{servicio.descripcion}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section has-background-primary has-text-white">
        <div className="container has-text-centered">
          <h2 className="title is-3">¿Listo para proteger tu empresa?</h2>
          <p className="subtitle is-5">
            Contáctanos y refuerza tu seguridad hoy mismo.
          </p>
          <a className="button is-light is-large mt-4">Solicitar Asesoría</a>
        </div>
      </section>
    </Layout>
  );
};

export { Home };
