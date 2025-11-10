import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  day: String,
  startTime: String,
  endTime: String,
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "doctor", "staff", "patient"], required: true },





  userId: {
    type: String,
    required: true,
  },



  Qualification : String,
  Experience:String,
  timeslots :[String],
  age: Number,
  phoneNo: String,
  joiningDate : String,
  cnic: String,
  availability : String,
  qualification: String,
  specialization: String,
  room: Number,
  timing :String ,
  joiningDate :String , 
  appointments :[String] , 
  roomNumber : String,
  responsibility : String,
  doctorId : String,
  about : String,
  isAvailable: { type: Boolean, default: true },
  schedule: [scheduleSchema],

  
}, { timestamps: true });

const UserModel = mongoose.model("User", userSchema);
export default UserModel;