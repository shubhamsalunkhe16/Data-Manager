import React from "react";
import Grid from "@mui/material/Grid";
import InfoCard from "../../Components/InfoCard/InfoCard";
import DetailCard from "../../Components/DetailImageCard/DetailImageCard";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <div className="aboutContainer">
      <InfoCard
        title="About Us"
        description="Know more what we are"
        bgImagePath="Images/pageTitleBanner.jpg"
      />
      <div className="cardContainer">
        {/* <Typography
          gutterBottom
          variant="h3"
          component="div"
          textAlign="center"
          fontWeight="500"
          fontStyle="italic"
          // color="white"
          mt={3}
          mb={4}
        >
          Meet Our Team
        </Typography> */}
        <Grid container spacing={4} justifyContent="center" mt="50px">
          <Grid item xs={3}>
            <DetailCard
              title="Della Wilde"
              description="Chief Executive Officer"
              imagePath="Images/man.jpg"
            />
          </Grid>
          <Grid item xs={3}>
            <DetailCard
              title="Arisha Riley"
              description="Vice President"
              imagePath="Images/woman.jpg"
            />
          </Grid>
          <Grid item xs={3}>
            <DetailCard
              title="John Myers"
              description="Chief Financial Officer"
              imagePath="Images/alexPuth1.jpg"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default About;
