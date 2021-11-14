import { React, useEffect, useState, useContext } from 'react';
import './App.css';
import NavBar from './Components/topnav/NavBar';
import SideNav from './Components/sidenav/SideNav';
import Landing from './Components/landing/Landing';
import { myContext } from "./Context";
import PetCards from './Components/PetCards/PetCards.js';
import MobileBottomNav from './Components/MobileBottomNav/MobileBottomNav';
import MobileTopNav from './Components/MobileTopNav/MobileTopNav';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

const App = () => {
	const userObj = useContext(myContext);
	const [width, setWidth] = useState(window.innerWidth);
	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}
	useEffect(() => {
		console.log("user inside app: ", userObj);
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);


	if (width > 768) { //Desktop version
		return (
			(userObj === "no user") ? <Landing /> :
				(<div className="App">
					<NavBar />
					<SideNav />
				</div>)
		);
	}
	return ( //Mobile version
		userObj === "no user" ? <Landing /> :
			(<div className="App">
				<MobileTopNav />
				<MobileBottomNav />
			</div>)
	)
};

export default App;
