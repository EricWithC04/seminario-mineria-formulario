import { getAllArtists, createArtist } from "../models/Artist.model.js"

export const ctrlGetAllArtists = async (req, res) => {
    try {
        const allArtists = await getAllArtists()

        if (!allArtists || allArtists.length === 0) {
            res.status(404).send({
                status: 404,
                message: 'No se han encontrado Artistas!'
            })
        }

        res.status(200).send(allArtists)
    } catch (err) {
        console.error(err);
    }
}

export const ctrlCreateArtist = async (req, res) => {
    try {
        const newArtist = await createArtist(req.body)

        if (!newArtist) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido crear el Artista!'
            })
        }

        res.status(201).send({ message: "Artista creado correctamente!", newArtist })
    } catch (err) {
        console.error(err);
    }
}