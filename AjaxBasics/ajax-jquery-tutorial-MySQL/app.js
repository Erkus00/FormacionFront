const { json } = require("express");
const express = require("express");
const app = express();
var path = require("path");

const mysql = require("mysql2");
const { error } = require("console");
const conexion = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "prueba_ajax",
	port: "3306",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
});

const select_all = "SELECT * FROM prueba";
const select_by_id = select_all + " WHERE _id=?";
const delete_by_id = "DELETE FROM prueba WHERE _id=?";
const update_by_Id = "UPDATE prueba SET ? WHERE _id=?";
const insert = "INSERT INTO prueba SET ?";

conexion.connect((error) => {
	if (error) {
		console.error("El error de conexiones: " + error);
		return;
	}
	console.log("Se ha conectado correctamente a la base de Datos");
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
	"/tinymce",
	express.static(path.join(__dirname, "node_modules", "tinymce"))
);
app.use(express.urlencoded({ extended: true }));
app.use(express(json));
// app.use("/", require("./routes/router"));

//Inicializacion del Servicio
const server_num = 5000;
app.listen(server_num, () => {
	console.log("SERVER CORRIENDO EN http://localhost:" + server_num);
});

app.get("/", function (req, res) {
	res.redirect("/todos");
});

app.get("/todos", function (req, res) {
	conexion.query(select_all, (error, resuts) => {
		if (error) {
			console.log(error);
		} else {
			if (req.xhr) {
				res.json(resuts);
			} else {
				res.render("index", { todos: resuts });
			}
		}
	});
});

app.get("/todos/new", function (req, res) {
	res.render("new");
});

app.post("/todos", function (req, res) {
	conexion.query(insert, { text: req.body.todo.text }, (error, results) => {
		if (error) {
			res.render("new");
		} else {
			if (req.xhr) {
				res.json(results);
			} else {
				res.redirect("/todos");
			}
		}
	});
});

app.get("/todos/:id/edit", function (req, res) {
	conexion.query(select_by_id, [req.params.id], (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.render("edit", { todo: results[0] });
		}
	});
});

// Update by Id
app.put("/todos/:id", function (req, res) {
	conexion.query(
		update_by_Id,
		[{ text: req.body.todo.text }, req.params.id],
		(error, results) => {
			if (error) {
				console.log(error);
			} else {
				if (req.xhr) {
					res.json(results);
				} else {
					res.redirect("/");
				}
			}
		}
	);
});

app.delete("/todos/:id", function (req, res) {
	conexion.query(delete_by_id, [req.params.id], (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.redirect("/");
		}
	});
});
