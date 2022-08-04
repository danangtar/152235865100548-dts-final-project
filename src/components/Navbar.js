import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  let navigate = useNavigate();
  const [user] = useAuthState(auth);
  console.log(user);
  
  let availPages;
  if(user) {
    availPages = [
      {url: '/', name: 'Home'}
    ];
  }
  else {
    availPages = [
      {url: '/', name: 'Home'},
      {url: '/register', name: 'Register'},
      {url: '/login', name: 'Login'}
    ];
  }

  const pages = availPages;
  const settings = ['Profile', 'Account', 'Logout'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
      setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
      setAnchorElUser(null);
  };

  const logoutFirebaseAccount = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
        console.log(error.message);
    }
  }

  return (

    <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Avatar onClick={() => {navigate("/")}} alt="Remy Sharp" src="/logo.png" variant="square" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page, key) => (
              <MenuItem key={key} onClick={() => {
                handleCloseNavMenu();
                navigate(page.url)
              }}>
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Avatar onClick={() => {navigate("/")}} alt="Remy Sharp" src="/logo.png" variant="square" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}/>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page, key) => (
            <Button
              key={key}
              onClick={() => {
                handleCloseNavMenu();
                navigate(page.url)
              }}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page.name}
            </Button>
          ))}
        </Box>
        
        {user &&
        <Box sx={{ flexGrow: 0 }}>
          <Typography>{user.email}</Typography>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" variant="square" src="ProfilePicture.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={() => {
                handleCloseUserMenu();
                if(setting === 'Logout')
                  logoutFirebaseAccount();
              }}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        }
        
      </Toolbar>
    </Container>
  </AppBar>
  );
}

export default Navbar;