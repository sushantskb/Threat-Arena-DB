import { config } from "dotenv";
import { connectDB } from "./libs/dbConnect.js";
config({
    path: "./.env.local",
});
const uri = process.env.MONGO_URI || "";
connectDB(uri);
import User from "./models/user.model.js";
import Otp from "./models/otp.model.js";
export { connectDB, User, Otp };
