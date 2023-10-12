import { getAllJobs, createJob } from "../models/Job.model.js"

export const ctrlGetAllJobs = async (req, res) => {
    try {
        const allJobs = await getAllJobs()

        if (!allJobs || allJobs.length === 0) {
            res.status(404).send({
                status: 404,
                message: 'No se han encontrado descripciones de trabajos!'
            })
        }

        res.status(200).send(allJobs)
    } catch (err) {
        console.error(err);
    }
}

export const ctrlCreateJob = async (req, res) => {
    try {
        const newJob = await createJob(req.body)

        if (!newJob) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido registrar el Trabajo!'
            })
        }

        res.status(201).send({ message: "Trabajo creado correctamente!", newJob })
    } catch (err) {
        console.error(err);
    }
}