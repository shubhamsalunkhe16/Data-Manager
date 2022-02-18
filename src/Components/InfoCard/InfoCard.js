import React from "react";
import Typography from "@mui/material/Typography";
import "./InfoCard.css";

const Info = (props) => {
  const { title, description, bgImagePath } = props;
  return (
    <div className="pageTitleBannerContainer">
      <img
        className="pageTitleBanner"
        src={bgImagePath}
        alt="pageTitleBanner"
      />
      <Typography
        variant="h4"
        component="h4"
        display="block"
        position="relative"
        bottom="75px"
        textAlign="center"
        fontWeight="500"
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        component="h5"
        display="block"
        position="relative"
        bottom="75px"
        textAlign="center"
        fontWeight="400"
        fontSize="1.2rem"
      >
        {description}
      </Typography>
    </div>
  );
};

export default Info;
