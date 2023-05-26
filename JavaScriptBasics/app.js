// // Funciones de Flecha

// var acceso = true;

// var accesoUser = function(a){
//     return a;
// }

// // Operadores Logicos
// accesoUser(acceso)==true ? console.log('Usuario Añadido') : console.log('Problemas a añadir el usuario');

// var accesoUser2 = a=> a //Un solo valor de retorno
// accesoUser2(acceso)==true ? console.log('Usuario Añadido mediante F2') : console.log('Problemas a añadir el usuario mediante F2');

// var accesoUser3 = ()=>false; // Sin parametros de entrada
// accesoUser3(acceso)==true ? console.log('Usuario Añadido mediante F3') : console.log('Problemas a añadir el usuario mediante F3');

// var accesoUser4 = (a, nombre)=>console.log(`Usuario ${nombre} Acceso ${a}`); // n parametros de entrada
// accesoUser4(acceso, 'Juanillo');

// var suma = (a,b)=>{var c = a+b; return c;}
// console.log(suma(2,3));

// // Utilizando Function, podemos declarar la llamada tanto antes como despues
// v(suma(2,4));

// // Usando una funcion tipo flecha, si o si primero deberemos declararla y despues llamarla. COmo si fuera una variable
// var ver = (value) => console.log(`Valor: ${value}`);
// ver(suma(2,4));

// function v(value) {
// 	document.write("<br/> {");
// 	value.forEach((element) => {
// 		document.write(element.titulo + " - " + element.valoracion + " <br/>");
// 	});
// 	document.write("}<br/>");

// 	// console.log(value);
// }

// Objetos
// var miObjeto={}
// miObjeto["nombre"]="Mi primer Objeto";
// miObjeto["edad"] = "La edad del Objeto es esta";

// v(miObjeto);
// miObjeto.nombre="Mi primera Modificacion de un objeto";
// v(miObjeto);

// var objeto2 = {
//     valor:"a",
//     fecha:"hoy",
//     interludio:"jaja"
// }
// v(objeto2)
// objeto2.fecha="mañana";
// v(objeto2)
// objeto2["valor"]="b";
// objeto2.fecha="dentro de 2 meses";

// v(objeto2);

// // Convierte un valor a una cadena JSON
// var json = JSON.stringify(miObjeto);
// v(json);

// // Swith -> Case
// var menu = 1;

// switch(menu){
//     case 1:
//         v('A')
//         break;
//     case 2:
//         v('B')
//         break;
//     case 3:
//         v('C')
//         break;
// }

// // ForEach
// var paises = ["1234","asdf","ploi","uiyu"];
// paises.forEach(element => console.log(element));

// Map y Reduce + Promesas/Async/await
// https://es.javascript.info/async

// var pelicula1 = {
// 	titulo: "La monja",
// 	year: 2018,
// 	valoracion: 4,
// };
// var pelicula2 = {
// 	titulo: "Anabelle",
// 	year: 2014,
// 	valoracion: 3,
// };
// var pelicula3 = {
// 	titulo: "Anabelle 2",
// 	year: 2017,
// 	valoracion: 5,
// };
// var pelicula4 = {
// 	titulo: "La precuela",
// 	year: 2013,
// 	valoracion: 5,
// };
// var pelicula5 = {
// 	titulo: "El conjuro",
// 	year: 2016,
// 	valoracion: 1,
// };
// var peliculas = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5];
// v(peliculas);

// let sumar_valoracion = ({ valoracion }) =>
// 	valoracion == 5 ? (valoracion += 0) : (valoracion += 1);
// // Map -> Itera a lo largo de todo el Array y crea uno nuevo aplicando las modificaciones que le indiquemos en la funcion
// let valorado = peliculas.map(sumar_valoracion);

// console.log(valorado);
// // Modificamos el valor en el array inicial

// for (var i = 0; i < peliculas.length; i++) {
// 	peliculas[i].valoracion = valorado[i];
// }
// v(peliculas);

// // Reduce -> Contador
// // acum -> Se encarga de acumular el resultado final despues de cada operacion
// // Si no proveemos de valor inicial, su valor será el que valga el primer elemento
// let reducirValoracion = (acum, { valoracion }) => acum + valoracion;
// // reduce(funcion, valor inicio)
// let miValoracion = peliculas.reduce(reducirValoracion, 0);
// document.write(`<br/> ${miValoracion} <br/>`);

// // find -> Devuelve el primer elemento que cumpla las caracteristicas indicadas
// let encontrar = ({ valoracion }) => valoracion == 5;
// let elemento = peliculas.find(encontrar);
// document.write(`<br/> ${elemento.titulo} - ${elemento.valoracion} <br/>`);

// // Igual que find() pero retornará TODOS los elementos que cumplan
// let elementos = peliculas.filter(encontrar);
// v(elementos);

