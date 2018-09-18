import React from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "config/i18n";
import Intro from "app/root/intro/Intro";
import Layout from "app/root/layout/Layout";

class Root extends React.Component {
  i18n = null;

  componentWillMount() {
    const { match } = this.props;
    const { lang } = match.params;
    this.i18n = i18n(lang.toLowerCase());
  }

  componentWillReceiveProps(nextProps) {
    const { lang: nextLang } = nextProps.match.params;
    const { lang: currentLang } = this.props.match.params;
    console.log(this.i18n, currentLang, nextLang);
    if (nextLang !== currentLang) {
      this.i18n.changeLanguage(nextLang);
    }
  }

  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <Layout>
          <Intro />
        </Layout>
      </I18nextProvider>
    );
  }
}

export default Root;
