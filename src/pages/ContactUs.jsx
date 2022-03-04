import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { sendMsg, reset } from "../features/auth/msgSlice";
import { makeStyles } from "@mui/styles";

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
  message: {},
}));

function ContactUs() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    msg: "",
  });

  const { email, subject, msg } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.msg
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

    const userData = {
      email: email,
      subject: subject,
      message: msg,
    };

    dispatch(sendMsg(userData));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <ContactMailIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact us
          </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onChange}
              value={email}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="subject"
              label="Subject"
              id="subject"
              onChange={onChange}
              value={subject}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="msg"
              label="Message"
              id="msg"
              onChange={onChange}
              value={msg}
              multiline
              rows={6}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ContactUs;
