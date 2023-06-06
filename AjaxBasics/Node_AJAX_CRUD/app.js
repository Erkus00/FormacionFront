const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

//Setting
app.set("port", process.env.PORT || 3000);

// static files
app.use(express.static(path.join(__dirname, "src", "public")));

app.listen(app.get("port"), () => {
	console.log("Servidor inicializado en: " + app.get("port"));
});
