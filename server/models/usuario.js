
const mongoose =require('mongoose')
const Schema = mongoose.Schema;

let newUser = new Schema ({
    nombre:{
        type:String,
        required: [true,"el nombre es necesario"]
    },
    email:{
        type:String,
        required: [true,"el email es necesario"]
    },
    password:{
        type:String,
        required: [true,"la contraseña es necesaria"]
    },
    img:{
        type:String,
        required:false
    },
    role:{
        type:String,
        default: "USER_ROLE",
        required:[true,"el role es necesario"]
    },
    estado:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('usuario',newUser)