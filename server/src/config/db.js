import Sequelize from 'sequelize';
import environments from '../environments/environments.js';

const {
    PORT,
    NAME,
    HOST,
    USER,
    DIALECT,
    PASSWORD
} = environments.DB

export const sequelize = new Sequelize(NAME, USER, PASSWORD, {
        host: HOST,
        dialect: DIALECT,
        port: PORT
    }
);