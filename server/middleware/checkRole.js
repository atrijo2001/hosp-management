const Employee = require('../Model/Employee')
const asyncHandler = require('express-async-handler')

exports.isDoctor = asyncHandler((async(req, res, next) => {
    try {
        const employee = await Employee.find(req.user._id)
        if(employee.role === 'doctor'){
         next();
       }
    } catch (err) {
        res.status(403).send({
            msg: "You are not a doctor"
        })
        next()
    }
     
}))

exports.isReceptionist = asyncHandler((async(req, res, next) => {
    let flag = false
    if(req.user.role == 'receptionist'){
        flag = true
    }
    if(flag == true){
        next()
    } else{
        res.status(403).send({
             msg: "You are not a receptionist"
        })
    }
}))