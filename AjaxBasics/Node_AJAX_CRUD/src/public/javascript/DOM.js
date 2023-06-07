$(document).ready(() => {
	$.ajax("../data/destination.json", {
		dataType: "json",
		contentType: "application/json",
		cache: false,
	}).done(function (response) {
		var html;
		$.each(response, function (i, element) {
			html = `<div class="item-box" data-id="${element.id}">
			<img src="../images/imagen.jpg" />
			<div class="item-tittle">${element.name}</div>
			<p>
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
		</div>`;

			$("body").append(html);
		});

		$("body").on("click", ".info-link", function (e) {
			e.preventDefault();
			$(this).closest(".item-box").find(".more-info").slideToggle("slow");
		});
	});
});
