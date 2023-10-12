import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'

const ArtistModel = sequelize.define('artist', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export const getAllArtists = async () => {
    const allArtists = await ArtistModel.findAll()
    return allArtists
}

export const createArtist = async (data) => {
    const newArtist = await ArtistModel.create(data)
    return newArtist
}

export default ArtistModel