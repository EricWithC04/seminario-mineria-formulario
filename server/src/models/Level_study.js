import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const levelStudyModel = sequelize.define('study_level', {
    levelStudy: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false
});