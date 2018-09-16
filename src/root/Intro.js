import React from "react";
import styled from "styled-components";
import { translate } from "react-i18next";

const Container = styled.div`
  color: blue;
`;

const Intro = ({ t }) => <Container>{t("intro")}</Container>;

export default translate("root")(Intro);
