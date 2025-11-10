import UsersingUp from "../models/userSingUpSchema.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import UserModel from "../models/userSchema.js";
export  let  UserSignupController = async (request , response)=>{

    try {

        let {  email,  password } = request.body;


        console.log("real password", password);


        if (!email || !password) {
            return response.json({
                message: "Required fields are missing"
            })

        }


        let user = await UserModel.findOne({ email })
        console.log("user", user);

        if (user) {
            return response.json({
                meaasge: "email Addres alerady exist",
                status: false
            })
        }

        let hashPassword = await bcrypt.hash(password, 10);

        const userObj = {
            ...request.body,
            password: hashPassword,
        };




        await UserModel.create(userObj)

        response.json({
            message: "user sucessfully registered!",
            status: true
        })


        console.log("Email", request.body);



    } catch (error) {
        response.json({
            message: error.message || "Something want wrong",
            status: false
        })

    }

}


export let UserLoginController =async (request , response)=>{
    try {
        let { email, password } = request.body;
    
       
        let user = await UserModel.findOne({ email });
    
       
        if (!user) {
          return response.json({
            message: "Email not found",
            status: false,
          });
        }
    
        console.log("id", user._id.toString());
    
       
        let comparePass = await bcrypt.compare(password, user.password);
        console.log("comparePass", comparePass);
    
        if (!comparePass) {
          return response.json({
            message: "Email or Password invalid",
            status: false,
          });
        }
    
      
        let data = { _id: user._id };
        let PRIVATE_KEY = "Ayabhabib7455";
        let token = jwt.sign(data, PRIVATE_KEY, { expiresIn: "24h" });
    
        console.log("token", token);
    
        
        return response.json({
          message: "User successfully logged in",
          status: true,
          token,
          userId: user._id.toString(),
        });
      } catch (error) {
        console.log("Error:", error.message);
    
        response.json({
          message: error.message || "Something went wrong",
          status: false,
        });
      }
    
}







export const getRegisteredUser = async (req, res) => {
  try {
    const { userId } = req.body; // Get userId from request body

    if (!userId) {
      return res.status(400).json({
        message: "userId is required",
        status: false,
      });
    }

    const user = await UserModel.findOne({ _id: userId, role: "patient" });

    if (!user) {
      return res.status(404).json({
        message: "Patient not found",
        status: false,
      });
    }

    res.json({
      message: "Patient fetched successfully",
      status: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};


export const userDeleteOwnAccount = async (req, res) => {

  try {
    const { userId } = req.body;

    console.log("Doctor ID from frontend:", userId);

    if (!userId) {
      return res.status(400).json({
        message: "Doctor ID is required",
        status: false,
      });
    }

   
    const deletedDoctor = await UserModel.findOneAndDelete({ userId });

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





export let userUpdateOwnAccount  =async (request , response)=>{
  
  try {
    const { userId, name } = request.body;

    if (!userId) {
      return res.status(400).json({
        message: "User ID is required",
        status: false,
      });
    }

    if (!name) {
      return res.status(400).json({
        message: "New name is required",
        status: false,
      });
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $set: { name } },
      { new: true } 
    );

    if (!updatedUser) {
      return response.status(404).json({
        message: "User not found",
        status: false,
      });
    }

    response.json({
      message: "Name updated successfully",
      status: true,
      data: updatedUser,
    });
  } catch (error) {
  
    response.status(500).json({
      message: error.message || "Something went wrong",
      status: false,
    });
  }

  }













