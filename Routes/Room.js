const express = require('express');

const router = express.Router();
const {createRoom, findRooms} = require('../Controllers/Room')

router.get('/getroom', findRooms);
router.post('/createroom', createRoom);

module.exports = router;
