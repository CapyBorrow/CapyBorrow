import express from "express";

var petfinder = require('pet-finder-api')('VqZLSPakyBxQLZZgwUZ1W0WRB6EPXYlt1EoMqCneAYUxQxGXTZ','FhUD4JVrS9Wxyt1ICWKBojU2iqu4wilBRsWz6JBY')

const petFinderRoutes= express.Router();
petFinderRoutes.get('/search',(req,res)=>{
    res.send(petfinder.findPet())
})

export default petFinderRoutes