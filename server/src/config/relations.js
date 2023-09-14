import { surveyModel } from "../models/Survey.model.js";
import { levelStudyModel } from "../models/Level_study.js";
import { sequelize } from "./db.js";




export async function startDb() {
    try {
        await sequelize.sync({ force: false });
    } catch (error) {
        console.log(error);
    }
}