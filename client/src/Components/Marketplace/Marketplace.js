import { React, useEffect, useState } from 'react';
import PetCards from '../PetCards/PetCards';
import Filter from '../Filter/Filter.js';
import Typography from '@mui/material/Typography';

import './Marketplace.css';
import axios from 'axios';

const Marketplace = () => {
	// const baseURL = 'http://localhost:6868/search?type=dog';
	const [data, setData] = useState([]);
	useEffect(() => {
		fetchPets();
	}, [])
	const fetchPets = () => {
		axios
			.get("http://localhost:6868/pets/search", { withCredentials: true })
			.then((res) => {
				if (res.data) {
					console.log(res.data);
					setData(res.data);
				}
			});
	}
	return (
		<div className="market-container">
			<Typography align='center' variant="h1" className="market-header"> Pet Lookup </Typography>
			<div className="horizontalform">
				<Filter />
			</div>
			<PetCards pets={data} />
		</div>
	);
};

export default Marketplace;
