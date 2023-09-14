import { surveyModel } from "../models/Survey.model.js";
import { levelStudyModel } from "../models/Level_study.js";
import { sequelize } from "./db.js"; 
import LocalityModel from "../models/Locality.model.js";
import DepartamentModel from "../models/Departament.model.js";
import ProvinceModel from "../models/Province.model.js";
import CountryModel from "../models/Country.model.js";

LocalityModel.belongsTo(DepartamentModel, {
    foreignKey: "idDepartament"
});
DepartamentModel.hasMany(LocalityModel, {
    foreignKey: "idDepartament"
});
DepartamentModel.belongsTo(ProvinceModel, {
    foreignKey: "idProvince"
});
ProvinceModel.hasMany(DepartamentModel, {
    foreignKey: "idProvince"
})
ProvinceModel.belongsTo(CountryModel, {
    foreignKey: "idCountry"
})
CountryModel.hasMany(ProvinceModel, {
    foreignKey: "idCountry"
})

export async function startDb() {
    try {
        await sequelize.sync({ force: false });
    } catch (error) {
        console.log(error);
    }
}