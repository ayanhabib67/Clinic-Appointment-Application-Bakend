import express from "express"
import { getRegisteredUser, userDeleteOwnAccount, UserLoginController, UserSignupController, userUpdateOwnAccount, } from "../controllers/authControllers.js";



const route = express.Router();


route.post("/signup", UserSignupController);

route.post("/login", UserLoginController);

route.post("/getRegisteredUsers", getRegisteredUser);
route.post("/deleteAccount", userDeleteOwnAccount);
route.post("/UserUpdateProfile", userUpdateOwnAccount );











export default route;