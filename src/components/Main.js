import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomLink from "./CustomLink";
import CustomButton from "./CustomButton";
import NotFound from "./NotFound";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import Card from "./Card";
import { Grid, Paper } from "@material-ui/core";
import { svgArray, developerWallpaper } from "./../assets/index";
import "./../styles/StyleForMobile.css";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    marginLeft: "0px",
    // marginTop: "50px",
  },
  paperGrid: {
    marginTop: "50px",
    // marginLeft: "50px",
    // marginRight: "50px",
    // paddingBottom: "50px",
  },
  paper: {
    maxWidth: 300,
    // minHeight: 1000,
    // minWidth: 250,
    // width: 250,
    // maxHeight: 500,

    // padding: theme.spacing(2),
    // textAlign: "center",
    // color: theme.palette.text.secondary,
  },
  typoPos: {
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
    // height: "10vh",
    // alignItems: "center",
    // justifyContent: "center",
  },
  typoImagePos: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: grey[300],
  },
}));

export default function Main(props) {
  const classes = props.classes;
  const path = props.path;
  const customStyle = useStyles();

  return (
    <main className={classes.content}>
      <div style={{ position: "relative", textAlign: "center" }}>
        <img id="presentationImage" src={developerWallpaper} alt="" />
        <Typography className={customStyle.typoImagePos} variant="h2">
          Développeur d'application
        </Typography>
      </div>
      <Typography id="techUsedTypo" variant="h5">
        Technologies utilisées pour réaliser ce siteweb :
      </Typography>
      <Grid container spacing={3} justify="center" className={customStyle.root}>
        {svgArray.map((imgsrc) => (
          <Grid item key={imgsrc.img}>
            <Paper className={customStyle.paper}>
              <Card
                imgSrc={imgsrc.img}
                title={imgsrc.title}
                description={imgsrc.description}
                website={imgsrc.website}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
      <div className={classes.itemContent}>
        <Router>
          <Switch>
            <Route exact path="/hello">
              <CustomLink to={path.toHome} content={<CustomButton />} />
            </Route>
            <Route exact path="/">
              <CustomLink
                to={path.toHello}
                content={
                  <Box color="text.primary">
                    <Typography variant="h5">HELLO</Typography>
                  </Box>
                }
              />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
        <Button
          variant="contained"
          color="primary"
          target="_blank"
          rel="noreferrer"
          href="https://fr.reactjs.org/"
        >
          test link
        </Button>
      </div>
      <div className={classes.toolbar} />
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit laoreet id donec
        ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
        suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
        quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
        proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
        tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
        varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
        Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
        accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
        Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
        Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
        maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
        aliquam ultrices sagittis orci a.
      </Typography>
    </main>
  );
}
