import { sequelize } from "./db.js";
import UserModel from "../models/User.model.js";
import SongModel from "../models/Song.model.js";
import GenreModel from "../models/Genre.model.js";
import ArtistModel from "../models/Artist.model.js"
import LevelStudyModel from "../models/Level_study.js";
import LocalityModel from "../models/Locality.model.js";
import QuestionModel from "../models/Question.model.js";
import MusicGenreModel from "../models/MusicGenreModel.model.js";
import JobModel from "../models/Job.model.js";

QuestionModel.belongsToMany(UserModel, { through: "users_has_responses" })
UserModel.belongsToMany(QuestionModel, { through: "users_has_responses" })

QuestionModel.belongsTo(ArtistModel, { foreignKey: "idArtist" })
ArtistModel.hasMany(QuestionModel, { foreignKey: "idArtist" })

QuestionModel.belongsTo(SongModel, { foreignKey: "idSong" })
SongModel.hasMany(QuestionModel, { foreignKey: "idSong" })

QuestionModel.belongsTo(MusicGenreModel, { foreignKey: "idMusicGenre" })
MusicGenreModel.hasMany(QuestionModel, { foreignKey: "idMusicGenre" })

QuestionModel.belongsTo(GenreModel, { foreignKey: "idGenre" })
GenreModel.hasMany(QuestionModel, { foreignKey: "idGenre" })

QuestionModel.belongsTo(LocalityModel, { foreignKey: "idLocality" })
LocalityModel.hasMany(QuestionModel, { foreignKey: "idLocality" })

QuestionModel.belongsTo(LevelStudyModel, { foreignKey: "idlevelStudy" })
LevelStudyModel.hasMany(QuestionModel, { foreignKey: "idlevelStudy" })

QuestionModel.belongsTo(JobModel, { foreignKey: "idJob" })
JobModel.hasMany(QuestionModel, { foreignKey: "idJob" })

const musicGenres = [
    { type: "Rock" },
    { type: "Pop" },
    { type: "Hip-hop" },
    { type: "Jazz" },
    { type: "Blues" },
    { type: "Reggae" },
    { type: "Country" },
    { type: "Metal" },
    { type: "Electronic" },
    { type: "Funk" },
    { type: "Salsa" },
    { type: "Tango" },
    { type: "Cumbia" },
    { type: "Reggaetón" },
    { type: "Flamenco" },
    { type: "Indie" },
    { type: "Punk" },
    { type: "Clásica" },
    { type: "Folk" },
    { type: "Rap" },
    { type: "Techno" },
    { type: "Dubstep" },
]

const genres = [
    { type: "Masculino" },
    { type: "Femenino" },
    { type: "Indefinido" }
]

const levels = [
    { levelStudy: "Primaria" },
    { levelStudy: "Secundaria" },
    { levelStudy: "Terciario" },
    { levelStudy: "Universitario" },
    { levelStudy: "Otros" },
]

export async function startDb() {
    // MusicGenreModel.bulkCreate(musicGenres)
    //     .then(() => {
    //         console.log("Generos registrados correctamente!");
    //     })
    //     .catch((err) => {
    //         console.log("Ha ocurrido un error al registrar los generos!");
    //         console.error(err);
    //     })
    // GenreModel.bulkCreate(genres)
    //     .then(() => {
    //         console.log("Generos registrados correctamente");
    //     })
    //     .catch((err) => {
    //         console.log("Ha ocurrido un error al registrar los generos!");
    //         console.error(err);
    //     })
    // LevelStudyModel.bulkCreate(levels)
    try {
        await sequelize.sync({ force: false });
    } catch (error) {
        console.log(error);
    }
}