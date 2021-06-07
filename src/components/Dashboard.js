import React from "react";
import { Divider, Typography } from "@material-ui/core";
import CardDashboardWebsite from "./CardDashboardWebsite";
import CardDashboardTechnology from "./CardDashboardTechnology";
import { Grid, Paper } from "@material-ui/core";
import {
  imgArray,
  developerWallpaper,
  otherWallpaper,
  imgTechUsedArray,
} from "../assets/assetsDashboard";
import "./../styles/DashboardStyle.css";
import DashboardStyle from "../styles/DashboardStyle";
import DrawerLeftStyle from "../styles/DrawerLeftStyle";

export default function Main() {
  const classes = DrawerLeftStyle();
  const customStyle = DashboardStyle();

  return (
    <main className={classes.content}>
      <div id="divImage">
        <img className="firstImage" src={developerWallpaper} alt="" />
        <img className="secondImage" src={otherWallpaper} alt="" />
        <Paper className={customStyle.paperSurroundTypoStyle} elevation={5}>
          <Typography className={customStyle.typoImageStyle} variant="h2">
            Développeur d'application
          </Typography>
        </Paper>
      </div>

      <div className={customStyle.constructionDiv}>
        <h1>Ce site web est en construction</h1>
        <h1>Soyez indulgent 😉</h1>
      </div>

      <Typography id="techUsedTypo" variant="h5">
        Technologies utilisées pour réaliser ce site web :
      </Typography>
      {/* <h1>
        <span
          class="typewrite"
          data-period="2000"
          data-type='[ "Je suis un développeur juni...", "Je suis un développeur ENORME" ]'
        >
          <span class="wrap"></span>
        </span>
      </h1>
      <script src={foowriter} ></script> */}

      <Grid container spacing={3} justify="center" className={customStyle.root}>
        {imgArray.map((imgsrc) => (
          <Grid item key={imgsrc.img}>
            <Paper className={customStyle.paper}>
              <CardDashboardWebsite
                imgSrc={imgsrc.img}
                title={imgsrc.title}
                description={imgsrc.description}
                website={imgsrc.website}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
      <div className={classes.toolbar} />
      <div style={{ margin: "10px" }}>
        <h1>Technologies maitrisées ou approchées</h1>
        <Divider variant="middle" />
      </div>
      <div className={customStyle.divContainerTechLearnt}>
        <Grid container>
          <Paper className={customStyle.paperTechLearnt}>
            <Grid container justify="center">
              <h2>Langage</h2>
            </Grid>
            <Grid
              container
              spacing={1}
              justify="center"
              className={customStyle.root}
            >
              {imgTechUsedArray.language.map((element, id) => (
                <Grid item key={id}>
                  <CardDashboardTechnology
                    imgSrc={element.img}
                    title={element.title}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
          <Paper className={customStyle.paperTechLearnt}>
            <Grid container justify="center">
              <h2>Back-end</h2>
            </Grid>
            <Grid
              container
              spacing={1}
              justify="center"
              className={customStyle.root}
            >
              {imgTechUsedArray.back.map((element, id) => (
                <Grid item key={id}>
                  <CardDashboardTechnology
                    imgSrc={element.img}
                    title={element.title}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
          <Paper className={customStyle.paperTechLearnt}>
            <Grid container justify="center">
              <h2>Front-end</h2>
            </Grid>
            <Grid
              container
              spacing={1}
              justify="center"
              className={customStyle.root}
            >
              {imgTechUsedArray.front.map((element, id) => (
                <Grid item key={id}>
                  <CardDashboardTechnology
                    imgSrc={element.img}
                    title={element.title}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
          <Paper className={customStyle.paperTechLearnt}>
            <Grid container justify="center">
              <h2>Base de données</h2>
            </Grid>
            <Grid
              container
              spacing={1}
              justify="center"
              className={customStyle.root}
            >
              {imgTechUsedArray.database.map((element, id) => (
                <Grid item key={id}>
                  <CardDashboardTechnology
                    imgSrc={element.img}
                    title={element.title}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
          <Paper className={customStyle.paperTechLearnt}>
            <Grid container justify="center">
              <h2>Autre</h2>
            </Grid>
            <Grid
              container
              spacing={1}
              justify="center"
              className={customStyle.root}
            >
              {imgTechUsedArray.other.map((element, id) => (
                <Grid item key={id}>
                  <CardDashboardTechnology
                    imgSrc={element.img}
                    title={element.title}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </div>
    </main>
  );
}
