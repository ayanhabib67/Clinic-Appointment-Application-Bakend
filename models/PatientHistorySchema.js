import mongoose from "mongoose";

const patientHistorySchema = new mongoose.Schema({
  date: {
    type: String,
   
  },
  prescription: {
    type: String,
    
  },
  userId: {
    type: String,
   
  },
  doctorId: {
    type: String,
   
  },
  userId: {
    type: String,
  },
});

const PatientHistory = mongoose.model("PatientHistory", patientHistorySchema);

export default PatientHistory;
