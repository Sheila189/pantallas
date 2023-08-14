import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import "../css/topbar.css";
import { UserContext } from "../../shared/UserContext";
import { getAuth } from "firebase/auth";

const TopBar = ({ handleLogout }) => {
  const { userData, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const logoutBtn = () => {
    localStorage.removeItem("user");
    const auth = getAuth();
    auth.signOut();
    logout();
    navigate("/");};

  return (
    <AppBar position="static" className="topbar">
      <Toolbar className="topbar-content">
        <div>
          <h2>{userData.name_empresa}</h2>
        </div>
        <Typography variant="h3" className="menu-title">
          <Link to="/menu" className="custom-menu-link">
            Menu
          </Link>
        </Typography>
        <div className="right-content">
          <IconButton component={Link} to="/profile" color="inherit" className="user">
           {userData.logo && (
            <img src={userData.logo} alt="Avatar"  className="avatar mt-0"/>
          )}
          </IconButton>
          <Button startIcon={<LogoutIcon />} to="/login" variant="contained" className="logout-button" size="large" onClick={logoutBtn}>
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
