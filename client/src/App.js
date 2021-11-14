import {React, useEffect, useState, useContext} from 'react';
import './App.css';
import NavBar from './Components/topnav/NavBar';
import SideNav from './Components/sidenav/SideNav';
import PetCards from './Components/PetCards/PetCards.js';
import {myContext} from './Context';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

const App = () => {
	const userObj = useContext(myContext);
	const [width, setWidth] = useState(window.innerWidth);
	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}
	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	if (width > 768) {
		return (
			<div className='App'>
				<NavBar />
				<SideNav />
			</div>
		);
	}
	return (
		<div>
			<NavBar />
		</div>
	);
};

export default App;
