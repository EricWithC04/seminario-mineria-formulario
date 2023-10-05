import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'

const SongModel = sequelize.define('song', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

export default SongModel