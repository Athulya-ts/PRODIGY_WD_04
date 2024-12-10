import React from 'react';
import { Container, Grid, Typography, Box} from '@mui/material';
import { styled } from '@mui/system';

const Root = styled('div')(({ theme }) => ({
  backgroundColor: '#f4f6f8',
  minHeight: '100vh',
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

function Pixels() {
  return (
    <Root>
      <Container>
        <Content container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>3 PIXELS</Typography>
            <Typography variant="body1" paragraph>
              Vr - project to provide gamified learning experience for cognitively disabled children (ongoing)
            </Typography>
            <Typography variant="body1" paragraph>
              My contribution : A Full Stack Web Application - Clinician dashboard to monitor performance and progress levels of the child 
            </Typography>
            <Typography variant="body1" paragraph>
              <div className="ez-recharge-tech-stack">
                <Typography variant = "h5">Tech Stack</Typography>
                <p><b>Front End :</b> React, HTML, CSS, Mui</p>
                <p><b>Back End :</b> Firebase Realtime Database, Firebase Authentication</p>
                <p><b>Integration :</b> Firebase config</p>
              </div>
            </Typography>
            {/* <Button variant="contained" color="primary" href= "http://www.cmscbe.net/cmsmatriculationganapathy.html">View official site&nbsp;&nbsp;&nbsp;<i className = "fa fa-external-link" style = {{fontSize:15}}></i></Button> */}
          </Grid>
          <ImageContainer item xs={12} md={6}>
            <video className="ez-recharge-video" controls>
              <source src="videos/3-pixels.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </ImageContainer>
        </Content>
      </Container>
      <Container>
        <Content container spacing={4}>
          <Box
            className="left"
            sx={{
              flex: 1,
              borderRight: '1px solid #ddd',
              pr: 2,
            }}
          >
            <br/><br/>
            <Typography variant="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Use cases</Typography>
          </Box>
          <Box
            className="right"
            sx={{
              flex: 2,
                pl: 2,
            }}
          >
            <div className="ez-recharge-description">
              <Typography variant = "body1" paragraph>
                <br/>
                <ul>
                  <li>Clinican can view the details of the Patient</li>
                  <li>Clinician can assign tasks to be completed by the child</li>
                  <li>Clinician can view the charts representing the performance of the child</li>
                </ul>
              </Typography>
            </div>
          </Box>
        </Content>
      </Container>
      <br/>
    </Root>
  );
}

export default Pixels;
