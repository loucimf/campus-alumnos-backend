import { Router } from "express";
import path from 'path'
import { Alumno } from "../models/Alumno.js";
// import { dataUser } from '../api-signup/main.js'

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

export default exampleRouter