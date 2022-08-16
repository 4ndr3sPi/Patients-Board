const mongoose=require('mongoose');
const Schema= mongoose.Schema;
const userModel = require('./user.model.js').schema
const boardModel = require('./board.model.js').schema 

const boardUserModel= Schema({
    id:{
        type:Schema.ObjectId,
    },
    idBoard:{
       type: mongoose.SchemaTypes.ObjectId, 
       ref:"boards"
        },
    idUser:{
        type: mongoose.SchemaTypes.ObjectId, 
        ref:"users"
    },
    date:{
        type:Date,
        default: Date.now,
        required: true,
    }
})

module.exports= mongoose.model('boardusers', boardUserModel);