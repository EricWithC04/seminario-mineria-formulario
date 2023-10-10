import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'

const JobModel = sequelize.define('job', {
    id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.ENUM("student", "worker", "nothing"),
        allowNull: false
    }
})

export default JobModel