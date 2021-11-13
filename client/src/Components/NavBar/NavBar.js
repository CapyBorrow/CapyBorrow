import {makeStyles,} from '@material-ui/core';
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import './NavBar.css';
import useStyles from './styles.js';

const NavBar = ({}) => {
	const classes = useStyles(); // Adding a classname={classes.<componentName styles in styles.js}
	{
		return (
			<Drawer className={classes.drawer} variant='permanent' anchor='left'>
				<div>
					<ListItemButton component='a' href='#simple-list'>
						<ListItemText primary='Home' />
					</ListItemButton>
                    <ListItemButton component='a' href='#simple-list'>
						<ListItemText primary='Vets' />
					</ListItemButton>
                    <ListItemButton component='a' href='#simple-list'>
						<ListItemText primary='Shelters' />
					</ListItemButton>
				</div>
			</Drawer>
		);
	}
};

export default NavBar;
