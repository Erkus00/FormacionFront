$(document).ready(() => {
	$.ajax("../data/destination.json", {
		dataType: "json",
		contentType: "application/json",
		cache: false,
	}).done(function (response) {
		var html;
		$.each(response, function (i, element) {
			html = `<div><div class="item-box" data-id="${element.id} data-price="${element.price}">
			<img src="../images/imagen.jpg" />
			<div class="item-tittle">${element.name}</div>
			<p class="item-description">
				${element.description}
			</p>
			<div class="item-price">
				<p>${element.price} - €</p>
				<button>Add to cart</button>
			</div>
			<div><a href="#" class="info-link">MoreInfo</a></div>

			<div class="more-info">
				${element.moreInfo}
			</div>
		</div></div>`;

			$(".card-container").append(html);
		});
	});

	$(".card-container").on("click", ".info-link", function (e) {
		e.preventDefault();
		$(this).closest(".item-box").find(".more-info").slideToggle("slow");
	});

	var total = 0;

	$(".card-container").on("click", "div .item-box button", function (e) {
		e.preventDefault();
		// Queremos almacenar como un numero el Id; por lo que icluimos un "+"
		var id = +$(this).closest(".item-box").data("id");
		// var price = $(this).closest(".item-box").data("price");
		// total += price;
		// $(".price").text(total + " -€");

		$.ajax("add.json", {
			type: "post",
			data: {
				id: id,
			},
			dataType: "json",
			contentType: "application/json",
		}).done(function (response) {
			console.log(response);
		});
	});
});
