import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'

const ResponseModel = sequelize.define('response', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    }
})

export const getAllResponses = async () => {
    const allResponses = await ResponseModel.findAll()
    return allResponses
}

export const createResponse = async (idUser) => {
    const newResponse = await ResponseModel.create({
        idUser: idUser
    })
    return newResponse
}

export default ResponseModel