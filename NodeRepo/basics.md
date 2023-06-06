Server -> Otro ordenador/sistema con una serie de puertos abiertos. Envias una
solicitud y recibes una rspuesta

```
Client                      Server

(Solicitud (Ej: URL)) ->    Analiza

Analiza               <-    Responde

-> Muestra
```

## Comandos de Node Js

-   `npm i -g npm` -> Permite actualizar el npm
-   `npm init` -> Inicia un nuevo proyecto de Node Js
-   `npm init -y` -> Inicia un nuevo Proyecto y permite dar 'yes' a todas las
    opciones
-   `npm i <nombre_libreria>` == `npm install <nombre_libreria>`
-   `npm audit` -> Permite revicar las vulnerabilidades
-   `npm -v` -> Permite saber la version
-   `npm run <nombre del script>`-> Permite lanzar un script almacenado en
    'package.json' -> ver `scripts` -> `tareas`
-   Extra: Un script puede ejecutar uno o mas script a su vez

#### Paquetes (Librerias)

Nota : Todos los `install` pueden ser sustituidos por `i`

<ul>
    <li>npm install bootstrap</li>
    <li>npm install jquery</li>
    <li>npm install express</li>
    <li>npm install alertifyjs --save</li>
    <li>npm install colors https://www.npmjs.com/package/colors </li> 
    <li>npm install nodemon -g</li>
    <li>npm install express-generator</li>
</ul>

#### Motores de plantillas mas usados

Web Oficial del motor gestor de plantillas:
https://www.npmjs.com/package/express-generator

-   Handlears
-   Pug
-   EJS
-   Nunjucks

#### Usar plantillas

Para usar plantillas:

<b>Plantilla ejs</b>

<ol>
    <li>npm install express-generator</li>
    <li>express --view=ejs <appweb></li>
    <li>cd <appweb></li>
    <li>npm install</li>
    <li>SET DEBUG=appweb:*</li>
    <li>npm start</li>
</ol>

### Rutas de Acceso

```JavaScript
// app -> Objeto de Express
// Method HTTP -> (GET, POST, PUT, DELETE)
    // GET > Solicita una representacion de un recurso especifico
    // POST > Enviar una entidad a un recurso en especifico
    // PUT > Reemplaza todas las representaciones actuales de destino con la carga util de la peticion
    // DELETE > Borra un recurso en especifico
// Handler
// req -> Request = Pedido, Peticion
// res -> Response = Respuesta
app.get('/', (req,res)=>{
    res.send('Hello World');

});
```

## JSON WEB TOKEN

https://jwt.io/

-   Sirve para manejar la autenticacion de las transmisiones Web y moviles
    dotando de mayor seguridad al protocolo HTTP
-   Aumentar nuestra seguridad
