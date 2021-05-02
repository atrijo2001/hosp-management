const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    patId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: [true, 'Please enter the patient id'],
        unique: true
    },
    description:{
        type: String,
        required: [true, 'Please enter a description']
    },
    dateAdmitted: {
        type: Date,
    },
    dateDischarged: {
        type: Date
    },

})

module.exports = new mongoose.model('Record', recordSchema);