console.log("Curso de Node Js");

var colors = require("colors");
var calculadora = require("./funciones/funcion1");

var dias = [
	"Lunes",
	"Martes",
	"Miercoles",
	"Jueves",
	"Vieres",
	"Sabado",
	"Domingo",
];

console.log(dias[3]);

let contacto = {
	nombre: "Pepe",
	email: "pepe@mail.com",
	edad: 23,
};

console.log(contacto);

//Gracias al package, podemos mostrar los elementos por consola
console.log(contacto.email.green);
console.log(contacto.nombre.red);

calculadora.suma(1, 3);
calculadora.resta(2, 4);
calculadora.multiplicacion(3, 5);
calculadora.division(10, 2);
calculadora.division(10, 3);
