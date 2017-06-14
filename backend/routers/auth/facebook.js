'use strict';

const FACEBOOK_CALLBACK_URL = process.env.FACEBOOK_CALLBACK_URL || 'http://localhost:4200/auth/facebook/callback';

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const jwt = require('jsonwebtoken');

const constanst = require('../../constants');
const userRepository = require('../../db/user-repository');

passport.use(new FacebookStrategy({
    clientID: 669413326582012,
    clientSecret: '0dfe5da74e2f5d120400df8ad269390c',
    callbackURL: FACEBOOK_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {
    const data = {
      accessToken: accessToken,
      refreshToken: refreshToken,
      profile: profile
    };

    userRepository.saveFbUser(data)
      .then(()=>{
        done(null, profile);
      })
      .catch(done);
  }
));

exports.registerFacebookOAuth = function registerFacebookOAuth(app) {
  app.get('/auth/facebook', passport.authenticate('facebook', {scope:['public_profile']}));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      failureRedirect: '/login'
    }),
    function (req, res) {
      const token = jwt.sign(req.user, constanst.secret, {expiresIn: "14d"});

      res.redirect('/logincallback/' + token);
    }
  );
};
