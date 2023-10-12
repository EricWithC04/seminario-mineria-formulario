import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import helmet from 'helmet';
import environments from './src/environments/environments.js';
import { startDb } from './src/config/relations.js';

const app = express();

//Middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

//Database
import { sequelize } from './src/config/db.js';
sequelize.authenticate()
    .then(() => {
        console.log('database connection')
    })
    .catch(err => console.log(err))


app.listen(environments.PORT, () => {
    console.log('listening on port', environments.PORT);
    startDb();
});

