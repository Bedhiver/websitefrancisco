import React from "react";
import {
  Button,
  Card,
  CardActions,
  Divider,
  Typography,
} from "@material-ui/core";
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
import axios from "axios";
import { Link } from "react-router-dom";

export default function Main() {
  const classes = DrawerLeftStyle();
  const customStyle = DashboardStyle();

  async function onDownload(e) {
    try {
      e.preventDefault();
      const response = await axios({
        url: "https://api-nodemailer-9nhtbc1wy-bedhiver.vercel.app/cv",
        method: "get",
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Francisco-Fernandez-CV.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (err) {}
  }

  return (
    <main className={classes.content}>
      <div id="divImage">
        <img className="firstImage" src={developerWallpaper} alt="" />
        <img className="secondImage" src={otherWallpaper} alt="" />
        <Paper className={customStyle.paperSurroundTypoStyle} elevation={5}>
          <Typography className={customStyle.typoImageStyle} variant="h2">
            Consultant développeur informatique
          </Typography>
        </Paper>
      </div>

      <div className={customStyle.constructionDiv}>
        <h2>Ce site web est en construction</h2>
        <h2>Soyez indulgent 😉</h2>
      </div>

      <Card
        style={{
          margin: "10px",
          padding: "10px",
        }}
      >
        <h3>A propos</h3>
        <Divider />
        <br />
        <Typography>
          🚧 Rubrique en cours de construction 🚧
          {/* Je suis un développeur issu d'une formation sur le langage Java/JEE et
          son écosystème. Après celle-ci, j'ai décidé de m'orienter sur les
          technologies JavaScript. Et je dois avouer que j'en suis tombé
          amoureux 😍. D'ailleurs, sur tous mes projets personnels j'utilise
          donc Node.js pour le back ainsi que certains de ses frameworks comme
          Express ou Nest.js. Pour le front, ma préférence reste React 😋 même
          si j'ai également utilisé les deux autres que sont Vue.js et Angular. */}
        </Typography>
        <br />
        <Typography></Typography>
        <br />
        <CardActions>
          <Button variant="outlined" onClick={onDownload}>
            Télécharger CV
          </Button>
          <Button variant="outlined">
            <Link className={customStyle.linkNoDecorated} to="/contact">
              Contact
            </Link>
          </Button>
        </CardActions>
      </Card>
      <div className={customStyle.spacingDiv} />
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
      <div className={customStyle.spacingDiv} />
      <div style={{ margin: "10px" }}>
        <Typography variant="h5">
          Technologies maitrisées ou approchées
        </Typography>
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
