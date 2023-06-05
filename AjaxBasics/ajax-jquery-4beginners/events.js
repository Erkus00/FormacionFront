// $(document).ready(() => {
// 	// Si usas las funciones de llaves [arrow functions] ()=>{} ; JavaScript no reconoce el $this. Debes hacerle referencia mediante id/clase/etiqueta ...
// 	// Aternativa: Usar funciones anonimas
// 	$("#example").on("click", function () {
// 		// $(this).addClass("blue");
// 		$(this).toggleClass("blue");
// 	});
// });

// CAMBIO DE COLOT CAJETIN CUANDO CLICKEAMOS. Vuelta a la normalidad al hacer click
// $(document).ready(() => {
// 	$("#example").on("click", "button.switch", function () {
// 		// Tecnica de Delegacion de eventos
// 		$(this).parent().toggleClass("blue");
// 	});
// });

// // PULSAR BOTON Y QUE SE MUESTRE POR PANTALLA LA INFO
// $(document).ready(() => {
// 	$("#example").on("click", "button", function () {
// 		var selected = $("#place option:selected");
// 		var value = selected.val();
// 		// var price = selected.attr("data-price");
// 		var price = selected.data("price");
// 		console.log(value + " -> " + price);
// 		var localitation = selected.data("localitation");
// 		console.log(localitation);

// 		if (price) {
// 			$("#result").html(
// 				value +
// 					" - " +
// 					price +
// 					"€" +
// 					"<br>" +
// 					"Localitation: " +
// 					localitation
// 			);
// 		}

// 		$("#clear").on("click", function () {
// 			$("#result").html("");
// 		});
// 	});
// });

// ACTUALIZAR DOM EN EL CASO DE QUE SE PRODUZCA UN CAMBIO EN UN ELEMENTO INDICADO

// $(document).ready(() => {
// 	// Forma 1
// 	$("#place").on("change", function () {
// 		var selected = $("#place option:selected");
// 		var value = selected.val();
// 		// var price = selected.attr("data-price");
// 		var price = selected.data("price");
// 		console.log(value + " -> " + price);
// 		var localitation = selected.data("localitation");
// 		console.log(localitation);

// 		if (price) {
// 			$("#result").html(
// 				value +
// 					" - " +
// 					price +
// 					"€" +
// 					"<br>" +
// 					"Localitation: " +
// 					localitation
// 			);
// 		}
// 	});

// Forma 2
// $("#example").on("change", "select", function () {
// 	var selected = $("#place option:selected");
// 	var value = selected.val();
// 	// var price = selected.attr("data-price");
// 	var price = selected.data("price");
// 	console.log(value + " -> " + price);
// 	var localitation = selected.data("localitation");
// 	console.log(localitation);

// 	if (price) {
// 		$("#result").html(
// 			value +
// 				" - " +
// 				price +
// 				"€" +
// 				"<br>" +
// 				"Localitation: " +
// 				localitation
// 		);
// 	}
// });
// });

// //KEYDOWN - KEYUP
// $(document).ready(
// 	() => {
// 		$("#example").on("keyup", "input", function () {
// 			$("#result").html("SU NOMBRE ES: " + $(this).val());
// 		});
// 	},
// 	() => {
// 		console.log("WORKING ON SECOND FUNCTION PERFECT WAY");
// 	}
// );

// Prevent Default() -> Evita que se abran links
