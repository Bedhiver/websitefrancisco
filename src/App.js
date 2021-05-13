import DrawerLeft from "./components/DrawerLeft";
import React, { useState } from "react";
import DefaultTheme from "./themes/DefaultTheme";
import { ThemeProvider } from "@material-ui/styles";
import { translateTo } from "./languages/translations";
import { Route, Switch } from "react-router";
import NotFound from "./components/NotFound";
import Experience from "./components/Experience";
import Dashboard from "./components/Dashboard";
import Pong from "./components/Pong";
import Project from "./components/Project";
import Contact from "./components/Contact";

export default function App() {
  const [isDark, setTheme] = useState(true);
  const defaultTheme = new DefaultTheme();

  const onChangeTheme = () => {
    setTheme(!isDark);
  };

  const language = translateTo("french");

  const path = {
    toHello: "/hello",
    toHome: "/",
  };

  return (
    <ThemeProvider
      theme={isDark ? defaultTheme.darkTheme : defaultTheme.lightTheme}
    >
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <DrawerLeft
                onChangeTheme={onChangeTheme}
                language={language}
                content={<Dashboard path={path} />}
              />
            </Route>
            <Route exact path="/experience">
              <DrawerLeft
                onChangeTheme={onChangeTheme}
                language={language}
                content={<Experience />}
              />
            </Route>
            <Route exact path="/projects">
              <DrawerLeft
                onChangeTheme={onChangeTheme}
                language={language}
                content={<Project />}
              />
            </Route>
            <Route exact path="/games">
              <DrawerLeft
                onChangeTheme={onChangeTheme}
                language={language}
                content={<Pong />}
              />
            </Route>
            <Route exact path="/contact">
              <DrawerLeft
                onChangeTheme={onChangeTheme}
                language={language}
                content={<Contact />}
              />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </header>
      </div>
    </ThemeProvider>
  );
}
