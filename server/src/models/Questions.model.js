import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'

const QuestionModel = sequelize.define('question', {
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type_response: {
        type: DataTypes.ENUM("song", "artist", "genre"),
        allowNull: false
    },
})

export default QuestionModel