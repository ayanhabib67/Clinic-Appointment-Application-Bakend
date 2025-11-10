import PatientHistory from "../models/PatientHistorySchema.js";




export let patientControllers = async(request , response)=>{

    try {

        
        const userObj = {
            ...request.body,
            
        };




        await PatientHistory.create(userObj)

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