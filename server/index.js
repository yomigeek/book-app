import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import passport from 'passport';

import routes from './routes';

dotenv.config();

// Setting up the express app
const app = express();
const port = process.env.PORT || 5000;

// Ensures incoming data are parsed
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
require('./config/passport')();
require('./config/strategies/jwt')();
require('./config/strategies/twitter')();
// Morgan logger
if (app.get('env') === 'production') {
  app.use(logger('combined'));
} else {
  app.use(logger('dev'));
}

// Welcome entry to the app
app.get('/', (req, res) => res.status(200).json({ message: 'welcome to book api' }));
// Application Routes
app.use('/api/v1/', routes);
app.all('*', (req, res) => res.status(404).json({ message: 'You are not in the right place' }));
/* eslint-disable  no-console */
app.listen(port, () => { console.log('server started at port:', port); });

export default app;
