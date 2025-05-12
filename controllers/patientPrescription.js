import Prescription from "../models/prescriptionModel.js";
import PatientReg from "../models/PatientReg.js";
import HTMLToPDF from './htmlPf.js';
import Bill from "../models/Bill.js";
import fs from 'fs';
import doctorDetail from "../models/CreateDoctor.js";
import PrescriptionTemplate from '../models/PrescriptionTemplate.js';
import VaccineRecord from "../models/VaccineRecord.js";
import cron from 'node-cron';
import mongoose from "mongoose";
import axios from "axios";

// export const savePresription = async (req, res) => {

//     try {
//         const { patientId, content } = req.body;

//         // Save the prescription to the database
//         const newPrescription = new Prescription({
//           patientId,
//           content,
//         });

//         const savedPrescription = await newPrescription.save();

//         res.json(savedPrescription);
//       } catch (error) {
//         console.error('Error saving prescription:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//       }
// };

// export const savePrescription = async (req, res) => {
//     try {
//         const { patientId, content } = req.body;

//         // Check if there is an existing prescription for the patient
//         const existingPrescription = await Prescription.findOne({ patientId });

//         if (existingPrescription) {
//             // Update the existing prescription
//             existingPrescription.content = content;
//             const updatedPrescription = await existingPrescription.save();
//             res.json(updatedPrescription);
//         } else {
//             // Save a new prescription to the database
//             const newPrescription = new Prescription({
//                 patientId,
//                 content,
//             });

//             const savedPrescription = await newPrescription.save();
//             res.json(savedPrescription);
//         }
//     } catch (error) {
//         console.error('Error saving/updating prescription:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// export const savePrescription = async (req, res) => {
//     try {
//         const { patientId, billId,content } = req.body;

//         // Create a new prescription for the patient
//         const newPrescription = new Prescription({
//             patientId,
//             billId,
//             content,
//         });

//         // Save the new prescription to the database
//         const savedPrescription = await newPrescription.save();
//         res.json(savedPrescription);
//     } catch (error) {
//         console.error('Error saving prescription:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// export const savePrescription = async (req, res) => {
//     try {
//         const { patientId, billId,billNO, content } = req.body;

//         // Check if a prescription already exists for the given patientId
//         const existingPrescription = await Prescription.findOne({ patientId });

//         if (existingPrescription) {
//             // Update the existing prescription
//             existingPrescription.billId = billId;
//             existingPrescription.content = content;
//             const updatedPrescription = await existingPrescription.save();
//             res.json(updatedPrescription);
//         } else {
//             // Create a new prescription for the patient
//             const newPrescription = new Prescription({
//                 patientId,
//                 billId,
//                 billNO,
//                 content,
//             });
//             const savedPrescription = await newPrescription.save();
//             res.json(savedPrescription);
//         }
//     } catch (error) {
//         console.error('Error saving prescription:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// export const savePrescription = async (req, res) => {
//     try {
//         const {
//             patientId,
//             billId,
//             billNO,
//             content,
//             bloodPressure,
//             heartRate,
//             temperature,
//             respiratoryRate,
//             height,
//             weight,
//             complaints,
//             clinicalFindings,
//             diagnosis,
//             knownDiagnosis,
//         } = req.body;

//         // Check if a prescription already exists for the given patientId
//         const existingPrescription = await Prescription.findOne({ patientId });

//         if (existingPrescription) {
//             // Update the existing prescription
//             existingPrescription.billId = billId;
//             existingPrescription.billNO = billNO;
//             existingPrescription.content = content;
//             existingPrescription.bloodPressure = bloodPressure;
//             existingPrescription.heartRate = heartRate;
//             existingPrescription.temperature = temperature;
//             existingPrescription.respiratoryRate = respiratoryRate;
//             existingPrescription.height = height;
//             existingPrescription.weight = weight;
//             existingPrescription.complaints = complaints;
//             existingPrescription.clinicalFindings = clinicalFindings;
//             existingPrescription.diagnosis = diagnosis;
//             existingPrescription.knownDiagnosis = knownDiagnosis;

//             const updatedPrescription = await existingPrescription.save();
//             res.json(updatedPrescription);
//         } else {
//             // Create a new prescription for the patient
//             const newPrescription = new Prescription({
//                 patientId,
//                 billId,
//                 billNO,
//                 content,
//                 bloodPressure,
//                 heartRate,
//                 temperature,
//                 respiratoryRate,
//                 height,
//                 weight,
//                 complaints,
//                 clinicalFindings,
//                 diagnosis,
//                 knownDiagnosis,
//             });

//             const savedPrescription = await newPrescription.save();
//             res.json(savedPrescription);
//         }
//     } catch (error) {
//         console.error('Error saving prescription:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// export const savePrescription = async (req, res) => {
//     try {
//         const {
//             patientId,
//             billId,
//             billNO,
//             content,
//             vitals, 
//             complaints,
//             clinicalFindings,
//             diagnosis,
//             knownDiagnosis,
//         } = req.body;

//         const {
//             bloodPressure,
//             heartRate,
//             temperature,
//             respiratoryRate,
//             height,
//             weight,
//         } = vitals; 

//         // Check if a prescription already exists for the given patientId
//         const existingPrescription = await Prescription.findOne({ patientId });

//         if (existingPrescription) {
//             // Update the existing prescription with new vitals and other data
//             existingPrescription.billId = billId;
//             existingPrescription.billNO = billNO;
//             existingPrescription.content = content;
//             existingPrescription.bloodPressure = bloodPressure;
//             existingPrescription.heartRate = heartRate;
//             existingPrescription.temperature = temperature;
//             existingPrescription.respiratoryRate = respiratoryRate;
//             existingPrescription.height = height;
//             existingPrescription.weight = weight;
//             existingPrescription.complaints = complaints;
//             existingPrescription.clinicalFindings = clinicalFindings;
//             existingPrescription.diagnosis = diagnosis;
//             existingPrescription.knownDiagnosis = knownDiagnosis;

//             const updatedPrescription = await existingPrescription.save();
//             res.json(updatedPrescription);
//         } else {
//             const newPrescription = new Prescription({
//                 patientId,
//                 billId,
//                 billNO,
//                 content,
//                 bloodPressure,
//                 heartRate,
//                 temperature,
//                 respiratoryRate,
//                 height,
//                 weight,
//                 complaints,
//                 clinicalFindings,
//                 diagnosis,
//                 knownDiagnosis,
//             });

//             const savedPrescription = await newPrescription.save();
//             res.json(savedPrescription);
//         }
//     } catch (error) {
//         console.error('Error saving prescription:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// export const savePrescription = async (req, res) => {
//     try {
//         const {
//             patientId,
//             billId,
//             billNO,
//             content,
//             complaints,
//             clinicalFindings,
//             diagnosis,
//             knownDiagnosis,
//             selectedTests,
//             vitals,
//         } = req.body;

//         const {
//             bloodPressure,
//             heartRate,
//             temperature,
//             respiratoryRate,
//             height,
//             weight,
//         } = vitals;

//         // Process selectedTests to extract testName
//         const formattedTests = selectedTests.map(test => ({
//             testId: test._id,
//             testName: test.name || test.groupName // Store name or groupName
//         }));

//         // Check if a prescription already exists for the given patientId
//         const existingPrescription = await Prescription.findOne({ patientId });

//         if (existingPrescription) {
//             // Update the existing prescription
//             existingPrescription.billId = billId;
//             existingPrescription.billNO = billNO;
//             existingPrescription.content = content;
//             existingPrescription.bloodPressure = bloodPressure;
//             existingPrescription.heartRate = heartRate;
//             existingPrescription.temperature = temperature;
//             existingPrescription.respiratoryRate = respiratoryRate;
//             existingPrescription.height = height;
//             existingPrescription.weight = weight;
//             existingPrescription.complaints = complaints;
//             existingPrescription.clinicalFindings = clinicalFindings;
//             existingPrescription.diagnosis = diagnosis;
//             existingPrescription.knownDiagnosis = knownDiagnosis;

