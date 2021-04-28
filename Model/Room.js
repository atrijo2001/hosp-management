const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
     roomNo: {
         type: Number,
         required: true
     },
     roomType: {
         type: String,
         enum: ['normal', 'icu', 'iccu', 'hdu']
     },
     duration: {
         type: Number
     },
     isVacant: {
         type: Boolean,
         default: false
     },
     dateAdmitted: {
         type: Date
     },
     patient: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Patient',
         unique: [true, 'Only one patient allowed per room']
     }
})



module.exports = new mongoose.model('Room', roomSchema)