import Admin from "../models/AdminLoginSchema.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import PatientHistory from "../models/PatientHistorySchema.js";
import UserModel from "../models/userSchema.js";
export let adminLoginController = async (request, response) => {
  try {
    let { email, password } = request.body;

    let user = await UserModel.findOne({ email });

    if (!user) {
      return response.json({
        message: "Email not found",
        status: false,
      });
    }

    let comparePass = await bcrypt.compare(password, user.password);

    if (!comparePass) {
      return response.json({
        message: "Email or Password invalid",
        status: false,
      });
    }

    let data = { _id: user._id };
    let PRIVATE_KEY = "Ayabhabib7455";
    let token = jwt.sign(data, PRIVATE_KEY, { expiresIn: "24h" });

    return response.json({
      message: "User successfully logged in",
      status: true,
      token,
      userrole: user.role, 
      userId: user._id.toString(),
    });
  } catch (error) {
    console.log("Error:", error.message);

    response.json({
      message: error.message || "Something went wrong",
      status: false,
    });
  }
};






   export  let AlluserData = async (req, res) => {
      try {
        const { userId } = req.body; 
    
        console.log("User ID from frontend:", userId);
    
        const incomes = await PatientHistory.find({ userId });
    
        res.json({
          message: "Incomes fetched successfully",
          status: true,
          data: incomes,
        });
      } catch (error) {
        res.json({
          message: error.message,
          status: false,
        });
      }
    }





    export const deleteDoctor = async (req, res) => {
      try {
        const { doctorId } = req.body;
    
        console.log("Doctor ID from frontend:", doctorId);
    
        if (!doctorId) {
          return res.status(400).json({
            message: "Doctor ID is required",
            status: false,
          });
        }
    
       
        const deletedDoctor = await UserModel.findOneAndDelete({ doctorId });
    
        if (!deletedDoctor) {
          return res.status(404).json({
            message: "Doctor not found",
            status: false,
          });
        }
    
        res.json({
          message: "Doctor deleted successfully",
          status: true,
          data: deletedDoctor,
        });
      } catch (error) {
        res.status(500).json({
          message: error.message,
          status: false,
        });
      }
    };