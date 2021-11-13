const express = require("express");

const petfinder = require('pet-finder-api')('api_key', 'api_secret');

const petFinderRoutes = express.Router();

petFinderRoutes.get('/search', (req, res) => {
    res.send(petfinder.findPet('dog', (x) => {
        console.log(x);
    }))
})

module.exports = petFinderRoutes;