// Añadiendo elementos dentro de otros
$(document).ready(() => {
	$("#add-container").on("click", "button", function () {
		var value = $("#add-container input").val();
		if (value != undefined && value != null && value != "") {
			console.log(value);
			var html =
				"<div class='item'>\
                <div class='remove'>X</div>" +
				"<p>" +
				value +
				"</p>" +
				"</div>";

			// Añadiendo el elemento al principio del div
			// Primera opcion
			$("#result-container").append(html);
			// Segunda opcion
			// $(html).appendTo("#result-container");

			// Añadiendo el elemento al principio del div
			// Primera opcion
			// $("#result-container").prepend(html);
			// Segunda opcion
			// $(html).prependTo("#result-container");

			// Otras formas
			// $("#result-container").children().last().after(html);
			// $("#result-container").children().first().before(html);
		}
	});
	//Sirve cuando los elementos del documento se han cargao previa mente.
	// Pero no resulta útil cuando estamos añadiendo de manera dinamica elementos
	// $("#result-container .remove").on("click", function () {
	// 	$(this).parent().remove();
	// });
	$("#result-container").on("click", ".remove", function () {
		$(this).parent().remove();
	});
});
