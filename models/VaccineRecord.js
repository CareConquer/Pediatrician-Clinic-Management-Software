// import mongoose from "mongoose";

// const vaccineSchema = new mongoose.Schema({
//     patientId: { type: mongoose.Schema.Types.ObjectId, required: true },
//     vaccine: { type: String, required: true },
//     ageGroup: { type: String, required: true },
//     recommendedDate: { type: Date, required: true },
//     nextDueDate: { type: Date, required: true },
//     status: { 
//       type: String, 
//       enum: ['Pending', 'Administered', 'Overdue'],
//       default: 'Pending'
//     },
//     dateAdministered: Date
//   }, { timestamps: true });

//   const vaccineRecord = mongoose.model('vaccineRecord', vaccineSchema)
  
//   export default vaccineRecord

import mongoose from "mongoose";

const vaccineSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, required: true, ref:'PatientReg'  },
    vaccine: { type: String, required: true },
    brand: { type: String},
    batchNo: { type: String},
    ageGroup: { type: String, required: true },
    recommendedDate: { type: Date, required: true },
    nextDueDate: { type: Date, required: true },
    status: { 
      type: String, 
      enum: ['Pending', 'Administered', 'Overdue'],
      default: 'Pending'
    },
    dateAdministered: Date
  }, { timestamps: true });

  const vaccineRecord = mongoose.model('vaccineRecord', vaccineSchema)
  
  export default vaccineRecord