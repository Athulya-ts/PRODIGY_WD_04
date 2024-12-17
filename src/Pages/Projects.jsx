import React from 'react';
import './Pages.css';
import { Link } from 'react-router-dom';
import { Grid, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';

const Projects = () => {
  const projects = [
    { name: '3 PIXELS', img: 'images/3-pixels.png', link: '/Pixels' },
    { name: 'EZRecharge', img: 'images/EZRecharge.png', link: '/EZRecharge' },
    { name: 'HR Management Portal', img: 'images/HR-management-portal.png', link: '/HRManagement' },
    { name: 'Tic Tac Toe', img: 'images/tic-tac-toe.png', link: '/TicTacToe' },
    { name: 'Weather App', img: 'images/weather-app.png', link: '/WeatherApp' },
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #f3f4f6, #e0e7ff)',
        padding: 3,
        minHeight: '100vh',
      }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        sx={{
          fontWeight: 'bold',
          marginBottom: 3,
          color: '#1e293b',
        }}
      >
        My Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={5} md={4} key={index}>
            <Link to={project.link} style={{ textDecoration: 'none' }}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)', boxShadow: 6 },
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    borderRadius: '8px 8px 0 0',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={project.img}
                    alt={project.name}
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    textAlign: 'center',
                    backgroundColor: '#ffffff',
                    padding: 1.5,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#4f46e5',
                      fontWeight: 'bold',
                    }}
                  >
                    {project.name}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
