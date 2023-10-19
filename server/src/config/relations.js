import { sequelize } from "./db.js";
import UserModel from "../models/User.model.js";
import SongModel from "../models/Song.model.js";
import GenreModel from "../models/Genre.model.js";
import ArtistModel from "../models/Artist.model.js"
import LevelStudyModel from "../models/Level_study.js";
import LocalityModel from "../models/Locality.model.js";
import ResponseModel from "../models/Response.model.js";
import QuestionModel from "../models/Question.model.js";
import MusicGenreModel from "../models/MusicGenreModel.model.js";
import JobModel from "../models/Job.model.js";

ResponseModel.belongsTo(UserModel, { foreignKey: "idUser" });


QuestionModel.belongsToMany(ResponseModel, { through: "responses_has_questions" })
ResponseModel.belongsToMany(QuestionModel, { through: "responses_has_questions" })

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

const genres = [
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


export async function startDb() {
    // MusicGenreModel.bulkCreate(genres)
    // .then(() => {
    //     console.log("Generos registrados correctamente!");
    // })
    // .catch((err) => {
    //     console.log("Ha ocurrido un error al registrar los generos!");
    //     console.error(err);
    // })
    try {
        await sequelize.sync({ force: false });
    } catch (error) {
        console.log(error);
    }
}