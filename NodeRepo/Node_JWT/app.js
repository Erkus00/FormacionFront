/*
    Paso 1: El cliente realiza un login
    Paso 2: Se valida la entrada del cliente en el servidor y se crea una nueva llave secreta (./setting/keys.js)
    Paso 3: El servidor devuelve el token creado a partir de la llav secreta
    Paso 4: El cliente almacena en el Browser el token y lo envia en cada peticion
    Paso 5: El servidor verifica la firma del Token / caducidad / permisos
    Paso 6: El servidor devuelve la RESPUESTA 
*/

var express = require("express");
var app = express();
var jwt = require("jsonwebtoken");

const keys = require("./setting/keys");

app.set("key", keys.key);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(3000, () => {
	console.log("Servidor UP en http://localhost:3000");
});

app.get("/", (req, res) => {
	res.send("Todo working");
});

app.post("/login", (req, res) => {
	if (req.body.usuario == "admin" && req.body.pass == "12345") {
		const payload = { check: true };
		const token = jwt.sign(payload, app.get("key"), {
			expiresIn: "7d",
		});
		res.json({
			message: "¡Autenticacion Exitosa!",
			token: token,
		});
	} else {
		res.json({
			message: "Usuario y / o password incorrecto",
		});
	}
});

// Middleware que permite verificar el token.
// Esto se implementará en cada una de las peticiones como se indica mas abajo
const verificacion = express.Router();
verificacion.use((req, res, next) => {
	let token = req.headers["x-access-token"] || req.headers["authorization"];
	if (!token) {
		res.status(401).send({
			error: "Es necesario un token de autenticacion",
		});
		return;
	}

	if (token.startsWith("Bearer ")) {
		token = token.slice(7, token.length);
		console.log(token);
	}

	if (token) {
		jwt.verify(token, app.get("key"), (error, decoded) => {
			if (error) {
				return res.json({
					message: "El token no es valido",
				});
			} else {
				req.decoded = decoded;
				next();
			}
		});
	}
});

app.get("/info", verificacion, (req, res) => {
	res.json("Informacion importante entregada");
});
