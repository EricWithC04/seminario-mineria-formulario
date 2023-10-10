import { sequelize } from "./db.js";
import UserModel from "../models/User.model.js";
import SongModel from "../models/Song.model.js";
import GenreModel from "../models/Genre.model.js";
import ArtistModel from "../models/Artist.model.js"
import { levelStudyModel } from "../models/Level_study.js";
import { sequelize } from "./db.js";
import LocalityModel from "../models/Locality.model.js";
import QuestionModel from "../models/Questions.model.js";
import ResponseModel from "../models/Response.model.js";
import MusicGenreModel from "../models/MusicGenreModel.model.js";
import JobModel from "../models/Job.model.js";

UserModel.belongsTo(ResponseModel, { foreignKey: "idResponse" });
ResponseModel.hasMany(UserModel, { foreignKey: "idResponse" });

ResponseModel.belongsToMany(QuestionModel, { through: "responses_has_questions" })
QuestionModel.belongsToMany(ResponseModel, { through: "responses_has_questions" })

ResponseModel.belongsTo(ArtistModel, { foreignKey: "idArtist" })
ArtistModel.hasMany(ResponseModel, { foreignKey: "idArtist" })

ResponseModel.belongsTo(SongModel, { foreignKey: "idSong" })
SongModel.hasMany(ResponseModel, { foreignKey: "idSong" })

ResponseModel.belongsTo(MusicGenreModel, { foreignKey: "idMusicGenre" })
MusicGenreModel.hasMany(ResponseModel, { foreignKey: "idMusicGenre" })

ResponseModel.belongsTo(GenreModel, { foreignKey: "idGenre" })
GenreModel.hasMany(ResponseModel, { foreignKey: "idGenre" })

ResponseModel.belongsTo(LocalityModel, { foreignKey: "idLocality" })
LocalityModel.hasMany(ResponseModel, { foreignKey: "idLocality" })

ResponseModel.belongsTo(levelStudyModel, { foreignKey: "idlevelStudy" })
levelStudyModel.hasMany(ResponseModel, { foreignKey: "idlevelStudy" })

ResponseModel.belongsTo(JobModel, { foreignKey: "idJob" })
JobModel.hasMany(ResponseModel, { foreignKey: "idJob" })

export async function startDb() {
    try {
        await sequelize.sync({ force: true });
    } catch (error) {
        console.log(error);
    }
}