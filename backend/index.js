import express from 'express'
import mongoose, { mongo } from 'mongoose'
import morgan from 'morgan'
import dotenv from 'dotenv'
import exampleRouter from './routes/exampleRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL

app.use(morgan("tiny"))

app.use(express.static('api-signup'))


try {
    await mongoose.connect(MONGO_URL)
    console.log("[MongoDB] Connection succesful")
} catch (error) {
    console.error("[MongoDB] Connection UNSUCCESFUL!!!!")
}


app.listen(PORT, () => {
  console.log(`CONNECTION SUCCESFUL, LISTENING ON ${PORT}`)
})

app.use('/api', exampleRouter) // Use the router as middleware


app.use((request, response) => {
    response.status(404).send("No se ha encontrado ninguna ruta");
});
