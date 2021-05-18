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
        {/* <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
    </Card>
  );
}
