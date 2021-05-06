import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "2.125rem",
    "@media (max-width: 800px)": {
      fontSize: "1.5rem",
    },
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    paddingLeft: "5px",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // minHeight: "1vh",
  },
  cardmedia: {
    maxHeight: "78px",
    maxWidth: "300px",
    // minHeight: "20px",
  },
  griditem: {
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
  grid: {
    // background: `linear-gradient(right, #42a5f5,transparent)`,
    background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
    // background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.background.default})`,
    // background: `linear-gradient(to right, ${theme.palette.primary.dark}, transparent)`,
    // backgroundColor: theme.palette.primary,
  },
}));

export default function CardExperience({ imgSrc }) {
  const classes = useStyles();
  // let divHeight = document.getElementById("custDiv").clientHeight;

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
    isSmall: false,
  });
  // const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
        isSmall: dimensions.width < 800 ? true : false,
      });
      console.log(`isSmall === ${dimensions.isSmall}`);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div style={{ marginTop: "10px" }}>
      <Card>
        <Grid container className={classes.grid}>
          <Grid item xs={3} className={classes.griditem}>
            <CardMedia
              component="img"
              image={imgSrc}
              className={classes.cardmedia}
            />
          </Grid>
          {/* <Grid item xs={6} style={{ borderRight: "1px solid #ffffff80" }}> */}
          <Grid
            item
            xs={dimensions.isSmall ? 9 : 6}
            style={{ borderRight: "1px solid #ffffff80" }}
          >
            <Typography variant="h4" className={classes.root} color="secondary">
              Développeur Java 8/Angular 8
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="h6"
              color="secondary"
              style={{ paddingLeft: "5px" }}
            >
              {dimensions.height} height and {dimensions.width} width
              {/* Période : 2020 */}
            </Typography>
          </Grid>
        </Grid>
        <CardContent>
          <Typography color="textSecondary">Word of the Day</Typography>
          <Typography variant="h5" component="h2">
            hello
          </Typography>
          <Typography color="textSecondary">adjective</Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
