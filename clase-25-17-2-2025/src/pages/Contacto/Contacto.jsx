import { Layout } from "../../components/Layout/Layout";
import "./Contacto.css";

const Contacto = () => {
  return (
    <Layout children="test">
      <form className="contacto-form">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Tu correo electrónico" />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </Layout>
  );
};

export { Contacto };
