import React from 'react';
import { Container, Grid, Typography} from '@mui/material';
import { styled } from '@mui/system';

const Root = styled('div')(({ theme }) => ({
  backgroundColor: '#f4f6f8',
  minHeight: '91vh',
  paddingTop: theme.spacing(4),
}));

const Content = styled(Grid)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  marginTop: theme.spacing(4),
}));

const ImageContainer = styled(Grid)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(4),
}));

function WeatherApp() {
  return (
    <Root>
      <br/><br/>
      <Container>
        <Content container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>Real Time Weather App</Typography>
            <Typography variant="body1" paragraph>
              A simple front end React application. A Weather App fetching realtime data from OpenWeather.
            </Typography>
            <br/><br/><br/><br/><br/>
            <Typography variant="body1" paragraph>
              <div className="ez-recharge-tech-stack">
                <Typography variant = "h5">Tech Stack</Typography>
                <p><b>Front End :</b> React, HTML, CSS, MUI</p>
              </div>
            </Typography>
            {/* <Button variant="contained" color="primary" href= "http://www.cmscbe.net/cmsmatriculationganapathy.html">View official site&nbsp;&nbsp;&nbsp;<i className = "fa fa-external-link" style = {{fontSize:15}}></i></Button> */}
          </Grid>
          <ImageContainer item xs={12} md={6}>
            <video className="ez-recharge-video" controls>
              <source src="videos/Weather-app.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </ImageContainer>
        </Content>
      </Container>
      <br/>
    </Root>
  );
}

export default WeatherApp;
