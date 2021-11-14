import React from 'react';
import PetCards from '../PetCards/PetCards';
import Filter from '../Filter/Filter.js';
import Typography from '@mui/material/Typography';

import './Marketplace.css';

const Marketplace = () => {
	return (
		<div className="market-container">
            <Typography align='center' variant="h1" className="market-header"> Pet Lookup </Typography>
			<div className="horizontalform">
                <Filter />
            </div>
			<PetCards />
		</div>
	);
};

export default Marketplace;
