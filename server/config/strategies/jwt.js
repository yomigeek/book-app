import passport from 'passport';
// import localStrategy from 'passport-local';
import passportJWT from 'passport-jwt';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;


module.exports = () => {
  passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromHeader('authorization'),
    secretOrKey: process.env.JWT_SECRET,
    passReqToCallback: true,
  }, (req, payload, done) => {
    if (payload) req.decoded = payload;
    return done(null, payload);
  }));
};
