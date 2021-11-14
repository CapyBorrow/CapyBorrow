import React from 'react';
import './NavBar.css';
import logo from '../../images/capyborrow_logo_v1.jpg';

const NavBar = () => {
	return (
		<div className="nav-container">
			<div className="left-contents">
				<img className="logo-img" src={logo} />
				<span className="logo-header"><span className="logo-letter">C</span>apy<span className="logo-letter">C</span>are</span>
			</div>
			<div className="right-contents">
				<span className='logout-btn'><a className="logout-link" href="http://localhost:6868/auth/logout">Logout</a></span>
				<img src='#' />
			</div>
		</div>
	)
};


export default NavBar;


