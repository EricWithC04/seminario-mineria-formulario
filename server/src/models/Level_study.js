import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const LevelStudyModel = sequelize.define('study_level', {
    levelStudy: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false
});

export const getAllLevelStudies = async () => {
    const allLevelStudies = await LevelStudyModel.findAll()
    return allLevelStudies
}

export const getOneLevelStudy = async (id) => {
    const levelS = await LevelStudyModel.findByPk(id)
    return levelS
}

export const createLevelStudy = async (data) => {
    const newLevelStudy = await LevelStudyModel.create(data)
    return newLevelStudy
}

export default LevelStudyModel