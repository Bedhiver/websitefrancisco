import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const MainStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    marginLeft: "0px",
    // marginTop: "50px",
  },
  constructionDiv: {
    border: `solid 2px ${theme.palette.secondary.dark}`,
    margin: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 800px)": {
      marginTop: "70px",
    },
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
  typoImageStyle: {
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%,-50%)",
    // flexGrow: 1,
    color: grey[300],
  },
  paperSurroundTypoStyle: {
    minWidth: "fit-content",
    paddingRight: "10px",
    paddingLeft: "10px",
    backgroundColor: "#6b6b6b75",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  paperTechLearnt: {
    width: "100%",
    padding: "30px",
    margin: "10px",
  },
  divContainerTechLearnt: {
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spacingDiv: {
    marginTop: "40px",
  },
  linkNoDecorated: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  typoAboutCategoryQuestion: {
    fontStyle: "italic",
    fontWeight: "bold",
  },
}));

export default MainStyle;