//             // Save the processed selectedTests in the prescription
//             existingPrescription.selectedTests = formattedTests;

//             const updatedPrescription = await existingPrescription.save();
//             return res.json(updatedPrescription);
//         } else {
//             // Create a new prescription for the patient
//             const newPrescription = new Prescription({
//                 patientId,
//                 billId,
//                 billNO,
//                 content,
//                 bloodPressure,
//                 heartRate,
//                 temperature,
//                 respiratoryRate,
//                 height,
//                 weight,
//                 complaints,
//                 clinicalFindings,
//                 diagnosis,
//                 knownDiagnosis,
//                 selectedTests: formattedTests, // Store formatted tests
//             });

//             const savedPrescription = await newPrescription.save();
//             return res.json(savedPrescription);
//         }
//     } catch (error) {
//         console.error('Error saving prescription:', error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// export const savePrescription = async (req, res) => {
//     try {
//         const {
//             patientId,
//             billId,
//             billNO,
//             content,
//             complaints,
//             clinicalFindings,
//             diagnosis,
//             knownDiagnosis,
//             selectedTests,
//             vitals,
//             medicines,
//             doctorName
//         } = req.body;

//         const {
//             bloodPressure,
//             heartRate,
//             temperature,
//             respiratoryRate,
//             height,
//             weight,
//         } = vitals;

//         // Validate required medicine fields
//         if (medicines && medicines.some(med => !med.medicineName || !med.composition)) {
//             return res.status(400).json({ error: "Medicine name and composition are required" });
//         }

//         // Process selectedTests with additional fields
//         const formattedTests = selectedTests.map(test => ({
//             testId: test._id,
//             testName: test.name || test.groupName || test.profileName || test.feesName,
//         }));

//         // Find existing prescription
//         const existingPrescription = await Prescription.findOne({ patientId });

//         if (existingPrescription) {
//             // Update existing prescription
//             existingPrescription.set({
//                 billId,
//                 billNO,
//                 content,
//                 bloodPressure,
//                 heartRate,
//                 temperature,
//                 respiratoryRate,
//                 height,
//                 weight,
//                 complaints,
//                 clinicalFindings,
//                 diagnosis,
//                 knownDiagnosis,
//                 medicines,
//                 doctorName,
//                 selectedTests: formattedTests
//             });

//             const updatedPrescription = await existingPrescription.save();
//             return res.json(updatedPrescription);
//         } else {
//             // Create new prescription
//             const newPrescription = new Prescription({
//                 patientId,
//                 billId,
//                 billNO,
//                 content,
//                 bloodPressure,
//                 heartRate,
//                 temperature,
//                 respiratoryRate,
//                 height,
//                 weight,
//                 complaints,
//                 clinicalFindings,
//                 diagnosis,
//                 knownDiagnosis,
//                 medicines,
//                 doctorName,
//                 selectedTests: formattedTests
//             });

//             const savedPrescription = await newPrescription.save();
//             return res.json(savedPrescription);
//         }
//     } catch (error) {
//         console.error('Error saving prescription:', error);
//         return res.status(500).json({
//             error: 'Internal Server Error',
//             message: error.message
//         });
//     }
// };

// export const savePrescription = async (req, res) => {
//     try {
//         const {
//             patientId,
//             billId,
//             content,
//             complaints,
//             clinicalFindings,
//             diagnosis,
//             knownDiagnosis,
//             selectedTests,
//             vitals,
//             medicines,
//             doctorName
//         } = req.body;

//         const {
//             bloodPressure,
//             heartRate,
//             temperature,
//             respiratoryRate,
//             height,
//             weight,
//         } = vitals;

//         // Validate required medicine fields
//         if (medicines && medicines.some(med => !med.medicineName || !med.composition)) {
//             return res.status(400).json({ error: "Medicine name and composition are required" });
//         }

//         // Process selectedTests with additional fields
//         const formattedTests = selectedTests.map(test => ({
//             testId: test._id,
//             testName: test.name || test.groupName || test.profileName || test.feesName,
//         }));

//         // Find the last billNO
//         const lastPrescription = await Prescription.findOne().sort({ billNO: -1 }).limit(1);
//         const billNO = lastPrescription ? Number(lastPrescription.billNO) + 1 : 1; // If no prescription exists, start with 1

//         // Find existing prescription
//         const existingPrescription = await Prescription.findOne({ patientId });

//         if (existingPrescription) {
//             // Update existing prescription
//             existingPrescription.set({
//                 billId,
//                 billNO, // Use the incremented billNO
//                 content,
//                 bloodPressure,
//                 heartRate,
//                 temperature,
//                 respiratoryRate,
//                 height,
//                 weight,
//                 complaints,
//                 clinicalFindings,
//                 diagnosis,
//                 knownDiagnosis,
//                 medicines,
//                 doctorName,
//                 selectedTests: formattedTests
//             });

//             const updatedPrescription = await existingPrescription.save();
//             return res.json(updatedPrescription);
//         } else {
//             // Create new prescription
//             const newPrescription = new Prescription({
//                 patientId,
//                 billId,
//                 billNO, // Use the incremented billNO
//                 content,
//                 bloodPressure,
//                 heartRate,
//                 temperature,
//                 respiratoryRate,
//                 height,
//                 weight,
//                 complaints,
//                 clinicalFindings,
//                 diagnosis,
//                 knownDiagnosis,
//                 medicines,
//                 doctorName,
//                 selectedTests: formattedTests
//             });

//             const savedPrescription = await newPrescription.save();
//             return res.json(savedPrescription);
//         }
//     } catch (error) {
//         console.error('Error saving prescription:', error);
//         return res.status(500).json({
//             error: 'Internal Server Error',
//             message: error.message
//         });
//     }
// };

// export const savePrescription = async (req, res) => {
//     try {
//         const {
//             patientId,
//             billId,
//             content,
//             complaints,
//             clinicalFindings,
//             diagnosis,
//             knownDiagnosis,
//             selectedTests,
//             vitals,
//             medicines,
//             doctorName
//         } = req.body;

//         const {
//             bloodPressure,
//             heartRate,
//             temperature,
//             respiratoryRate,
//             height,
//             weight,
//         } = vitals;

//         // Validate required medicine fields
//         if (medicines && medicines.some(med => !med.medicineName || !med.composition)) {
//             return res.status(400).json({ error: "Medicine name and composition are required" });
//         }

//         // Process selectedTests with additional fields
//         const formattedTests = selectedTests.map(test => ({
//             testId: test._id,
//             testName: test.name || test.groupName || test.profileName || test.feesName,
//         }));

//         // Find the last billNO
//         const lastPrescription = await Prescription.findOne().sort({ billNO: -1 }).limit(1);
//         const billNO = lastPrescription ? Number(lastPrescription.billNO) + 1 : 1; // If no prescription exists, start with 1

//         // Find existing prescription
//         const existingPrescription = await Prescription.findOne({ billNO });

//         if (existingPrescription) {
//             // Update existing prescription
//             existingPrescription.set({
//                 billId,
//                 billNO, // Use the incremented billNO
//                 content,
//                 bloodPressure,
//                 heartRate,
//                 temperature,
//                 respiratoryRate,
//                 height,
//                 weight,
//                 complaints,
//                 clinicalFindings,
//                 diagnosis,
//                 knownDiagnosis,
//                 medicines,
//                 doctorName,
//                 selectedTests: formattedTests
//             });

//             const updatedPrescription = await existingPrescription.save();
//             return res.json(updatedPrescription);
//         } else {
//             // Create new prescription
//             const newPrescription = new Prescription({
//                 patientId,
//                 billId,
//                 billNO, // Use the incremented billNO
//                 content,
//                 bloodPressure,
//                 heartRate,
//                 temperature,
//                 respiratoryRate,
//                 height,
//                 weight,
//                 complaints,
//                 clinicalFindings,
//                 diagnosis,
//                 knownDiagnosis,
//                 medicines,
//                 doctorName,
//                 selectedTests: formattedTests
//             });

