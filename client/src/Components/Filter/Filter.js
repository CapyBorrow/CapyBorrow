import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core';
import './Filter.css';

function SelectLabelsSpecies() {
	const [species, setSpecies] = React.useState('');

	const handleChange = (event) => {
		setSpecies(event.target.value);
	};
	return (
		<div>
			<FormControl sx={{ m: 2, minWidth: 200 }}>
				<InputLabel id='demo-simple-select-helper-label'>Species</InputLabel>
				<Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper' value={species} label='Species' onChange={handleChange}>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value={"Dog"}>Dog</MenuItem>
					<MenuItem value={"Cat"}>Cat</MenuItem>
					<MenuItem value={"Furry"}>Furry</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}

function SelectLabelsBreed() {
	const [breed, setBreed] = React.useState('');

	const handleChange = (event) => {
		setBreed(event.target.value);
	};
	return (
		<div>
			<FormControl sx={{ m: 2, minWidth: 200 }}>
				<InputLabel id='demo-simple-select-helper-label'>Breed</InputLabel>
				<Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper' value={breed} label='Breed' onChange={handleChange}>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value={"Dog"}>Dog</MenuItem>
					<MenuItem value={"Cat"}>Cat</MenuItem>
					<MenuItem value={"Furry"}>Furry</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}

function SelectLabelsAge() {
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<div>
			<FormControl sx={{ m: 2, minWidth: 200 }}>
				<InputLabel id='demo-simple-select-helper-label'>Age</InputLabel>
				<Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper' value={age} label='Age' onChange={handleChange}>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value={"Dog"}>Dog</MenuItem>
					<MenuItem value={"Cat"}>Cat</MenuItem>
					<MenuItem value={"Furry"}>Furry</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}

function SelectLabelsSize() {
	const [size, setSize] = React.useState('');

	const handleChange = (event) => {
		setSize(event.target.value);
	};
	return (
		<div>
			<FormControl sx={{ m: 2, minWidth: 200 }}>
				<InputLabel id='demo-simple-select-helper-label'>Size</InputLabel>
				<Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper' value={size} label='Size' onChange={handleChange}>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value={"Dog"}>Dog</MenuItem>
					<MenuItem value={"Cat"}>Cat</MenuItem>
					<MenuItem value={"Furry"}>Furry</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}

function SelectLabelsGender() {
	const [gender, setGender] = React.useState('');

	const handleChange = (event) => {
		setGender(event.target.value);
	};
	return (
		<div>
			<FormControl sx={{ m: 2, minWidth: 200 }}>
				<InputLabel id='demo-simple-select-helper-label'>Gender</InputLabel>
				<Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper' value={gender} label='Gender' onChange={handleChange}>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value={"Dog"}>Dog</MenuItem>
					<MenuItem value={"Cat"}>Cat</MenuItem>
					<MenuItem value={"Furry"}>Furry</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}

function SelectLabelsColor() {
	const [color, setColor] = React.useState('');

	const handleChange = (event) => {
		setColor(event.target.value);
	};
	return (
		<div>
			<FormControl sx={{ m: 2, minWidth: 200 }}>
				<InputLabel id='demo-simple-select-helper-label'>Color</InputLabel>
				<Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper' value={color} label='Color' onChange={handleChange}>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value={"Dog"}>Dog</MenuItem>
					<MenuItem value={"Cat"}>Cat</MenuItem>
					<MenuItem value={"Furry"}>Furry</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}

{/*             
            <FormControl sx={{m: 2, minWidth: 200}}>
				<InputLabel id='demo-simple-select-helper-label'>Breed</InputLabel>
				<Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper' value={breed} label='Breed' onChange={handleChange}>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
            <FormControl sx={{m: 2, minWidth: 200}}>
				<InputLabel id='demo-simple-select-helper-label'>Age</InputLabel>
				<Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper' value={age} label='Age' onChange={handleChange}>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
            <FormControl sx={{m: 2, minWidth: 200}}>
				<InputLabel id='demo-simple-select-helper-label'>Size</InputLabel>
				<Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper' value={size} label='Size' onChange={handleChange}>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
            <FormControl sx={{m: 2, minWidth: 200}}>
				<InputLabel id='demo-simple-select-helper-label'>Gender</InputLabel>
				<Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper' value={gender} label='Gender' onChange={handleChange}>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
            <FormControl sx={{m: 2, minWidth: 200}}>
				<InputLabel id='demo-simple-select-helper-label'>Color</InputLabel>
				<Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper' value={color} label='Color' onChange={handleChange}>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl> */}


const Filter = () => {
	return (
		<Card className="horizontalform">
			<SelectLabelsSpecies />
			<SelectLabelsBreed />
			<SelectLabelsAge />
			<SelectLabelsSize />
			<SelectLabelsGender />
			<SelectLabelsColor />
		</Card>
	);
};


export default Filter;
