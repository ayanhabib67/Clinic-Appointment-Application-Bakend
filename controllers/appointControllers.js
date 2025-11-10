import Appointment from "../models/AppointmentSchema.js";





export let AppointmentControllers = async (request, response) => {
  try {
      const { doctorId, appointmentDate, timeSlot } = request.body;

     
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