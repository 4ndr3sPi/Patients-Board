const boardModel = require('../models/board.model.js');   
const {filterUsers} = require('../services/users.service.js');


async function addBoard(data) {
    const user= await filterUsers(data.idUser);
    const newBoard = new boardModel({
        idUser: data.idUser,
        boardTitle: data.boardTitle,
        //owner: user  
    });
    return await newBoard.save()
} 

async function allBoards() {
    const showBoards = await boardModel.find({}).populate('boardTitle').populate('idUser');
    return showBoards;
} 

async function filterBoards(idBoard) {
    const filteredBoard= await boardModel.findOne({_id:idBoard}).populate('boardTitle').populate('idUser')
    return filteredBoard;
} 

async function deleteBoard(idBoard) {
    const deletedBoard= await boardModel.deleteOne({_id:idBoard});
    return deletedBoard;
}

async function updateBoard(id, board) {
    const updatedBoard= await boardModel.updateOne({_id:id}, board);
    return updatedBoard;
}



module.exports={filterBoards, addBoard, allBoards, deleteBoard,updateBoard,}