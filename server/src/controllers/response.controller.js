import { getAllResponses, createResponse } from "../models/Response.model.js"
import { createUserModel } from "../models/User.model.js"

export const ctrlGetAllResponses = async (req, res) => {
    try {
        const allResponses = await getAllResponses()

        if (!allResponses || allResponses.length === 0) {
            res.status(404).send({
                status: 404,
                message: 'No se han encontrado Respuestas!'
            })
        }

        res.status(200).send(allResponses)
    } catch (err) {
        console.error(err);
    }
}

export const ctrlCreateResponse = async (req, res) => {
    try {
        const { name, age } = req.body;
        const newUser = await createUserModel(name, age);
        const idUser = newUser.id

        const newResponse = await createResponse(idUser)

        if (!newResponse) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido registrar la Respuesta!'
            })
        }

        res.status(201).send({ message: "Respuesta registrada correctamente!", newResponse })
    } catch (err) {
        console.error(err);
    }
}