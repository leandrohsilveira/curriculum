import React from "react";
import styled from "styled-components";
import { translate } from "react-i18next";
import { isResourceLoaded } from "utils/translate";

const i18nResources = ["about"];

const Container = styled.div`
  margin: 24px;
`;

const Paragraph = styled.p``;

const About = ({ t, i18n }) => {
  if (isResourceLoaded(i18n, i18nResources)) {
    return (
      <Container>
        <Paragraph>{t("about")}</Paragraph>
      </Container>
    );
  }
  return null;
};

export default translate(i18nResources)(About);
