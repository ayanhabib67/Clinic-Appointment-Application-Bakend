import DoctorSchema from "../models/doctorSchema.js";
import bcrypt from "bcryptjs"
import UserModel from "../models/userSchema.js";





export let doctorControllers = async (request , response)=>{

    try {

        let {  email,  password  , roomNumber} = request.body;


        console.log("real password", password);


        if (!email || !password || !roomNumber) {
            return response.json({
                message: "Required fields are missing"
            })

        }


        let user = await UserModel.findOne({ $or: [{ email }, { roomNumber }] })
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






// export let   getDoctor = async (req, res) => {
//   try {
//     const { userId } = req.body; 

//     console.log("User ID from frontend:", userId);

//     const incomes = await UserModel.find({ userId });

//     res.json({
//       message: "Incomes fetched successfully",
//       status: true,
//       data: incomes,
//     });
//   } catch (error) {
//     res.json({
//       message: error.message,
//       status: false,
//     });
//   }
// }    convert karo all doctor without any nody  







export const getDoctor = async (req, res) => {
  try {
    
    const doctors = await UserModel.find({ role: "doctor" });

    res.json({
      message: "Doctors fetched successfully",
      status: true,
      data: doctors,
    });
  } catch (error) {
    res.json({
      message: error.message,
      status: false,
    });
  }
};




export const getSingleDoctor = async (req, res) => {
  try {
    const { id } = req.body; // receive doctor id from frontend

    if (!id) {
      return res.status(400).json({
        message: "Doctor ID is required",
        status: false,
      });
    }

    const doctor = await UserModel.findOne({ _id: id, role: "doctor" });

    if (!doctor) {
      return res.status(404).json({
        message: "Doctor not found",
        status: false,
      });
    }

    res.json({
      message: "Doctor fetched successfully",
      status: true,
      data: doctor,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};









  export let updateDoctorProfile = async (request, response) => {
    try {
      const {
        userId,
        name,
        specialization,
        timeslots,
        availability,
        roomNumber,
        about,
      } = request.body;
  
      if (!userId) {
        return response.status(400).json({
          message: "User ID is required",
          status: false,
        });
      }
  
      const updatedDoctor = await UserModel.findOneAndUpdate(
        { userId: userId }, 
        {
          $set: {
            name,
            specialization,
            timeslots,
            availability,
            roomNumber,
            about,
          },
        },
        { new: true } 
      );
  
      if (!updatedDoctor) {
        return response.status(404).json({
          message: "Doctor not found with this userId",
          status: false,
        });
      }
  
      response.json({
        message: "Doctor profile updated successfully",
        status: true,
        data: updatedDoctor,
      });
    } catch (error) {
      response.status(500).json({
        message: error.message || "Something went wrong",
        status: false,
      });
    }
  };
  