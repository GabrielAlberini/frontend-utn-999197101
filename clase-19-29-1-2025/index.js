// Lista de nuevos usuarios lista para enviar a un backend desarrollado en Python
const users = [
  {
    id: 1,
    name: "Jose Montivero",
  },
  {
    id: 2,
    name: "Simon Scheffer",
  },
  {
    id: 3,
    name: "Juan Vidal",
  },
];

// Convertir el objeto javascript a un "string" (json) para enviarlo a un backend desarrollado en otro lenguaje de programación
const jsonUsers = JSON.stringify(users);
console.log(jsonUsers);

// Respuesta del backend al frontend, es decir, es la respuesta que obtengo al consumir un recurso (api)
const convertedJsonUsers =
  '[{"id":1,"name":"Jose Montivero"},{"id":2,"name":"Simon Scheffer"},{"id":3,"name":"Juan Vidal"}]';

// Tomar la data en formato json y la vamos a formato js para su proceso
const convertedJsUsers = JSON.parse(convertedJsonUsers);
console.log(convertedJsUsers[2]);

// ----------- localstorage -------------
localStorage.setItem("users", JSON.stringify(users));

const usersToLocalStorage = JSON.parse(localStorage.getItem("users"));

console.log(usersToLocalStorage, "<- usuarios del localstorage");
