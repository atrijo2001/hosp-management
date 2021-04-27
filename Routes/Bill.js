const express = require('express');

const router = express.Router();
const {createBill, getAllPatientBills, getBillByPatientId} = require('../Controllers/Bill')

router.post('/createbill', createBill);
router.get('/getallbills', getAllPatientBills);
router.get('/getbill/:patId', getBillByPatientId);

module.exports = router;