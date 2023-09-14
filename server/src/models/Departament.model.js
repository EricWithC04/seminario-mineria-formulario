import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const DepartamentModel = sequelize.define("departament", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

export default DepartamentModel