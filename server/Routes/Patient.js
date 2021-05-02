const express = require('express');

const router = express.Router();
const {createPatient, getAllPatients, getPatientById} = require('../Controllers/Patient')

router.post('/patient', createPatient);
router.get('/patient', getAllPatients);
router.get('/patient/:id', getPatientById);


module.exports = router;