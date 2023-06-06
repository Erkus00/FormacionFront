$(document).ready(function () {
	$("#ex1").on("click", function () {
		$(this).animate(
			{
				opacity: 0.3,
			},
			3000
		);
	});

	$("#ex2").on("click", function () {
		$(this).animate({
			opacity: "-=0.5",
		});
	});

	$("#ex3").on("click", function () {
		$(this).animate(
			{
				opacity: "+=0.5",
			},
			3000
		);
	});

	$("#ex4").on("click", function () {
		$(this).animate({
			left: 200,
			width: 40,
		}),
			500;
	});

	$("#ex7").on("click", function () {
		$(this).animate({
			left: "+=20",
			width: "+=50",
		}),
			500;
	});

	$("#ex8").on("click", function () {
		$(this).animate({
			width: "2em",
		}),
			500;
	});
});
