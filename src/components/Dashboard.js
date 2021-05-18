import React from "react";
import { Divider, Typography } from "@material-ui/core";
import CardDashboardWebsite from "./CardDashboardWebsite";
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
import CardDashboardTechnology from "./CardDashboardTechnology";

export default function Main(props) {
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
        Technologies utilisées pour réaliser ce siteweb :
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
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Grid container>
            <h2>Langage</h2>
          </Grid>
          <Grid container spacing={1} style={{ width: "100%" }}>
            {imgTechUsedArray.language.map((element, id) => (
              <Grid item key={id}>
                <CardDashboardTechnology
                  imgSrc={element.img}
                  title={element.title}
                />
              </Grid>
            ))}
          </Grid>
          <Grid container>
            <h2>Back-end</h2>
          </Grid>
          <Grid container spacing={1} style={{ width: "100%" }}>
            {imgTechUsedArray.back.map((element, id) => (
              <Grid item key={id}>
                <CardDashboardTechnology
                  imgSrc={element.img}
                  title={element.title}
                />
              </Grid>
            ))}
          </Grid>
          <Grid container>
            <h2>Front-end</h2>
          </Grid>
          <Grid container spacing={1} style={{ width: "100%" }}>
            {imgTechUsedArray.front.map((element, id) => (
              <Grid item key={id}>
                <CardDashboardTechnology
                  imgSrc={element.img}
                  title={element.title}
                />
              </Grid>
            ))}
          </Grid>
          <Grid container>
            <h2>Base de données</h2>
          </Grid>
          <Grid container spacing={1} style={{ width: "100%" }}>
            {imgTechUsedArray.database.map((element, id) => (
              <Grid item key={id}>
                <CardDashboardTechnology
                  imgSrc={element.img}
                  title={element.title}
                />
              </Grid>
            ))}
          </Grid>
          <Grid container>
            <h2>Autre</h2>
          </Grid>
          <Grid container spacing={1} style={{ width: "100%" }}>
            {imgTechUsedArray.other.map((element, id) => (
              <Grid item key={id}>
                <CardDashboardTechnology
                  imgSrc={element.img}
                  title={element.title}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
      <Typography paragraph style={{ margin: "20px" }}>
        Node.js
      </Typography>
    </main>
  );
}
