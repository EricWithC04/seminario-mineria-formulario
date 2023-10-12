import { getAllGenres, createGenre } from "../models/Genre.model.js"

export const ctrlGetAllGenres = async (req, res) => {
    try {
        const allGenres = await getAllGenres()

        if (!allGenres || allGenres.length === 0) {
            res.status(404).send({
                status: 404,
                message: 'No se han encontrado Generos!'
            })
        }

        res.status(200).send(allGenres)
    } catch (err) {
        console.error(err);
    }
}

export const ctrlCreateGenre = async (req, res) => {
    try {
        const newGenre = await createGenre(req.body)

        if (!newGenre) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido crear el Generos!'
            })
        }

        res.status(201).send({ message: "Genero creado correctamente!", newGenre })
    } catch (err) {
        console.error(err);
    }
}