import express from "express"
import { ClinicStaffRoutes, getStaff } from "../controllers/StaffControllers.js";



const staffroute = express.Router();



staffroute.post("/staff",ClinicStaffRoutes)
staffroute.post("/getStaff",getStaff)






export default  staffroute

