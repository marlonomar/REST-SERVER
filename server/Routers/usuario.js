const express = require('express')
const app = express();
const Usuario = require('../models/usuario')

 let persona = {
    "id":1,
    "nombre":"marlon",
    "apellido":"guerrero",
    "edad":22,

}
app.get('/usuario',(req,res)=>{
    res.json(persona);
});

app.post('/usuario',(req,res)=>{
    let body = req.body;
    let user = new Usuario ({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        role: body.role
    })

    user.save((err,usuarioDB)=>{
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }

        res.json({
            ok:true,
            usuario :usuarioDB
        })
    })

});



app.put('/usuario/:id',(req,res)=>{
   let id = req.params.id;
   res.json({id});
});

app.delete('/usuario',(req,res)=>{
   res.json(persona);
});


module.exports=app;