//             const savedPrescription = await newPrescription.save();
//             return res.json(savedPrescription);
//         }
//     } catch (error) {
//         console.error('Error saving prescription:', error);
//         return res.status(500).json({
//             error: 'Internal Server Error',
//             message: error.message
//         });
//     }
// };

export const savePrescription = async (req, res) => {
    try {
        const {
            patientId,
            billId,
            content,
            complaints,
            clinicalFindings,
            diagnosis,
            knownDiagnosis,
            selectedTests,
            vitals,
            medicines,
            doctorName
        } = req.body;

        const {
            bloodPressure,
            heartRate,
            temperature,
            respiratoryRate,
            height,
            weight,
            ofc,
        } = vitals;

        // Validate required medicine fields
        if (medicines && medicines.some(med => !med.medicineName || !med.composition)) {
            return res.status(400).json({ error: "Medicine name and composition are required" });
        }

        // Process selectedTests with additional fields
        const formattedTests = selectedTests.map(test => ({
            testId: test._id,
            testName: test.name || test.groupName || test.profileName || test.feesName,
        }));

        // Find the last billNO
        const lastPrescription = await Prescription.findOne().sort({ billNO: -1 }).limit(1);
        const billNO = lastPrescription ? Number(lastPrescription.billNO) + 1 : 1; // If no prescription exists, start with 1

        // Find existing prescription
        const existingPrescription = await Prescription.findOne({ billNO });

        if (existingPrescription) {
            // Update existing prescription
            existingPrescription.set({
                billId,
                billNO, // Use the incremented billNO
                content,
                bloodPressure,
                heartRate,
                temperature,
                respiratoryRate,
                height,
                weight,
                ofc,
                complaints,
                clinicalFindings,
                diagnosis,
                knownDiagnosis,
                medicines,
                doctorName,
                selectedTests: formattedTests
            });

            const updatedPrescription = await existingPrescription.save();
            return res.json(updatedPrescription);
        } else {
            // Create new prescription
            const newPrescription = new Prescription({
                patientId,
                billId,
                billNO, // Use the incremented billNO
                content,
                bloodPressure,
                heartRate,
                temperature,
                respiratoryRate,
                height,
                weight,
                ofc,
                complaints,
                clinicalFindings,
                diagnosis,
                knownDiagnosis,
                medicines,
                doctorName,
                selectedTests: formattedTests
            });

            const savedPrescription = await newPrescription.save();
            return res.json(savedPrescription);
        }
    } catch (error) {
        console.error('Error saving prescription:', error);
        return res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        });
    }
};


