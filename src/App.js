import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import CustomButton from "./components/CustomButton";
import SideBar from "./components/SideBar";
import NotFound from "./components/NotFound";
import myStyle from "./styles/MyStyle";

function App() {
  return (
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
        <SideBar />
      </header>
    </div>
  );
}

export default App;
