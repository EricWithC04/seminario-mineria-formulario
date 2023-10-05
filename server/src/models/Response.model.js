import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'

const ResponseModel = sequelize.define('response', {
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
})

export default ResponseModel