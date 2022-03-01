import React from "react";
import { makeStyles } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

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
    height: "90vh",
  },
}));

function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <div className={classes.carousel}>
        <Carousel />
      </div>
    </div>
  );
}

export default Landing;
