import express from 'express'
import mongoose, { mongo } from 'mongoose'
import morgan from 'morgan'
import dotenv from 'dotenv'
import exampleRouter from './routes/exampleRoutes.js'
import path from 'path'

dotenv.config()

const app = express()
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL
const webPath = path.join(import.meta.dirname, 'api-signup', 'index.html')

app.use(morgan("tiny"))

app.use(express.static('api-signup'))

app.use('/example', exampleRouter)

app.get('/123', (request, response) => {
    console.log(webPath)
    response.sendFile(webPath)
})

app.use((request, response) => {
    response.status(404).send("No se ha encontrado ninguna ruta");
});

try {
    await mongoose.connect(MONGO_URL)
    console.log("[MongoDB] Connection succesful")
} catch (error) {
    console.error("[MongoDB] Connection UNSUCCESFUL!!!!")
}


app.listen(PORT, () => {
  console.log(`CONNECTION SUCCESFUL, LISTENING ON ${PORT}`)
})