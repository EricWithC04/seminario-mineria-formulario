import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'

const ArtistModel = sequelize.define('artist', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

export const getAllArtists = async () => {
    const allArtists = await ArtistModel.findAll()
    return allArtists
}

export const findOrCreateArtistModel = async (name) => {
    const [oneArtist] = await ArtistModel.findOrCreate({
        where: {
            name
        },
        defaults: {
            name: name
        }
    })
    return oneArtist
}

export const createArtist = async (data) => {
    const newArtist = await ArtistModel.create(data)
    return newArtist
}

export default ArtistModel