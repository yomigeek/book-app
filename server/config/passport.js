import passport from 'passport';
// import localStrategy from 'passport-local';
const LocalStrategy = require('passport-local').Strategy;

module.exports = () => {
  passport.use('local', new LocalStrategy({
    passReqToCallback: true,
  }, (req, username, password, done) => {
    if (username !== 'gooduser') return done(null, false, { message: 'Email does not exits' });
    return done(null, username, { message: 'login successful' });
  }));
};
