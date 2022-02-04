import React from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import UserForm from "../../Components/UserForm/UserForm";
import { Typography } from "@mui/material";

const Contact = () => {
  return (
    <div>
      <InfoCard
        title="Contact"
        description="Feel free to contact us"
        bgImagePath="Images/pageTitleBanner.jpg"
      />
      {/* <Typography
        gutterBottom
        variant="h3"
        component="div"
        textAlign="center"
        fontWeight="500"
        fontStyle="italic"
        mt={3}
        mb={4}
      >
        Please fill below form
      </Typography> */}
      <UserForm />
    </div>
  );
};

export default Contact;
