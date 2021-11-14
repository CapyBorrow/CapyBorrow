import { React, useEffect, useState, useContext } from 'react';
import './App.css';
import NavBar from './Components/topnav/NavBar';
import SideNav from './Components/sidenav/SideNav';
import Landing from './Components/landing/Landing';
import { myContext } from "./Context";
import PetCards from './Components/PetCards/PetCards.js';
import MobileBottomNav from './Components/MobileBottomNav/MobileBottomNav';
import MobileTopNav from './Components/MobileTopNav/MobileTopNav';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Settings from "./Components/Settings/Settings";
// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import {
	BrowserRouter,
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import Marketplace from './Components/Marketplace/Marketplace';


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
					<BrowserRouter>
						<Switch >
							<Route path="/lookup">
								<Marketplace className="/content" />
							</Route>
							<Route path="/settings" component={Settings} />
							<Route path="/bookmarks" component={Bookmarks} />
							
						</Switch>
					</BrowserRouter>
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
