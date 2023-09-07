import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 4000;

//Middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});

