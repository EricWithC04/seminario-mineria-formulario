import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'

const MusicGenreModel = sequelize.define('music_genre', {
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

export const getAllMusicGenres = async () => {
    const allMusicGenres = await MusicGenreModel.findAll()
    return allMusicGenres
}

export const findOneMusicGenreModel = async (id) => {
    const oneMusicGenre = await MusicGenreModel.findOne({
        where: {
            id
        }
    })
    return oneMusicGenre
}

export const createMusicGenre = async (data) => {
    const newMusicGenre = await MusicGenreModel.create(data)
    return newMusicGenre
}

export default MusicGenreModel