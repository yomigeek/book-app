import passport from 'passport';
// import TwitterStrategy from 'passport-twitter';
const TwitterStrategy = require('passport-twitter').Strategy;

module.exports = () => {
  passport.use(new TwitterStrategy({
    consumerKey: process.env.Consumer_Key_twitter,
    consumerSecret: process.env.Consumer_Secret_twitter,
    callbackURL: 'http://127.0.0.1:5000/api/v1/twitter/callback',
    passReqToCallback: true,
  }, function (req, token, tokenSecret, profile, done) {
    if (!profile) return done(null, false);
    const user = {};
    user.twitter = {
      image: profile._json.profile_image_url,
      displayName: profile.displayName,
      id: profile.id,
      token,
    };
    done(null, user);
  }));
};
