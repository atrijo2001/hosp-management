const Employee = require('../Model/Employee')
const asyncHandler = require('express-async-handler')

exports.isDoctor = (async(req, res, next) => {
    try {
        const employee = await Employee.find(req.user._id)
        if(employee.role === 'doctor'){
         next();
       }
    } catch (err) {
        res.status(403).send({
            msg: "You are not a doctor"
        })
    }
     
})

exports.isReceptionist = (async(req, res, next) => {
    try {
        const employee = await Employee.find(req.user._id)
        if(employee.role === 'doctor'){
         next();
       }
    } catch (err) {
        res.status(403).send({
            msg: "You are not a doctor"
        })
    }
     
})