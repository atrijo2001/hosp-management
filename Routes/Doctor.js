const express = require('express');
const {createDoctor, getAllDoctors, getDoctorById} = require('../Controllers/Doctor')

const router = express.Router();

router.get('/doctor', getAllDoctors);
router.post('/doctor', createDoctor);
router.get('/doctor/:id', getDoctorById);

module.exports = router;