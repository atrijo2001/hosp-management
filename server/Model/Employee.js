const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the name of the employee']
    },
    email: {
        type: String,
        required: [true, 'Please enter the email of the employee'],
        unique: [true, 'Please enter a unique email id']
    },
    password: {
        type: String, 
        required: [true, 'Please enter a password'],
        minLength: 6
    },
    role:{
        type: Number,
        enum: [1, 2, 3, 4],
        required: true
    },
    salary: {
        type: Number,
        required: [true, 'Please enter a salary']
    },
    contactNumber: {
        type: Number,
        minLength: 10,
        required: [true, 'Please enter a contact number']
    }
})

module.exports = new mongoose.model('Employee', employeeSchema);