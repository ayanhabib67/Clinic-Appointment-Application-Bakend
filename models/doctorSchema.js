import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  specialization: {
    type: String,
  },
  timeslots: {
    type: [String],
  },
  availability: {
    type: String,
  },
  appointments: {
    type: [String],
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  roomNumber: {
    type: String,
  },
  about: {
    type: String,
  },
  joiningDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
  },
  userId :{
    type: String,
  }
});

const DoctorSchema = mongoose.model("Doctors", doctorSchema);

export default DoctorSchema;
