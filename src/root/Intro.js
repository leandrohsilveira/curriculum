import React from "react";
import styled from "styled-components";
import { translate } from "react-i18next";

const url = "https://avatars0.githubusercontent.com/u/8015037?s=200&v=4";

const Container = styled.div`
  color: blue;
`;

const Intro = ({ t }) => (
  <Container>
    <img src={url} alt={t("picture")} />
  </Container>
);

export default translate("intro")(Intro);
