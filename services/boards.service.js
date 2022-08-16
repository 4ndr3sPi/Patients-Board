const boardModel = require('../models/board.model.js');   
const {filterUsers} = require('../services/users.service.js');
const {addBoardUser} = require('../services/boardsusers.service.js');
//const boardUserAdd= {};

async function addBoard(data) {
    const user= await filterUsers(data.idUser);
    const newBoard = new boardModel({
        idUser: data.idUser,
        boardTitle: data.boardTitle,  
    });
    
    // save new boardUser object   
    const idBoard = (newBoard._id);
    const idUser = (newBoard.idUser);
    const newData={idBoard,idUser};
    const nbu = await addBoardUser(newData);

    return await newBoard.save();
   
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