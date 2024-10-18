import db from "./db/connection.js" // imagine let db = mongoose.connection
import express from "express"
import logger from "morgan"
import chalk from "chalk"
import dotenv  from "dotenv"
import cors from "cors"
dotenv.config()

//routes go here
import petRouter from "./routes/pets.js"

const app = express()
const PORT = process.env.PORT || 3000;

// Adding CORS middleware here. DONE
app.use(express.json())
app.use(logger("dev"))
app.use(cors())

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