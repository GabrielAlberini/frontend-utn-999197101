async function traerDatos() {
  const respuesta = await fetch("https://rickandmortyapi.com/api/character");
  const data = await respuesta.json();

  data.results.forEach((personaje) => {
    console.log(personaje.name);
  });
}

traerDatos();
