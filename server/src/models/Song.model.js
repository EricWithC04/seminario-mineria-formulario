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

export const getAllSongs = async () => {
    const allSongs = await SongModel.findAll()
    return allSongs
}

export const findOrCreateSongModel = async (name) => {
    const [oneSong] = await SongModel.findOrCreate({
        where: {
            name
        },
        defaults: {
            name: name
        }
    })
    return oneSong
}

export const createSong = async (data) => {
    const newSong = await SongModel.create(data)
    return newSong
}

export default SongModel