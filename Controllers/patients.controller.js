const express = require('express');
const patientsService = require('../services/patients.service.js');
const router = express.Router();


router.post('/', async (req, res) => {
    const patientAdded= await patientsService.addPatient(req.body);
    res.send({patientAdded});
})

router.get('/', async (req, res) => {
    const patientsAll = await patientsService.allPatients();
    res.status(201).json(patientsAll)
})

router.get('/:id', async (req, res) => {
    const patientFound = await patientsService.filterPatients(req.params.id);
    res.send({patientFound});
})

router.delete('/:id', async (req, res) => {
    const deletedPatient= await patientsService.deletePatient(req.params.id);
    res.send({deletedPatient});
})

router.patch('/:id', async (req, res) => {
    const updatedPatient= await patientsService.updatePatient(req.params.id, req.body);
    res.send({updatedPatient});
})

module.exports = router;