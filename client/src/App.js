import { React, useEffect, useState, useContext } from 'react';
import './App.css';
import NavBar from './Components/topnav/NavBar';
import SideNav from './Components/sidenav/SideNav';
import Landing from './Components/landing/Landing';
import { myContext } from "./Context";


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
		}
	}, []);


	if (width > 768) { //Desktop version
		return (
			userObj === "no user" ? <Landing /> :
				(<div className="App">
					<NavBar />
					<SideNav />
				</div>)
		);
	}
	return ( //Mobile version
		userObj === "no user" ? <Landing /> :
			(<div className="App">
				<NavBar />
			</div>)
	)
};

export default App;
