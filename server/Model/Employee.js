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
        type: String,
        enum: ['doctor', 'receptionist', 'surgeon', 'nurse'],
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


employeeSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
 }

employeeSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

module.exports = new mongoose.model('Employee', employeeSchema);