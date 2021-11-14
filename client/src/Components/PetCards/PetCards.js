import React from 'react'
import { Grid } from '@material-ui/core';
import PetCard from './PetCard/PetCard.js';

// Importing styles (basically CSS in JS)
import useStyles from "./styles";

const PetCards = () => {
    const classes = useStyles(); // Adding a classname={classes.<componentName styles in styles.js}
    return (
        <Grid>
            <PetCard />
            <PetCard />
            <PetCard />
        </Grid>
    )
}

export default PetCards
