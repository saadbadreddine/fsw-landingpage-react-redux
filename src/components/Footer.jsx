import { Container, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactMailIcon from "@mui/icons-material/ContactMail";

function Footer() {
  return (
    <footer>
      <Box>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                Contact us
                <ContactMailIcon></ContactMailIcon>
                <Link to="/contactus" variant="body2"></Link>
              </Box>

              <GitHubIcon></GitHubIcon>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
