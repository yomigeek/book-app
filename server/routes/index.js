import express from 'express';
import passport from 'passport';
import UserController from '../controller/UserController';
import userSignUpValidate from '../validations/UserAccount';
import bookController from '../controller/bookController';
import verifyAuth from '../middleware/verifyAuth';

const routes = express();

// Sign user up
routes.post('/signup', userSignUpValidate, UserController.userSignUp);
routes.post('/login', UserController.userLogin);
routes.post('/auth', (req, res, next) => {
  // passport.authenticate('local', { session: false }, (err, user) => {
  //   if (err) return next(err);
  //   if (!user) return res.send('evil login');
  //   return req.login(user, { session: false }, (error) => {
  //     if (error) return next(error);
  //     return res.send('you are logged here');
  //   // console.log('you are logged here');
  //   });
  // })(req, res, next);
  passport.authenticate('local', { session: false }, (err, user) => {
    if (err) return next(err);
    if (!user) return res.status(401).send({ message: 'user does mot exist' });
    return req.login(user, { session: false }, (error) => {
      if (error) return next(error);
      // return res.send('you are logged here');
      // console.log('you are logged here');
      return next();
    });
  })(req, res, next);
}, UserController.userLogin);
routes.get('/users/books/:bookId', passport.authenticate('jwt', { session: false }), bookController.updateBook);
routes.put('/users/books/:bookId', verifyAuth, bookController.updateBook);
routes.get('/twitter', passport.authenticate('twitter', { session: false }));
routes.get('/twitter/callback', passport.authenticate('twitter', { session: false }), (req, res) => {
  res.send(req.user);
});
export default routes;