export const getPrescription = async (req, res) => {

    try {
        const patientId = req.params.patientId;

        // Fetch prescriptions based on the patient ID
        const prescriptions = await Prescription.find({ patientId });

        res.json(prescriptions);
    } catch (error) {
        console.error('Error fetching prescriptions:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getPrescriptionList = async (req, res) => {

    try {

        const patientId = req.params.patientId;
        const prescriptions = await Prescription.find({ billId: patientId })
            .populate('billId', 'pName pNum pAge pGender pSalutation')
            .populate('doctorName', 'drName')
            .exec();

        res.json(prescriptions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// export const printPrescription = async (req, res) => {
//     try {
//         const { patientId } = req.params;

//         // Fetch the prescription content based on patientId from the database
//         const prescription = await Prescription.findOne({ patientId });
//         const prescriptionContent = prescription.content;

//         // Launch a headless browser
//         const browser = await puppeteer.launch({
//             executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/Chrome.exe',
//         });

//         const page = await browser.newPage();

//         // Set the content of the page to the prescription
//         await page.setContent(`<html><body>${prescriptionContent}</body></html>`);

//         // Generate PDF
//         const pdfBuffer = await page.pdf({ format: 'A4' });

//         // Close the browser
//         await browser.close();

//         // Serve the PDF as a response
//         res.contentType('application/pdf');
//         res.send(pdfBuffer);
//     } catch (error) {
//         console.error('Error generating prescription PDF:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };



// export const printPrescription = async (req, res) => {
//     try {
//         const { patientId } = req.params;

//         // Fetch the prescription content based on patientId from the database
//         const prescription = await Prescription.findOne({ patientId });
//         const prescriptionContent = prescription.content;

//         // Fetch clinic details (replace this with your actual logic to get clinic details)
//         const clinicDetails = {
//             logo: 'path/to/clinic-logo.png',
//             name: 'MH CLINIC',
//             address: ' 46/4, Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, H.S, R Extension, Bengaluru, Karnataka 560068',
//         };

//         // Fetch patient details from PatientReg model
//         const patientDetails = await PatientReg.findOne({ _id: patientId })
//         .populate('doctorName', 'drName')
//         .exec();

//         // console.log(patientDetails);

//         // Launch a headless browser
//         const browser = await puppeteer.launch({
//             executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/Chrome.exe',
//         });

//         const page = await browser.newPage();

//         // Set the content of the page with clinic, patient, and prescription details
//         await page.setContent(`
//             <html>
//                 <head>
//                 <style>
//                 /* Add any styling needed for your prescription here */
//                 table {
//                     width: 100%;
//                 }
//                 .clinic-details img {
//                     width: 100px;
//                 }
//             </style>
//                 </head>
//                 <body>
//                 <table>
//                 <tr>
//                     <td class="clinic-details" >
//                         <img src="${clinicDetails.logo}" alt="Clinic Logo">
//                     </td>
//                     <td class="clinic-details">
//                         <h2>${clinicDetails.name}</h2>
//                     </td>
//                     <td class="clinic-details">
//                         <p>${clinicDetails.address}</p>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td  style="width: 50%; text-align: left;">
//                     Patient Name: ${patientDetails.pSalutation} ${patientDetails.pName}<br>
//                     Sex / Age:  ${patientDetails.pGender} / ${patientDetails.pAge}<br>
//                     Referred By:  ${patientDetails.doctorName.drName}</p>
//                     </td>
//                     <td class="clinic-details">

//                     </td>
//                 </tr>
//                 </table>
//                     <div class="prescription-details">${prescriptionContent}</div>
//                 </body>
//             </html>`);

//         // Generate PDF
//         const pdfBuffer = await page.pdf({ format: 'A4' });

//         // Close the browser
//         await browser.close();

//         // Serve the PDF as a response
//         res.contentType('application/pdf');
//         res.send(pdfBuffer);
//     } catch (error) {
//         console.error('Error generating prescription PDF:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// export const printPrescription = async (req, res) => {
//     try {
//         const { patientId } = req.params;
//         console.log(patientId);
//         // Fetch the prescription content based on patientId from the database
//         const prescription = await Prescription.findOne({ patientId });
//         const prescriptionContent = prescription.content;
//         const prescriptionDate = prescription.createdAt;

//         // Fetch patient details from PatientReg model
//         // const patientDetails = await PatientReg.findOne({ _id: patientId })
//         //     .populate('doctorName', 'drName')
//         //     .exec();

//         // Fetch bill details based on patientId
//         const bill = await Bill.findOne({ _id: patientId })
//             .populate('refId', 'pId pName pNum pAge pGender pSalutation')
//             .populate('doctorName', 'drName')
//             .exec();

//         const billId = bill ? bill.billId : "";

//         // Format the bill date
//         const formattedBillDate = new Date(prescriptionDate).toLocaleDateString();

//         // Define the HTML content with formatted bill date and horizontal line
//         const htmlContent = `
//          <div style="text-align: center;">
//             <span style="font-weight: bold; font-size: 30px;">Care Conquer</span> <br> <br>
//             <span>46/4, Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, H.S</span><br>
//             <span>, R Extension, Bengaluru, Karnataka 560068</span><br>
//             <span>Email: careconqueronline@gmail.com</span><br>
//             <span>PH: 8574968523 </span>
//             <h5 style="text-align:center">PRESCRIPTION</h5>
//             <hr style="border-top: 1px solid #000; margin: 0;">
//         </div>
//             <html>
//                 <head>
//                     <style>
//                         table {
//                             width: 100%;
//                         }
//                     </style>
//                 </head>
//                 <body>
//                     <table>
//                         <tr>
//                             <td style="width: 80%; text-align: left;">
//                                 Patient Name: <strong>${bill.refId.pSalutation} ${bill.refId.pName}</strong><br>
//                                   <div style="margin-bottom: 8px;"></div>
//                                 Sex / Age:<strong> ${bill.refId.pGender} / ${bill.refId.pAge}</strong><br>
//                                   <div style="margin-bottom: 8px;"></div>
//                                 Referred By:<strong> ${bill.doctorName.drName}</strong>
//                             </td>
//                             <td style="width: 50%; text-align: left;">
//                                 Patient ID: <strong> ${bill.refId.pId} </strong><br>
//                             <div style="margin-bottom: 8px;"></div>
//                                 Bill ID: <strong>${billId}</strong><br>
//                                  <div style="margin-bottom: 8px;"></div>
//                                 Date:<strong> ${formattedBillDate}</strong>
//                             </td>
//                         </tr>
//                     </table>
//                     <hr style="border-top: 1px solid #000; margin: 0;">
//                     <div class="prescription-details">${prescriptionContent}</div>
//                 </body>
//             </html>`;

//         // Instantiate WHHTMLToPDF and generate the PDF
//         const pdfGenerator = new HTMLToPDF();
//         const pdfBuffer = await pdfGenerator.generatePDF(htmlContent);

//         // Serve the PDF as a response
//         res.contentType('application/pdf');
//         res.send(pdfBuffer);
//     } catch (error) {
//         console.error('Error generating prescription PDF:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// export const printPrescription = async (req, res) => {
//     try {
//         const { patientId } = req.params;

//         // Fetch prescription details
//         const prescription = await Prescription.findOne({ patientId });
//         if (!prescription) {
//             return res.status(404).json({ error: 'Prescription not found' });
//         }

//         const prescriptionContent = prescription.content;
//         const prescriptionDate = prescription.createdAt;

//         // Fetch bill details based on patientId
//         const bill = await Bill.findOne({ _id: patientId })
//             .populate('refId', 'pId pName pNum pAge pGender pSalutation')
//             .populate('doctorName', 'drName')
//             .exec();

//         if (!bill) {
//             return res.status(404).json({ error: 'Bill not found' });
//         }

//         const billId = bill.billId || "";

//         // Format the bill date
//         const formattedBillDate = new Date(prescriptionDate).toLocaleDateString();

//         // Fetch vitals, diagnosis, and medicine details (assuming they are part of the prescription or bill)
//         const vitals = {
//             bloodPressure: prescription.bloodPressure || "N/A",
//             heartRate: prescription.heartRate || "N/A",
//             respiratoryRate: prescription.respiratoryRate || "N/A",
//             temperature: prescription.temperature || "N/A",
//             height: prescription.height || "N/A",
//             weight: prescription.weight || "N/A",
//         };

//         const diagnosis = {
//             complaints: prescription.complaints || "N/A",
//             clinicalFindings: prescription.clinicalFindings || "N/A",
//             diagnosis: prescription.diagnosis || "N/A",
//             knownDiagnosis: prescription.knownDiagnosis || "N/A",
//         };

//         const medicines = prescription.medicines || [];
//         const selectedTests = prescription.selectedTests || [];

//         // Define the HTML content with formatted bill date, vitals, diagnosis, medicine details, and investigation
//         const htmlContent = `
//         <div style="text-align: center;">
//             <span style="font-weight: bold; font-size: 30px;">Care Conquer</span> <br> <br>
//             <span>46/4, Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, H.S</span><br>
//             <span>, R Extension, Bengaluru, Karnataka 560068</span><br>
//             <span>Email: careconqueronline@gmail.com</span><br>
//             <span>PH: 8574968523 </span>
//             <h5 style="text-align:center">PRESCRIPTION</h5>
//             <hr style="border-top: 1px solid #000; margin: 0;">
//         </div>
//         <html>
//             <head>
//                 <style>
//                     table {
//                         width: 100%;
//                         border-collapse: collapse;
//                     }
//                     th, td {
//                         border: 1px solid #000;
//                         padding: 8px;
//                         text-align: left;
//                     }
//                     .section {
//                         margin-top: 20px;
//                     }
//                     .section h4 {
//                         margin-bottom: 10px;
//                     }
//                     .vitals {
//                         font-weight: bold;
//                         margin-bottom: 10px;
//                     }
//                 </style>
//             </head>
//             <body>
//                 <table>
//                     <tr>
//                         <td style="width: 80%; text-align: left;">
//                             Patient Name: <strong>${bill.refId.pSalutation} ${bill.refId.pName}</strong><br>
//                             <div style="margin-bottom: 8px;"></div>
//                             Sex / Age:<strong> ${bill.refId.pGender} / ${bill.refId.pAge}</strong><br>
//                             <div style="margin-bottom: 8px;"></div>
//                             Referred By:<strong> ${bill.doctorName.drName}</strong>
//                         </td>
//                         <td style="width: 50%; text-align: left;">
//                             Patient ID: <strong> ${bill.refId.pId} </strong><br>
//                             <div style="margin-bottom: 8px;"></div>
//                             Bill ID: <strong>${billId}</strong><br>
//                             <div style="margin-bottom: 8px;"></div>
//                             Date:<strong> ${formattedBillDate}</strong>
//                         </td>
//                     </tr>
//                 </table>
//                 <hr style="border-top: 1px solid #000; margin: 0;">

//                 <!-- Vitals Section -->
//                 <div class="section">
//                     <div class="vitals">
//                         WT: ${vitals.weight}, BP: ${vitals.bloodPressure}, HR: ${vitals.heartRate}, RR: ${vitals.respiratoryRate}, Temp: ${vitals.temperature}, HT: ${vitals.height}
//                     </div>
//                 </div>

//                 <!-- Diagnosis Section -->
//                 <div class="section">
//                     <p><strong>Complaints:</strong> ${diagnosis.complaints}</p>
//                     <p><strong>Clinical Findings:</strong> ${diagnosis.clinicalFindings}</p>
//                     <p><strong>Diagnosis:</strong> ${diagnosis.diagnosis}</p>
//                     <p><strong>Known Diagnosis:</strong> ${diagnosis.knownDiagnosis}</p>
//                 </div>

//                 <!-- Medicine Details Section -->
//                 <div class="section">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Medicine Name</th>
//                                 <th>Dosage</th>
//                                 <th>Frequency</th>
//                                 <th>Duration</th>
//                                 <th>Tablets</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             ${medicines.map((medicine) => `
//                                 <tr>
//                                     <td>${medicine.medicineName || "N/A"}</td>
//                                     <td>${medicine.foodType || "N/A"}</td>
//                                     <td>${medicine.frequency || "N/A"}</td>
//                                     <td>${medicine.duration || "N/A"}</td>
//                                     <td>${medicine.tablets || "N/A"}</td>
//                                 </tr>
//                             `).join("")}
//                         </tbody>
//                     </table>
//                 </div>

//                 <!-- Investigation Section -->
//                 <div class="section">
//                     <h4>Investigation</h4>
//                     <ul>
//                         ${selectedTests.map((test) => `
//                             <li>${test.testName || "N/A"}</li>
//                         `).join("")}
//                     </ul>
//                 </div>

//                 <!-- Prescription Content -->
//                 <div class="section">
//                     <h4>Prescription Details</h4>
//                     ${prescriptionContent}
//                 </div>
//             </body>
//         </html>`;

//         // Instantiate WHHTMLToPDF and generate the PDF
//         const pdfGenerator = new HTMLToPDF();
//         const pdfBuffer = await pdfGenerator.generatePDF(htmlContent);

//         // Serve the PDF as a response
//         res.contentType('application/pdf');
//         res.send(pdfBuffer);
//     } catch (error) {
//         console.error('Error generating prescription PDF:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

export const printPrescriptions = async (req, res) => {
    try {
        const { patientId } = req.params;

        // Fetch prescription details
        const prescription = await Prescription.findOne({ patientId });
        if (!prescription) {
            return res.status(404).json({ error: 'Prescription not found' });
        }

        const prescriptionContent = prescription.content;
        const prescriptionDate = prescription.createdAt;

        // Fetch bill details based on patientId
        const bill = await Bill.findOne({ _id: patientId })
            .populate('refId', 'pId pName pNum pAge pGender pSalutation')
            .populate('doctorName', 'drName')
            .exec();

        if (!bill) {
            return res.status(404).json({ error: 'Bill not found' });
        }

        const billId = prescription.billNO || "";


        // Format the bill date
        const formattedBillDate = new Date(prescriptionDate).toLocaleDateString();

        // Fetch vitals, diagnosis, and medicine details (assuming they are part of the prescription or bill)
        const vitals = {
            bloodPressure: prescription.bloodPressure || "N/A",
            heartRate: prescription.heartRate || "N/A",
            respiratoryRate: prescription.respiratoryRate || "N/A",
            temperature: prescription.temperature || "N/A",
            height: prescription.height || "N/A",
            weight: prescription.weight || "N/A",
        };

        const diagnosis = {
            complaints: prescription.complaints || "N/A",
            clinicalFindings: prescription.clinicalFindings || "N/A",
            diagnosis: prescription.diagnosis || "N/A",
            knownDiagnosis: prescription.knownDiagnosis || "N/A",
        };

        const medicines = prescription.medicines || [];
        const selectedTests = prescription.selectedTests || [];

        // Define the HTML content with formatted bill date, vitals, diagnosis, medicine details, and investigation
        const htmlContent = `
        <div style="text-align: center;">
            <span style="font-weight: bold; font-size: 30px;">Care Conquer</span> <br> <br>
            <span>46/4, Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, H.S</span><br>
            <span>, R Extension, Bengaluru, Karnataka 560068</span><br>
            <span>Email: careconqueronline@gmail.com</span><br>
            <span>PH: 8574968523 </span>
            <h5 style="text-align:center">PRESCRIPTION</h5>
            <hr style="border-top: 1px solid #000; margin: 0;">
        </div>
        <html>
            <head>
                <style>
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    th, td {
                        border: 1px solid #000;
                        padding: 8px;
                        text-align: left;
                    }
                    .section {
                        margin-top: 20px;
                    }
                    .section h4 {
                        margin-bottom: 10px;
                    }
                    .vitals {
                        font-weight: bold;
                        margin-bottom: 10px;
                    }
                    .diagnosis {
                        margin-bottom: 10px;
                    }
                    .diagnosis p {
                        margin: 0;
                    }
                    .diagnosis strong {
                        display: block;
                        margin-bottom: 5px;
                    }
                    .rx-symbol {
                        font-size: 20px;
                        font-weight: bold;
                        margin-right: 5px;
                    }
                    .composition {
                        font-size: 12px;
                        color: #555;
                    }
                </style>
            </head>
            <body>
                <table>
                    <tr>
                        <td style="width: 80%; text-align: left;">
                            Patient Name: <strong>${bill.refId.pSalutation} ${bill.refId.pName}</strong><br>
                            <div style="margin-bottom: 8px;"></div>
                            Sex / Age:<strong> ${bill.refId.pGender} / ${bill.refId.pAge}</strong><br>
                            <div style="margin-bottom: 8px;"></div>
                            Referred By:<strong> ${bill.doctorName.drName}</strong>
                        </td>
                        <td style="width: 50%; text-align: left;">
                            Patient ID: <strong> ${bill.refId.pId} </strong><br>
                            <div style="margin-bottom: 8px;"></div>
                            Prescriptiom ID: <strong>${billId}</strong><br>
                            <div style="margin-bottom: 8px;"></div>
                            Date:<strong> ${formattedBillDate}</strong>
                        </td>
                    </tr>
                </table>
                <hr style="border-top: 1px solid #000; margin: 0;">

                <!-- Vitals Section -->
                <div class="section">
                    <div class="vitals">
                        WT: ${vitals.weight}, BP: ${vitals.bloodPressure}, HR: ${vitals.heartRate}, RR: ${vitals.respiratoryRate}, Temp: ${vitals.temperature}, HT: ${vitals.height}
                    </div>
                </div>

                <!-- Diagnosis Section -->
              <div class="section diagnosis">
    <p><strong class="label">Complaints:</strong> ${diagnosis.complaints}</p>
    <p><strong class="label">Clinical Findings:</strong> ${diagnosis.clinicalFindings}</p>
    <p><strong class="label">Diagnosis:</strong> ${diagnosis.diagnosis}</p>
    <p><strong class="label">Known Diagnosis:</strong> ${diagnosis.knownDiagnosis}</p>
</div>


                <!-- Medicine Details Section -->
                <div class="section">
                    <table>
                        <thead>
                            <tr>
                                <th>Rx</th>
                                <th>Medicine Name</th>
                                <th>Dosage</th>
                                <th>Frequency</th>
                                <th>Duration</th>
                                <th>Tablets</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${medicines.map((medicine, index) => `
                                <tr>
                                    <td><span class="rx-symbol">&#8478;</span></td>
                                    <td>
                                        ${medicine.medicineName || "N/A"}
                                        <div class="composition">(${medicine.composition || "N/A"})</div>
                                    </td>
                                    <td>${medicine.foodType || "N/A"}</td>
                                    <td>${medicine.frequency || "N/A"}</td>
                                    <td>${medicine.duration || "N/A"}</td>
                                    <td>${medicine.tablets || "N/A"}</td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>

                <!-- Investigation Section -->
                <div class="section">
                    <h4>Investigation</h4>
                    <ul>
                        ${selectedTests.map((test) => `
                            <li>${test.testName || "N/A"}</li>
                        `).join("")}
                    </ul>
                </div>

                <!-- Prescription Content -->
                <div class="section">
                    <h4>Advice</h4>
                    ${prescriptionContent}
                </div>
            </body>
        </html>`;

        // Instantiate WHHTMLToPDF and generate the PDF
        const pdfGenerator = new HTMLToPDF();
        const pdfBuffer = await pdfGenerator.generatePDF(htmlContent);

        // Serve the PDF as a response
        res.contentType('application/pdf');
        res.send(pdfBuffer);
    } catch (error) {
        console.error('Error generating prescription PDF:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const printPrescription = async (req, res) => {
    try {
        const { patientId } = req.params;

        // Fetch prescription details
        const prescription = await Prescription.findOne({ _id: patientId });
        if (!prescription) {
            return res.status(404).json({ error: 'Prescription not found' });
        }

        const prescriptionContent = prescription.content;
        const prescriptionDate = prescription.createdAt;

        // Fetch bill details based on patientId
        const bill = await PatientReg.findOne({ _id: prescription.billId })
        // .populate('refId', 'pId pName pNum pAge pGender pSalutation')
        // .populate('doctorName', 'drName')
        // .exec();
        const doctor = await doctorDetail.findOne({ _id: bill.doctorName })


        if (!bill) {
            return res.status(404).json({ error: 'Bill not found' });
        }

        const billId = prescription.billNO || "";

        // Format the bill date
        const formattedBillDate = new Date(prescriptionDate).toLocaleDateString();

        // Fetch vitals, diagnosis, and medicine details (assuming they are part of the prescription or bill)
        const vitals = {
            bloodPressure: prescription.bloodPressure || "N/A",
            heartRate: prescription.heartRate || "N/A",
            respiratoryRate: prescription.respiratoryRate || "N/A",
            temperature: prescription.temperature || "N/A",
            height: prescription.height || "N/A",
            weight: prescription.weight || "N/A",
        };

        const diagnosis = {
            complaints: prescription.complaints || "N/A",
            clinicalFindings: prescription.clinicalFindings || "N/A",
            diagnosis: prescription.diagnosis || "N/A",
            knownDiagnosis: prescription.knownDiagnosis || "N/A",
        };

        const medicines = prescription.medicines || [];
        const selectedTests = prescription.selectedTests || [];

        // Define the HTML content with formatted bill date, vitals, diagnosis, medicine details, and investigation
        const htmlContent = `
        <div style="text-align: center;">
            <span style="font-weight: bold; font-size: 30px;">Care Conquer</span> <br> <br>
            <span>46/4, Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, H.S</span><br>
            <span>, R Extension, Bengaluru, Karnataka 560068</span><br>
            <span>Email: careconqueronline@gmail.com</span><br>
            <span>PH: 8574968523 </span>
            <h5 style="text-align:center">PRESCRIPTION</h5>
            <hr style="border-top: 1px solid #000; margin: 0;">
        </div>
        <html>
            <head>
                <style>
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    th, td {
                        border: 1px solid #000;
                        padding: 8px;
                        text-align: left;
                    }
                    .section {
                        margin-top: 20px;
                    }
                    .section h4 {
                        margin-bottom: 10px;
                    }
                    .vitals {
                        font-weight: bold;
                        margin-bottom: 10px;
                    }
                    .diagnosis {
                        margin-bottom: 10px;
                    }
                    .diagnosis p {
                        margin: 0;
                    }
                    .diagnosis strong {
                        display: block;
                        margin-bottom: 5px;
                    }
                    .rx-symbol {
                        font-size: 20px;
                        font-weight: bold;
                        margin-right: 5px;
                    }
                    .composition {
                        font-size: 12px;
                        color: #555;
                    }
                </style>
            </head>
            <body>
                <table>
                    <tr>
                        <td style="width: 80%; text-align: left;">
                            Patient Name: <strong>${bill.pSalutation} ${bill.pName}</strong><br>
                            <div style="margin-bottom: 8px;"></div>
                            Sex / Age:<strong> ${bill.pGender} / ${bill.pAge}</strong><br>
                            <div style="margin-bottom: 8px;"></div>
                            Referred By:<strong> ${doctor.drName}</strong>
                        </td>
                        <td style="width: 50%; text-align: left;">
                            Patient ID: <strong> ${bill.pId} </strong><br>
                            <div style="margin-bottom: 8px;"></div>
                            Prescriptiom ID: <strong>${billId}</strong><br>
                            <div style="margin-bottom: 8px;"></div>
                            Date:<strong> ${formattedBillDate}</strong>
                        </td>
                    </tr>
                </table>
                <hr style="border-top: 1px solid #000; margin: 0;">

                <!-- Vitals Section -->
                <div class="section">
                    <div class="vitals">
                        WT: ${vitals.weight}, BP: ${vitals.bloodPressure}, HR: ${vitals.heartRate}, RR: ${vitals.respiratoryRate}, Temp: ${vitals.temperature}, HT: ${vitals.height}
                    </div>
                </div>

                <!-- Diagnosis Section -->
              <div class="section diagnosis">
    <p><strong class="label">Complaints:</strong> ${diagnosis.complaints}</p>
    <p><strong class="label">Clinical Findings:</strong> ${diagnosis.clinicalFindings}</p>
    <p><strong class="label">Diagnosis:</strong> ${diagnosis.diagnosis}</p>
    <p><strong class="label">Known Diagnosis:</strong> ${diagnosis.knownDiagnosis}</p>
</div>


                <!-- Medicine Details Section -->
                <div class="section">
                    <table>
                        <thead>
                            <tr>
                                <th>Rx</th>
                                <th>Medicine Name</th>
                                <th>Dosage</th>
                                <th>Frequency</th>
                                <th>Duration</th>
                                <th>Tablets</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${medicines.map((medicine, index) => `
                                <tr>
                                    <td><span class="rx-symbol">&#8478;</span></td>
                                    <td>
                                        ${medicine.medicineName || "N/A"}
                                        <div class="composition">(${medicine.composition || "N/A"})</div>
                                    </td>
                                    <td>${medicine.foodType || "N/A"}</td>
                                    <td>${medicine.frequency || "N/A"}</td>
                                    <td>${medicine.duration || "N/A"}</td>
                                    <td>${medicine.tablets || "N/A"}</td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>

                <!-- Investigation Section -->
                <div class="section">
                    <h4>Investigation</h4>
                    <ul>
                        ${selectedTests.map((test) => `
                            <li>${test.testName || "N/A"}</li>
                        `).join("")}
                    </ul>
                </div>

                <!-- Prescription Content -->
                <div class="section">
                    <h4>Advice</h4>
                    ${prescriptionContent}
                </div>
            </body>
        </html>`;

        // Instantiate WHHTMLToPDF and generate the PDF
        const pdfGenerator = new HTMLToPDF();
        const pdfBuffer = await pdfGenerator.generatePDF(htmlContent);

        // Serve the PDF as a response
        res.contentType('application/pdf');
        res.send(pdfBuffer);
    } catch (error) {
        console.error('Error generating prescription PDF:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// Save prescription template
export const savePrescriptionTemplate = async (req, res) => {


    try {
        const {
            name,
            vitals,
            complaints,
            clinicalFindings,
            diagnosis,
            knownDiagnosis,
            medicines,
            selectedTests,
            advice
        } = req.body;

        // Check if template name already exists
        const existingTemplate = await PrescriptionTemplate.findOne({ name });
        if (existingTemplate) {
            return res.status(400).json({
                success: false,
                message: 'Template with this name already exists'
            });
        }

        // Process selectedTests with additional fields
        const formattedTests = selectedTests.map(test => ({
            testId: test._id,
            testName: test.name || test.groupName || test.profileName || test.feesName,
        }));


        const newTemplate = new PrescriptionTemplate({
            name,
            vitals,
            complaints,
            clinicalFindings,
            diagnosis,
            knownDiagnosis,
            medicines,
            selectedTests: formattedTests,
            advice
        });

        await newTemplate.save();

        res.status(201).json({
            success: true,
            message: 'Template saved successfully',
            data: newTemplate
        });
    } catch (error) {
        console.error('Error saving template:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Get all prescription templates
export const getPrescriptionTemplate = async (req, res) => {
    try {
        const templates = await PrescriptionTemplate.find({})
            .sort({ createdAt: -1 }) // Newest first
            .select('-__v'); // Exclude version key

        res.status(200).json({
            success: true,
            count: templates.length,
            data: templates
        });
    } catch (error) {
        console.error('Error fetching templates:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// export const saveVaccineRecords = async (req, res) => {
//     const { patientId, records } = req.body;

//     try {
//         if (!patientId || !Array.isArray(records)) {
//             return res.status(400).json({ message: 'Invalid input' });
//         }

//         // Delete existing records for the patient (optional, if you want to overwrite)
//         await VaccineRecord.deleteMany({ patientId });

//         // Save all new records
//         const newRecords = await VaccineRecord.insertMany(
//             records.map(record => ({
//                 ...record,
//                 patientId
//             }))
//         );

//         res.status(201).json({ message: 'Vaccine records saved', data: newRecords });
//     } catch (error) {
//         console.error('Error saving vaccine records:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

export const saveVaccineRecords = async (req, res) => {
    const { patientId, records } = req.body;

    try {
        if (!patientId || !Array.isArray(records)) {
            return res.status(400).json({ message: 'Invalid input' });
        }

        // Delete existing records
        await VaccineRecord.deleteMany({ patientId });

        // Prepare records with brand cleanup
        const recordsToSave = records.map(record => ({
            patientId,
            vaccine: record.vaccine,
            ageGroup: record.ageGroup,
            status: record.status,
            recommendedDate: record.recommendedDate,
            nextDueDate: record.nextDueDate,
            // Save brand as-is if provided
            // brand: record.status === 'Administered' ? record.brand : null,
            // dateAdministered: record.status === 'Administered' ? record.dateAdministered : null
            batchNo: record.batchNo,
            brand: record.status === 'Administered' ? record.brand : '',
            dateAdministered: record.status === 'Administered' ? record.dateAdministered : ''

        }));
        console.log(recordsToSave);
        // Save all records
        const newRecords = await VaccineRecord.insertMany(recordsToSave);

        res.status(201).json({
            message: 'Vaccine records saved',
            data: newRecords
        });

    } catch (error) {
        console.error('Error saving vaccine records:', error);

        // Handle required field errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: 'Validation failed',
                error: error.message
            });
        }

        res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
};


export const getVaccineRecords = async (req, res) => {

    try {
        const { patientId } = req.params;

        // Validate patientId format
        if (!mongoose.Types.ObjectId.isValid(patientId)) {
            return res.status(400).json({
                status: 'error',
                message: 'Invalid patient ID format'
            });
        }

        // Convert to ObjectId
        const patientObjectId = new mongoose.Types.ObjectId(patientId);

        // Find all vaccine records for the patient
        const records = await VaccineRecord.find({ patientId: patientObjectId })
            .sort({ recommendedDate: 1 }) // Sort by recommended date
            .lean();

        if (!records || records.length === 0) {
            return res.status(404).json({
                status: 'success',
                message: 'No vaccine records found',
                data: []
            });
        }

        // Transform data for better frontend consumption
        const formattedRecords = records.map(record => ({
            id: record._id,
            vaccine: record.vaccine,
            ageGroup: record.ageGroup,
            recommendedDate: record.recommendedDate.toISOString().split('T')[0],
            nextDueDate: record.nextDueDate.toISOString().split('T')[0],
            status: record.status,
            batchNo: record.batchNo,
            brand: record.brand,
            dateAdministered: record.dateAdministered
                ? record.dateAdministered.toISOString().split('T')[0]
                : null
        }));

        res.status(200).json({
            status: 'success',
            results: formattedRecords.length,
            data: formattedRecords
        });

    } catch (error) {
        console.error('Error fetching vaccine records:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};


// export const printVaccineChart = async (req, res) => {
//     try {
//         const { patientId } = req.params;

//         const patient = await Bill.findById(patientId)
//             .populate('refId', 'pId pName pNum pAge pGender pSalutation')
//             .exec();

//         if (!patient) {
//             return res.status(404).json({ error: "Patient not found" });
//         }

//         // Fetch vaccine records for the patient
//         const vaccineRecords = await VaccineRecord.find({ patientId: patientId })
//             .sort({ recommendedDate: 1 })
//             .lean();

//         if (!vaccineRecords || vaccineRecords.length === 0) {
//             return res.status(404).json({ error: "No vaccine records found" });
//         }

//         // Helper function to format date
//         const formatDate = (date) => {
//             if (date) {
//                 const formattedDate = new Date(date).toISOString().split("T")[0];
//                 return formattedDate;
//             }
//             return "-";
//         };

//         // Filter and map for rendering
//         const filteredRecords = vaccineRecords.map(record => ({
//             vaccine: record.vaccine,
//             dueDate: formatDate(record.nextDueDate),
//             givenDate: record.dateAdministered ? formatDate(record.dateAdministered) : "-",
//             ageGroup: record.ageGroup,
//             brand: record.brand
//         }));


//         // HTML template
//         const htmlContent = `
//         <html>
//         <head>
//           <style>
//             body { font-family: Arial, sans-serif; padding: 20px; }
//             .title { text-align: center; font-size: 28px; font-weight: bold; margin-bottom: 30px; }
//             .patient-info { display: flex; justify-content: space-between; margin-bottom: 20px; }
//             .patient-info div { width: 30%; font-size: 16px; }
//             table { width: 100%; border-collapse: collapse; margin-top: 30px; }
//             th, td { border: 1px solid #000; padding: 8px; text-align: left; }
//             th { background-color: #f0f0f0; }
//           </style>
//         </head>
//         <body>
//           <div class="title">Vaccine Chart</div>

//           <div class="patient-info">
//           <div><strong>Name:</strong> ${patient.refId.pName}</div>
//           <div style="text-align: center;"><strong>Gender:</strong> ${patient.refId.pGender}</div>
//           <div style="text-align: right;"><strong>Age:</strong> ${new Date(patient.refId.pAge).toLocaleDateString('en-GB')}</div>
//         </div>

//           <table>
//             <thead>
//               <tr>
//                 <th>Vaccine Name</th>
//                 <th>Due Date</th>
//                 <th>Given Date</th>
//                 <th>Age Group</th>
//                 <th>Brand</th>
//               </tr>
//             </thead>
//             <tbody>
//               ${filteredRecords
//                 .map(record => `
//                   <tr>
//                     <td>${record.vaccine}</td>
//                     <td>${record.dueDate}</td>
//                     <td>${record.givenDate}</td>
//                     <td>${record.ageGroup}</td>
//                     <td>${record.brand}</td>
//                   </tr>
//                 `)
//                 .join("")}
//             </tbody>
//           </table>
//         </body>
//         </html>
//       `;

//         // Generate PDF
//         const pdfGenerator = new HTMLToPDF();
//         const pdfBuffer = await pdfGenerator.generatePDF(htmlContent);

//         res.contentType("application/pdf");
//         res.send(pdfBuffer);

//     } catch (error) {
//         console.error("Error generating vaccine chart PDF:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// export const printVaccineChart = async (req, res) => {
//     try {
//         const { patientId } = req.params;

//         const patient = await PatientReg.findById(patientId).lean();
          

//         if (!patient) {
//             return res.status(404).json({ error: "Patient not found" });
//         }

//         // Fetch vaccine records for the patient
//         const vaccineRecords = await VaccineRecord.find({ patientId: patientId })
//             .sort({ recommendedDate: 1 })
//             .lean();

//         if (!vaccineRecords || vaccineRecords.length === 0) {
//             return res.status(404).json({ error: "No vaccine records found" });
//         }

//         const { pName, pGender, pAge } = vaccineRecords[0];

//         // Helper function to format date
//         const formatDate = (date) => {
//             if (date) {
//                 const formattedDate = new Date(date).toISOString().split("T")[0];
//                 return formattedDate;
//             }
//             return "-";
//         };

//         // Separate into administered and pending
//         const administered = [];
//         const pending = [];

//         vaccineRecords.forEach(record => {
//             const formattedRecord = {
//                 vaccine: record.vaccine,
//                 dueDate: formatDate(record.nextDueDate),
//                 givenDate: record.dateAdministered ? formatDate(record.dateAdministered) : "-",
//                 ageGroup: record.ageGroup,
//                 brand: record.brand,
//                 batchNo: record.batchNo,
//             };

//             if (record.dateAdministered) {
//                 administered.push({ ...formattedRecord, sortDate: new Date(record.dateAdministered) });
//             } else {
//                 pending.push({ ...formattedRecord, sortDate: new Date(record.nextDueDate) });
//             }
//         });

//         // Sort each group by relevant date
//         administered.sort((a, b) => a.sortDate - b.sortDate);
//         pending.sort((a, b) => a.sortDate - b.sortDate);

//         // Merge and remove sortDate
//         const filteredRecords = [...administered, ...pending].map(({ sortDate, ...rest }) => rest);

//         // HTML template
//         const htmlContent = `
//         <html>
//         <head>
//           <style>
//             body { font-family: Arial, sans-serif; padding: 20px; }
//             .title { text-align: center; font-size: 28px; font-weight: bold; margin-bottom: 30px; }
//             .patient-info { display: flex; justify-content: space-between; margin-bottom: 20px; }
//             .patient-info div { width: 30%; font-size: 16px; }
//             table { width: 100%; border-collapse: collapse; margin-top: 30px; }
//             th, td { border: 1px solid #000; padding: 8px; text-align: left; }
//             th { background-color: #f0f0f0; }
//           </style>
//         </head>
//         <body>
//           <div class="title">Vaccine Chart</div>

//            <div class="patient-info">
//             <div><strong>Name:</strong> ${patient.pName}</div>
//             <div style="text-align: center;"><strong>Gender:</strong> ${patient.pGender}</div>
//             <div style="text-align: right;"><strong>Age:</strong> ${new Date(patient.pAge).toLocaleDateString('en-GB')}</div>
//           </div>

//           <table>
//             <thead>
//               <tr>
//                 <th>Vaccine Name</th>
//                 <th>Due Date</th>
//                 <th>Given Date</th>
//                 <th>Age Group</th>
//                 <th>Brand</th>
//                 <th>Batch No.</th>
//               </tr>
//             </thead>
//             <tbody>
//               ${filteredRecords
//                 .map(record => `
//                   <tr>
//                     <td>${record.vaccine}</td>
//                     <td>${record.dueDate}</td>
//                     <td>${record.givenDate}</td>
//                     <td>${record.ageGroup}</td>
//                     <td>${record.brand}</td>
//                     <td>${record.batchNo}</td>
//                   </tr>
//                 `)
//                 .join("")}
//             </tbody>
//           </table>
//         </body>
//         </html>
//       `;

//         // Generate PDF
//         const pdfGenerator = new HTMLToPDF();
//         const pdfBuffer = await pdfGenerator.generatePDF(htmlContent);

//         res.contentType("application/pdf");
//         res.send(pdfBuffer);

//     } catch (error) {
//         console.error("Error generating vaccine chart PDF:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

export const printVaccineChart = async (req, res) => {
    try {
        const { patientId } = req.params;

        const patient = await PatientReg.findById(patientId).lean();
          

        if (!patient) {
            return res.status(404).json({ error: "Patient not found" });
        }

        // Fetch vaccine records for the patient
        const vaccineRecords = await VaccineRecord.find({ patientId: patientId })
            .sort({ recommendedDate: 1 })
            .lean();

        if (!vaccineRecords || vaccineRecords.length === 0) {
            return res.status(404).json({ error: "No vaccine records found" });
        }

        const { pName, pGender, pAge } = vaccineRecords[0];

        // Helper function to format date
        const formatDate = (date) => {
            if (date) {
                const formattedDate = new Date(date).toISOString().split("T")[0];
                return formattedDate;
            }
            return "-";
        };

        // Separate into administered and pending
        const administered = [];
        const pending = [];

        vaccineRecords.forEach(record => {
            const formattedRecord = {
                vaccine: record.vaccine,
                // dueDate: formatDate(record.nextDueDate),
                dueDate: new Date(record.nextDueDate).toLocaleDateString('en-IN'),
                // givenDate: record.dateAdministered ? formatDate(record.dateAdministered) : "-",
                givenDate: record.dateAdministered ? new Date(record.dateAdministered).toLocaleDateString('en-IN') : '',
                ageGroup: record.ageGroup,
                brand: record.brand,
                batchNo: record.batchNo,
            };

            if (record.dateAdministered) {
                administered.push({ ...formattedRecord, sortDate: new Date(record.dateAdministered) });
            } else {
                pending.push({ ...formattedRecord, sortDate: new Date(record.nextDueDate) });
            }
        });

        // Sort each group by relevant date
        administered.sort((a, b) => a.sortDate - b.sortDate);
        pending.sort((a, b) => a.sortDate - b.sortDate);

        // Merge and remove sortDate
        const filteredRecords = [...administered, ...pending].map(({ sortDate, ...rest }) => rest);

        // HTML template
        const htmlContent = `
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .title { text-align: center; font-size: 28px; font-weight: bold; margin-bottom: 30px; }
            .patient-info { display: flex; justify-content: space-between; margin-bottom: 20px; }
            .patient-info div { width: 30%; font-size: 16px; }
            table { width: 100%; border-collapse: collapse; margin-top: 30px; }
            th, td { border: 1px solid #000; padding: 8px; text-align: left; }
            th { background-color: #f0f0f0; }
          </style>
        </head>
        <body>
          <div class="title">Vaccine Chart</div>

           <div class="patient-info">
            <div><strong>Name:</strong> ${patient.pName}</div>
            <div style="text-align: center;"><strong>Gender:</strong> ${patient.pGender}</div>
            <div style="text-align: right;"><strong>Age:</strong> ${new Date(patient.pAge).toLocaleDateString('en-GB')}</div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Vaccine Name</th>
                <th>Due Date</th>
                <th>Given Date</th>
                <th>Age Group</th>
                <th>Brand</th>
                <th>Batch No.</th>
              </tr>
            </thead>
            <tbody>
              ${filteredRecords
                .map(record => `
                  <tr>
                    <td>${record.vaccine}</td>
                    <td>${record.dueDate}</td>
                    <td>${record.givenDate}</td>
                    <td>${record.ageGroup}</td>
                    <td>${record.brand}</td>
                    <td>${record.batchNo}</td>
                  </tr>
                `)
                .join("")}
            </tbody>
          </table>
        </body>
        </html>
      `;

        // Generate PDF
        const pdfGenerator = new HTMLToPDF();
        const pdfBuffer = await pdfGenerator.generatePDF(htmlContent);

        res.contentType("application/pdf");
        res.send(pdfBuffer);

    } catch (error) {
        console.error("Error generating vaccine chart PDF:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Clinic information (modify with your actual details)
const CLINIC_INFO = {
    name: "Dr. Shayan's Kidz Clinic - बालरोग चिकित्सालय",
    address: "Shop no. 18, Siddhivinayak Residency, Godbole stop, Ratnagiri, Maharashtra 415612",
    contact: "+91 90111 89905",
    officeHours: "Mon-Sat: 9 AM - 7 PM"
  };
  
  // Configure cron job to run daily at 9:00 AM
  export const startVaccineReminderService = () => {
    cron.schedule('58 13 * * *', async () => {
      try {
        console.log('Starting automatic vaccine reminder check...');
        
        // 1. Calculate date range (next 3 days)
        const reminderDate = new Date();
        reminderDate.setDate(reminderDate.getDate() + 3);
  
        // 2. Find vaccines due within next 3 days
        const upcomingVaccines = await VaccineRecord.find({
          nextDueDate: {
            $lte: reminderDate,
            $gte: new Date() // Exclude past dates
          },
          status: { $in: ['Pending', 'Overdue'] }
        });
  
        console.log(upcomingVaccines);

        // 3. Send reminders for each vaccine
        for (const vaccine of upcomingVaccines) {
          try {
            // const patient = vaccine.patientId;
            const patient = await PatientReg.findById(vaccine.patientId);
            if (!patient?.pNum) {
              console.warn(`No phone number for patient ${patient?._id}`);
              continue;
            }
  
            // Format dates
            const dueDate = vaccine.nextDueDate.toLocaleDateString('en-IN', {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            });
  
            // Create message template
            const message = `*Reminder from ${CLINIC_INFO.name}*\n\n` +
              `Dear ${patient?.pName},\n\n` +
              `Your *${vaccine.vaccine}* vaccination is due on:\n` +
              `📅 ${dueDate}\n\n` +
              `Please visit us at:\n` +
              `📍 ${CLINIC_INFO.address}\n` +
              `⏰ ${CLINIC_INFO.officeHours}\n` +
              `📞 ${CLINIC_INFO.contact}\n\n` +
              `Stay healthy and protected!`;
  
            // Send WhatsApp message
            await sendWhatsAppMessage(patient.pNum, message);
            
            // Optional: Update last reminder date
            // await VaccineRecord.updateOne(
            //   { _id: vaccine._id },
            //   { $set: { lastReminderSent: new Date() } }
            // );
  
            console.log(`Sent reminder to ${patient.pNum}`);
          } catch (error) {
            console.error(`Failed to send to ${vaccine.patientId}:`, error);
          }
        }
  
        // 4. Mark overdue vaccines
        await VaccineRecord.updateMany({
          nextDueDate: { $lt: new Date() },
          status: 'Pending'
        }, {
          $set: { status: 'Overdue' }
        });
  
        console.log(`Processed ${upcomingVaccines.length} reminders`);
      } catch (error) {
        console.error('Vaccine reminder job failed:', error);
      }
    });
  };



  // WhatsApp message sending function
  const sendWhatsAppMessage = async (phoneNumber, message) => {
    const apiUrl = 'https://api.whatsdesk.in/v4/text.php';
    const apiKey = 'cbDhNGkpiroWXNjHUY';
  
    const params = new URLSearchParams({
      key: apiKey,
      number: `91${phoneNumber}`,
      message: message,
      type: 'unicode',
      priority: '10'
    });
  
    const response = await axios.post(apiUrl, params.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  
    if (!response.data.status === 'success') {
      throw new Error(response.data.message || 'WhatsApp API error');
    }
  };
  
  startVaccineReminderService();