import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import CustomExternalUrl from "./CustomExternalUrl";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./../styles/CardProjectStyle.css";

export default function CardProject({ imgSrc, title, content, githubUrl }) {
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
      display: "flex",
    };
    if (imgSrc == null || dimensions.width < 960) {
      param.xs = 12;
      param.display = "none";
    } else {
      param.xs = 6;
      param.display = "flex";
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
                {element.description}
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
          <div id="imgCentered">
            <CardMedia
              component="img"
              id="cardMediaProject"
              image={imgSrc}
              title={title}
            />
          </div>
        </Grid>
      </Grid>
      <CardActions>
        <Button size="small" startIcon={<GitHubIcon />}>
          <CustomExternalUrl
            link={{
              wordLinked: "GitHub",
              url: githubUrl,
            }}
            isDecoration={false}
          />
        </Button>
      </CardActions>
    </Card>
  );
}
