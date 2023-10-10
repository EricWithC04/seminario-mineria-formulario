import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'

const MusicGenreModel = sequelize.define('music_genre', {
    id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default MusicGenreModel