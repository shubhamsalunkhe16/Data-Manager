import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { withStyles } from "@mui/styles";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";

const styles = {
  navItem: {
    textDecoration: "none",
    margin: "10px 0px !important",
  },
};

function Navbar(props) {
  const { classes } = props;
  return (
    <div>
      <nav>
        <Grid container spacing={1} pl={12} pt={5}>
          <Grid item xs={12}>
            <NavLink
              className={classes.navItem}
              to="/"
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "#ff5b61" : "white",
                };
              }}
            >
              <DashboardCustomizeRoundedIcon />
              <Typography
                variant="h6"
                component="h6"
                display="inline-block"
                position="relative"
                bottom="5px"
                left="5px"
              >
                DashBoard
              </Typography>
            </NavLink>
          </Grid>
          <Grid item xs={12}>
            <NavLink
              className={classes.navItem}
              to="/about"
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "#ff5b61" : "white",
                };
              }}
            >
              <BubbleChartRoundedIcon />
              <Typography
                variant="h6"
                component="h6"
                display="inline-block"
                position="relative"
                bottom="5px"
                left="5px"
              >
                About
              </Typography>
            </NavLink>
          </Grid>
          <Grid item xs={12}>
            <NavLink
              className={classes.navItem}
              to="/contact"
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "#ff5b61" : "white",
                };
              }}
            >
              <PermContactCalendarRoundedIcon />
              <Typography
                variant="h6"
                component="h6"
                display="inline-block"
                position="relative"
                bottom="5px"
                left="5px"
              >
                Contact Us
              </Typography>
            </NavLink>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </nav>
    </div>
  );
}

export default withStyles(styles)(Navbar);
