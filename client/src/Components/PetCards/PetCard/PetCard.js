import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

// Importing styles (basically CSS in JS)
import useStyles from './styles';

const PetCard = () => {
	const classes = useStyles(); // Adding a classname={classes.<componentName styles in styles.js}
	return (
		<Card className={classes.card}>
			<CardMedia className={classes.media} image={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
			<CardContent>
				<Typography variant='h5' gutterBottom>
					Message Test
				</Typography>
			</CardContent>
		</Card>
	);
};

export default PetCard;
