import { getAllQuestions, createQuestion } from "../models/Question.model.js"

export const ctrlGetAllQuestions = async (req, res) => {
    try {
        const allQuestions = await getAllQuestions()

        if (!allQuestions || allQuestions.length === 0) {
            res.status(404).send({
                status: 404,
                message: 'No se han encontrado Preguntas!'
            })
        }

        res.status(200).send(allQuestions)
    } catch (err) {
        console.error(err);
    }
}

export const ctrlCreateQuestion = async (req, res) => {
    try {
        const newQuestion = await createQuestion(req.body)

        if (!newQuestion) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido registrar la Pregunta!'
            })
        }

        res.status(201).send({ message: "Pregunta registrada correctamente!", newQuestion })
    } catch (err) {
        console.error(err);
    }
}