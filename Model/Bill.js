const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
    treatementProcess: {
        type: String,
        required: true
    },
    medicines: {
        type: Array,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    patientId: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Patient',
       required: [true, 'Please enter a patient']
    }
})

module.exports = new mongoose.model('Bill', billSchema);