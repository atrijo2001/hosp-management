const Record = require('../Model/Record');


exports.createRecord = async(req, res) =>{
    try {
        const record = await Record.create(req.body);
        res.status(200).json(record);
    } catch (err) {
        res.status(404).json(err)
    }
}

exports.getRecords = async(req, res) => {
    try {
        const records = await Record.find(req.query);
        res.status(200).json(records);
    } catch (err) {
        res.status(404).json(err);
    }
}

exports.getRecordById = async(req, res) => {
    const id = req.params.id;
    try {
        const record = await Record.findById(id);
        res.status(200).json(record);
    } catch (err) {
        res.status(404).json(err)
    }
}