const form = document.querySelector("form")
const name = document.querySelector("#name")
const password = document.querySelector("#password")
const errorName = document.querySelector("#errorName")

form.addEventListener("submit", (e) => {

  e.preventDefault()
  const errorName = validateName()
  const errorPassword = validatePassword()

  if (!errorName) {
    errorName.textContent = ""
  }
})


function validateName() {
  const valueName = name.value
  const valuePassword = password.value

  if (valueName.length < 3) {
    errorName.textContent = "El nombre debe tener 3 caracteres como mínimo"
    return true
  }

  if (valueName.length > 8) {
    errorName.textContent = "El nombre debe contener 8 caracteres como máximo"
    return true
  }

  const lowercaseValueName = valueName.toLowerCase()
  if (lowercaseValueName !== valueName) {
    errorName.textContent = "El nombre debe estar todo en minuscula"
    return true
  }

  const arrayCharactersName = valueName.split("")
  let numberNameError = false
  arrayCharactersName.forEach((character) => {
    if (!isNaN(Number(character))) {
      errorName.textContent = "El nombre solo debe contener caracteres alfabeticos"
      numberNameError = true
    }
  })
  return numberNameError
}

function validatePassword() {

}