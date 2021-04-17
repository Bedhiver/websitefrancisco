import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// let isDark = true;

// const [myTheme, setTheme] = useState(true);

// const onChangeTheme = () => {
//   isDark = !isDark;
//   console.log("index dark");

//   if (myTheme === defaultTheme.lightTheme) {
//     setTheme(false);
//   } else {
//     setTheme(true);
//   }
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
