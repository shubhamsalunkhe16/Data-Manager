import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { withStyles } from "@mui/styles";

const style = {
  cardDescContainer: {
    backgroundColor: "#c8e1ff",
    width: "80%",
    position: "relative",
    bottom: "85px",
    borderRadius: "5px",
    transition: "all 200ms",
    "&:hover": {
      width: "100%",
      textAlign: "center",
    },
  },
  cardImage: {
    transition: "all 300ms",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
};

function DetailCard(props) {
  const { classes, title, description, imagePath } = props;
  console.log("1", props);

  return (
    <Card sx={{ maxWidth: 345, borderRadius: "10px", height: 398 }}>
      <CardActionArea sx={{ cursor: "auto" }}>
        <CardMedia
          component="img"
          height="400"
          className={classes.cardImage}
          image={imagePath}
          alt="img"
        />
        <CardContent className={classes.cardDescContainer}>
          <Typography
            className={classes.cardTitle}
            variant="h5"
            component="div"
            color="rgb(255, 91, 97)"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(style)(DetailCard);
