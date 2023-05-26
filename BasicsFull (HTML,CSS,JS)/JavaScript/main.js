var concat = nombre + " " + altura
var datos = document.getElementById("contenedor");
datos.innerHTML = concat;

if(altura>=190){
    datos.innerHTML += `
        <p> Eres una persona ALTA</p>
    `;
}else{

    datos.innerHTML += `
        <p> Eres una persona BAJA</p>
    `;
}

// for(var i=2000; i<=2020; i++){
//     datos.innerHTML += `<h2> Estamos en el año: ${i}</h2>` 
// }

// Colecciones

var nombres = ['Juan','Pepe','Benito'];
document.write('<h2>Listado de Nombres</h2>');
for(i=0; i<nombres.length; i++){
    document.write(nombres[i]+ '<br />');
}
document.write(`<hr>`);
nombres.forEach(function(nombre){
    document.write(nombre+ '<br />');
})
document.write(`<hr>`);
nombres.forEach((nombre)=>{
    document.write(nombre+ '<br />');
})

imprimir();

function imprimir(){
    var datoCompleto = document.getElementById("contenedor2");
    datoCompleto.innerHTML=muestraMiNombre(nombre,altura);

}
function muestraMiNombre(nombre, altura){
    var dato =`
        <h1>Hola amigo como está</h1>
        <h2> Mi nombre es: ${nombre}</h2>
        <h3> Mido: ${altura} </h3>
    ` ;
    return dato;
    
    }


    



