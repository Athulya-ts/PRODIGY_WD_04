import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const Root = styled("div")(({ theme }) => ({
  backgroundColor: "#f4f6f8",
  minHeight: "100vh",
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const Content = styled(Grid)(({ theme }) => ({
  backgroundColor: "#ffffff",
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  marginTop: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const ImageContainer = styled(Grid)(({ theme }) => ({
  textAlign: "center",
  marginTop: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(2),
  },
}));

const ResponsiveVideo = styled("video")(({ theme }) => ({
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
}));

function EZRecharge() {
  return (
    <Root>
      <Container>
        {/* Top Section */}
        <Content container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
            >
              EZRecharge
            </Typography>
            <Typography variant="body1" paragraph>
              A Mobile Recharge Portal where customers can view plans and addons
              and make recharges accordingly.
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
            >
              Tech Stack
            </Typography>
            <Typography variant="body1" paragraph>
              <p>
                <b>Front End:</b> React Vite, HTML, CSS, Mui
              </p>
              <p>
                <b>Back End:</b> PostgreSQL, JWT, Swagger
              </p>
              <p>
                <b>Integration:</b> Axios
              </p>
              <p>
                <b>Database Tables:</b> user_detail, customer, recharge, plans,
                addons
              </p>
            </Typography>
          </Grid>
          <ImageContainer item xs={12} md={6}>
            <ResponsiveVideo controls>
              <source src="videos/EZRecharge.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </ResponsiveVideo>
          </ImageContainer>
        </Content>

        {/* User Side */}
        <Content container spacing={4}>
          <Box
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
              gutterBottom
              sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
            >
              User Side
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 2,
              pl: { md: 2 },
            }}
          >
            <Typography variant="body1" paragraph>
              <ul>
                <li>
                  Users can view and select plans (postpaid/prepaid) for calls
                  and data and proceed with recharge.
                </li>
                <li>
                  Users can browse and choose addons/data boosters and complete
                  the recharge process.
                </li>
                <li>
                  For assistance, users can easily navigate to the support page.
                </li>
                <li>
                  Access to profile and recharge history is provided for user
                  convenience.
                </li>
                <li>
                  Users can provide feedback regarding their experience with the
                  application.
                </li>
              </ul>
            </Typography>
          </Box>
        </Content>

        {/* Admin Side */}
        <Content container spacing={4}>
          <Box
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
              gutterBottom
              sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
            >
              Admin Side
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 2,
              pl: { md: 2 },
            }}
          >
            <Typography variant="body1" paragraph>
              <ul>
                <li>
                  Admins have full control to add, view, update, and delete
                  plans.
                </li>
                <li>Addition of add-ons is managed by admins.</li>
                <li>
                  Admins can access the recharge history of specific users or
                  the entire user base.
                </li>
                <li>Profile information for admins is accessible.</li>
              </ul>
            </Typography>
          </Box>
        </Content>
      </Container>
    </Root>
  );
}

export default EZRecharge;
