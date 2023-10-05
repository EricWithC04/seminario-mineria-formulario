import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'

const ArtistModel = sequelize.define('artist', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default ArtistModel