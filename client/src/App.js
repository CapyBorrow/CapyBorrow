import './App.css';
import NavBar from './Components/NavBar/NavBar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import logo from '../src/images/logo2.png';

const App = () => {
	return (
		<div className='App'>
			<AppBar position='static'>
				<Toolbar variant='dense'>
          <img src={logo}/>
					<IconButton edge='start' color='inherit' aria-label='menu' sx={{mr: 2}}>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default App;
