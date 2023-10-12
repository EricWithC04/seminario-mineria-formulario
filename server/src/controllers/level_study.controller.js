import { getAllLevelStudies, createLevelStudy } from "../models/Level_study.js"

export const ctrlGetAllLevelStudys = async (req, res) => {
    try {
        const allLevelStudies = await getAllLevelStudies()

        if (!allLevelStudies || allLevelStudies.length === 0) {
            res.status(404).send({
                status: 404,
                message: 'No se han encontrado niveles de estudio!'
            })
        }

        res.status(200).send(allLevelStudies)
    } catch (err) {
        console.error(err);
    }
}

export const ctrlCreateLevelStudy = async (req, res) => {
    try {
        const newLevelStudy = await createLevelStudy(req.body)

        if (!newLevelStudy) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido registrar el nivel de estudio!'
            })
        }

        res.status(201).send({ message: "Nivel de estudio creado correctamente!", newLevelStudy })
    } catch (err) {
        console.error(err);
    }
}