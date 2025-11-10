import express from "express"
import { doctorControllers, getDoctor, getSingleDoctor, updateDoctorProfile } from "../controllers/doctorControllers.js";



const DoctorRoute = express.Router();





DoctorRoute.post("/addDoctor",doctorControllers)
DoctorRoute.post("/getDoctor",getDoctor)
DoctorRoute.post("/updateDoctorprofile",updateDoctorProfile)
DoctorRoute.post("/getSingleDoctor",getSingleDoctor)








export default DoctorRoute