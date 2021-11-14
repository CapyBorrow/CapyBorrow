import { React, useEffect, useState, useRef } from 'react';
import PetCards from '../PetCards/PetCards';
import Filter from '../Filter/Filter.js';
import Typography from '@mui/material/Typography';
import './Marketplace.css';
import axios from 'axios';


const Marketplace = () => {
	const [data, setData] = useState([]);
	const [childData, setChildData] = useState("http://localhost:6868/pets/search");
	useEffect(() => {
		fetchPets();
	}, [childData])
	const fetchPets = () => {
		console.log('new url in Parent: ', childData);
		axios
			.get(childData, { withCredentials: true })
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
				<Filter passChildData={setChildData} />
			</div>
			<PetCards pets={data} className="cards" />
		</div>
	);
};

export default Marketplace;
