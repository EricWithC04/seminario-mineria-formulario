import { sequelize } from "./db.js";
import UserModel from "../models/User.model.js";
import SongModel from "../models/Song.model.js";
import GenreModel from "../models/Genre.model.js";

UserModel.belongsTo(GenreModel, {
    foreignKey: "idGenre"
});
GenreModel.hasMany(UserModel, {
    foreignKey: "idGenre"
});

export async function startDb() {
    try {
        await sequelize.sync({ force: true });
    } catch (error) {
        console.log(error);
    }
}