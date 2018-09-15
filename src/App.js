import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import i18n from "./config/i18n";
import Root from "./root/Root";

class App extends Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Switch>
            <Route path="/:lang" component={Root} />
            <Route path="/" component={Root} />
          </Switch>
        </BrowserRouter>
      </I18nextProvider>
    );
  }
}

export default App;
