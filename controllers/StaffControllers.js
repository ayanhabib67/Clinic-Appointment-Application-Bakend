import ClinicStaff from "../models/StaffSchema.js";
import bcrypt from "bcryptjs"
import UserModel from "../models/userSchema.js";
export let ClinicStaffRoutes = async(request , response)=>{

    try {

        let {  email,  password , CNIC } = request.body;


        console.log("real password", password);


        if (!email || !password || !CNIC) {
            return response.json({
                message: "Required fields are missing"
            })

        }


        let user = await UserModel.findOne({ $or: [{ email }, { CNIC }] })
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




export const getStaff = async (req, res) => {
    try {
      const staffMembers = await UserModel.find();
  
      if (!staffMembers.length) {
        return res.status(404).json({
          message: "No cleaning staff found",
          status: false,
        });
      }
  
      res.json({
        message: "All cleaning staff fetched successfully",
        status: true,
        data: staffMembers,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        status: false,
      });
    }
  };