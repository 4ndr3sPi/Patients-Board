const express = require('express');
const boardsUsersService = require('../services/boardsusers.service.js');
const router = express.Router();


router.post('/', async (req, res) => {
    const boardsusersAdded= await boardsUsersService.addBoardUser(req.body);
    res.send({boardsusersAdded});
})

router.get('/', async (req, res) => {
    const boardsUsersAll = await boardsUsersService.allBoardsUsers();
    res.status(201).json(boardsUsersAll)
})

router.get('/:id', async (req, res) => {
    const boardUserFound = await boardsUsersService.filterBoardUser(req.params.id);
    res.send({boardUserFound});
})

router.delete('/:id', async (req, res) => {
    const deletedBoardUser= await boardsUsersService.deleteBoardUser(req.params.id);
    res.send({deletedBoardUser});
})

router.patch('/:id', async (req, res) => {
    const updatedBoardUser= await boardsUsersService.updateBoardUser(req.params.id, req.body);
    res.send({updatedBoardUser});
})

module.exports = router;