const mongoose=require('mongoose');
const Schema= mongoose.Schema;
const userModel = require('./user.model.js').schema


const patientModel= Schema({
    id:{
        type:Schema.ObjectId,
    },
    bed:{
        type: String,
        required:true,
    },
    firstName:{
        type: String, 
        required: true,
        },
    lastName:{
        type:String,
        required: true,
    },
    age:{
        type: Number,
        required: false,
    },
    diagnosis:{
        type: String,
        required: false,
    },
    history:{
        type: String,
        required: false,
    },
    allergies:{
        type: String,
        required: false,
    },
    notes:{
        type: String,
        required: false,
    },
    priority:{
        type: String,
        required: false,
        //enum:["Alta", "Media", "Baja"] 
    },
    assignedTo:{
        type: mongoose.SchemaTypes.ObjectId, 
        ref:"users"
    }
    
})

module.exports= mongoose.model('patients', patientModel);