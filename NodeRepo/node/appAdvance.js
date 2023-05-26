var http = require("http");
var servidor = http.createServer(function (peticion, respuesta) {
	respuesta.writeHead(200, { "Content-type": "text/html; charset=utf-8 " });
	respuesta.write("<h3> SERVER BÁSICO-MEDIO CON NODE.JS </h3>");
	console.log("Peticion Web");
	respuesta.end();
});

// Indicamos al servidor en que puerto debe escuchar las peticiones
servidor.listen(3000);
console.log("Ejecutando un server Local con un node.js");
