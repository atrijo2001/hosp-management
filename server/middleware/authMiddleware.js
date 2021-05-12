const jwt = require("jsonwebtoken")
const expressAsyncHandler = require('express-async-handler')
const Employee = require("../Model/Employee")

exports.protect = expressAsyncHandler(async(req, res, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            
            token = req.headers.authorization.split(' ')[1]
            

            const decoded = jwt.verify(token, process.env.jwt_secret)

            req.user = await Employee.findById(decoded.id).select('-password')
            next()
            
        } catch (error) {
            res.status(401)
            throw new Error('Not Authorized, token failed')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
        next()
    }
})



