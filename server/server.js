/**
 * SERVER
 */

 //REQUIRES

 require('./config/config')
 const express = require('express');
 const app = express();
 const bodyParser = require('body-parser')
 const mongoose = require('mongoose')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


 //settings 
 app.set('json spaces',2)
 app.use(express.json())
 
app.use( require('./Routers/usuario'));

//MONGOOSE

mongoose.connect('mongodb://localhost:27017/cafe',(err,res)=>{
        if(err){
            throw err
        }
        else{
            console.log('BASE DE DATOS ONLINE')
        }
})

//PORT
 app.listen(process.env.PORT,()=>{
     console.log(`servidor iniciado en el puerto ${process.env.PORT}`);
 })