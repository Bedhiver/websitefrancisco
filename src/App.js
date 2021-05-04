import DrawerLeft from "./components/DrawerLeft";
import React, { useState } from "react";
import DefaultTheme from "./themes/DefaultTheme";
import { ThemeProvider } from "@material-ui/styles";
import { translateTo } from "./languages/translations";
import { Route, Switch } from "react-router";
import NotFound from "./components/NotFound";
import Test from "./components/Test";
import Main from "./components/Main";
import Pong from "./components/Pong";

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
                content={<Main path={path} />}
              />
            </Route>
            <Route exact path="/experience">
              <DrawerLeft
                onChangeTheme={onChangeTheme}
                language={language}
                content={<Test />}
              />
            </Route>
            <Route exact path="/games">
              <DrawerLeft
                onChangeTheme={onChangeTheme}
                language={language}
                content={<Pong />}
              />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </header>
      </div>
    </ThemeProvider>
  );
}
