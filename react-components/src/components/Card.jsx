// Note we are using MUI for styling but it is not required, we can use anything like plain css, bootstrap, tailwindcss, etc..,
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

// Here card is the prop and we are directly destructuring name and desc from card
const MediaCard = ({ name, desc }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/vite.svg" // If we want we can also dynamically get an image and display it here
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {/* Here the name is dynamically displayed for each card */}
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Here the desc is dynamically displayed for each card */}
            {desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MediaCard;
