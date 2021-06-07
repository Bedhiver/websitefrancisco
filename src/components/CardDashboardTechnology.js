import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";

export default function CardDashboardTechnology({ imgSrc, title }) {
  return (
    <Card style={{ maxWidth: "345px" }}>
      <CardMedia
        component="img"
        alt=""
        height="210"
        image={imgSrc}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
