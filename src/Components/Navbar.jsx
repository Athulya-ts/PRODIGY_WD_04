import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import '../Pages/Pages.css'

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#ececec", color: "black" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: 'none', color: 'inherit', flexGrow: 1, fontWeight: 'bold' }}
        >
          Portfolio
        </Typography>
        {/* Menu for larger screens */}
        <div className="navbar-buttons">
          <Button component={Link} to="/home" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About Me</Button>
          <Button component={Link} to="/projects" color="inherit">Projects</Button>
          <Button component={Link} to="/achievements" color="inherit">Achievements</Button>
        </div>
        {/* Hamburger menu for smaller screens */}
        <IconButton
          className="menu-icon"
          onClick={handleMenuOpen}
          sx={{ display: { xs: 'block', md: 'none' }, fontSize: '24px' }}
        >
          ☰
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/home">Home</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/about">About Me</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/projects">Projects</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/achievements">Achievements</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
