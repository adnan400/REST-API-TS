import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import http from 'http';
import compression from 'compression';
import router from './routers';
import morgan from 'morgan';
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(morgan('tiny'));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server is working on port: ${PORT} `));

//1VfMp92biahNtrHY
const MONGO_URL =
  'mongodb+srv://adnan:1VfMp92biahNtrHY@api-ts.rlzkdm9.mongodb.net/?retryWrites=true&w=majority';

mongoose.Promise = Promise;
mongoose
  .connect(MONGO_URL)
  .then(() => console.log('Connected to Database'))
  .catch((error: Error) => console.log(error));

app.use('/', router());
