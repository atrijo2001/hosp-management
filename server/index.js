const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')

//Importing the routes
const patientRoutes = require('./Routes/Patient');
const doctorRoutes = require('./Routes/Doctor');
const billRoutes = require('./Routes/Bill');
const roomRoutes = require('./Routes/Room');
const recordRoutes = require('./Routes/Record');
const employeeRoutes = require('./Routes/Employee');

const {notFound, errorHandler} = require('./middleware/errorHandler')

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors())

const connDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://atrijo:atrijo@cluster0.suedr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
    
}

connDB()
app.get('/',(req, res)=> {
    res.send('Henlo')
});

app.use('/api', patientRoutes);
app.use('/api', doctorRoutes);
app.use('/api', billRoutes);
app.use('/api', roomRoutes);
app.use('/api', recordRoutes);
app.use('/api', employeeRoutes);

//Custom middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log("Server running on post 5000")
});

