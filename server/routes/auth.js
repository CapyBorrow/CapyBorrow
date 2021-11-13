import express from "express";
import passport from 'passport';

const authRoutes = express.Router();

authRoutes.get('/login', (req, res) => {
    res.send('<a href="/auth/google">Login with Google</a>');
});

authRoutes.get('/logout', (req, res) => {
    console.log("logging out of user: ", req.body.user);
    req.logout();
    res.redirect("http://localhost:3000/login");
});

authRoutes.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));


authRoutes.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send("This is the redirect page");
});


export default authRoutes;

