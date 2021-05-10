import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia, Grid } from "@material-ui/core";
import CardExperienceStyle from "../styles/CardExperienceStyle";

export default function CardExperience({ imgSrc }) {
  const classes = CardExperienceStyle();

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div style={{ maxWidth: "1250px" }}>
      <Card>
        <Grid container className={classes.grid}>
          <Grid item xs={3} className={classes.griditem}>
            <CardMedia
              component="img"
              image={imgSrc.img}
              className={classes.cardmedia}
            />
          </Grid>
          <Grid
            item
            xs={dimensions.width < 960 ? 9 : 6}
            style={{ borderRight: "1px solid #ffffff80" }}
          >
            <Typography
              variant="h4"
              className={classes.typoTitle}
              color="secondary"
            >
              {imgSrc.title}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="h6"
              color="secondary"
              className={classes.typoPeriod}
            >
              {imgSrc.period}
            </Typography>
          </Grid>
        </Grid>
        <CardContent>
          {imgSrc.content.map((element) => (
            <div>
              <br />
              <Typography variant="h5" component="h2">
                {element.subTitle}
              </Typography>
              {element.descriptions.map((description) => (
                <Typography color="textSecondary" variant="h6">
                  {description}
                </Typography>
              ))}
            </div>
          ))}
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
