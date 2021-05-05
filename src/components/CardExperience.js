import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia, Divider, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "2.0243rem",
    "@media (max-width: 1140px)": {
      //   fontSize: "1.5625rem",
      fontSize: "1rem",
    },
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // minHeight: "1vh",
  },
}));

export default function CardExperience({ imgSrc }) {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "10px" }}>
      <Card>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <CardMedia component="img" image={imgSrc} />
          </Grid>
          <Grid item xs={9}>
            <Typography className={classes.root} variant="h4">
              Développeur Java 8/Angular 8
            </Typography>
          </Grid>
        </Grid>
        <Divider />
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
