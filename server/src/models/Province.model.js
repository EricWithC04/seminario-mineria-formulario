import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const ProvinceModel = sequelize.define("province", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

export default ProvinceModel