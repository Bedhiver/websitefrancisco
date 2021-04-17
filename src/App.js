import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import CustomButton from "./components/CustomButton";
import NotFound from "./components/NotFound";
import myStyle from "./styles/MyStyle";
import DefaultSideBar from "./components/DefaultSideBar";
import React, { useState } from "react";
import DefaultTheme from "./themes/DefaultTheme";
import { ThemeProvider } from "@material-ui/styles";

export default function App() {
  const [isDark, setTheme] = useState(true);
  const [labelName, setLabelName] = useState("Dark Thème");
  const defaultTheme = new DefaultTheme();

  let foo = isDark ? "Dark Thème" : "Light Thème";

  const onChangeTheme = () => {
    setTheme(!isDark);
    foo = isDark ? "Dark Thème" : "Light Thème";
    setLabelName(isDark ? "Dark Thème" : "Light Thème");
  };

  return (
    <ThemeProvider
      theme={isDark ? defaultTheme.darkTheme : defaultTheme.lightTheme}
    >
      <div className="App">
        <header className="App-header">
          <Router>
            <Switch>
              <Route path="/hello">
                <Link to="/" style={myStyle.linkStyle}>
                  <CustomButton />
                </Link>
              </Route>
              <Route exact path="/">
                <div>
                  <Link to="/hello" style={myStyle.linkStyle}>
                    <h1>HELLO</h1>
                  </Link>
                </div>
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Router>
          <DefaultSideBar onChangeTheme={onChangeTheme} labelName={labelName} />
        </header>
      </div>
    </ThemeProvider>
  );
}
