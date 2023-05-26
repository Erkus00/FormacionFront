function nombre(){
    var fullname="Juanillo el Lata";
    function concat(value){
        return "Mr. "+value;
    }
    return concat(fullname);
}

function nombre_2(persona={}){
    return "Soy "+ persona.nombre +" "+persona.apellido+ ". Con una edad de "+persona.edad;
}

function nombre_3(value){
    // Devuelve la funcion en si
    // return value;

    // Devuelve lo que retorna la funcion
    return value();
}

// Ejemplo de Hoisting
function ejemplo(){
    // Como no se ha declarado, JavaScript lo que hará será: 
    // var variable;
    // function embed(){
    //     return "Hola buenas soy una funcion ";
    // }
    console.log(variable, embed());
    // variable = "Ejemplo";
    var variable="Ejemplo";

    function embed(){
        return "Hola buenas soy una funcion ";
    }

    console.log(variable);
}

console.log(nombre);
console.log(nombre());

console.log(nombre_2({nombre:"Juanka", apellido: "Ramirez", edad: "23"}))
console.log(nombre_3(function(){ return "El nombre de la Funcion"}))

// Memory Hoisting
ejemplo();

// Scope -> La manera en la que algunos objetos acceden a otros objetos
var object = {
    prop:this,
    prop2:"hola",
    method:function(){return this;}
}

console.log(object.method());


// Constructor
function Apple(x, y, color, score){
    // this ={};
    this.eje_x=x;
    this.eje_y=y;
    this.color = color;
    this.score = score;
}

var manzana1 = new Apple(10,20,"blue",699);
var manzana2 = new Apple(20,10,"black",900);
var manzana3 = new Apple(10,10,"green",100);

console.log(manzana1);
console.log(manzana2);
manzana1.color="grey";
console.log(manzana1);
manzana1.color=null;
console.log(manzana1);
manzana1.tipo="Normal";
console.log(manzana1);
manzana1.color="White";
manzana1.tipo=null;
console.log(manzana1);

// Prototype
// Asocia funciones a Objetos
// Si existe una instancia previa en el Objeto con el nombre del metodo asignado en el Prototipo, este ser el que aparezca cuando se llame. Ya que el compilador va a acceder al primer uso que encuentre y parará
var manzanota = new Apple(5,5,"Transparente",250);
// Si modificamos el constructor, todos los Objetos lo hacen 
// function Apple(weight){
//     this.weight = weight;
// }
function Apple2(weight){
    this.weight = weight;
}

// 1 Solo prototipo por Constructor
Apple2.prototype={
    plantar:function(){return "Plantando ...";},
    cosechar:function(){return"Cosechando ...";},
    eat(){return "Eating an Apple";}, 
    throw(){return "Lanzando una Manzana";},
    // El nombre de la funcion es irrelevant si existe un nombre de 'Key'
    cocinar:function cocinacion(){return "Cocinando ..."},
    view(){return this;}
};

var manzana_remodelada = new Apple2(40);
console.log(manzana_remodelada);
console.log(manzana_remodelada.eat());
console.log(manzana_remodelada.plantar());
console.log(manzana_remodelada.cocinar());

Apple2.prototype.eat=function(){return "Comiendo una manzana 2 ...";};
console.log(manzana_remodelada.eat());

Apple2.prototype.plantar=function(){return "Plantando un manzano";};
console.log(manzana_remodelada.plantar());

console.log(manzana_remodelada.view());


