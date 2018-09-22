import React from "react";
import { I18nextProvider } from "react-i18next";
import { Route } from "react-router-dom";

import i18n from "config/i18n";
import Topbar from "app/root/topbar/Topbar";
import Intro from "app/root/intro/Intro";
import About from "app/root/about/About";
import Layout from "app/root/layout/Layout";
import JobHistory from "app/root/jobs/JobHistory";

class Root extends React.Component {
  render() {
    return (
      <I18nextProvider i18n={i18n()}>
        <Layout>
          <Route component={Topbar} />
          <Intro />
          <About />
          <JobHistory />
        </Layout>
      </I18nextProvider>
    );
  }
}

export default Root;
