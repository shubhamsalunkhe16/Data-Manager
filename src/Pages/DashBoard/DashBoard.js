import React, { useState } from "react";
import "./DashBoard.css";
import { withStyles } from "@mui/styles";
import Users from "../../Components/Users/Users";
import { Grid } from "@mui/material";
import DataCard from "../../Components/DataCard/DataCard";
import PersonIcon from "@mui/icons-material/Person";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import LocalActivityRoundedIcon from "@mui/icons-material/LocalActivityRounded";

const style = (theme) => ({
  btnRoot: {
    color: "red !important",
    backgroundColor: "yellow !important",
    border: "1px solid green !important",
  },
  header: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: "30px",
  },
});

const DashBoard = (props) => {
  const [usersCount, setUsersCount] = useState(0);
  const [recentlyAddedUser, setRecentlyAddedUser] = useState({});
  const [activity, setActivity] = useState(10);
  const { classes } = props;
  return (
    <div className="dashboardContainer">
      <Grid container spacing={3} justifyContent="space-between" px={5} pt={3}>
        <Grid item xs={4}>
          <DataCard
            title="Total Users"
            description={`${usersCount}`}
            bgColor="linear-gradient(to right, #ff9966, #ff5e62)"
            icon={<GroupRoundedIcon sx={{ fontSize: "60px" }} />}
          />
        </Grid>
        <Grid item xs={4}>
          <DataCard
            title="Recently Added"
            description={`${
              recentlyAddedUser ? recentlyAddedUser.fname : "Please Add"
            }`}
            // descriptionFontSize="22px"
            bgColor="linear-gradient(to right, #6a82fb, #fc5c7d);"
            icon={<PersonIcon sx={{ fontSize: "60px" }} />}
          />
        </Grid>
        <Grid item xs={4}>
          <DataCard
            title="Activities"
            description={activity}
            bgColor="linear-gradient(to right , #96c93d,#00b09b)"
            icon={<LocalActivityRoundedIcon sx={{ fontSize: "60px" }} />}
          />
        </Grid>
      </Grid>

      <Users
        setUsersCount={setUsersCount}
        setRecentlyAddedUser={setRecentlyAddedUser}
        setActivity={setActivity}
      />
    </div>
  );
};

export default withStyles(style)(DashBoard);
