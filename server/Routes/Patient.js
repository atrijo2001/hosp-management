const express = require('express');

const router = express.Router();
const {createPatient, getAllPatients, getPatientById} = require('../Controllers/Patient')
const {isReceptionist} = require('../middleware/checkRole')
const {protect} = require('../middleware/authMiddleware')

router.post('/patient',protect, createPatient);
router.get('/patient',protect, isReceptionist, getAllPatients);
router.get('/patient/:id',protect, isReceptionist, getPatientById);


module.exports = router;