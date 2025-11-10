import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  // Links to user who booked
  userId: {
    type: String,
    // required: true,
  },

  // Doctor assigned
  doctorId: {
    type: String,
    required: true,
  },

  // Doctor Details
  doctorName: {
    type: String,
    required: true,
    trim: true,
  },
  doctorEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  doctorPhone: {
    type: String,
    // required: true,
  },
  doctorSpecialization: {
    type: String,
    // required: true,
  },

  // Patient Details
  patientName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },

  // Medical Information
  disease: {
    type: String,
    required: true,
  },
  symptoms: {
    type: String,
  },
  bloodGroup: {
    type: String,
  },
  allergies: {
    type: String,
  },
  currentMedications: {
    type: String,
  },
  previousIllness: {
    type: String,
  },

  // Appointment Details
  specialization: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
  },
  appointmentDate: {
    type: String,
    required: true,
  },
  timeSlot: {
    type: String,
    required: true,
  },
  appointmentType: {
    type: String,
    enum: ["first-visit", "follow-up"],
    default: "first-visit",
  },
  additionalNotes: {
    type: String,
  },

  // Backend tracking fields
  status: {
    type: String,
    enum: ["pending", "approved", "cancelled", "completed"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
