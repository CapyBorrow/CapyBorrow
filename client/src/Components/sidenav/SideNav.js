import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SettingsIcon from '@mui/icons-material/Settings';
import './SideNav.css';

const SideNav = () => {
    return (
        <div className="sidenav-container">

            <MenuIcon className="hamburger" />
            <a href="/lookup" className="icon-block">
                <span className="icon-caption">Search</span>
                <SearchIcon className="icon" />
            </a>
            <a href="/bookmarks" className="icon-block">
                <span className="icon-caption">Bookmarks</span>
                <BookmarkIcon className="icon" />
            </a>
            <a href="/settings" className="icon-block">
                <span className="icon-caption">Settings</span>
                <SettingsIcon className="icon" />
            </a>
        </div>
    )
}

export default SideNav;
