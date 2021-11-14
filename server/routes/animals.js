const express = require("express");
const axios = require('axios').default
const petFinderRoutes = express.Router();

petFinderRoutes.get('/search', (req, res) => {
  // let petName = req.query.petName
  // let pageNum = req.query.pageNum
  axios.post('https://api.petfinder.com/v2/oauth2/token', {
    grant_type: "client_credentials",
    client_id: "VqZLSPakyBxQLZZgwUZ1W0WRB6EPXYlt1EoMqCneAYUxQxGXTZ",
    client_secret: "FhUD4JVrS9Wxyt1ICWKBojU2iqu4wilBRsWz6JBY",
  })
    .then(function (response) {
      var arr = []
      petFinderToken = response.data["access_token"];
      axios.get(`https://www.petfinder.com/api/v2/animals?type=dog&page=1`,
        {
          headers: { Authorization: `Bearer ${petFinderToken}` }
        }).then(
          function (response) {
            // handle success
            for (var key in response.data.animals) {
              arr.push(response.data.animals[key])
            }
            console.log(arr)
            res.send(arr)
          })
    })
    .catch(function (error) {
      res.send(error)
    });
})

module.exports = petFinderRoutes;
