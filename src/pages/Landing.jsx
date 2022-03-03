import React from "react";
import { makeStyles } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/unsplash.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  carousel: {
    width: "90%",
    margin: "auto",
    height: "85vh",
  },
  about: {
    color: "white",
    backgroundImage: "none !important",
    backgroundColor: "#171717 !important",
    opacity: "90%",
  },
  footer: {
    color: "white",
    backgroundImage: "none !important",
    backgroundColor: "#171717 !important",
  },
}));

function Landing() {
  const classes = useStyles();

  return (
    <Box sx={{ flexDirection: "column" }}>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <div className={classes.carousel}>
          <Carousel />
        </div>
        <div className={classes.about}>
          <AboutUs />
        </div>
      </div>
    </Box>
  );
}

export default Landing;
