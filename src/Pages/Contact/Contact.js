import React from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import UserForm from "../../Components/UserForm/UserForm";

const Contact = () => {
  return (
    <div>
      <InfoCard
        title="Contact"
        description="Feel free to contact us"
        bgImagePath="Images/pageTitleBanner.jpg"
      />

      <UserForm />
    </div>
  );
};

export default Contact;
