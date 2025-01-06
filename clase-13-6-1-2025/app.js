const input1 = document.querySelector("#input-1")
const input2 = document.querySelector("#input-2")
const form = document.querySelector("form")
const respuesta = document.querySelector("#respuesta")

function sendData(event) {
  event.preventDefault()

  const valueInput1 = input1.value
  const valueInput2 = input2.value

  console.log(valueInput1)
  console.log(valueInput2)

  respuesta.textContent = "Hola" + " " + valueInput1 + " " + valueInput2
}

form.addEventListener("submit", sendData)