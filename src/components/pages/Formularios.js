import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TopBar from './TopBar';

const Formularios = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="menuf">
      <TopBar />
      <div className="content" style={{ display: 'flex', marginTop: '16%', alignItems: 'center', justifyContent: 'center' }}>
        <Grid container spacing={2} style={{ maxWidth: '1500px' }}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Button component={Link} to="/forms/NB136" variant="contained" color="primary" size="large" fullWidth style={{ fontSize: '120%', fontWeight: 'bold' }}>
              FORM NB-136
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Button component={Link} to="/forms/NB4" variant="contained" color="primary" size="large" fullWidth style={{ fontSize: '120%', fontWeight: 'bold' }}>
              FORM NB-4
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Button component={Link} to="/forms/NB5" variant="contained" color="primary" size="large" fullWidth style={{ fontSize: '120%', fontWeight: 'bold' }}>
              FORM NB-5
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Button component={Link} to="/forms/NB6" variant="contained" color="primary" size="large" fullWidth style={{ fontSize: '120%', fontWeight: 'bold' }}>
              FORM NB-6
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Button component={Link} to="/forms/NB7" variant="contained" color="primary" size="large" fullWidth style={{ fontSize: '120%', fontWeight: 'bold' }}>
              FORM NB-7
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Button component={Link} to="/forms/NB403" variant="contained" color="primary" size="large" fullWidth style={{ fontSize: '120%', fontWeight: 'bold' }}>
              FORM NB-403
            </Button>
          </Grid>
        </Grid>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '26px'}}>
          <ArrowBackIcon style={{ fontSize: '2.5rem' }} variant="contained" color="primary" onClick={handleGoBack} />
      </div>
    </div>
  );
};

export default Formularios;
