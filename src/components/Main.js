import React from "react";
import { Typography } from "@material-ui/core";
import CardDashboard from "./CardDashboard";
import { Grid, Paper } from "@material-ui/core";
import {
  svgArray,
  developerWallpaper,
  otherWallpaper,
} from "../assets/assetsDashboard";
import "./../styles/MainStyle.css";
import MainStyle from "../styles/MainStyle";
import DrawerLeftStyle from "../styles/DrawerLeftStyle";

export default function Main(props) {
  const classes = DrawerLeftStyle();
  // const path = props.path;
  const customStyle = MainStyle();

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
        {svgArray.map((imgsrc) => (
          <Grid item key={imgsrc.img}>
            <Paper className={customStyle.paper}>
              <CardDashboard
                imgSrc={imgsrc.img}
                title={imgsrc.title}
                description={imgsrc.description}
                website={imgsrc.website}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
      {/* <div className={classes.itemContent}>
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
      </div> */}
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
