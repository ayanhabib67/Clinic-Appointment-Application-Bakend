import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  email: {
    type: String,
  },
  CNIC: {
    type: String,
    
  },
  password: {
    type: String,
    
  },
  qualification: {
    type: String,
  
  },
  timing: {
    type: String, 
    
  },
  joiningDate: {
    type: String,
    
  },
  responsibility: {
    type: String,
  }
});

const ClinicStaff = mongoose.model("CleaningStaff", staffSchema);

export default ClinicStaff;
