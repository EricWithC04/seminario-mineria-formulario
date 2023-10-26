import { findOrCreateArtistModel } from "../models/Artist.model.js"
import { getAllQuestions, createQuestion } from "../models/Question.model.js"
import { createUserModel, findOneUsersModel } from "../models/User.model.js"
import { findOrCreateLocalityModel } from "../models/Locality.model.js"
import { findOrCreateSongModel } from "../models/Song.model.js"

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
    const { name, age, email, favouriteArtist, favouriteSong, favouriteGenre, locality, genre, ocupation } = req.body;

    try {
        let newUser = await findOneUsersModel(email)

        if (!newUser) {
            newUser = await createUserModel({
                name,
                age,
                email
            })
        }

        const newArtist = await findOrCreateArtistModel(favouriteArtist)
        const newSong = await findOrCreateSongModel(favouriteSong)
        const newLocality = await findOrCreateLocalityModel(locality)

        const newQuestion = await createQuestion({
            idArtist: newArtist.id,
            idMusicGenre: parseInt(favouriteGenre),
            idSong: newSong.id,
            idGenre: parseInt(genre),
            idLocality: newLocality.id
        })

        if (!newQuestion) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido registrar la Pregunta!'
            })
        }

        newUser.addQuestion(newQuestion)

        res.status(201).send({ message: "Pregunta registrada correctamente!", newQuestion })
    } catch (err) {
        console.error(err);
    }
}