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

export const findUsersModel = async () => {
    const allUsers = await UserModel.findAll()
    return allUsers
}

export const createUserModel = async (name, age) => {
    const newUser = await UserModel.create({
        name: name,
        age: age
    })
    return newUser
}

export const updateUserModel = async (data, id) => {
    const updatedUser = await UserModel.update(data, {
        where: {
            id
        }
    })
    return updatedUser
}

export const deleteUserModel = async (id) => {
    const deletedUser = await UserModel.destroy({
        where: {
            id
        }
    })
    return id
}

export default UserModel