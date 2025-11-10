import express from "express"
import { AppointmentControllers, getAppointmentControllers } from "../controllers/appointControllers.js";

const AppointmentRoute = express.Router();



AppointmentRoute.post("/CreateAppointment", AppointmentControllers);
AppointmentRoute.post("/getAppointment", getAppointmentControllers);








export default  AppointmentRoute
