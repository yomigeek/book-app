import express from 'express';
import UserController from '../controller/UserController';
import userSignUpValidate from '../validations/UserAccount';

const routes = express();

// Sign user up
<<<<<<< HEAD
routes.post('/signup', userSignUpValidate, UserController.userSignUp);
=======
routes.post('/signup', UserController.userSignUp);
routes.post('/login', UserController.userLogin);
>>>>>>> ft(user-login): implement login

export default routes;
