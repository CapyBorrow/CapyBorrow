import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <AppBar positon="static">
                <Toolbar>NavBar</Toolbar>
            </AppBar>
        );
    }
};

export default NavBar;