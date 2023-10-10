import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'

const JobModel = sequelize.define('job', {
    description: {
        type: DataTypes.ENUM("student", "worker", "nothing"),
        allowNull: false
    }
})

export default JobModel