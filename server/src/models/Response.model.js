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

export default ResponseModel