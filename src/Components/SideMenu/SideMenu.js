import React from "react";
import "./SideMenu.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  sideMenu: {
    display: "block",
    width: "20vw",
    height: "100vh",
    position: "absolute",
    top: "0",
    left: "0",
    backgroundColor: "#053F5E",
  },
});

const SideMenu = () => {
  const classes = useStyles();
  return <div className={classes.sideMenu}>SideMenu</div>;
};

export default SideMenu;
