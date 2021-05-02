const Room = require('../Model/Room');

exports.createRoom = async(req, res) => {
    try {
        const room = await Room.create(req.body);
        res.status(200).json(room)
    } catch (err) {
        res.status(404).json(err.message)
    }
}

exports.findRooms = async(req, res) => {
    try {
        const room = await Room.find(req.query);
        res.status(200).json(room)
    } catch (err) {
        res.status(404).json(err);
    }
}