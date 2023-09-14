import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const CountryModel = sequelize.define("country", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

export default CountryModel