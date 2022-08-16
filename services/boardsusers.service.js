const boardUserModel = require('../models/boardUser.model.js');

async function addBoardUser(data) {
    const boardUserAdd = new boardUserModel({...data});
    return await boardUserAdd.save()
} 

async function allBoardsUsers() { 
    const boardsUsersAll = await boardUserModel.find({}).populate('idBoard').populate('idUser')
    return boardsUsersAll;
} 

async function filterBoardUser(id) {
    const boardUserFilter= await boardUserModel.findOne({_id:id}).populate('idBoard').populate('idUser')
    return boardUserFilter;
} 

async function deleteBoardUser(id) {
    const boardUserDelete= await boardUserModel.deleteOne({_id:id});
    return boardUserDelete;
}

async function updateBoardUser(id, user) {
    const boardUserUpdate= await boardUserModel.updateOne({_id:id}, user);
    return boardUserUpdate;
}

module.exports={addBoardUser, allBoardsUsers, filterBoardUser, deleteBoardUser, updateBoardUser,}