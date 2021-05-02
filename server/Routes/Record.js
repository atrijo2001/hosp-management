const express = require('express');

const router = express.Router();
const {createRecord, getRecordById, getRecords} = require('../Controllers/Record')

router.get('/getrecords', getRecords);
router.post('/createrecord', createRecord);
router.get('/getrecord/:id', getRecordById);

module.exports = router;