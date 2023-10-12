import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'

const QuestionModel = sequelize.define('questions', {
    favourite_songs: {
        type: DataTypes.STRING,
        allowNull: false
    },
    favourite_artists: {
        type: DataTypes.STRING,
        allowNull: false
    },
    favourite_genres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type_response: {
        type: DataTypes.ENUM("song", "artist", "genre", "occupation"),
        allowNull: false
    },
})

export const getAllQuestions = async () => {
    const allQuestions = await QuestionModel.findAll()
    return allQuestions
}

export const createQuestion = async (data) => {
    const newQuestion = await QuestionModel.create(data)
    return newQuestion
}

export default QuestionModel