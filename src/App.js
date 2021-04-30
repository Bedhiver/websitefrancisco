import DrawerLeft from "./components/DrawerLeft";
import React, { useState } from "react";
import DefaultTheme from "./themes/DefaultTheme";
import { ThemeProvider } from "@material-ui/styles";
import { translateTo } from "./languages/translations";

export default function App() {
  const [isDark, setTheme] = useState(true);
  const defaultTheme = new DefaultTheme();

  const onChangeTheme = () => {
    setTheme(!isDark);
  };

  const language = translateTo("french");

  // const path = {
  //   toHello: "/hello",
  //   toHome: "/",
  // };

  return (
    <ThemeProvider
      theme={isDark ? defaultTheme.darkTheme : defaultTheme.lightTheme}
    >
      <div className="App">
        <header className="App-header">
          {/* <Router>
            <Switch>
              <Route exact path="/hello">
                <CustomLink to={path.toHome} content={<CustomButton />} />
              </Route>
              <Route exact path="/">
                <div>
                  <CustomLink to={path.toHello} content={<h1>HELLO</h1>} />
                </div>
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Router> */}

          <DrawerLeft onChangeTheme={onChangeTheme} language={language} />
          {/* <Switch>
            <Route
              exact path="/"
              component={() => (
                <DrawerLeft onChangeTheme={onChangeTheme} language={language} />
              )}
            />
            <Route exact path="*" component={NotFound} />
          </Switch> */}
        </header>
      </div>
    </ThemeProvider>
  );
}
