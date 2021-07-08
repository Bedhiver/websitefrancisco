import React from "react";
import { Button, Card, Divider, Typography } from "@material-ui/core";
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
import hiredLogo from "../assets/hired-logo.png";
import HiredEffect from "../gadgets/HiredEffect";

export default function Main() {
  const classes = DrawerLeftStyle();
  const customStyle = DashboardStyle();

  async function onDownload(e) {
    try {
      e.preventDefault();
      const response = await axios({
        url: "https://api-nodemailer.vercel.app/cv",
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
            Développeur informatique
          </Typography>
        </Paper>
      </div>

      <Card
        style={{
          margin: "10px",
          padding: "10px",
        }}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          <Typography variant="h4">À propos :</Typography>
          <Divider />
          <br />
          <Typography className={customStyle.typoAboutCategoryQuestion}>
            ― Bonjour Francisco ! Dis-nous, qui es-tu ?
          </Typography>
          <Typography>
            Développeur issu d'une formation sur le langage Java et son
            écosystème. Aujourd'hui, j'ai décidé de m'orienter sur les
            technologies JavaScript. Dont je suis radicalement tombé amoureux
            😍.
            <br />
            Sur tous mes projets actuels, j'utilise donc Node.js pour le
            <span className="text-bold"> back-end</span>, accompagné de ses
            principaux frameworks : <span className="text-bold">Express</span>,{" "}
            <span className="text-bold">Nest.js </span>
            et bien d'autre.
            <br />
            Question <span className="text-bold">front-end</span> j'ai
            expérimenté les trois principaux frameworks, que sont{" "}
            <span className="text-bold">Vue.js</span>,
            <span className="text-bold"> Angular</span> et
            <span className="text-bold"> React</span>.
            <br />
            Et ma préférence reste <span className="text-bold">React</span> 😋.
          </Typography>
          <br />
          <Typography className={customStyle.typoAboutCategoryQuestion}>
            ― Très bien ! Et si tu nous parlais de ta personnalité ?
          </Typography>
          <Typography>
            Que dire à mon sujet ? On va commencer par dire que je suis surtout
            quelqu'un de très souriant (même en emoji 😊). J'essaye toujours de
            rajouter quelques pincées d'humour dans les conversations, histoire
            de les rendre plus épicées. Vivant à Lille, ville que j'aime, ainsi
            que mon cher département du Nord. Je suis quelqu'un de simple, qui
            sait savourer les petites choses de la vie.
          </Typography>
          <br />
          <Typography className={customStyle.typoAboutCategoryQuestion}>
            ― Des hobbies peut-être ?
          </Typography>
          <Typography>
            Comme tout bon passionné d'informatique qui se respecte, j'aime les
            jeux vidéo. Mais pas uniquement ! Passer du temps avec des amis
            autour d'un barbecue, dans un bar, en soirée, etc. <br />
            Bref. Qu'importe le lieu tant que l'on est bien entouré 😉.
            Autrement, j'ai également d'autres loisirs un peu plus originaux.
            Notamment le karting et le paintball 😎.
          </Typography>
          <br />
          <Typography className={customStyle.typoAboutCategoryQuestion}>
            ― Merci pour cette présentation, le mot de la fin ?
          </Typography>
          <Typography>
            Une discussion autour d'un café ☕️ par exemple, vous êtes partant ?
            😀
          </Typography>
          <img id="hiredLogo" src={hiredLogo} alt="" />
          <br />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <Button variant="outlined" onClick={onDownload}>
              Télécharger CV
            </Button>
            <Button variant="outlined">
              <Link className={customStyle.linkNoDecorated} to="/contact">
                Contact
              </Link>
            </Button>
            <Button variant="outlined" onClick={HiredEffect}>
              Convaincu ?
            </Button>
          </div>
        </div>
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
