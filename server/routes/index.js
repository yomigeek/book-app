import express from 'express';
import UserController from '../controller/UserController';
import userSignUpValidate from '../validations/UserAccount';
import bookController from '../controller/bookController';
import verifyAuth from '../helper/verifyAuth';

const routes = express();

// Sign user up
routes.post('/signup', userSignUpValidate, UserController.userSignUp);
routes.post('/login', UserController.userLogin);
routes.put('/users/books/:bookId', bookController.createBook);
routes.put('/users/books/:bookId', verifyAuth, bookController.createBook);

export default routes;
