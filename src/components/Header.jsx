import { makeStyles } from "@mui/styles";
import { AppBar, IconButton } from "@mui/material";
import { Button } from "@mui/material";
import { Toolbar } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import Zoom from "@mui/material/Zoom";
import { useNavigate } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#171717",
    },
    secondary: {
      main: "#292a2b",
    },
  },
});

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
  const navigate = useNavigate();
  const isAuth = JSON.parse(localStorage.getItem("user"));

  if (isAuth) {
    navigate("/dashboard");
  }

  const navtoLogin = () => {
    navigate("/login");
  };

  const navtoRegister = () => {
    navigate("/register");
  };

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
    console.log("animated");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root} id="header">
        <AppBar className="appBar" elevation={0} style={{ opacity: "70%" }}>
          <Toolbar className={classes.appbarWrapper}>
            <Button
              variant="text"
              sx={{ mr: "10px" }}
              onClick={navtoLogin}
              style={{
                fontSize: "1.1rem",
                fontWeight: "400",
                textTransform: "none",
                color: "white",
              }}
            >
              Login
            </Button>
            <Button
              variant="text"
              onClick={navtoRegister}
              style={{
                fontSize: "1.1rem",
                fontWeight: "400",
                textTransform: "none",
                color: "white",
              }}
            >
              Register
            </Button>
          </Toolbar>
        </AppBar>
        <Zoom
          in={checked}
          style={{ transitionDelay: checked ? "800ms" : "0ms" }}
        >
          <div className={classes.container}>
            <img
              src={"/assets/hustle.svg"}
              className={classes.hustleLogo}
            ></img>
            <Scroll to="carousel" smooth={true}>
              <IconButton>
                <ExpandMoreIcon
                  className={classes.navDown}
                  style={{ fontSize: "3rem" }}
                />
              </IconButton>
            </Scroll>
          </div>
        </Zoom>
      </div>
    </ThemeProvider>
  );
};

export default Header;
