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

function HRManagement() {
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
              HR Management Portal
            </Typography>
            <Typography variant="body1" paragraph>
              A full-stack web application to manage the details and associated
              events, projects, and salary of each employee.
            </Typography>
            <Typography variant="body1" paragraph>
              <div style={{ lineHeight: 1.5 }}>
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
                  <b>Back End:</b> MySQL, JWT, Swagger, Spring Boot
                </p>
                <p>
                  <b>Integration:</b> Axios
                </p>
                <p>
                  <b>Database Tables:</b> _users, salary_details,
                  personal_performance, employee_performance, courses,
                  profile_details, attendance, and more.
                </p>
              </div>
            </Typography>
          </Grid>
          {/* Video Section */}
          <ImageContainer item xs={12} md={6}>
            <ResponsiveVideo controls>
              <source src="videos/hrm.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </ResponsiveVideo>
          </ImageContainer>
        </Content>
      </Container>

      {/* User Side Section */}
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
                fontSize: { xs: "1.5rem", md: "2rem" },
                textAlign: { xs: "center", md: "center" },
              }}
            >
              User Side
            </Typography>
          </Box>
          <Box
            className="right"
            sx={{
              flex: 2,
              pl: { md: 2 },
            }}
          >
            <Typography variant="body1" paragraph>
              <ul>
                <li>View salary details</li>
                <li>See performance metrics like project completion</li>
                <li>View attendance records</li>
                <li>Access events and directory</li>
                <li>Update profile information</li>
                <li>Browse courses for training</li>
                <li>Collaborate with teams</li>
                <li>Provide feedback</li>
              </ul>
            </Typography>
          </Box>
        </Content>
      </Container>

      {/* Admin Side Section */}
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
                fontSize: { xs: "1.5rem", md: "2rem" },
                textAlign: { xs: "center", md: "center" },
              }}
            >
              Admin Side
            </Typography>
          </Box>
          <Box
            className="right"
            sx={{
              flex: 2,
              pl: { md: 2 },
            }}
          >
            <Typography variant="body1" paragraph>
              <ul>
                <li>View events and directory</li>
                <li>Monitor employee performance</li>
                <li>Manage payroll for individual users or all employees</li>
                <li>Collaborate with teams</li>
                <li>Create accounts and profiles for employees</li>
              </ul>
            </Typography>
          </Box>
        </Content>
      </Container>
    </Root>
  );
}

export default HRManagement;
