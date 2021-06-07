import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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

  function isImageOrSmall() {
    const param = {
      xs: 6,
      display: "block",
    };
    if (imgSrc.img == null || dimensions.width < 1000) {
      param.xs = 9;
      param.display = "none";
    } else {
      param.xs = 6;
      param.display = "block";
    }
    return param;
  }

  return (
    <div style={{ width: "100%" }}>
      <Card>
        <Grid container className={classes.grid}>
          <Grid item xs={3} style={{ display: isImageOrSmall().display }}>
            <CardMedia
              component="img"
              image={imgSrc.img}
              className={classes.cardmedia}
              style={{ display: isImageOrSmall().display }}
            />
          </Grid>
          <Grid
            item
            xs={isImageOrSmall().xs}
            // xs={dimensions.width < 960 ? 9 : 6}
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
          {imgSrc.content.map((element, i) => (
            <div key={i}>
              <br />
              <Typography variant="h5" component="h2">
                {element.subTitle}
              </Typography>
              {element.descriptions.map((description, i) => (
                <Typography color="textSecondary" key={i}>
                  {description}
                </Typography>
              ))}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
