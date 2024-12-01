//import React from "react";
import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Center content vertically
        textAlign: "center",
        padding: "0 20px", // Optional padding for better layout on smaller screens
      }}
    >
      <Typography variant="h3" sx={{ mb: 3 }}>
        About Me
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        I am a passionate developer with experience in building web
        applications.
      </Typography>
    </Box>
  );
}

export default About;
