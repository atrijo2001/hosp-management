const Bill = require('../Model/Bill');

exports.createBill = async(req, res) => {
    try {
        const bill = await Bill.create(req.body);
        res.status(200).json(bill);        
    } catch (error) {
        res.status(404).json(error.message)
    }
}

exports.getBillByPatientId = async(req, res) => {
    try {
        const bill = await Bill.find(req.params.id);
        res.status(200).json(bill);        
    } catch (err) {
        res.status(404).json(err.message)
    }
}

exports.getAllPatientBills = async(req, res) => {
    try {
        const bill = await Bill.find();
        res.status(200).json(bill);
    } catch (err) {
        res.status(404).json(err)
    }
}