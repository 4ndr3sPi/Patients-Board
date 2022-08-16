const express = require('express');
const usersService = require('../services/users.service.js');
const router = express.Router();


router.post('/', async (req, res) => {
    const userAdded= await usersService.addUser(req.body);
    res.send({userAdded});
})

router.get('/', async (req, res) => {
    const users = await usersService.allUsers();
    res.status(201).json(users)
})

router.get('/:id', async (req, res) => {
    const userFound = await usersService.filterUsers(req.params.id);
    res.send({userFound});
})

router.delete('/:id', async (req, res) => {
    const deletedUser= await usersService.deleteUser(req.params.id);
    res.send({deletedUser});
})

router.patch('/:id', async (req, res) => {
    const updatedUser= await usersService.updateUser(req.params.id, req.body);
    res.send({updatedUser});
})

module.exports = router;