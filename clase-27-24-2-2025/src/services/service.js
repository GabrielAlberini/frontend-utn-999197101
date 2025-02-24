import { db } from "../config/firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

const servicesCollection = collection(db, "services");

// Obtener todos los servicios
const getServices = async () => {
  const snapshot = await getDocs(servicesCollection);
  console.log(snapshot)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Agregar un servicio
const addService = async (service) => {
  const docRef = await addDoc(servicesCollection, service);
  return { id: docRef.id, ...service };
};

// Actualizar un servicio
const updateService = async (id, updatedData) => {
  const serviceRef = doc(db, "servicios", id);
  await updateDoc(serviceRef, updatedData);
};

// Eliminar un servicio
const deleteService = async (id) => {
  const serviceRef = doc(db, "servicios", id);
  await deleteDoc(serviceRef);
};

export { getServices, addService, updateService, deleteService }