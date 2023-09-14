import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const UserModel = sequelize.define("user", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
})

export default UserModel