// Utilidades added
console.log("10"==10);
console.log(10!="10");
console.log("10"===10);
console.log(10!=="10");
console.log(10+"10");
console.log(10+parseInt("10"));

var a=1, b="1", c=0;

if(a==b){
    console.log("a y b tiene valores similares");
}else {
    console.log("a y b tienen valores identicos");
}

if(a===b){
    console.log("a y b son diferentes por completo");
}else{
    console.log("a y b son iguales pero diferentes");
}

if(a===b){
    console.log("Valores Identicos");
}else if(a==b){
    console.log("Valores Parecidos");    
}else{
    console.log("Valores Completamente Diferentes");
}

// Bucles

var registro =["Registro1", "Registro2", "Registro3", "Registro4"];
for(var i=0; i<registro.length; i++){
    console.log(registro[i]);
}
console.log("----------");

for(var i=registro.length-1; i>=0; i--){
    console.log(registro[i]);
}
console.log("----------");

for(var index in registro){
    console.log(registro[index]);
}
console.log("----------");
for (var value in registro){
console.log(value);
}

console.log("----------");

// Variables
// Var es una variable como las de Java. 1 Variable por metodo como mucho + cambio de valor
var variable = "Esto es una variable VAR";
// Let tiene un alcance de bloque. Lo que permite volver a reasignar la variable fuera de un bloque de codigo. Reasignar (let variable2="Esto es una variable LET en otro bloque de code")
let variable2 = "Esto es una variable LET";
// No pueden reasignarse
const variable3 = "Est es una variable Constante";


