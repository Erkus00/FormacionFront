const mysql=require('mysql')
const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crud_nodejs_db'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexiones: '+error);
        return;
    }
    console.log('Se ha conectado correctamente a la base de Datos');
})
module.exports=conexion;
