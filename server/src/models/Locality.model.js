import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const LocalityModel = sequelize.define("locality", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

export const getAllLocalitys = async () => {
    const allLocalitys = await LocalityModel.findAll()
    return allLocalitys
}

export const createLocality = async (data) => {
    const newLocality = await LocalityModel.create(data)
    return newLocality
}

export default LocalityModel