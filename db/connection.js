import mongoose from "mongoose";
import chalk from "chalk";;
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.MONGODB_URI)

export default mongoose.connection;