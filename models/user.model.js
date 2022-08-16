const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const userModel= Schema({
    id:{
        type:Schema.ObjectId,
    },
    email:{
        type: String, 
        required: true,
        },
    profession:{
        type: String,
        //enum: ["Médico", "Enfermero", "Fisioterapeuta", "Terapeuta_Respiratorio"],
        required: true,
    },
    firstName:{
        type: String, 
        required: true,
        },
    lastName:{
        type:String,
    },
    password:{
        type: String,
        required: true,
    }

})

module.exports= mongoose.model('users', userModel);