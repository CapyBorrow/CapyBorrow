import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core';
import './Filter.css';


export default function Filter(props) {
	const [species, setSpecies] = React.useState('');
	const [age, setAge] = React.useState('');
	const [size, setSize] = React.useState('');
	const [gender, setGender] = React.useState('');
	const [URL, setURL] = React.useState('http://localhost:6868/pets/search?');



	const getNewUrl = () => {

		let newUrl = 'http://localhost:6868/pets/search?';
		if (species)
			newUrl += 'type=' + species + '&';
		if (age)
			newUrl += 'age=' + age + '&';
		if (size)
			newUrl += 'size=' + size + '&';
		if (gender)
			newUrl += 'gender=' + gender + '&';
		setURL(newUrl);
		console.log('new url in child', newUrl);
		props.passChildData(newUrl);
	}

	const handleSpeciesChange = (event) => {
		console.log("species change")
		if (event.target.value === "None")
			setSpecies('');
		else
			setSpecies(event.target.value);
		getNewUrl();
	};

	const handleAgeChange = (event) => {
		console.log("age change")
		if (event.target.value === "None")
			setAge('');
		else
			setAge(event.target.value);
		getNewUrl();
	};

	const handleSizeChange = (event) => {
		console.log("size change")
		if (event.target.value === "None")
			setSize('');
		else
			setSize(event.target.value);
		getNewUrl();
	};

	const handleGenderChange = (event) => {
		console.log("gender change")
		if (event.target.value === "None")
			setGender('');
		else
			setGender(event.target.value);
		getNewUrl();
	};

	return (
		<Card className="horizontalform">
			<FormControl sx={{ m: 2, minWidth: 200 }}>
				<InputLabel id='demo-simple-select-helper-label'>Species</InputLabel>
				<Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper' value={species} label='Species' onChange={handleSpeciesChange}>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value={"dog"}>Dog</MenuItem>
					<MenuItem value={"cat"}>Cat</MenuItem>
					<MenuItem value={"barnyard"}>Barnyard</MenuItem>
					<MenuItem value={"horse"}>Horse</MenuItem>
					<MenuItem value={"bird"}>Bird</MenuItem>
					<MenuItem value={"rabbit"}>Rabbit</MenuItem>
					<MenuItem value={"small-furry"}>Small & Furry</MenuItem>
				</Select>
			</FormControl>
			<FormControl sx={{ m: 2, minWidth: 200 }}>
				<InputLabel id='demo-simple-select-helper-label'>Age</InputLabel>
				<Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper' value={age} label='Age' onChange={handleAgeChange}>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value={"baby"}>Baby</MenuItem>
					<MenuItem value={"young"}>Young</MenuItem>
					<MenuItem value={"adult"}>Adult</MenuItem>
					<MenuItem value={"senior"}>Senior</MenuItem>
				</Select>
			</FormControl>
			<FormControl sx={{ m: 2, minWidth: 200 }}>
				<InputLabel id='demo-simple-select-helper-label'>Size</InputLabel>
				<Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper' value={size} label='Size' onChange={handleSizeChange}>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value={"small"}>Small</MenuItem>
					<MenuItem value={"medium"}>Medium</MenuItem>
					<MenuItem value={"large"}>Large</MenuItem>
					<MenuItem value={"xlarge"}>XLarge</MenuItem>
				</Select>
			</FormControl>
			<FormControl sx={{ m: 2, minWidth: 200 }}>
				<InputLabel id='demo-simple-select-helper-label'>Gender</InputLabel>
				<Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper' value={gender} label='Gender' onChange={handleGenderChange}>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value={"male"}>Male</MenuItem>
					<MenuItem value={"female"}>Female</MenuItem>
					<MenuItem value={"unknown"}>Unknown</MenuItem>
				</Select>
			</FormControl>
		</Card>
	);

}
