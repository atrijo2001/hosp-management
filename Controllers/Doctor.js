const Doctor = require('../Model/Doctor');
const Patient = require('../Model/Patient');

exports.createDoctor = async(req, res) => {
    try {
        const doctor = await Doctor.create(req.body);
        res.status(200).json(doctor)
    } catch (error) {
        res.status(404).json(error)
    }
};

exports.getAllDoctors = async(req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors)
    } catch (error) {
        res.status(404).json(error)
    }
}

exports.getDoctorById = async(req, res)=>{
    try {
        const doctor = await Doctor.findById(req.params.id);
        const patients = await Patient.find({doc: req.params.id})
        const doctorDetails = {
            doctor,
            patients
        }
        res.status(200).json(doctorDetails)
    } catch (error) {
        res.status(404).json(error)
    }
}