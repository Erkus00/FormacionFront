var express = require("express");
var app = express();

app.get("/", (req, res) => {
	res.send("Soy el servidor de NodeJS");
});
app.get("/contacto", (req, res) => {
	res.send("Accediendo a Seccion de Contacto");
});

app.listen(3000, () => {
	console.log("Nos hemos conectado");
});
