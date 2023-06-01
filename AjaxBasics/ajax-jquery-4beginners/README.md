## Ajax + JQuery Basics

https://jquery.com/

<b> .text()</b> inserta específicamente un string o cadena dentro de el selector
de jQuery, puedes insertar tanto HTML como tú quieras, pero este nunca será
procesado por el navegador, siempre se quedará como una simple cadena de
carateres. Ejemplo:

```
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("p").text("<b>Hello world!</b>");
    });
});
</script>
</head>
<body>

<button>Set text content for all p elements</button>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

</body>
</html>
```

<b>.html()</b> por otro lado puedes usarlo para insertar elementos de HTML, tu
navegador lo interpretará y mostrará según el elemento que estés insertando,
estoy incluye también dar formato a elementos que contengan ciertas clases y/o
ids que correspondan a aquellos que tengas definidos en tu archivo CSS, esto te
dá más dinamismo a la hora de que utilizas esta función comparada con la de
.text() Ejemplo:

```
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("p").html("Hello <b>world!</b>");
    });
});
</script>

</head>
<body>

<button>Change content of all p elements</button>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
<style>
    b{
        background: red;
    }
</style>
</body>
</html>
```
