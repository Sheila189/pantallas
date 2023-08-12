import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import '../css/topbar.css';
import { UserContext } from '../../shared/UserContext';

const TopBar = ({ handleLogout }) => {
  const { userData } = useContext(UserContext);

  return (
    <AppBar position="static" className="topbar">
      <Toolbar className="topbar-content">
        <div>
          <h5>{userData.name}</h5>
          {userData.avatar && (
            <img src={userData.avatar} alt="Avatar" style={{ width: '150px', height: '150px' }} />
          )}
        </div>
        <Typography variant="h6" className="menu-title">
          Menu 
        </Typography>
        <div className="right-content">
          <IconButton component={Link} to="/perfil" color="inherit" className="user">
            <AccountCircleIcon />
          </IconButton>
          <Button startIcon={<LogoutIcon />} to="/login" variant="contained" className="logout-button" size="large" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
