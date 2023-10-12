import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import helmet from 'helmet';
import environments from './src/environments/environments.js';
import { startDb } from './src/config/relations.js';
import userRouter from './src/routes/user.routes.js';

const app = express();

//Middleware
app.use(morgan('dev'));
app.use(helmet({
    contentSecurityPolicy: false
}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/user", userRouter)

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

