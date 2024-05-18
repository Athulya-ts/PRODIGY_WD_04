// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" sx = {{bgcolor:"#ececec",color:"black"}}>
      <Toolbar>
        <Button component={Link} to="/profile" color="inherit"><i className = "fa fa-user-circle-o" style = {{fontSize:36}}></i></Button>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
          Portfolio
        </Typography>
        <Button component={Link} to="/home" color="inherit">Home</Button>
        <Button component={Link} to="/about" color="inherit">About Me</Button>
        <Button component={Link} to="/projects" color="inherit">Projects</Button>
        <Button component={Link} to="/achievements" color="inherit">Achievements</Button>
        {/* <Button component={Link} to="/certif" color="inherit">Certifications</Button> */}
        {/* <Button component={Link} to="/contact" color="inherit">Contact</Button> */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
