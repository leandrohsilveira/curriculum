import React from "react";
import styled from "styled-components";
import { translate } from "react-i18next";

const Container = styled.div`
  margin: 24px;
`;

const Paragraph = styled.p``;

const About = ({ t }) => (
  <Container>
    <Paragraph>{t("about")}</Paragraph>
  </Container>
);

export default translate(["about"])(About);
