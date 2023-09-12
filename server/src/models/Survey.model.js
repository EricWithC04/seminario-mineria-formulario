import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const surveyModel = sequelize.define('survey', {
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    listening_frequency: { //diariamente || semanalmente || mensualmente
        type: DataTypes.STRING,
        allowNull: false
    },
    platform_listening: {//sitio web || aplicación móvil
        type: DataTypes.STRING,
        allowNull: false
    },
    musical_genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    artist_favorite: {
        type: DataTypes.STRING,
        allowNull: false
    },
    music_favorite: {
        type: DataTypes.STRING,
        allowNull: false
    },
    discovery_level: {// musica conocida || descubrir nuevas canciones
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    timestamps: true
})

//services
export async function addSurvey(survey) {
    return await surveyModel.create(survey)
}