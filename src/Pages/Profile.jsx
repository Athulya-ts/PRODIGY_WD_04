
import React from 'react';
import { Container, Box, Avatar, Typography, Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGoogle,faGithubSquare, faCodepen} from '@fortawesome/free-brands-svg-icons';
import './Pages.css';

const Profile = () => {
  return (
    <Container maxWidth="lg" className="dashboard-container">
      <Box className="main-content">
        <Typography variant="h4">My Dashboard</Typography><br/>
        <Divider /><br/>

        <Box className="profile-section">
          <Box className="profile-card">
            <center>
            <Avatar className="profile-avatar" src="images/img_white.jpg" alt="Profile" style = {{width: 170,height : 170}} /><br/>
            <Typography variant="h4">Athulya T S</Typography><br/>
            <Typography variant="body1">+91 8********4</Typography>
            <Typography variant="body1">athulya1906@gmail.com</Typography>
            <Typography variant="body1">727721euit018@skcet.ac.in</Typography><br/>
            </center>
          </Box>

          <Box className="accounts-card">
            <Typography variant="h4">Social accounts</Typography><br/><Divider/><br/>
              <Typography variant="h6"><a style = {{textDecoration:"none"}} href = "https://myaccount.google.com/?SafeSearchOverrideState=false&SafeSearchState=true&GwsOriginUrl=https://www.google.com/search?client%3Dfirefox-b-d%26q%3Dgoogle%2Baccount&SafeSearchBlurState=false&utm_source=ga-ob-search&utm_medium=google-account"><FontAwesomeIcon icon={faGoogle} /> &nbsp;&nbsp;&nbsp;&nbsp;Google</a></Typography><br/>
              <Typography variant="h6"><a style = {{textDecoration:"none"}} href = "https://www.linkedin.com/in/athulya-t-s-132538258/"><FontAwesomeIcon icon={faLinkedin} /> &nbsp;&nbsp;&nbsp;&nbsp;Linked in</a></Typography><br/>
              <Typography variant="h6"><a style = {{textDecoration:"none"}} href = "https://leetcode.com/u/Athulya_T_S/"><FontAwesomeIcon icon={faCodepen} />&nbsp;&nbsp;&nbsp;&nbsp;Leetcode</a></Typography><br/>
              <Typography variant="h6"><a style = {{textDecoration:"none"}} href = "https://github.com/Athulya-ts"><FontAwesomeIcon icon={faGithubSquare} /> &nbsp;&nbsp;&nbsp;&nbsp;Github </a></Typography><br/>
              <Typography variant="h6"><a style = {{textDecoration:"none"}} href = "https://www.hackerrank.com/profile/727721euit018"><FontAwesomeIcon icon={faCodepen} />&nbsp;&nbsp;&nbsp;&nbsp;Hackerrank</a></Typography><br/>
          </Box>
          <Box className="bills-card">
            <Typography variant="h4">Current status</Typography><br/><Divider/><br/>
              <Typography variant="body1" sx = {{color:"red"}}>Not placed</Typography><br/><br/><br/>
              <Typography variant="h4">Ongoing</Typography><br/><Divider/><br/>
              <Typography variant="body1" sx = {{color:"green"}}>Internship in Accenture starting from May 20 to July 19</Typography><br/>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
