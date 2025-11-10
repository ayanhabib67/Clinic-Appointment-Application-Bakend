import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import route from "./routes/authRoutes.js";
import DoctorRoute from "./routes/addDoctorRoutes.js";
import AppointmentRoute from "./routes/appointment.js";
import patientHistory from "./routes/PatientHistoryRoutes.js";
import staffroute from "./routes/staffRoute.js";
import adminLoginRoute from "./routes/adminLoginRoutes.js";



const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


connectDB();




app.use("/api/",route)
app.use("/api/",DoctorRoute)
app.use("/api/",AppointmentRoute)
app.use("/api/",patientHistory)
app.use("/api/",staffroute)
app.use("/api/",adminLoginRoute)












const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
