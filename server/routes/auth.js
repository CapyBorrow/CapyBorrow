import express from "express";
import passport from 'passport';

const authRoutes = express.Router();

authRoutes.get('/login', (req, res) => {
    res.send('login page!')
});

authRoutes.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));


authRoutes.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send("redirected");
});

export default authRoutes;

