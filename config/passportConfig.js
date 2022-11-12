const passport = require("passport");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local");

const passportAuth = () => {
  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ email: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, res) => {
          if (err) throw err;
          if (res) {
            done(null, user);
          } else {
            done(null, false);
          }
        });
      });
    })
  );
};

passport.serializeUser( (user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passportAuth