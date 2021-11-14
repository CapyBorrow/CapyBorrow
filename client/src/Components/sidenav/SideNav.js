import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './SideNav.css';

const SideNav = () => {
    return (
        <div className="sidenav-container">
            <MenuIcon className="icon" />
            <SearchIcon className="icon" />
        </div>
    )
}

export default SideNav;
