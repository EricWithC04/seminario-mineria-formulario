import { sequelize } from "./db.js";
import UserModel from "../models/User.model.js";
import SongModel from "../models/Song.model.js";
import GenreModel from "../models/Genre.model.js";

// LocalityModel.belongsTo(DepartamentModel, {
//     foreignKey: "idDepartament"
// });
// DepartamentModel.hasMany(LocalityModel, {
//     foreignKey: "idDepartament"
// });
// DepartamentModel.belongsTo(ProvinceModel, {
//     foreignKey: "idProvince"
// });
// ProvinceModel.hasMany(DepartamentModel, {
//     foreignKey: "idProvince"
// })
// ProvinceModel.belongsTo(CountryModel, {
//     foreignKey: "idCountry"
// })
// CountryModel.hasMany(ProvinceModel, {
//     foreignKey: "idCountry"
// })



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