// Sincronismo y Asincronismo
/*
	Asincronismo -> Suceso que no ocurre al mismo tiempo o en simultaniedad con otro
	Sincronismo -> 
	Event Loop -> Bucle de Eventos que gestiona los eventos de tu apicacion
	CallStack -> Cola principal de Ejecucion
	CallBack -> Cola secundaria de Ejecucion
	Como funciona? -> El programa va a ejecutar la Pila de Ejecucion al completo (CallStack); tras esto, ejecutará la cola
	de tareas (CallBack) en el mismo orden en el cual han sido apiladas 

*/

// Con este codigo, primero se ejectua la funcionParam y, posteriormente, la funcion
// let funcionParam = () => console.log("Soy una funcion");
// let funcion = (callback) => {
// 	console.log("Hola funcion");
// 	callback;
// };

// funcion(funcionParam());

// console.log(1);
// setTimeout(() => console.log("Hola Mundo"), 1000);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (let index = 1; index < 99; index++) {
// 	console.log("Ya termine este bucle");
// }

const data = [
	{
		title: "Aprendiendo JavaScript",
		year: 2021,
		isbn: "9877-42",
		author: "El menda",
	},
	{
		title: "The Da Vinci Code",
		year: 2003,
		isbn: "978-0307474278",
		author: "Dan Brown",
	},
	{
		title: "The Lord of the Rings",
		year: 1954,
		isbn: "978-0618640157",
		author: "J.R.R. Tolkien",
	},
	{
		title: "To Kill a Mockingbird",
		year: 1960,
		isbn: "978-0446310789",
		author: "Harper Lee",
	},
	{
		title: "1984",
		year: 1949,
		isbn: "978-0451524935",
		author: "George Orwell",
	},
	{
		title: "The Great Gatsby",
		year: 1925,
		isbn: "978-0743273565",
		author: "F. Scott Fitzgerald",
	},
	{
		title: "The Chronicles of Narnia",
		year: 1950,
		isbn: "978-0064471190",
		author: "C.S. Lewis",
	},
	{
		title: "Pride and Prejudice",
		year: 1813,
		isbn: "978-0486284736",
		author: "Jane Austen",
	},
	{
		title: "Animal Farm",
		year: 1945,
		isbn: "978-0452284241",
		author: "George Orwell",
	},
	{
		title: "The Hobbit",
		year: 1937,
		isbn: "978-0547928227",
		author: "J.R.R. Tolkien",
	},
	{
		title: "The Hunger Games",
		year: 2008,
		isbn: "978-0439023528",
		author: "Suzanne Collins",
	},
	{
		title: "The Catcher in the Rye",
		year: 1951,
		isbn: "978-0316769488",
		author: "J.D. Salinger",
	},
	{
		title: "One Hundred Years of Solitude",
		year: 1967,
		isbn: "978-0060883287",
		author: "Gabriel Garcia Marquez",
	},
	{
		title: "The Hitchhiker's Guide to the Galaxy",
		year: 1979,
		isbn: "978-0345391803",
		author: "Douglas Adams",
	},
	{
		title: "The Shining",
		year: 1977,
		isbn: "978-0307743657",
		author: "Stephen King",
	},
	{
		title: "The Girl with the Dragon Tattoo",
		year: 2005,
		isbn: "978-0307269751",
		author: "Stieg Larsson",
	},
	{
		title: "The Picture of Dorian Gray",
		year: 1890,
		isbn: "978-0141439570",
		author: "Oscar Wilde",
	},
	{
		title: "The Time Machine",
		year: 1895,
		isbn: "978-0486284729",
		author: "H.G. Wells",
	},
	{
		title: "The Adventures of Sherlock Holmes",
		year: 1892,
		isbn: "978-0486474916",
		author: "Arthur Conan Doyle",
	},
	{
		title: "The Name of the Wind",
		year: 2007,
		isbn: "978-0756404741",
		author: "Patrick Rothfuss",
	},
	{
		title: "Slaughterhouse-Five",
		year: 1969,
		isbn: "978-0440180296",
		author: "Kurt Vonnegut",
	},
	{
		title: "The Road",
		year: 2006,
		isbn: "978-0307387899",
		author: "Cormac McCarthy",
	},
	{
		title: "The Stand",
		year: 1978,
		isbn: "978-0307743688",
		author: "Stephen King",
	},
	{
		title: "The Silmarillion",
		year: 1977,
		isbn: "978-0544338012",
		author: "J.R.R. Tolkien",
	},
];

const data2 = [];

function getData(data) {
	return new Promise((resolve, reject) => {
		if (data.length === 0) {
			reject(new Error("Data is Empty"));
		}
		setTimeout(() => {
			console.log(data);
			resolve(data);
		}, 2000);
	});
}
// Promesa permite
// getData(data)
// 	.then((response) => console.log(response))
// 	.catch((err) => console.log("Data: " + err.message));

// getData(data2)
// 	.then((response) => console.log(response))
// 	.catch((err) => console.log("Data2: " + err.message));

// Es exactamente lo mismo que las promesas, pero de una manera mas legible por el ser humano
async function fetchingData(data) {
	var data_changed = await getData(data);
	console.log(data_changed);
}

fetchingData(data);
