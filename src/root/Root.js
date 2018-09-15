import React from "react";
import styled from "styled-components";
import { translate } from "react-i18next";

const Container = styled.div`
  color: blue;
`;

class Root extends React.Component {
  componentWillMount() {
    const { i18n, match } = this.props;
    if (match.params) {
      const { lang } = match.params;
      if (lang) {
        i18n.changeLanguage(lang);
      }
    }
  }

  render() {
    const { t } = this.props;
    return <Container>{t("intro")}</Container>;
  }
}

export default translate("root")(Root);
