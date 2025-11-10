import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    
  },
  createdAt: {
    type: Date,
  },
  userId: {
    type: String,
    
  },
});

const UsersingUp = mongoose.model("UsersingUp", userSchema);

export default UsersingUp;
