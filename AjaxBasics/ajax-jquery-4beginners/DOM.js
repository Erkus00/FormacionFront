$(document).ready(() => {
	// $("#container").text("<strong>Hola caracola</strong>");
	$("#container").html("<strong>Hola caracola</strong>");
	// Limpiar
	// $("#container").empty();

	$("#container").attr("new-atribute", 123);
	console.log($("#container").attr("new-atribute"));

	$(".item-box").on("click", "a.info-link", function (e) {
		e.preventDefault();

		// hide() -> Para esconder si se encuentra mostrada previamente
		// show() -> viceversa
		// $(this).closest(".item-box").find(".more-info").toggle(1000);
		// $(this)
		// 	.closest(".item-box")
		// 	.find(".more-info")
		// 	.toggle("slow", function () {
		// 		alert("FINISH");

		// fadeIn(), fadeOut(), fadeToggle()
		// $(this).closest(".item-box").find(".more-info").fadeToggle("fast");

		//slideDown(), slideUp(), slideToggle()
		$(this).closest(".item-box").find(".more-info").slideToggle("slow");
	});
});
