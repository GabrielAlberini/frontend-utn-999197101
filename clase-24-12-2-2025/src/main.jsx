import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Form } from "./components/Form/Form"
import { List } from './components/List/List'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Form saludo="Holaaaaaaaaaaaaaaaaaaa" /> */}
    <List />
  </StrictMode>,
)
