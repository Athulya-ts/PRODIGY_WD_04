import React from 'react';
import { Container, Box, Avatar, Typography, Divider, Grid, Card} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faCodepen } from '@fortawesome/free-brands-svg-icons';

const Profile = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #f3f4f6, #e0e7ff)',
        minHeight: '100vh',
        padding: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          textAlign="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: 4,
          }}
        >
          My Dashboard
        </Typography>

        <Divider sx={{ marginBottom: 4 }} />

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {/* Profile Card */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: 'white',
                textAlign: 'center',
                height: '100%', // Ensures equal height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 3,
              }}
            >
              <Avatar
                src="images/img_white.jpg"
                alt="Profile"
                sx={{
                  width: 150,
                  height: 150,
                  margin: '0 auto 16px',
                }}
              />
              <Typography variant="h5" gutterBottom>
                Athulya T S
              </Typography>
              <Typography variant="body1" color="text.secondary">
                +91 8*****1444
              </Typography>
              <Typography variant="body1" color="text.secondary">
                athulya1906@gmail.com
              </Typography>
              <Typography variant="body1" color="text.secondary">
                727721euit018@skcet.ac.in
              </Typography>
            </Card>
          </Grid>

          {/* Social Accounts */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                padding: 3,
                backgroundColor: 'white',
                height: '100%', // Ensures equal height
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'center',
              }}
            >
              <Typography variant="h5" gutterBottom>
                Social Accounts
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
              {[
                { name: 'LinkedIn', icon: faLinkedin, link: 'https://www.linkedin.com/in/athulya-t-s-132538258/' },
                { name: 'Leetcode', icon: faCodepen, link: 'https://leetcode.com/u/Athulya_T_S/' },
                { name: 'Github', icon: faGithubSquare, link: 'https://github.com/Athulya-ts' },
                { name: 'Hackerrank', icon: faCodepen, link: 'https://www.hackerrank.com/profile/727721euit018' },
              ].map((account, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    marginBottom: 1.5,
                    color: '#4f46e5',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  <FontAwesomeIcon icon={account.icon} />
                  <a
                    href={account.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {account.name}
                  </a>
                </Typography>
              ))}
            </Card>
          </Grid>

          {/* Status Card */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                padding: 3,
                backgroundColor: 'white',
                height: '100%', // Ensures equal height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5" gutterBottom>
                Current Status
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Placed in:
                <ul>
                  <li>EY</li>
                  <li>Accenture</li>
                  <li>Cognizant</li>
                  <li>TCS</li>
                </ul>
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Internship @ Accenture, Bangalore from May 20, 2024 to July 19, 2024
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ marginTop: 3 }}>
                Upcoming
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
              <Typography variant="body1" color="error">
                Internship @ Amazon, Chennai from Jan 6, 2025 to June 27, 2025
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Profile;
