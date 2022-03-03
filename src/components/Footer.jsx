import { Container, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Typography from "@mui/material/Typography";


function Footer() {
  return (
    <div style={{ backgroundColor: "#151515", opacity: "98%" }}>
      <Box
        style={{
          width: "95%",
          color: "white",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <Link to="/contact">
          <Typography
            variant="body2"
            color="white"
            fontSize="0.9rem"
            style={{ textDecoration: "underline white" }}
            padding="2vh"
          >
            Contact us
          </Typography>
        </Link>
        <GitHubIcon styles={{ marginRight: "30px" }} />
      </Box>
    </div>
  );
}
export default Footer;
