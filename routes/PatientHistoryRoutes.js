import express from "express"
import { patientControllers } from "../controllers/PatientHistoryControlers.js";



const patientHistory = express.Router();



patientHistory.post("/patientHistory",patientControllers)




export default patientHistory
