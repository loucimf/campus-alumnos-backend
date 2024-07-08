import mongoose, { Model, mongo } from "mongoose";


const AlumnoSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "No puede existir un alumno sin nombre"]
        },
        lastName: {
            type: String,
            required: [true, "No puede existir un alumno sin Apellido"]
        },
        password: {
            type: String,
            required: [true, "No puede existir una cuenta sin contrasena"]
        },
    }
)

const Alumno = mongoose.model("Alumno", AlumnoSchema)

export {Alumno}

const TestSchema = new mongoose.Schema({
    hello: {
        type: String,
        required: [ true ]
    }
});


const Test = mongoose.model('Test', TestSchema, 'test');

export { Test }

