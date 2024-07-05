import mongoose, { Model, mongo } from "mongoose";


const AlumnoSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "no puede existir un alumno sin nombre"]
        }
    }
)

const Alumno = mongoose.model("Alumno", AlumnoSchema)

export {Alumno}