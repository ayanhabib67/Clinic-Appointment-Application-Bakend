import express from "express"
import {AlluserData,  adminLoginController, deleteDoctor } from "../controllers/adminAuthControllers.js";


const adminLoginRoute = express.Router();




adminLoginRoute.post("/adminlogin",adminLoginController)
adminLoginRoute.post("/getUserData",AlluserData)
adminLoginRoute.delete("/deleteDoctor", deleteDoctor);






export default adminLoginRoute