import React from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "config/i18n";
import Intro from "app/root/intro/Intro";
import About from "app/root/about/About";
import Layout from "app/root/layout/Layout";

class Root extends React.Component {
  render() {
    return (
      <I18nextProvider i18n={i18n()}>
        <Layout>
          <Intro />
          <About />
        </Layout>
      </I18nextProvider>
    );
  }
}

export default Root;
