const conexion=require('../database/db');

exports.save=(req,res)=>{
    const usuario = req.body.usuario;
    const rol_ = req.body.rol;
    console.log(usuario +" - "+ rol_);
    conexion.query('INSERT into users SET ?', {nombre:usuario, rol:rol_}, (error,results)=>{
        if(error){
        console.log(error)}
        else{
        res.redirect('/usuarios');
        }
    });
    
}
exports.update=(req,res)=>{
    const id = req.body.id;
    const usuario = req.body.usuario;
    const rol_ = req.body.rol;
    console.log(usuario +" - "+ rol_);
    conexion.query('UPDATE users SET ? WHERE id=?', [{nombre:usuario, rol:rol_}, id], (error,results)=>{
        if(error){
        console.log(error)}
        else{
        res.redirect('/usuarios');
        }
    });
    
}
