const express = require("express");
const axios = require('axios').default
const petFinderRoutes = express.Router();
petFinderRoutes.get('/search',(req, res) => {
    var arr=[]
    axios.get(`https://www.petfinder.com/api/v2/animals?type=${petType}&page=${pageNum}`, 
         {
            headers : {Authorization:`Bearer ${petFinderToken}`}
         }).then(
             function (response)
            {
            // handle success
            for(var key in response.data.animals)
            {
              arr.push(response.data.animals[key])
            }
            res.send(arr)
            })
})
