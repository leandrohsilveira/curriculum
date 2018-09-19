import React from "react";
import styled from "styled-components";
import { translate } from "react-i18next";

import Badge from "components/Badge";

const url = "https://avatars0.githubusercontent.com/u/8015037?s=200&v=4";

const width = 660;

const Container = styled.header`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${width}px) {
    flex-direction: column;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin: 15px;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: ${width}px) {
    text-align: center;
  }
`;

const Name = styled.h1`
  font-size: 1.7em;
  margin: 0;
  @media screen and (max-width: ${width}px) {
    font-size: 1.4em;
  }
`;

const Info = styled.p`
  display: flex;
  margin: 0;
  flex-wrap: wrap;
  @media screen and (max-width: ${width}px) {
    justify-content: center;
  }
`;

const Contact = styled.address`
  display: flex;
  margin: 0;
  flex-wrap: wrap;
  @media screen and (max-width: ${width}px) {
    justify-content: center;
  }
`;

const Intro = ({ t }) => {
  return (
    <Container>
      <Avatar src={url} alt={t("avatar")} />
      <Data>
        <Name>{t("name")}</Name>
        <Info>
          <Badge icon="language">{t("nationality")}</Badge>
          <Badge icon="face">{t("age", { years: 27 })}</Badge>
          <Badge icon="home">{t("reside")}</Badge>
        </Info>
        <Contact>
          <Badge href={`mailto:${t("email")}`} icon="email">
            {t("email")}
          </Badge>
          <Badge icon="phone">{t("phone")}</Badge>
        </Contact>
      </Data>
    </Container>
  );
};

export default translate(["intro"])(Intro);
