import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import "./../styles/CardProjectStyle.css";
import React, { useEffect, useState } from "react";

export default function CardProject({ imgSrc, title, content }) {
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
    if (imgSrc == null || dimensions.width < 960) {
      param.xs = 12;
      param.display = "none";
    } else {
      param.xs = 6;
      param.display = "block";
    }
    return param;
  }

  return (
    <Card id="cardProject">
      <Grid container>
        <Grid item xs={isImageOrSmall().xs} id="firstGridItem">
          <CardContent id="cardContentProject">
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            {content.map((element, id) => (
              <div key={id}>
                <br />
                <Typography variant="h5" component="h2">
                  {element.subTitle}
                </Typography>
                <Divider />
                <br />
                <Typography variant="h6" color="textSecondary">
                  {element.description}
                </Typography>
              </div>
            ))}
          </CardContent>
        </Grid>
        <Grid
          item
          xs={6}
          id="secondGridItem"
          style={{ display: isImageOrSmall().display }}
        >
          <div id="divStyle">
            <CardMedia
              component="img"
              id="cardMediaProject"
              image={imgSrc}
              title={title}
            />
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}
