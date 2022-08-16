const express = require('express');
const boardsService = require('../services/boards.service.js');
const router = express.Router();


router.post('/', async (req, res) => {
    const boardAdded= await boardsService.addBoard(req.body);
    res.send({boardAdded});
})

router.get('/', async (req, res) => {
    const boardsAll = await boardsService.allBoards();
    res.status(201).json(boardsAll)
})

router.get('/:id', async (req, res) => {
    const boardFound = await boardsService.filterBoards(req.params.id);
    res.send({boardFound});
})

router.delete('/:id', async (req, res) => {
    const deletedBoard= await boardsService.deleteBoard(req.params.id);
    res.send({deletedBoard});
})

router.patch('/:id', async (req, res) => {
    const updatedBoard= await boardsService.updateBoard(req.params.id, req.body);
    res.send({updatedBoard});
})

module.exports = router;