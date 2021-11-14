import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './MobileTopNav.css';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SearchIcon from '@mui/icons-material/Search';
import { SwipeableDrawer } from '@mui/material';
// import IconButton from "@material-ui/core";
// import IconButton from '@mui/icon-material/IconButton';

const MobileTopNav = () => {


    return (
        <div className="mobile-top-container">
            <SwipeableDrawer />
            <span className="black-text"><span className="other-text">C</span>apy<span className="other-text">C</span>are</span>
            {/* <IconButton> */}
            <MenuIcon className="mobile-top-icon" />
            {/* </IconButton> */}
        </div>
    );
}
export default MobileTopNav;
