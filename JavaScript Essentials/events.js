// var car = document.getElementsByName('cars')[0];

// // Evento (Event) es cualquier accion del usuario en la pagina. (Mover Raton, clickear...)
// // Puede haber tantos onClick de elements como se desee. .onclick es el predeterminado.
// car.onclick = function(event){
//     console.log('He sido pulsado (OnClick)');
// };

// // Mediante addEventListener puedo crear tantos como guste.
// // Revisar el DOM (https://lenguajejs.com/javascript/dom/que-es/)
// car.addEventListener('click', function(event){
//     console.log("Clickeado y mostrado mediante addEventListener");
// });
// car.addEventListener('click', function(event){
//     console.log("Clickeado y mostrado mediante addEventListener 2");
// });

// function clickCallBack(){
//     console.log('Evento desde una funcion externa');
// }

// car.addEventListener('click', clickCallBack);

// // Permite eliminar un Evento asociado a un Objeto (Elemento)
// car.removeEventListener('click', clickCallBack);



var rect = document.getElementById('rectangulo');
// rect.onclick=function(){
    // Para crear elementos de manera dinamica
    var element = document.createElement('div');
    element.style.cssText ="width:100px; height:100px; background:blue";    
    element.onclick=function(){
        alert('Ha pulsado usted un Div que simula ser un boton');
    };

    // Crea el elemento deseado al Final del ultimo elemento existente
    document.body.appendChild(element);
// };

var target = document.getElementById('rectangulo_green');

var element2 = document.createElement('div');
element2.style.cssText ="width:200px; height:200px; background:red";    
element2.onclick=function(){
    alert('Ha pulsado usted un Div que simula ser un boton');
};
var element3 = document.createElement('div');
element3.style.cssText ="width:200px; height:200px; background:red";    
element3.onclick=function(){
    alert('Ha pulsado usted un Div que simula ser un boton');
};    

// Crea el elemento deseado justo antes del indicado
document.body.insertBefore(element2, target);
document.body.insertBefore(element3, element);









