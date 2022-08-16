const mongoose=require('mongoose');
const userModel = require('./user.model.js').schema
const Schema= mongoose.Schema;


const boardModel= Schema({
    id:{
        type:Schema.ObjectId,
    },
    idUser:{
        type: mongoose.SchemaTypes.ObjectId, 
        ref:"users"
        },
    boardTitle:{
        type: String, 
        required: true,
        }
   
})

module.exports= mongoose.model('boards', boardModel);