import { createMuiTheme, colors } from "@material-ui/core";
import React from "react";

class DefaultTheme extends React.Component {
  darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        // light: colors.red[900],
        main: colors.blue[400],
        // dark: colors.green[900],
        contrastText: colors.common.white,
      },
      // primary: "#60b5ca",
      secondary: {
        // light: colors.amber[900],
        main: colors.common.white,
        // dark: colors.brown[900],
        // contrastText: colors.common.white,
      },
      // secondary: "#35489c",
    },
  });

  lightTheme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        // light: colors.red[900],
        main: colors.orange[400],
        // dark: colors.red[900],
        contrastText: colors.common.white,
      },
      // primary: "#60b5ca",
      secondary: {
        // light: colors.amber[900],
        main: colors.common.white,
        // dark: colors.brown[900],
        // contrastText: colors.common.white,
      },
      // secondary: "#35489c",
    },
  });
}

export default DefaultTheme;
