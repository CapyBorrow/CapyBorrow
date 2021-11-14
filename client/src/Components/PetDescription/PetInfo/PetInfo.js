import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./PetInfo.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(1)" }}
  >
    •
  </Box>
);

const PetInfo = () => {
  return <div>{BasicCard()}</div>;
};

export default PetInfo;

function BasicCard() {
  return (
//     <List sx={style} component="nav" aria-label="mailbox folders">
//   <ListItem button>
//     <ListItemText primary="Inbox" />
//   </ListItem>
//   <Divider />
//   <ListItem button divider>
//     <ListItemText primary="Drafts" />
//   </ListItem>
//   <ListItem button>
//     <ListItemText primary="Trash" />
//   </ListItem>
//   <Divider light />
//   <ListItem button>
//     <ListItemText primary="Spam" />
//   </ListItem>
// </List>










    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div class="container-1">
          <div class="box-1">
            <h3>Box One</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="box-2">
            <h3>Box Two</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </CardContent>

      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
