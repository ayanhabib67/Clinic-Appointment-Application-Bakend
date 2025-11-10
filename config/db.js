
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const URI = "mongodb+srv://ayanhabib7455:0987@clinic.idznyit.mongodb.net/?appName=clinic";
    await mongoose.connect(URI);

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
