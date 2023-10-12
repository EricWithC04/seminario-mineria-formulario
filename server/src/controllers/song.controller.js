import { getAllSongs, createSong } from "../models/Song.model.js"

export const ctrlGetAllSongs = async (req, res) => {
    try {
        const allSongs = await getAllSongs()

        if (!allSongs || allSongs.length === 0) {
            res.status(404).send({
                status: 404,
                message: 'No se han encontrado Canciones!'
            })
        }

        res.status(200).send(allSongs)
    } catch (err) {
        console.error(err);
    }
}

export const ctrlCreateSong = async (req, res) => {
    try {
        const newSong = await createSong(req.body)

        if (!newSong) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido registrar la Cancion!'
            })
        }

        res.status(201).send({ message: "Cancion registrada correctamente!", newSong })
    } catch (err) {
        console.error(err);
    }
}