import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import helmet from 'helmet';
import environments from './src/environments/environments.js';
import { startDb } from './src/config/relations.js';
import userRouter from './src/routes/user.routes.js';
import artistRouter from './src/routes/artist.routes.js';
import genreRouter from './src/routes/genre.routes.js';
import jobRouter from './src/routes/job.routes.js';
import levelStudyRouter from './src/routes/level_study.routes.js';
import localityRouter from './src/routes/locality.routes.js';
import musicGenreRouter from './src/routes/music_genre.routes.js';
import questionRouter from './src/routes/question.routes.js';
import responseRouter from './src/routes/response.routes.js';

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
app.use("/api/artist", artistRouter)
app.use("/api/genre", genreRouter)
app.use("/api/job", jobRouter)
app.use("/api/levelStudy", levelStudyRouter)
app.use("/api/locality", localityRouter)
app.use("/api/musicGenre", musicGenreRouter)
app.use("/api/question", questionRouter)
app.use("/api/response", responseRouter)

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

