import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SettingsIcon from '@mui/icons-material/Settings';
import './MobileBottomNav.css';


const MobileBottomNav = () => {
    return (
        <div className="bottom-nav-container">
            <a href="/bookmarks" className="bottom-nav-link"><BookmarkIcon className="bottom-nav-icon" /></a>
            <a href="/lookup" className="bottom-nav-link"><SearchIcon className="bottom-nav-icon" /></a>
            <a href="/settings" className="bottom-nav-link"><SettingsIcon className="bottom-nav-icon" /></a>
        </div>
    )
}

export default MobileBottomNav
