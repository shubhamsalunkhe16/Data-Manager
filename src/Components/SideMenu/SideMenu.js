import React from "react";
import Avatar from "@mui/material/Avatar";
import "./SideMenu.css";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";

const useStyles = makeStyles({
  sideMenu: {
    display: "block",
    width: "20vw",
    height: "100vh",
    position: "absolute",
    top: "0",
    left: "0",
    backgroundColor: "#101827",
  },
  sideMenuBannerContainer: {
    position: "relative",
    display: "block",
    width: "20vw",
  },
  sideMenuBanner: {
    display: "block",
    width: "20vw",
    opacity: "0.5",
  },
  userName: {
    position: "absolute",
    top: "130px",
    left: "5.5vw",
    color: "white",
  },
});

const SideMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.sideMenu}>
      <div className={classes.sideMenuBannerContainer}>
        <img
          className={classes.sideMenuBanner}
          src="Images/sideMenuBanner.jpg"
          alt="banner"
        />
        <Avatar
          alt="Remy Sharp"
          src="Images/AlexPuth.jpg"
          sx={{
            display: "block",
            position: "absolute",
            top: "35px",
            left: "8vw",
            width: "80px",
            height: "80px",
          }}
        />
        <div>
          <Typography variant="h4" component="h4" className={classes.userName}>
            Alex Puth
          </Typography>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default SideMenu;
