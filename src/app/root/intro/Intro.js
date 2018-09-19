import React from "react";
import styled from "styled-components";
import { translate } from "react-i18next";

const url = "https://avatars0.githubusercontent.com/u/8015037?s=200&v=4";

const Container = styled.header`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 15px;
`;

const Name = styled.h1`
  font-size: 1.7em;
`;

const Data = styled.div``;

const Info = styled.p``;
const Contact = styled.address``;

const Intro = ({ t }) => {
  return (
    <Container>
      <Avatar src={url} alt={t("avatar")} />
      <Data>
        <Name>{t("name")}</Name>
        <Info>
          {t("nationality")}, {t("age", { years: 27 })}, {t("reside")}
        </Info>
        <Contact>
          <a href={`mailto:${t("email")}`}>{t("email")}</a>, {t("phone")}
        </Contact>
      </Data>
    </Container>
  );
};

export default translate(["intro"])(Intro);
