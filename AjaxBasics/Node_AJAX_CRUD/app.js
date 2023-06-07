const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

//Setting
app.set("port", process.env.PORT || 3000);

// static files
app.use(express.static(path.join(__dirname, "src", "public")));

//Local DATABASE
var products = [];

// MiddleWare
// Procesan aquello que estamos recibiendo
app.use(morgan("dev"));
//Permite recibir datos de un formularo. extended -> False (si no deseas datos complejos); True (Si deseas datos complejos, como imagenes, videos o audio)
app.use(express.urlencoded({ extended: false }));
// Permite recibir json del navegador
app.use(express.json());

// RUTAS
app.get("/products", (req, res) => {
	res.json(products);
});

app.post("/products", (req, res) => {
	console.log(req.body);
	var name = req.body.name;
	if (products.length > 0) {
		products.push({
			id: products[products.length - 1].id + 1,
			// Identico a escribir name : name
			name,
		});
	} else {
		products.push({
			id: 0,
			// Identico a escribir name : name
			name,
		});
	}
	res.json("Creado con Exito");
});

app.put("/products/:id", (req, res) => {
	var id = req.params.id;
	var new_name = req.body.name;

	products.forEach((prod, i) => {
		if (prod.id == id) {
			prod.name = new_name;
		}
	});
	res.json("Actualizado");
});

app.delete("/products/:id", (req, res) => {
	var id = req.params.id;

	products.forEach((prod, i) => {
		if (prod.id == id) {
			products.splice(i, 1);
		}
	});

	res.json("Eliminado");
});

app.listen(app.get("port"), () => {
	console.log("Servidor inicializado en: " + app.get("port"));
});
