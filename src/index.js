import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/styles";
import DefaultTheme from "./themes/DefaultTheme";

const defaultTheme = new DefaultTheme();

ReactDOM.render(
  <ThemeProvider
    theme={
      defaultTheme.darkTheme ? defaultTheme.darkTheme : defaultTheme.lightTheme
    }
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
