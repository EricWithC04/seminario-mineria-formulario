import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const GenreModel = sequelize.define("genre", {
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

export const getAllGenres = async () => {
    const allGenres = await GenreModel.findAll()
    return allGenres
}

export const createGenre = async (data) => {
    const newGenre = await GenreModel.create(data)
    return newGenre
}

export default GenreModel