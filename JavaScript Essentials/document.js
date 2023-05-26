// DOM -> Document Object Model
// var parrafos = document.getElementsByTagName('p');
// v(parrafos);
// var parrafo_especifico = document.getElementById('parrafo');
// v(parrafo_especifico);
// var parrafo_con_clase =document.getElementsByClassName('parrafo_clase');
// v(parrafo_con_clase);
// var query_selector_id = document.querySelectorAll('#parrafo');
// v(query_selector_id);
// var query_selector_class = document.querySelectorAll('.parrafo_clase');
// v(query_selector_class);
// var query_selector_both = document.querySelectorAll('.parrafo_clase, #parrafo');
// v(query_selector_both);
// Acceso a los atributos dentro de una etiqueta
// var query_selector_data =document.querySelectorAll('p[data-content="7890"], body>div.container>.pClass>span');
// v(query_selector_data);


var parrafo_especifico = document.getElementById('parrafo');
v(parrafo_especifico.innerText);
parrafo_especifico.innerText = "Soy un parrafo con un id, dentro de un contenedor modificado";
parrafo_especifico.innerText += ". Concatenando Valores";
v(parrafo_especifico.innerText);

var parrafo_span = document.getElementById('pClasse');
// InnerText solamente modifica el Texto
parrafo_span.innerText = "new world";
// InnerHTML modifica tanto el texto como la posibilidad de añadir tags
parrafo_span.innerHTML+=" order <span>Hello World</span>";

// Se crea en la posicion en donde se encuentre el Script
parrafo_span.outerHTML='<p id="parrafoCreado">Soy un parrafo editado desde Codigo JS</p>'

// LLama a todo el Texto que haya dentro de la etiqueta
// var parrafo_clase_span = document.getElementById('pClasse');
// v(parrafo_clase_span.innerText);

// h1 span -> Afecta a los Spa que se encuentren dentr de un h1
// h1, span -> Afecta a ambos por separado
var spanH1 = document.querySelectorAll('h1 span');
v(spanH1);

var spanH1_ = document.querySelectorAll('h1, span');
v(spanH1_);

spanH1[0].innerHTML="Nuevo Texto!!!";
    for(var i=0; i<spanH1_.length; i++){
        spanH1_[i].innerHTML="Text Nuevo ??";
}

function v(value){
    console.log(value);
}