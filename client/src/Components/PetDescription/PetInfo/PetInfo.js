import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./PetInfo.css";
import "../animals.js";


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(1)" }}
  >
    •
  </Box>
);

const PetInfo = () => {
  return <div>{
        BasicCard()
    }</div>;
};

export default PetInfo;

function BasicCard() {
    var petName =  petFinderRoutes;

  return (

    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div class="name">
          <Typography variant = "h3" color = "text.secondary">
                Name: petFinderRoutes('/search',(req, res))
             
              {/* Animal name here */}
          </Typography>
        </div>
      </CardContent>


      <CardContent>
          <div class = "age">
          <Typography variant = "h3" color = "text.secondary">
                Age
            {/* Breed info here */}
            </Typography>
          </div>
      </CardContent>

        
      <CardContent>
          <div class = "breed">
          <Typography variant = "h3" color = "text.secondary">
                Breed
            {/* Breed info here */}
            </Typography>
          </div>
      </CardContent>

      
      <CardContent>
          <div class = "health">
          <Typography variant = "h3" color = "text.secondary">
                Health
            {/* health history info here */}
            </Typography>
          </div>
      </CardContent>

      
      <CardContent>
          <div class = "Additional Details">
          <Typography variant = "h3" color = "text.secondary">
                Additional Details
            {/* additonal info here */}
            </Typography>
          </div>
      </CardContent>

    </Card>
  );
}
