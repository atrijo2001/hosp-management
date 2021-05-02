const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter a name of the doctor']
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
    qualifications:{
        type: String,
        required: [true, 'Please enter the qualification']
    },
    department:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Doctor', DoctorSchema);