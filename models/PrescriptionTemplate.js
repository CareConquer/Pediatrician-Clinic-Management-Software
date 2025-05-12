import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    vitals: {
        bloodPressure: String,
        heartRate: Number,
        temperature: Number,
        respiratoryRate: Number,
        height: Number,
        weight: Number,
        ofc: Number
    },
    complaints: String,
    clinicalFindings: String,
    diagnosis: String,
    knownDiagnosis: String,
    medicines: [
        {
            medicineName: String,
            composition: String,
            foodType: String,
            duration: String,
            frequency: String,
            tablets: String
        }
    ],
    selectedTests: [
        {
            testId: { type: mongoose.Schema.Types.ObjectId },
            testName: { type: String }
        }
    ],
    advice: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const PrescriptionTempalte = mongoose.model('PrescriptionTempalte', templateSchema);

export default PrescriptionTempalte;
