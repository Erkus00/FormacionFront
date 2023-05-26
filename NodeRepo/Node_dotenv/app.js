var express = require("express");
var app = express();

// Para acceder a las variables de entorno
require("dotenv").config({ path: "./.env" });
// Si la variable de entorno está disponible, el servidor se ejecutará en el puerto 5000. En caso de que dicha variable no funcione, accederá al puerto 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(
		"El servidor esta corriendo de manera correcta en Puerto: " + port
	);
});
