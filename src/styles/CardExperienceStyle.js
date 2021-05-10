import { makeStyles } from "@material-ui/core";

const CardExperienceStyle = makeStyles((theme) => ({
  typoTitle: {
    fontSize: "2.125rem",
    "@media (max-width: 960px)": {
      fontSize: "1.5rem",
    },
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    paddingLeft: "5px",
  },
  typoPeriod: {
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    paddingLeft: "5%",
  },
  cardmedia: {
    maxHeight: "100px",
    maxWidth: "300px",
    minHeight: "82px",
    minWidth: "215px",
  },
  griditem: {
    "@media (max-width: 960px)": {
      display: "none",
    },
  },
  grid: {
    background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
  },
}));

export default CardExperienceStyle;
