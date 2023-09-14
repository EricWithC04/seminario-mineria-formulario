import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import helmet from 'helmet';
import 'dotenv/config'
import { startDb } from './src/config/relations.js';

const app = express();
const PORT = process.env.PORT || 4000;

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


app.listen(PORT, () => {
    console.log('listening on port', PORT);
    startDb();
});

