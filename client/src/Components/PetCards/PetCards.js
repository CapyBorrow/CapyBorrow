import React from 'react';
import {Grid} from '@material-ui/core';
import PetCardV2 from './PetCardV2/PetCardV2.js';
import './PetCards.css';
// Importing styles (basically CSS in JS)
//import useStyles from './styles';

const PetCards = () => {
	//const classes = useStyles(); // Adding a classname={classes.<componentName styles in styles.js}
	return (
		<Grid className="grid-container" container justify='space-around' alignItems='stretch' spacing={1}>
			<PetCardV2 />
			<PetCardV2 />
            <PetCardV2 />
            <PetCardV2 />
            <PetCardV2 />
            <PetCardV2 />
			<PetCardV2 />
            <PetCardV2 />
            <PetCardV2 />
            <PetCardV2 />
            <PetCardV2 />
			<PetCardV2 />
            <PetCardV2 />
            <PetCardV2 />
            <PetCardV2 />
            <PetCardV2 />
			<PetCardV2 />
            <PetCardV2 />
            <PetCardV2 />
            <PetCardV2 />
		</Grid>
	);
};

export default PetCards;
