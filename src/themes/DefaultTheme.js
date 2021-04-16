import { createMuiTheme, colors } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: colors.red[900],
      main: colors.blue[400],
      dark: colors.green[900],
      contrastText: colors.common.white,
    },
    // primary: "#60b5ca",
    secondary: {
      light: colors.amber[900],
      main: colors.blue[400],
      dark: colors.brown[900],
      contrastText: colors.deepOrange[100],
    },
    // secondary: "#35489c",
  },
});

export default theme;
