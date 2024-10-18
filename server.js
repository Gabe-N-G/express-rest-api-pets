import db from "./db/connection.js" // imagine let db = mongoose.connection
import express from "express"
import logger from "morgan"
import chalk from "chalk"
import dotenv  from "dotenv"
dotenv.config()

//routes go here
import petRouter from "./routes/pets.js"

const app = express()
const PORT = process.env.PORT || 3000;

// TODO: Adding CORS middleware here.
app.use(express.json())
app.use(logger("dev"))


// Add router DONE
app.use('/pets', petRouter) //makes all /pets routes just start at /.



//
db.on("connected", () => {
    console.clear()
    console.log(chalk.bgBlue.white.bold("Connected to MONGODB!"))

    app.listen(PORT, () => {
        console.log(`Express server runing on port: ${PORT}`)

    })
})