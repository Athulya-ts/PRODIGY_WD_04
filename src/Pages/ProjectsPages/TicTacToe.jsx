import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Root = styled("div")(({ theme }) => ({
  backgroundColor: "#f4f6f8",
  minHeight: "91vh",
  paddingTop: theme.spacing(4),
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

function TicTacToe() {
  return (
    <Root>
      <Container>
        {/* Game Description Section */}
        <Content container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
            >
              Tic Tac Toe
            </Typography>
            <Typography variant="body1" paragraph>
              A simple front-end React application. Play Tic Tac Toe offline
              with others or challenge the AI for a quick game.
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, marginTop: 3 }}
            >
              Tech Stack
            </Typography>
            <Typography variant="body1" paragraph>
              <b>Front End:</b> React, HTML, CSS, MUI
            </Typography>
          </Grid>

          {/* Video Section */}
          <ImageContainer item xs={12} md={6}>
            <ResponsiveVideo controls>
              <source src="videos/tic-tac-toe.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </ResponsiveVideo>
          </ImageContainer>
        </Content>
      </Container>
    </Root>
  );
}

export default TicTacToe;
