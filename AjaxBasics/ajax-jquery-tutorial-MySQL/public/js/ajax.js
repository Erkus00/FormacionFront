// $.get("/todos", (data) => {
// 	console.log(data);
// });

// $("form").submit((e) => {
// 	e.preventDefault();
// 	var formData = $(this).serialize();
// 	$.post("/todos", formData, (response) => {
// 		console.log(response);
// 	});
// });

$("form").submit((e) => {
	e.preventDefault();
	var form_data = $(this).serialize();
	var form_action = $(this).attr("action");
	$.ajax({
		url: form_action,
		data: form_data,
		type: "PUT",
		success: function (data) {
			debugger;
		},
	});
});
