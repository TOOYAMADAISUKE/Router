import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./page1";
import { Page2 } from "./page2";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">page1</Link>
        <br />
        <Link to="page2">page2</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route exact path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
