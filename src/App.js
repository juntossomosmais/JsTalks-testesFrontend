import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Button, Header, MainWrapper } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <MainWrapper>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Button text="Click" />} />
          </Switch>
        </Router>
      </MainWrapper>
    </div>
  );
}

export default App;
