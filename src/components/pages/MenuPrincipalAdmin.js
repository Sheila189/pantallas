import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import TopBar from './TopBar';

const MenuPrincipal = () => {
  return (
    <div>
      <TopBar />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 190px)' }}>
        <Grid container spacing={3} style={{ maxWidth: '1500px' }}>
          <Grid item xs={12} sm={4}>
            <Button component={Link} to="/forms" variant="contained" color="primary" size="large" fullWidth style={{ fontSize: '120%', fontWeight: 'bold' }}>
              Forms
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button component={Link} to="/drafts" variant="contained" color="primary" size="large" fullWidth style={{ fontSize: '120%', fontWeight: 'bold' }}>
              Drafts
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button component={Link} to="/history" variant="contained" color="primary" size="large" fullWidth style={{ fontSize: '120%', fontWeight: 'bold' }}>
              History
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button component={Link} to="/edit_forms" variant="contained" color="primary" size="large" fullWidth style={{ fontSize: '120%', fontWeight: 'bold' }}>
              Edit Forms
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button component={Link} to="/users" variant="contained" color="primary" size="large" fullWidth style={{ fontSize: '120%', fontWeight: 'bold' }}>
              Users
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default MenuPrincipal;
