import Appointment from "../models/AppointmentSchema.js";




// export  let AppointmentControllers =  async (request , response)=>{

//     try {

        
//         const userObj = {
//             ...request.body,
            
//         };




//         await Appointment.create(userObj)

//         response.json({
//             message: "user sucessfully registered!",
//             status: true
//         })


//         console.log("Email", request.body);



//     } catch (error) {
//         response.json({
//             message: error.message || "Something want wrong",
//             status: false
//         })

//     }



// }

export let AppointmentControllers = async (request, response) => {
  try {
      const { doctorId, appointmentDate, timeSlot } = request.body;

      // Check if the doctor already has an appointment at the same date and time
      const existingAppointment = await Appointment.findOne({
          doctorId,
          appointmentDate,
          timeSlot,
      });

      if (existingAppointment) {
          return response.json({
              message: "This time slot is already booked for this doctor.",
              status: false,
          });
      }

      // If no conflict, create the appointment
      const userObj = { ...request.body };
      await Appointment.create(userObj);

      response.json({
          message: "Appointment successfully booked!",
          status: true,
      });

      console.log("Appointment data:", request.body);
  } catch (error) {
      response.json({
          message: error.message || "Something went wrong",
          status: false,
      });
  }
};


export let getAppointmentControllers = async (req, res) => {
    try {
      const { userId } = req.body; 
  
      console.log("User ID from frontend:", userId);
  
      const incomes = await Appointment.find({ userId });
  
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