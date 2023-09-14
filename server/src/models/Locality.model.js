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

export default LocalityModel