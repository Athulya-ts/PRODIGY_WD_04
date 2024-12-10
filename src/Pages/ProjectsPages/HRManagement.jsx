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

function HRManagement() {
  return (
    <Root>
      <Container>
        <Content container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>HR Management Portal</Typography>
            <Typography variant="body1" paragraph>
              A full stack web application to manage the details and associated events,projects,salary of each employee
            </Typography>
            <Typography variant="body1" paragraph>
              <div className="ez-recharge-tech-stack" style = {{lineHeight:1.5}}>
                <Typography variant = "h5">Tech Stack</Typography>
                <p><b>Front End :</b> React, HTML, CSS, Mui</p>
                <p><b>Back End :</b> mySQL, JWT, Swagger, Spring Boot</p>
                <p><b>Integration :</b> Axios</p>
                <p><b>Database Tables :</b> _users, salary_details, personal_performance, employee_performance, courses, profile_details, attendance and so on</p>
              </div>
            </Typography>
            {/* <Button variant="contained" color="primary" href= "http://www.cmscbe.net/cmsmatriculationganapathy.html">View official site&nbsp;&nbsp;&nbsp;<i className = "fa fa-external-link" style = {{fontSize:15}}></i></Button> */}
          </Grid>
          <ImageContainer item xs={12} md={6}>
            {/* <img src = "videos/hr.png" width = {500} alt = "hr-app" style = {{marginTop:40}}/> */}
            <video className="ez-recharge-video" controls>
              <source src="videos/hrm.mp4" type="video/mp4" />
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
            <br/><br/><br/><br/>
            <Typography variant="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User side</Typography>
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
                <ul>
                  <li>Users can view their salary details</li>
                  <li>Users can see their performance based on metrics like project completion</li>
                  <li>Users can view their attendance record</li>
                  <li>Users can view events and directory</li>
                  <li>Users can view their profile and update if needed</li>
                  <li>Users can view different courses available for training</li>
                  <li>Users can view different teams to collaborate with</li>
                  <li>Users can provide any feedback</li>
                </ul>
              </Typography>
            </div>
          </Box>
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
            <Typography variant="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Admin side</Typography>
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
                <ul>
                  <li>Admin can view events and directory</li>
                  <li>Admin can view performance of employees</li>
                  <li>Admin can view payroll of specific users or the entire user base.</li>
                  <li>Admin can view different teams available for collaboration</li>
                  <li>Admin can create accounts for employees and add their profile</li>
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

export default HRManagement;
