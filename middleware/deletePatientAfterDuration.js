const Room = require('../Model/Room');

exports.deletePatientAfterDuration = async(req, res, next) => {
    const room = await Room.findById(req.params.id);
    
}