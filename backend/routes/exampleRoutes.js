import { Router } from "express";
import path from 'path'
import { Alumno } from "../models/Alumno.js";
import { Test } from "../models/Alumno.js"

// import { dataUser } from '../frontend/main.js'

const exampleRouter = Router()

// exampleRouter.get('/', async (request, response) => {
//     try {
//         const alumno = await Alumno.create({
//             name: dataUser[0],
//             lastName: dataUser[1],
//             password: dataUser[2]
//         })
//         response.status(200).send({succesful: true, result: alumno});
//     } catch (error) {
//         response.status(400).send('Something went wrong!');
//     }
// });


exampleRouter.get('/test', async (req, res) => {
    try {
        const data = await Test.find({}); // Get all documents
        console.log(data)
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


export default exampleRouter