// Cuando se inicie el archivo html
$(document).ready(() => {
	// // El elemento con e Id indicado (# -> Para Id y . -> Para clase), cambiará su valor
	// $("#contenedor").html("<strong>hello</strong>");
	// $(".contenedor").text("hello");
	// $("#internal_p").text("PRUEBA DE CAMBIO DE TEXTO INTERNO");
	// // Multiple selections
	// $(".li1, .li2").addClass("highlighted");
	// // Seleccion descendente
	// $("ul li").addClass("it");
	// $("li ul li").addClass("small");
	// // Hace lo mismo que $("li > ul > li").addClass("small");
	// $(".internal_div ol li").text("PRUEBA DE CAMBIO DE TEXTO INTERNO II");

	//Encontrar elementos mediante el selector CSS
	var result = $("#animals .creature");
	console.log(result);

	//Encontrar elementos con la busqueda en el DOM (Es mas eficiente)
	result = $("#animals").find(".creature");
	console.log(result);

	var r2 = $("#animals > .creature");
	console.log(r2);
	r2 = $("#animals").children(".creature");
	console.log(r2);

	// Seleccionando el elemento CATS
	//first(), last()
	var a = $("#animals").children().fist().children(".creature").last(); //(Mammals and Reptails) -> Nos interesa el primero, por lo que buscamos el first()
	console.log(a);
	//prev()
	a = $("#animals").children().fist().children().last().prev().prev();
	console.log(a);
	//next()
	a = $("#animals").children().fist().children().first().next();
	console.log(a);

	//Transversing Parent Element
	var b = $("#cat").parent();
	console.log(b); // Mammals
	b = $("#cat").parents(); // Devolverá todo lo que hay por encima
	console.log(b);
	b = $("#cat").parents(".creature"); // Devolverá solamente aquel que tenga la una clase `category`
	console.log(b);
	b = $("#cat").parents(".creature").next().chidren().first(); //Snake
	console.log(b);
	// closest() // Devuelve el elemento superior mas cercano que satisfaga las requisas indicadas
	var c = $("#cat").closest(".creature");
	console.log(c);
});

$("#myForm").on("click", () => {
	// En caso de que quieras que todos los elementos que sean required sean inputs o que queramos que se le aplique a todos,
	// se podria poner solamente:

	// $("[required]").addClass("highlight");
	$("input[required]").addClass("highlight");
	// Cason de que se aplique a una clase - id en concreto

	// $("#id[required]").addClass("highlight");
	// $(".class[required]").addClass("highlight");
	$("#message[placeholder='Enter your message']").addClass("pretty");
	// Aquellos elementos tipo input que contengan en el atributo placeholder algo como `NAME` -> CaseSensitive
	$("input[placeholder*='NAME']").addClass("blue");
});
