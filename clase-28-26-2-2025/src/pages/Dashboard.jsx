import { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import { getServices, addService, updateService, deleteService } from "../services/service";

const Dashboard = () => {
  const [servicios, setServicios] = useState([]);
  const [formData, setFormData] = useState({ titulo: "", descripcion: "", icono: "", color: "" });
  const [editId, setEditId] = useState(null);

  const fetchServices = async () => {
    const data = await getServices();
    setServicios(data);
  };

  // Cargar los servicios al montar el componente
  useEffect(() => {
    fetchServices();
  }, []);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateService(editId, formData);
    } else {
      const newService = await addService(formData);
      setServicios([...servicios, newService]);
    }
    setFormData({ titulo: "", descripcion: "", icono: "", color: "" });
    setEditId(null);
    fetchServices()
  };

  // Editar servicio
  const handleEdit = (servicio) => {
    setFormData(servicio);
    setEditId(servicio.id);
  };

  // Eliminar servicio
  const handleDelete = async (id) => {
    if (confirm("¿Estas seguro que desea borrar el servicio?")) {
      await deleteService(id);
      setServicios(servicios.filter((servicio) => servicio.id !== id));
    }
  };

  return (
    <Layout>
      <div className="container mt-5 pb-3">
        <h1 className="title">Panel de Administración</h1>

        {/* Formulario */}
        <div className="box">
          <h2 className="subtitle">{editId ? "Editar Servicio" : "Agregar Servicio"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Título</label>
              <div className="control">
                <input className="input" type="text" name="titulo" value={formData.titulo} onChange={handleChange} required />
              </div>
            </div>
            <div className="field">
              <label className="label">Descripción</label>
              <div className="control">
                <textarea className="textarea" name="descripcion" value={formData.descripcion} onChange={handleChange} required></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Ícono (FontAwesome)</label>
              <div className="control">
                <input className="input" type="text" name="icono" value={formData.icono} onChange={handleChange} required />
              </div>
            </div>
            <button className="button is-primary" type="submit">{editId ? "Actualizar" : "Agregar"}</button>
          </form>
        </div>

        {/* Tabla de Servicios */}
        <table className="table is-fullwidth is-striped">
          <thead>
            <tr>
              <th>Título</th>
              <th>Descripción</th>
              <th>Ícono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {servicios.map((servicio) => (
              <tr key={servicio.id}>
                <td>{servicio.titulo}</td>
                <td>{servicio.descripcion}</td>
                <td><i className={`${servicio.icono} fa-lg`}></i></td>
                <td>
                  <button className="button is-info is-small" onClick={() => handleEdit(servicio)}>Editar</button>
                  <button className="button is-danger is-small ml-2" onClick={() => handleDelete(servicio.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export { Dashboard };
