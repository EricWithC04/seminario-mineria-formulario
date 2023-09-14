import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const GenreModel = sequelize.define("genre", {
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

export default GenreModel