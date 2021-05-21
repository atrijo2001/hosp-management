const Patient = require('../Model/Patient')

exports.createPatient = async(req, res) => {

    try {
         const patient = await Patient.create(req.body)
         res.status(200).json(patient)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

exports.getAllPatients = async(req, res) => {
    try {
        const patients = await Patient.find().populate('doc');
        res.status(200).json(patients)
    } catch (error) {
        res.status(404).json(error)
    }
}

exports.getPatientById = async(req, res) => {
    try {
        const patient = await Patient.findById(req.params.id).populate('doctor')
        res.status(200).json(patient)
    } catch (error) {
        res.status(404).json({error})
        
    }
}

exports.deletePatient = async(req, res) => {
    try {
        const deletePatient = await Patient.findByIdAndDelete(req.params.id)
        res.status(400).json({
            message: "Successfully deleted Patient",
            data: deletePatient
          })
        } catch (error) {
          res.status(404).json({
            message: "couldnt delete patient",
            error
          })
        }

}