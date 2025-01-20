const form = document.querySelector("form")
const name = document.querySelector("#name")
const password = document.querySelector("#password")
const errorName = document.querySelector("#errorName")
const errorPassword = document.querySelector("#errorPassword")
const eyeview = document.querySelector("#eyeview")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const errorTextName = validateName()
  const errorTextPassword = validatePassword()

  if (!errorTextName) {
    errorName.textContent = ""
  }

  if (!errorTextPassword) {
    errorPassword.textContent = ""
  }

  if (!errorTextName && !errorTextPassword) {
    alert("Mensaje enviado con éxito!")
  }
})


function validateName() {
  const valueName = name.value

  if (valueName.length < 3) {
    errorName.textContent += "El nombre debe tener 3 caracteres como mínimo"
    return true
  }

  if (valueName.length > 8) {
    errorName.textContent = "El nombre debe contener 8 caracteres como máximo"
    return true
  }

  const lowercaseValueName = valueName.toLowerCase()
  if (lowercaseValueName !== valueName) {
    errorName.textContent += "El nombre debe estar todo en minuscula"
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
  const valuePassword = password.value

  // No puede ser igual al nombre de usuario
  if (valuePassword === name.value) {
    errorPassword.textContent = "La contraseña debe ser diferente al nombre de usuario"
    return true
  }

  // Longitud mínima y máxima
  if (valuePassword.length < 8) {
    errorPassword.textContent = "La contraseña debe tener como mínimo 8 caracteres"
    return true
  }

  if (valuePassword.length > 12) {
    errorPassword.textContent = "La contraseña debe tener como máximo 12 caracteres"
    return true
  }

  // Debe contener al menos un número
  let tieneNumero = false
  // "micontraseña123"
  valuePassword.split("").forEach((letra) => {
    if (!isNaN(Number(letra))) {
      tieneNumero = true
    }
  })

  if (tieneNumero === false) {
    errorPassword.textContent = "La contraseña debe incluir un número"
    return true
  }

  // Debe contener al menos un carácter especial
  let tieneCaracterEspecial = false
  const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¨°¶§¬±×÷«»"

  valuePassword.split("").forEach((caracter) => {
    if (specialCharacters.includes(caracter)) {
      tieneCaracterEspecial = true
    }
  })

  if (tieneCaracterEspecial === false) {
    errorPassword.textContent = "La contraseña debe tener un caracter especial"
    return true
  }
}

function showPassword() {
  eyeview.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text"
      eyeview.innerHTML = "<i class='bx bx-happy'></i>"
    } else {
      password.type = "password"
      eyeview.innerHTML = "<i class='bx bxs-sad'></i>"
    }
  })
}

showPassword()