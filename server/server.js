/**
 * SERVER
 */
 require('./config/config')
 const express = require('express');
 const app = express();

 const bodyParser = require('body-parser')
  // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


 //settings 
 app.set('json spaces',2)
 app.use(express.json())
 



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
     if(body.nombre === ""){
        res.status(400).json({
            ok:false,
            mensaje:"el nombre es necesario"
        })
     }
     else{
        res.json({direccion:body});
     }
    
});

app.put('/usuario/:id',(req,res)=>{
    let id = req.params.id;
    res.json({id});
});

app.delete('/usuario',(req,res)=>{
    res.json(persona);
});

 app.listen(process.env.PORT,()=>{
     console.log(`servidor iniciado en el puerto ${process.env.PORT}`);
 })