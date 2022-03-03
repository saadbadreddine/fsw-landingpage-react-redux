import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    textAlign: "center",
  },
  aboutUs: {
    fontSize: "3rem",
    fontWeight: "500",
  },
  about: {
    fontSize: "1.3rem",
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
