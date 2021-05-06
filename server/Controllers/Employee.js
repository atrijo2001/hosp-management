const Employee = require('../Model/Employee');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateTokens');


exports.registerEmployee = asyncHandler(async(req, res)=>{
    const {name, email, password, role, salary, contactNumber} = req.body;

    const employeeExist = await Employee.findOne({email});

    if(employeeExist){
        res.status(400);
        throw new Error('Employee already exists');
    }

    const employee = await Employee.create({
        name,
        email,
        password,
        role,
        salary,
        contactNumber
    })

    if(employee){
        res.status(200).json({
            _id: employee.id,
            name: employee.name,
            email: employee.email,
            role: employee.role,
            salary: employee.salary,
            contactNumber: employee.contactNumber,
            token: generateToken(employee._id)
        })
    } else{
        res.status(400)
        throw new Error('Couldnt create employee');
    }
})

exports.authEmployee = asyncHandler(async(req, res)=>{
    const {email, password} = req.body;

    const employee = await Employee.findOne({email});
    if(employee && await employee.matchPassword(password)){
        res.json({
            _id: employee.id,
            name: employee.name,
            email: employee.email,
            role: employee.role,
            salary: employee.salary,
            contactNumber: employee.contactNumber,
            token: generateToken(employee._id)
        })
    } else{
        res.status(404)
        throw new Error('Invalid email or password');
    }
})

exports.getUserDetails = asyncHandler(async(req, res) => {
    const employee = await Employee.findById(req.user._id)
    if(employee){

        res.json({
            _id: employee.id,
            name: employee.name,
            email: employee.email,
            role: employee.role,
            salary: employee.salary,
            contactNumber: employee.contactNumber
        })
    } else{
        res.status(404)
        throw new Error('User not fond')
    }
})