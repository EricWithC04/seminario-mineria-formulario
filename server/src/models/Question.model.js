import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'
import SongModel from './Song.model.js'
import ArtistModel from './Artist.model.js'
import MusicGenreModel from './MusicGenreModel.model.js'

const QuestionModel = sequelize.define('questions', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        allowNull: true
    }
})

export const getAllQuestions = async () => {
    const allQuestions = await QuestionModel.findAll({
        include: [SongModel, ArtistModel, MusicGenreModel
        ]
    })
    return allQuestions
}

export const createQuestion = async (data) => {
    const newQuestion = await QuestionModel.create(data)
    return newQuestion
}

export default QuestionModel