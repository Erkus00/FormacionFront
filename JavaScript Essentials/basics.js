// Undefined - La variable ha sido declarada, pero no asignada
// null - Es una asignacion de valor, reprsenta el vacio
// Nan - Not a Number

var nombre = "Carlos";
var day="13/04/1999"
var number = 13;

console.log(nombre,day,number);
console.log("Hola, soy "+nombre+", naci en el año "+day+" y mi numero favorito es el: "+number);

// Objects
var vehiculo ={
    color:"red",
    ruedas: 4,
    speed : 200,
    drive: function(){return "Driving";},

};

// Array
var shoppinglist=[
    "Apple","Orange","Banana","Pear","Kiwi"
]

var car ={
    make: "volvo",
    speed:160,
    engine:{
        motor: "N23455",
        size: 2.0,
        make:"BMW",
        fuel: "petrol",
        pistons: ["piston1","piston2"],
        
    },
    seat: [{name:"223DER5",maker:'bmw',size:'XXL'}, {name:"6675FKN",maker:'volvo',size:'XXL'} ],
    drive:function(){return "Conduciendo Jeffffe";}
};

var array = ["String", 100, ["google", 23.99, {name:"223DER5",maker:'bmw',size:'XXL'}], function drive(){return "Hola soy una funcion en un array";}];

console.log(vehiculo);
console.log(shoppinglist);
console.log(car);
console.log("El coche ha sido fabricado por: "+car.make);
console.log("A) El coche tiene motor: "+car.engine.make);
var motor = car.engine.make;
console.log("B) El coche tiene el motor: "+motor);
var fabricante = car.engine.make;
console.log("El fabricante del motor es: "+fabricante);
console.log(car.drive());
console.log(array);
console.log(car.engine.pistons[0]);
console.log(car.engine.pistons[1]); 
console.log(car.seat[0].name);

var a = 10;
console.log(shoppinglist[a-2-6]);
console.log(shoppinglist[2]);

console.log(car["make"]);
console.log(car["engine"]["pistons"][1]);
console.log(car["engine"]["make"]);
console.log(car.engine);
console.log(car["engine"]);
console.log(car.seat[0]);
console.log(car["drive"]());

// Se puede almacenar el nombre de la propiedad para acceder al Valor (Computacional Brackets)
var pointer ="speed";
console.log(car[pointer]);
console.log(car["en"+"gine"]);

console.log(car);
car.make = "FORD"
console.log(car);
car.make+=200;
console.log(car);

car["speed"]*=2;
console.log(car);
// car.engine={newengine:"new"}

console.log(car);
car.drive="drive";
console.log(car["drive"]);

car.model = "v60";
car.color="";
console.log(car);

car.stop = function(){
return "stop";
}
console.log(car);

// Destacar que cuando se modifica un atributo de un Objeto, este se cambia en todas las llamadas a ese objeto (Descubrir por que en este script pasa eso pero en otros no), aun cuando dichas llamadas se hagan de manera previa a la modificacion
car.color = null;
console.log(car);
// Eliminando el color, este no aparecerá mas en cualquier llamada al objeto
delete car.color;
console.log(car);

console.log(array[0]);
array[0]="new_string";
console.log(array[0]);
array[0]+=" concat";
console.log(array[0]);

array[5]=5;
console.log[array[5]];
// Si añadimos en un indice mucho mas grande que el tamaño de nuestro array, los valores intermedios se rellenaran con un empty()
array[20]=2020;
console.log(array);

// No es buena practica. Ya que un array debe tener como key un valor numerico. Aun asi, se puede hacer
// array["test"]="test";
// array.test2="test2";
console.log(array);
console.log(array.length);
// Metodos de array PreBuild
// array.shift() -> Elimina el primer elemento del Array
console.log(array.shift());
console.log(array);

// Elimina el ultimo elemento con key numerica del array
console.log(array.pop());
console.log(array);
array[array.length-1]="Elemento a eliminar";
console.log(array);
array.pop();
console.log(array);

// Se añade al array por delante
array.unshift("added",20,32.6,function saludar(){return "HOLA"},{"data":2},[1,2,3,4,5]);
console.log(array);
console.log(array[3]);
console.log(array[3]());

// Añade por el final(consatenando y manteniendo los espacios en blanco)
array.push("el",[],function cacatua(){return "Skrrr"});
console.log(array);

// Elimina a partir de la posicion indicada. Ej: 2 -> 0 se mantiene, 1 se mantiene, en el 2 elimnamos tantos elemento como indiquemos
console.log(array.splice(2, 2));
console.log(array);

// Combinando Slice y concatenando, podriamos modificar cualquiere valor deseado. 
// A tener en cuenta: .slice(valor_inicio, numero_elementos_a_borrar, nuevos valores separados por ','); 
array.splice(1,0, "HOLA1","HOLA2","HOLA-3");
console.log(array);
// A su vez, tambien podriamos sustituir, editar ...
array.splice(4, 3, "Posicion 4", "Posicion 5", "Posicion 6", "Posicion 7");
console.log(array);
















