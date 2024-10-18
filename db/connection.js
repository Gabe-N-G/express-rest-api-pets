import mongoose from "mongoose";
import chalk from "chalk";;
import dotenv from "dotenv"
dotenv.config()

mongoose.set("returnOriginal", false);
//mongoose without this, will return the unupdated version.
//before {new = true} in put request

mongoose.connect(process.env.MONGODB_URI)
//can put try/catch here

mongoose.connection.on("disconnected", () => {
    console.log(chalk.yellow.bold("disconnected from MongoDB!"))
})

mongoose.connection.on("error", (err) => {
    console.log(chalk.red.bold(`${err} OH GOD SOMETHING HAS GONE WRONG`))
})


export default mongoose.connection;