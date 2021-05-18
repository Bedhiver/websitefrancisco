import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    objectFit: "fill",
    width: "100%",
    height: "100%",
    minHeight: 300,
  },
  divStyle: {
    minHeight: 300,
    backgroundColor: "#222222",
  },
  cardContent: {
    minHeight: 220,
  },
});

export default function CardDashboard({ imgSrc, title, description, website }) {
  const classes = useStyles();

  return (
    <a
      style={{ textDecoration: "none" }}
      target="_blank"
      rel="noreferrer"
      href={website}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <div className={classes.divStyle}>
            <CardMedia
              component="img"
              className={classes.media}
              image={imgSrc}
              title={title}
            />
          </div>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
}
