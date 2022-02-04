import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Fab from "@mui/material/Fab";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function DataCard(props) {
  const { title, description, bgColor, icon } = props;
  return (
    <Card sx={{ minWidth: 275, height: 130, backgroundImage: bgColor, mb: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <CardContent>
            <Typography
              variant="h3"
              mt={2}
              fontWeight="400"
              fontSize="30px"
              sx={{
                whiteSpace: "nowrap",
                width: "90%",
                overflow: "hidden",
                textOverflow: " ellipsis",
              }}
            >
              {description}
            </Typography>
            <Typography variant="h6" component="div" fontWeight="normal">
              {title}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={2} position="relative" top="35px" right="35px">
          <Grid
            color="secondary"
            sx={{ width: "70px", height: "70px", cursor: "auto" }}
          >
            {icon}
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
