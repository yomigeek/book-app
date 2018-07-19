import express from 'express';
import UserController from '../controller/UserController';

const routes = express();
// Sign user up
routes.post('/signup', UserController.userSignUp);

export default routes;
