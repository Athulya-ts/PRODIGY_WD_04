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

function EZRecharge() {
  return (
    <Root>
      <Container>
        <Content container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>EZRecharge</Typography>
            <Typography variant="body1" paragraph>
              A Mobile Recharge Portal where customer can view plans and addons and make recharges accordingly.
            </Typography>
            <Typography variant="body1" paragraph>
              <div className="ez-recharge-tech-stack">
                <Typography variant = "h5">Tech Stack</Typography>
                <p><b>Front End :</b> React Vite, HTML, CSS, Mui</p>
                <p><b>Back End :</b> PostgreSQL, JWT, Swagger</p>
                <p><b>Integration :</b> Axios</p>
                <p><b>Database Tables :</b> user_detail, customer, recharge, plans, addons</p>
              </div>
            </Typography>
            {/* <Button variant="contained" color="primary" href= "http://www.cmscbe.net/cmsmatriculationganapathy.html">View official site&nbsp;&nbsp;&nbsp;<i className = "fa fa-external-link" style = {{fontSize:15}}></i></Button> */}
          </Grid>
          <ImageContainer item xs={12} md={6}>
            {/* <img src = "images/ez-user.png" width = {500} alt = "recharge-admin-app"/> */}
            <video className="ez-recharge-video" controls>
              <source src="videos/EZRecharge.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </ImageContainer>
          <ImageContainer item xs={12} md={6}>
            {/* <img src = "images/ez-admin.png" width = {500} alt = "recharge-app"/>   */}
            <video className="ez-recharge-video" controls>
              <source src="videos/EZRecharge-Admin.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </ImageContainer>
          <div className='ez-right' style = {{marginTop: 170,marginLeft: 50}}>
            <Typography variant="h6" paragraph>
                Admin side to update, add, view or delete data records
            </Typography>
          </div>
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
                  <li>Users can view and select plans (postpaid / prepaid) for calls and data and proceed with recharge.</li>
                  <li>Users can browse and choose addons/data boosters and complete the recharge process.</li>
                  <li>For assistance, users can easily navigate to the support page.</li>
                  <li>Access to profile and recharge history is provided for user convenience.</li>
                  <li>Users can provide feedback regarding their experience with the application.</li>
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
                  <li>Admins have full control to add, view, update, and delete plans.</li>
                  <li>Addition of add-ons is managed by admins.</li>
                  <li>Admins can access recharge history of specific users or the entire user base.</li>
                  <li>Profile information for admins is accessible.</li>
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

export default EZRecharge;
