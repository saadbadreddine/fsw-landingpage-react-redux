import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link as Scroll } from "react-scroll";
import { IconButton } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10vh 0 5vh 0",
    marginTop: "15vh",
    color: "white",
    textAlign: "center",
  },
  aboutUs: {
    fontSize: "3rem",
    fontWeight: "400",
  },
  about: {
    margin: "5vh 15vh 10vh 15vh",
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
        consequuntur deserunt, voluptate porro beatae culpa natus dignissimos
        doloremque, et recusandae minus. Illum nemo, expedita corporis tenetur
        numquam ullam alias ad facere quisquam provident aliquid ducimus non!
        Quam perferendis, illo tenetur eaque quis nobis molestias consectetur
        aut obcaecati velit quasi laudantium. Obcaecati, repellendus cupiditate
        hic impedit illum asperiores cumque laboriosam. Tenetur a nobis id
        quidem architecto aperiam repellat doloremque magni.
      </div>
      <Scroll to="header" smooth={true}>
        <IconButton>
          <KeyboardArrowUpIcon
            className={classes.navDown}
            style={{ fontSize: "3rem", color: "#ccc" }}
          />
        </IconButton>
      </Scroll>
    </Container>
  );
}

export default AboutUs;
