import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10vh 0 10vh 0",

    marginTop: "20vh",
    color: "white",
    textAlign: "center",
  },
  aboutUs: {
    fontSize: "3rem",
    fontWeight: "400",
  },
  about: {
    margin: "5vh 25vh 0 25vh",
    fontSize: "1.15rem",
    fontWeight: "300",
  },
}));

function AboutUs() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <span className={classes.aboutUs}>About Us</span>
      <div className={classes.about}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
        repellendus excepturi similique, expedita minus consectetur praesentium
        nam ipsum sunt quidem eos corporis sed modi officiis animi consequatur
        quisquam labore quo ducimus. Nostrum animi fuga debitis aut incidunt
        minima sint veritatis.
      </div>
    </Container>
  );
}

export default AboutUs;
