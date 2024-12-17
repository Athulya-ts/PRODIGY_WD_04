import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const Root = styled("div")(({ theme }) => ({
  backgroundColor: "#f4f6f8",
  minHeight: "100vh",
  paddingTop: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(2),
  },
}));

const Content = styled(Grid)(({ theme }) => ({
  backgroundColor: "#ffffff",
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  marginTop: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

const ImageContainer = styled(Grid)(({ theme }) => ({
  textAlign: "center",
  marginTop: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(2),
  },
}));

const ResponsiveVideo = styled("video")({
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
});

function Pixels() {
  return (
    <Root>
      <Container>
        {/* Project Overview Section */}
        <Content container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
            >
              3 PIXELS
            </Typography>
            <Typography variant="body1" paragraph>
              VR project to provide a gamified learning experience for
              cognitively disabled children (ongoing).
            </Typography>
            <Typography variant="body1" paragraph>
              My contribution: A Full Stack Web Application - Clinician
              dashboard to monitor performance and progress levels of the child.
            </Typography>
            <Typography variant="body1" paragraph>
              <div className="ez-recharge-tech-stack">
                <Typography
                  variant="h5"
                  sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                >
                  Tech Stack
                </Typography>
                <p>
                  <b>Front End:</b> React, HTML, CSS, MUI
                </p>
                <p>
                  <b>Back End:</b> Firebase Realtime Database, Firebase
                  Authentication
                </p>
                <p>
                  <b>Integration:</b> Firebase Config
                </p>
              </div>
            </Typography>
          </Grid>
          {/* Video Section */}
          <ImageContainer item xs={12} md={6}>
            <ResponsiveVideo controls>
              <source src="videos/3-pixels.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </ResponsiveVideo>
          </ImageContainer>
        </Content>
      </Container>

      {/* Use Cases Section */}
      <Container>
        <Content container spacing={4}>
          <Box
            className="left"
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              borderRight: { xs: "none", md: "1px solid #ddd" },
              pr: { md: 2 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "2rem", md: "2rem" },
                textAlign: { xs: "center", md: "center" },
              }}
            >
              Use Cases
            </Typography>
          </Box>
          <Box
            className="right"
            sx={{
              flex: 2,
              pl: { md: 2 },
            }}
          >
            <div className="ez-recharge-description">
              <Typography variant="body1" paragraph>
                <ul>
                  <li>Clinicians can view the details of the patient.</li>
                  <li>Clinicians can assign tasks to be completed by the child.</li>
                  <li>
                    Clinicians can view charts representing the performance of
                    the child.
                  </li>
                </ul>
              </Typography>
            </div>
          </Box>
        </Content>
      </Container>
    </Root>
  );
}

export default Pixels;
