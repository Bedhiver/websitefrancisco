import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CodeIcon from '@material-ui/icons/Code';
import "./../styles/ContactStyle.css";
import CustomExternalUrl from "./CustomExternalUrl";

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [dimensionScreen, setDimensionScreen] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensionScreen({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function isMobileScreen() {
    return dimensionScreen.width < 600 ? 12 : 6;
  }

  function handleUpdate(e) {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmitEmail(e) {
    try {
      e.preventDefault();

      const response = await axios.post(
        "https://api-nodemailer.vercel.app/send",
        contactForm
      );

      if (response.status === 200) {
        alert("Message envoyé");
        console.log(response);
      }

      // axios
      //   .post("https://api-nodemailer.vercel.app/send", contactForm)
      //   .then((res) => {
      //     if (res.status === 200) {
      //       alert("Message envoyé");
      //       console.log(res);
      //     } else if (res.status === 102) {
      //       alert("Echec de l'envoi");
      //     } else {
      //       console.log("err in then");
      //     }
      //   })
      //   .catch((err) => {
      //     console.log("erreur in .catch ! ", err);
      //   });

      resetForm();
    } catch (err) {
      alert("Echec de l'envoi");
    }
  }

  function resetForm() {
    let resetContactForm = {};
    Object.keys(contactForm).forEach((key) => {
      resetContactForm[key] = "";
    });

    setContactForm(resetContactForm);
  }

  return (
    <div className="divContact">
      <h1>Contact</h1>
      <Divider className="dividerContact" />
      <div className="div-container">
        <form className="div-form" onSubmit={onSubmitEmail.bind(this)}>
          <div>
            <Grid
              container
              spacing={2}
              style={{
                padding: "10px",
              }}
            >
              <Grid item xs={isMobileScreen()} className="gridItem">
                <TextField
                  className="textField"
                  required
                  name="name"
                  label="Nom"
                  variant="filled"
                  value={contactForm.name}
                  onChange={handleUpdate}
                />
              </Grid>
              <Grid item xs={isMobileScreen()} className="gridItem">
                <TextField
                  className="textField"
                  required
                  type="email"
                  name="email"
                  label="Adresse email"
                  variant="filled"
                  value={contactForm.email}
                  onChange={handleUpdate}
                />
              </Grid>
              <Grid item xs={12} className="gridItem">
                <TextField
                  multiline
                  rows={5}
                  className="textArea"
                  required
                  name="message"
                  label="Message"
                  variant="filled"
                  value={contactForm.message}
                  onChange={handleUpdate}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Envoyer
                </Button>
              </Grid>
            </Grid>
          </div>
        </form>
        <div className="div-other-channel">
          <h3>Liens utiles</h3>
          <Divider className="dividerContact" />
          <br />
          <Grid container spacing={2}>
            <Grid item>
              <Button
                size="large"
                startIcon={<GitHubIcon />}
                variant="outlined"
              >
                <CustomExternalUrl
                  link={{
                    wordLinked: "GitHub",
                    url: "https://github.com/Bedhiver",
                  }}
                  isDecoration={false}
                />
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="large"
                startIcon={<LinkedInIcon />}
                variant="outlined"
              >
                <CustomExternalUrl
                  link={{
                    wordLinked: "LinkedIn",
                    url: "https://www.linkedin.com/in/francisco-fernandez-57990a104/",
                  }}
                  isDecoration={false}
                />
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="large"
                startIcon={<CodeIcon />}
                variant="outlined"
              >
                <CustomExternalUrl
                  link={{
                    wordLinked: "WeLoveDevs",
                    url: "https://francisco-fernandez.welovedevs.com/",
                  }}
                  isDecoration={false}
                />
              </Button>
            </Grid>
          </Grid>
          <h3>Téléphone</h3>
          <Divider className="dividerContact" />
          <br />
          <Typography>
            <CustomExternalUrl
              link={{
                wordLinked: "06.58.70.43.27",
                url: "tel:0658704327",
              }}
              isDecoration={false}
            />
          </Typography>
          <br />
        </div>
      </div>
    </div>
  );
}
