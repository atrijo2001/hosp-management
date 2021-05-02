const Patient = require('../Model/Patient')

exports.createPatient = async(req, res) => {
    const {name, sex, address,  contactNumber, doc} = req.body;

    try {
         const patient = await Patient.create({name, sex, address, contactNumber, doc})
         res.status(200).json(patient)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

exports.getAllPatients = async(req, res) => {
    try {
        const patients = await Patient.find().populate('doc');
        console.log(patients)
        res.status(200).json({
           patients
        })
    } catch (error) {
        res.status(404).json(error)
    }
}

exports.getPatientById = async(req, res) => {
    console.log(req.params.id)
    try {
        const patient = await Patient.findById(req.params.id).populate('doctor')
        res.status(200).json(patient)
    } catch (error) {
        res.status(404).json({error})
        
    }
}