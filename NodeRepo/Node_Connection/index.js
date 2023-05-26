var mysql = require("mysql");

var conection = mysql.createConnection({
	host: "localhost",
	database: "base_datos_prueba",
	user: "root",
	password: "",
});

conection.connect((error) => {
	if (error) {
		throw error;
	} else {
		console.log("Conexion correcta");
	}
});

// Read
conection.query("SELECT * FROM objetos", (err, result, fields) => {
	if (err) {
		throw err;
	}
	result.forEach((element) => {
		console.log(element);
	});
});

// Insert
var id;
conection.query(
	'INSERT INTO objetos (nombre, apellidos, email, edad) VALUES ("PEPE", "Benitez", "pepe@mail.com",25)',
	(err, result) => {
		if (err) throw err;

		console.log(result);
		console.log("Registro agregado");
		id = result["insertId"];
		console.log(id);
	}
);

// Delete
var id = 94;
var query = "DELETE FROM objetos WHERE id=?;";
conection.query(query, id, (err, result) => {
	if (err) throw err;

	console.log(result);
	console.log("Objeto Eliminado");
});

// Update
id = 96;
query = "UPDATE objetos SET nombre =?, apellidos =?, edad=? WHERE id=?";
conection.query(query, ["Juanele2", "Villanueva", 10, id], (err, res) => {
	if (err) throw err;

	console.log(res);
	console.log("Objeto acualizado");
});

// Limpiar All
conection.query("DELETE FROM objetos", (err, res) => {
	if (err) throw err;

	console.log(res);
	console.log("Todos las tuplas eliminadas");
});

conection.end();
