import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'

const JobModel = sequelize.define('job', {
    description: {
        type: DataTypes.ENUM("student", "worker", "nothing"),
        allowNull: false
    }
})

export const getAllJobs = async () => {
    const allJobs = await JobModel.findAll()
    return allJobs
}

export const createJob = async (data) => {
    const newJob = await JobModel.create(data)
    return newJob
}

export default JobModel