import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Root from "app/root/Root";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/:lang" component={Root} />
          <Redirect to="/pt-br" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
