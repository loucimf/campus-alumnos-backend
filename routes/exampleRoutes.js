import { Router } from "express";
import { Alumno } from "../models/Alumno.js";

const exampleRouter = Router()

exampleRouter.get('/', async (request, response) => {
    try {
        const alumno = await Alumno.create({
            name: 'Facundo'
        })
        response.status(200).send({succesful: true, result: alumno});
    } catch (error) {
        response.status(400).send('Something went wrong!');
    }
});

export default exampleRouter