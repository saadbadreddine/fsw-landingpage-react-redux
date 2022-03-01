import { makeStyles } from "@mui/styles";
import { AppBar } from "@mui/material";
import { Button } from "@mui/material";
import { Toolbar } from "@mui/material";
import { borderColor } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100vh",
  },
  appbarWrapper: {
    width: "90%",
    margin: "0 auto",
    justifyContent: "end",
  },
  hustleLogo: {
    width: "30%",
    color: "#ccc",
  },
}));

const Header = () => {
  const classes = useStyles();

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

      <img src={"/assets/hustle.svg"} className={classes.hustleLogo}></img>
    </div>
  );
};

export default Header;
