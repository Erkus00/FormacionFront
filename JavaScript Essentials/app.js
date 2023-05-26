var seleccion = document.getElementsByName('seleccion');
var aceptar = document.getElementById('set');
var eliminar = document.getElementById('delete');

var creado = false;
var div = document.getElementById('modify');

aceptar.onclick = function(){

    if(creado == false){
        div.style.cssText="width: 300px; height: 300px; background: trasparent";
        div.style.display="true";
        creado = true;
        v('Elemento ha sido Creado');
    }else{
        v('El elemento se encuentra creado');
    }

    for(var i =0; i<seleccion.length; i++){
        var elector = seleccion[i];
        var css_atribute=elector.getAttribute('id');
        var css_value=elector.value;
        // v(css_atribute);
        // v(css_value);

        div.style[css_atribute] = css_value;
    }
};

eliminar.onclick=function(){
    if(creado == true){
        div.style.display="none";
        creado=false;
        v('El elemento ha sido eliminado');
    }
}



function v(value){
    console.log(value);
}