// fetch -> "traer"
// fetch("https://jsonplaceholder.typicode.com/todos");

// código asíncrono -> una instrucción que se resuelve despues de cierto tiempo
// then - catch
// async await

const itemList = document.querySelector("#item-list");

//  {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
//  }

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    return response.json();
  })
  .then((listOfObjects) => {
    listOfObjects.forEach((objet) => {
      if (objet.completed) {
        itemList.innerHTML += `
        <li style="background-color: green;">
          <p><span>${objet.id}</span> ${objet.title}</p>
        </li>
      `;
      } else {
        itemList.innerHTML += `
        <li style="background-color: red;">
          <p><span>${objet.id}</span> ${objet.title}</p>
        </li>
      `;
      }
    });
  });

// Consigna: tratar de renderizar los datos pertenecientes los personajes de Rick and Morty
// fetch("https://rickandmortyapi.com/api/character")

async function fetchingData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const list = await response.json();
  console.log("aca la lista ->", list);
}

fetchingData();
