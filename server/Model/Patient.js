const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter a name of the patient']
    },
    sex:{
        type: String,
        enum: ['Male', 'Female'],
        required: [true, 'Please enter your gender']
    },
    address: {
        type: String,
        required: [true, 'Please enter an address']
    },
    dateAdmitted: {
        type: Date,
    },
    dateReleased: {
        type: Date,
    },
    contactNumber:{
        type: Number,
        required: true
    },
    doc: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: [true, 'Please enter a doctor']
    },
    isAdmitted: {
        type: Boolean
    }
})

module.exports = new mongoose.model('Patient', PatientSchema)