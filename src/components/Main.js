import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomLink from "./CustomLink";
import CustomButton from "./CustomButton";
import NotFound from "./NotFound";
import { makeStyles, Typography } from "@material-ui/core";
import Card from "./Card";
import { Grid, Paper } from "@material-ui/core";
import muisvg from './../assets/material-ui-1.svg';
import reactsvg from './../assets/react-1.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "50px",
  },
  paper: {
    maxWidth: 300,
    // minHeight: 250,
    // minWidth: 250,
    // maxHeight: 500,
    // width: 250,

    // padding: theme.spacing(2),
    // textAlign: "center",
    // color: theme.palette.text.secondary,
  },
}));

const foo = [
  {
    img: reactsvg,
    title: "react svg",
  },
  {
    img: muisvg,
    title: "material ui svg",
  },
];

export default function Main(props) {
  const classes = props.classes;
  const path = props.path;
  const customStyle = useStyles();

  // function GridItemLoop() {
  //   let content = [];
  //   for (let i = 0; i < 3; i++) {
  //     content.push(
  //       <Grid item>
  //         <Paper className={customStyle.paper}>
  //           <Card />
  //         </Paper>
  //       </Grid>
  //     );
  //   }
  //   return content;
  // }

  return (
    <main className={classes.content}>
      <Grid container spacing={3} justify="center" className={customStyle.root}>
        {/* {GridItemLoop()} */}
        {foo.map((imgsrc) => (
          <Grid item>
            <Paper className={customStyle.paper}>
              <Card imgsrc={imgsrc.img} title={imgsrc.title} />
            </Paper>
          </Grid>
        ))}
      </Grid>
      {/* <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Card />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Card />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Card />
            </Paper>
          </Grid>
        </Grid> */}
      {/* <Card /> */}
      <div className={classes.itemContent}>
        <Router>
          <Switch>
            <Route exact path="/hello">
              <CustomLink to={path.toHome} content={<CustomButton />} />
            </Route>
            <Route exact path="/">
              <div>
                <CustomLink
                  to={path.toHello}
                  content={<Typography variant="h5">HELLO</Typography>}
                />
              </div>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
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
