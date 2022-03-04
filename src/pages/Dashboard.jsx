import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  logout,
  reset,
  updateProfile,
  refresh,
} from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Toolbar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4d4f51",
    },
    secondary: {
      main: "#292a2b",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  appbarWrapper: {
    width: "98%",
    margin: "0 auto",
    justifyContent: "end",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logout: {
    marginRight: "10px",
  },
  updateContainer: {
    marginTop: "15vh",
  },
}));
function Dashboard() {
  const classes = useStyles();
  const logged_user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    firstName: logged_user.user.name.substring(
      0,
      logged_user.user.name.indexOf("_")
    ),
    lastName: logged_user.user.name.substring(
      logged_user.user.name.indexOf("_") + 1
    ),
    email: logged_user.user.email,
    password: "",
    passwordConfirmation: "",
  });

  const { firstName, lastName, email, password, passwordConfirmation } =
    formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success("Success");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      toast.error("Passwords do not match");
    } else {
      let userData = {};
      if (password === "") {
        userData = {
          name: firstName + "_" + lastName,
          email,
        };
      } else {
        userData = {
          name: firstName + "_" + lastName,
          email,
          password,
        };
      }
      console.log(userData);

      dispatch(updateProfile(userData));
      dispatch(refresh());
    }
  };

  const signOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        style={{ background: "transparent", boxShadow: "none" }}
        elevation={0}
      >
        <Toolbar className={classes.appbarWrapper}>
          <Button
            variant="text"
            style={{
              fontSize: "1rem",
              fontWeight: "500",
              textTransform: "none",
              color: "red",
            }}
            onClick={signOut}
          >
            <LogoutIcon className={classes.logout} />
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container
        component="main"
        maxWidth="xs"
        className={classes.updateContainer}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <EditIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Profile Info
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="filled"
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="filled"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  required
                  fullWidth
                  name="password"
                  label="New Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  required
                  fullWidth
                  name="passwordConfirmation"
                  label="Password Confirmation"
                  type="password"
                  id="passwordConfirmation"
                  autoComplete="new-password"
                  value={passwordConfirmation}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2"></Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Dashboard;
