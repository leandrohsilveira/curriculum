import React from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "../config/i18n";
import Intro from "./Intro";

class Root extends React.Component {
  i18n = null;

  componentWillMount() {
    const { match } = this.props;
    const { lang } = match.params;
    this.i18n = i18n(lang);
  }

  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <Intro />
      </I18nextProvider>
    );
  }
}

export default Root;
