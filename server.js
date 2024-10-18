import db from "./db/connection.js" // imagine let db = mongoose.connection
import express from "express"
import logger from "morgan"
import morgan from "morgan"
import chalk from "chalk"
import dotenv  from "dotenv"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000;

// TBU: Adding CORS and Express.json middleware here.
app.use(logger("dev"))

// TBU: Add route
db.on("connected", () => {
    console.clear()
    console.log(chalk.bgBlue.white.bold("Connected to MONGODB!"))

    app.listen(PORT, () => {
        console.log(`Express server runing on port: ${PORT}`)

    })
})