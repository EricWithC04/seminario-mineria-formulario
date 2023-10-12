import { getAllMusicGenres, createMusicGenre } from "../models/MusicGenreModel.model.js"

export const ctrlGetAllMusicGenres = async (req, res) => {
    try {
        const allMusicGenres = await getAllMusicGenres()

        if (!allMusicGenres || allMusicGenres.length === 0) {
            res.status(404).send({
                status: 404,
                message: 'No se han encontrado Generos Musicales!'
            })
        }

        res.status(200).send(allMusicGenres)
    } catch (err) {
        console.error(err);
    }
}

export const ctrlCreateMusicGenre = async (req, res) => {
    try {
        const newMusicGenre = await createMusicGenre(req.body)

        if (!newMusicGenre) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido crear el Genero!'
            })
        }

        res.status(201).send({ message: "Genero creado correctamente!", newMusicGenre })
    } catch (err) {
        console.error(err);
    }
}