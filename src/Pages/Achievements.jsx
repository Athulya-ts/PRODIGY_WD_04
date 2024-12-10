import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, Box } from '@mui/material';
import './Pages.css';

const Achievements = () => {
  const achievements = [
    {
      name: "CODEHER'24",
      img: 'achievements/codehers.png',
      link: 'achievements/codehers.png',
      type: 'image',
    },
    {
      name: 'Hackerrank gold badge in JAVA',
      img: 'achievements/hackerrank -java-gold.png',
      link: 'achievements/hackerrank -java-gold.png',
      type: 'image',
    },
    {
      name: 'III Rank in End semester Nov/Dec 2022',
      img: 'achievements/skcet-rank.jpg',
      link: 'achievements/skcet-rank.jpg',
      type: 'image',
    },
    {
      name: 'Leetcode badge for 100+ days coding in 2024',
      video: 'achievements/leetcode-100-2024.mp4',
      type: 'video',
    },
    {
      name: 'Leetcode 400+ problems milestone',
      img: 'achievements/leetcode-400.png',
      link: 'achievements/leetcode-400.png',
      type: 'image',
    },
    {
      name: 'AI Hackgen in SNS',
      img: 'achievements/sns.jpg',
      link: 'achievements/sns.jpg',
      type: 'image',
    },
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #f3f4f6, #e0e7ff)',
        padding: 4,
        minHeight: '100vh',
      }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        sx={{
          fontWeight: 'bold',
          marginBottom: 4,
          color: '#1e293b',
        }}
      >
        Achievements
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {achievements.map((achievement, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: 275, // Ensures consistent card height
                boxShadow: 3,
                borderRadius: 2,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 },
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {achievement.type === 'image' && (
                <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    image={achievement.img}
                    alt={achievement.name}
                    sx={{ height: 200, objectFit: 'cover' }}
                  />
                </a>
              )}
              {achievement.type === 'video' && (
                <CardMedia
                  component="video"
                  controls
                  src={achievement.video}
                  sx={{ height: 200, objectFit: 'cover' }}
                />
              )}
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  backgroundColor: '#ffffff',
                  padding: 2,
                }}
              >
                <Typography variant="h6" sx={{ color: '#4f46e5', fontWeight: 'bold' }}>
                  {achievement.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Achievements;
