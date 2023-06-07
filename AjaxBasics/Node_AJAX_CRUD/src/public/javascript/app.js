$(document).ready(() => {
	$("#getProducts").on("click", function () {
		$.ajax({
			url: "/products",
			method: "GET",
			success: function (products) {
				console.log(products);
				let tbody = $("tbody");
				// Limpia la tabla antes de mostrar los datos
				tbody.html("");
				products.forEach((product) => {
					tbody.append(
						`<tr>
                            <td class="id">${product.id}</td>
                            <td><input type="text" class="name" value="${product.name}"/></td>
                            <td>
                                <button class="update-button">Edit</button>
                                <button class="delete-button">Delete</button>
                            </td>
                        </tr>`
					);
				});
			},
		});
	});

	$("#productForm").on("submit", function (e) {
		e.preventDefault();
		var value = $("#newProduct");
		$.ajax({
			url: "/products",
			method: "POST",
			data: {
				name: value.val(),
			},
			success: function (response) {
				$("#getProducts").click();
			},
		});
	});

	$("table").on("click", ".update-button", function () {
		let row = $(this).closest("tr");
		let id = row.find(".id").text();
		let name = row.find(".name").val();
		console.log(id, name);

		$.ajax({
			url: "/products/" + id,
			method: "PUT",
			data: {
				name,
			},
			success: function (response) {
				$("#getProducts").click();
			},
		});
	});

	$("table").on("click", ".delete-button", function () {
		let row = $(this).closest("tr");
		let id = row.find(".id").text();

		$.ajax({
			url: "/products/" + id,
			method: "DELETE",
			success: function (response) {
				$("#getProducts").click();
			},
		});
	});
});
