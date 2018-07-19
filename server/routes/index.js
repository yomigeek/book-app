import express from 'express';
import UserController from '../controller/UserController';
import userSignUpValidate from '../validations/UserAccount';

const routes = express();

// Sign user up
routes.post('/signup', userSignUpValidate, UserController.userSignUp);

export default routes;
