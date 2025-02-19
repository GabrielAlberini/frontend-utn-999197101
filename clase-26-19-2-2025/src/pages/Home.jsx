import { Header } from "../components/Header.jsx"
import { LinkComponent } from "../components/LinkComponent.jsx"

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Bienvenidos a UTN</h1>
      {/* <a href="#" target="_blank">Ir a link <span><i class='bx bx-link-external'></i></span></a>
      <a href="#">Login <span><i class='bx bx-user'></i></span></a> */}
      {/* Nueva pestaña */}
      <LinkComponent url="https://google.com" text="Ir a google" newTag={true}>
        <i className='bx bx-link-external'></i>
      </LinkComponent>
      {/* En la misma página */}
      <LinkComponent url="/login" text="Login">
        <i className='bx bx-user'></i>
      </LinkComponent>
    </div>
  )
}

export { Home }