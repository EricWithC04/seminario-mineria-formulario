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
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
}, {
    timestamps: false
})

export const findUsersModel = async () => {
    const allUsers = await UserModel.findAll()
    return allUsers
}

export const findOneUsersModel = async (email) => {
    const oneUser = await UserModel.findOne({
        where: {
            email: email
        }
    })
    return oneUser
}

export const createUserModel = async (data) => {
    const newUser = await UserModel.create(data)
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