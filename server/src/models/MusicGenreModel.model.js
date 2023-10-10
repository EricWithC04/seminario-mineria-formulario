import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'

const MusicGenreModel = sequelize.define('music_genre', {
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default MusicGenreModel