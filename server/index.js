import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

// Setting up the express app
const app = express();
const port = process.env.PORT || 5000;

// Ensures incoming data are parsed
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Morgan logger
if (app.get('env') === 'production') {
  app.use(logger('combined'));
} else {
  app.use(logger('dev'));
}

// Application Routes
app.use('/api/v1/', routes);

// Welcome entry to the app
app.get('/', (req, res) => res.status(200).json({ message: 'welcome to book api' }));

app.listen(port, () => { console.log('server started at port:', port); });

export default app;
