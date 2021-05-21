const express = require('express');

const router = express.Router();
const {createPatient, getAllPatients, getPatientById, deletePatient} = require('../Controllers/Patient')
const {isReceptionist} = require('../middleware/checkRole')
const {protect} = require('../middleware/authMiddleware')

router.post('/patient',protect, createPatient);
router.get('/patient',protect, isReceptionist, getAllPatients);
router.get('/patient/:id',protect, isReceptionist, getPatientById);
router.delete('/patient/:id',protect, isReceptionist, deletePatient);

module.exports = router;