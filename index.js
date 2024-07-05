import express from 'express'
import dotenv from 'dotenv'
import exampleRouter from './routes/exampleRoutes.js'
dotenv.config()

const app = express()
const port = process.env.PORT

app.use('/example', exampleRouter)

app.get('/123', (request, response) => {
    response.send('Hello World!')
})

app.use((request, response) => {
    response.status(404).send("No se ha encontrado ninguna ruta");
});

app.listen(port, () => {
  console.log(`CONNECTION SUCCESFUL, LISTENING ON ${port}`)
})