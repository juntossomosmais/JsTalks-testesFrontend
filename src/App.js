import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Button, Header, MainWrapper, InterativeList } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <MainWrapper>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Button text="Click" />} />
            <Route path="/example-2" component={InterativeList} />
          </Switch>
        </Router>
      </MainWrapper>
    </div>
  );
}

export default App;
