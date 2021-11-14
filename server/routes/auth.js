const express = require("express");
const passport = require('passport');

const authRoutes = express.Router();

authRoutes.get('/login', (req, res) => {
    res.send('<a href="/auth/google">Login with Google</a>');
});


authRoutes.get('/logout', (req, res) => {
    console.log("logging out of user: ", req.user);
    req.logout();
    res.redirect("http://localhost:3000");
});
authRoutes.get('/getuser', (req, res) => {
    console.log("Getuser route fired: ", req.user);
    req.user ? res.send(req.user) : res.send('no user');
});

authRoutes.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));


authRoutes.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect("http://localhost:3000");
});


module.exports = authRoutes;

