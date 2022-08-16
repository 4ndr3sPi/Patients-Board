const patientModel = require('../models/patient.model.js');   
const {filterUsers} = require('../services/users.service.js');


async function addPatient(data) {
    const user= await filterUsers(data.assignedTo);
    const newPatient = new patientModel({
        bed: data.bed,
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        diagnosis: data.diagnosis,
        history: data.history,
        allergies: data.allergies,
        notes: data.notes,
        priority: data.priority,
        assignedTo: user  
    });
    return await newPatient.save()
} 

async function allPatients() {
    const showPatients = await patientModel.find({}).populate('assignedTo');
    return showPatients;
} 

async function filterPatients(id) {
    const task= await patientModel.findOne({_id:id}).populate('assignedTo');
    return task;
} 

async function deletePatient(idPatient) {
    const deletedTask= await patientModel.deleteOne({_id:idPatient});
    return deletedTask;
}

async function updatePatient(id, patient) {
    const updatedTask= await patientModel.updateOne({_id:id}, patient);
    return updatedTask;
}



module.exports={filterPatients, addPatient, allPatients, deletePatient,updatePatient,}