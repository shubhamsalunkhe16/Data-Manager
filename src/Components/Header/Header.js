import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import "./Header.css";
import { withStyles } from "@mui/styles";

const styles = {
  headerContainer: {
    display: "inline-block",
    width: "80vw",
    float: "right",
  },
};

const Header = (props) => {
  const { classes } = props;
  return (
    <div className={classes.headerContainer}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#1b2330",
          }}
        >
          <Toolbar>
            <Avatar alt="Logo" src="Images/BrandLogo.jpg" />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, ml: "10px" }}
            >
              Matrial UI
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
