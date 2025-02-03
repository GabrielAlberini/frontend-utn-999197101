const charactersList = document.querySelector("#lista-de-personajes")

async function getCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character?page=4")
  const data = await response.json()

  const characters = data["results"]

  // // callback -> función que se ejecuta despues de que pasa "algo"
  characters.forEach((character) => {
    charactersList.innerHTML +=
      `
        <div>
          <h2>${character.name}</h2>
          <img src="${character.image}" alt="imagen de ${character.name}"/>
          <p>${character.status}</p>
        </div>
      `
  })
}

getCharacters()

