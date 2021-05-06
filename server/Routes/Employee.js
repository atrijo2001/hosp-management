const express = require('express');
const router = express.Router();
const {registerEmployee,authEmployee,getUserDetails} = require('../Controllers/Employee');
const {protect} = require('../middleware/authMiddleware')

router.post('/employee/register', registerEmployee);
router.post('/employee/login', authEmployee);
router.get('/employee', protect, getUserDetails);

module.exports = router;