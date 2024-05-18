import './Pages.css'
import React from 'react';
import { Container, Grid, Button, Typography} from '@mui/material';
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

const ImageContainer = styled(Grid)({
  textAlign: 'center',
});

function About() {
  return (
    <Root>
      <Container>
        <Content container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>Schooling</Typography>
            <Typography variant="body1" paragraph>
              I completed my 10th and 12th in CMS Matriculation Higher Secondary School,Ganapathy with a percentage of 94.8% and 96.1% respectively
            </Typography>
            <Typography variant="body1" paragraph>
              I had chosen Computer Science domain for my 11th and 12th std
            </Typography>
            <Button variant="contained" color="primary" href= "http://www.cmscbe.net/cmsmatriculationganapathy.html">View official site&nbsp;&nbsp;&nbsp;<i className = "fa fa-external-link" style = {{fontSize:15}}></i></Button>
          </Grid>
          <ImageContainer item xs={12} md={6}>
            <img src="https://bit.ly/3WCnvDk" className = "about-img-schl" width = {450} alt="Illustration" />
          </ImageContainer>
        </Content>
      </Container>
      <Container>
        <Content container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>College</Typography>
            <Typography variant="body1" paragraph>
              I am currently pursuing my final year in the department of Information Technology at Sri Krishna College of Engineering and Technology,Coimbatore.
            </Typography>
            <Typography variant="body1" paragraph>
              My current cgpa is 8.31. I currently have a 2 month internship offer at hand from Accenture, the base location being Bangalore. 
            </Typography>
            <Button variant="contained" color="primary" href= "https://skcet.ac.in/">View official site&nbsp;&nbsp;&nbsp;<i className = "fa fa-external-link" style = {{fontSize:15}}></i></Button>
          </Grid>
          <ImageContainer item xs={12} md={6}>
            <img src="https://lh3.googleusercontent.com/p/AF1QipOgLmY7YojiOTPnZFYdZ69Q5YwbIrVxpC0dRvBY=s1360-w1360-h1020" className = "about-img-schl" width = {430} height = {300} alt="Illustration" />
          </ImageContainer>
        </Content>
      </Container>
      <br/>
    </Root>
  );
}

export default About;
