// string number boolean undefined NaN null array objeto

// datos primitivos -> string number boolean undefined NaN null -> singulares
// datos complejos o compuestos -> array objeto -> grupos de valores

// let name; -> undefined
// prompt("Ingrese su nombre:"); -> si aceptamos sin darle valor, entonces es null

const frutas = ["manzana", "pera", "limón"];
console.log(frutas[1]);

// objeto -> colección de datos -> busca representar un objeto real o un concepto
// const celular = {};

// un objeto tiene propiedades y métodos
// las propiedades son las caracteristicas
const celular = {
  marca: {
    nombre: "Xiaomi",
    modelo: "Poco 3",
    version: "2020",
  },
  empresa: "Personal",
  color: "negro",
  cantDeCamaras: 3,
  tieneCarcaza: true,
  memoria: [124, 240],
};

console.log(celular);

// accediento a valores
// notación de puntos -> cuando se el nombre de la propiedad
console.log(celular.empresa); // valor de empresa del celular
console.log(celular.cantDeCamaras); // valor de la cantidad de camaras del celular
console.log(celular.marca); // información de la marca del celular

// datos anidados en objetos
console.log(celular.marca.version);
console.log(celular.memoria[1]);

// creación de propiedades
celular.aplicaciones = ["instagram", "facebook", "mercado pago", "capcut"];
console.log(celular);

// modificar una propiedad
celular.color = "rojo";
console.log(celular);

// borrado de propiedad
delete celular.tieneCarcaza;
console.log(celular);

function validarCamaras(tieneCam, celular) {
  if (!tieneCam) {
    delete celular.camaras;
    // console.log("Camaras eliminadas");
  } else {
    // console.log("El celular tiene camara");
  }
}

const celular2 = {
  marca: "samsung",
  camaras: 0,
};

const celular3 = {
  marca: "iphone",
  camaras: 2,
};

validarCamaras(false, celular2);

// console.log(celular2);

validarCamaras(true, celular3);

// console.log(celular3);

console.log("------------------------------------------------------");

// acceder a propiedad que no sabemos en nombre (acceso dinámico)
// celular.marca -> acceso estático

const propDeMarca = "version";

console.log(celular.marca[propDeMarca]);

const tipoDeMemoria = 0;

console.log(celular.memoria[tipoDeMemoria]);

console.log("------------------------------------------------------");

function verPropierdad(propiedad, objeto) {
  //                                                 "juegoFav"
  //                                                 "edad"
  // console.log(`El valor de ${propiedad} es: ${objeto[propiedad]}`);

  // ACCEDIENDO DE FORMA DINÁMICA
  // if (propiedad === "juegoFav") {
  //   console.log(`El juego favorito de arandela es: ${objeto[propiedad]}`);
  // } else if (propiedad === "color") {
  //   console.log(`El color de arandela es: ${objeto[propiedad]}`);
  // } else if (propiedad === "edad") {
  //   console.log(`La edad de arandela es: ${objeto[propiedad]} años`);
  // } else {
  //   console.log("No tenemos ese dato de arandela");
  // }

  // ACCEDIENDO DE FORMA ESTÁTICA
  if (propiedad === "juegoFav") {
    console.log(`El juego favorito de arandela es:  ${objeto.juegoFav}`);
  } else if (propiedad === "color") {
    console.log(`El color de arandela es: ${objeto.color}`);
  } else if (propiedad === "edad") {
    console.log(`La edad de arandela es: ${objeto.edad} años`);
  } else {
    console.log("No tenemos ese dato de arandela");
  }
}

const arandela = {
  edad: 5,
  color: "marrón",
  juegoFav: "jugar con la pelotita",
};

verPropierdad("edad", arandela);

console.log("------------------------------------------------------");

let pesos = 100;

const cajaDeAhorro = {
  pesos: 10000,
  delares: 100,
  agregarPesos: function (cantidad) {
    this.pesos = this.pesos + cantidad;
  },
  retirarPesos: function (cantidad) {
    if (cantidad <= this.pesos) {
      this.pesos -= cantidad;
      console.log(`Retiraste $${cantidad}. Te quedan $${this.pesos}`);
    } else {
      console.log("No cuentas con suficiente dinero...");
      console.log(`Te falta $${cantidad - this.pesos}`);
    }
  },
};

// cajaDeAhorro.agregarPesos(200);

// console.log(cajaDeAhorro);

cajaDeAhorro.retirarPesos(1239182378);

console.log("------------------------------------------------------");

const alumnos = [
  {
    nombre: "María",
    gustoDeHeladoFav: "Marcarpone con frutos del bosque",
  },
  {
    nombre: "Pablo",
    gustoDeHeladoFav: "Dulce de leche granizado",
  },
];

alumnos.forEach((alumno) => {
  const saludo = `Hola! Soy ${alumno.nombre} y mi gusto de helado favorito es ${alumno.gustoDeHeladoFav}.`;
  console.log(saludo);
});
