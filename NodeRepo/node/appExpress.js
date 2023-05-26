var express = require("express");
var app = express();
app.listen(3000, (pet, resp) => {
	console.log("Hola Mundo");
});

//Direccionamiento
app.get("/", (pet, resp) => {
	resp.send("Ruta INICIO");
});
app.get("/contacto", (pet, resp) => {
	resp.send("Ruta Contacto");
});
