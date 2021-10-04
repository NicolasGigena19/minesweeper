import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/LandingPage/index";
import GameBoard from "./pages/GameBoard/index";
import GameHistory from "./pages/GameHistory/index";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/game/:id" component={GameBoard} />
      <Route exact path="/history" component={GameHistory} />
    </Switch>
  </div>
);

export default App;
