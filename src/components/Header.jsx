import { makeStyles } from "@mui/styles";
import { AppBar, Collapse, IconButton } from "@mui/material";
import { Button } from "@mui/material";
import { Toolbar } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import Zoom from "@mui/material/Zoom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appbarWrapper: {
    width: "90%",
    margin: "0 auto",
    justifyContent: "end",
  },
  hustleLogo: {
    width: "60%",
    color: "#ccc",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  navDown: {
    color: "#ccc",
  },
}));

const Header = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar style={{ background: "transparent", boxShadow: "none" }} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <Button variant="text" sx={{ mr: "10px" }}>
            Sign in
          </Button>
          <Button variant="text">Sign up</Button>
        </Toolbar>
      </AppBar>
      <Zoom in={checked} style={{ transitionDelay: checked ? "1000ms" : "0ms" }}>
        <div className={classes.container}>
          <img src={"/assets/hustle.svg"} className={classes.hustleLogo}></img>
          <IconButton>
            <ExpandMoreIcon className={classes.navDown} style={{ fontSize: "3rem" }} />
          </IconButton>
        </div>
      </Zoom>
    </div>
  );
};

export default Header;
