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
    // height: 500,
    // width: "auto",
    // margin: 15,
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

export default function MediaCard({ imgSrc, title, description, website }) {
  const classes = useStyles();

  return (
    <a
      style={{ textDecoration: "none" }}
      target="_blank"
      rel="noreferrer"
      href={website}
    >
      <Card className={classes.root}>
        {/* <Router> */}
        {/* <CardActionArea component={Link} to="https://fr.reactjs.org/"> */}

        <CardActionArea>
          {/* <Switch> */}
          {/* <Route path="https://fr.reactjs.org/"> */}
          {/* <Link href="https://fr.reactjs.org/"> */}
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
              {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
              {description}
            </Typography>
          </CardContent>
          {/* </Link> */}
          {/* </Route> */}
          {/* </Switch> */}
        </CardActionArea>
        {/* </Router> */}
        {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
      </Card>
    </a>
  );
}
