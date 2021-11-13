const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20");
const User = require('./models/user.js');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: '398514112184-ag8lj08a932i62q8jevm2ggm88t804j5.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db
        User.findOne({ googleId: profile.id }).then((currentUser) => {
            if (currentUser) {
                // already have this user
                console.log('user is: ', currentUser);
                done(null, currentUser);
            } else {
                // if not, create user in our db
                new User({
                    googleId: profile.id,
                    username: profile.displayName,
                    //thumbnail: profile._json.image.url
                }).save().then((newUser) => {
                    console.log('created new user: ', newUser);
                    done(null, newUser);
                });
            }
        });
    })
);