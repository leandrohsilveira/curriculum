import React from "react";
import styled from "styled-components";
import { translate } from "react-i18next";

import { isResourceLoaded } from "utils/translate";
import Language from "icons/Language";
import Face from "icons/Face";
import Home from "icons/Home";
import Email from "icons/Email";
import Phone from "icons/Phone";

import media from "config/media";

import Badge from "components/Badge";

const url = "https://avatars0.githubusercontent.com/u/8015037?s=200&v=4";

const Container = styled.header`
  display: flex;
  align-items: center;

  ${media.query.maxSm} {
    flex-direction: column;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin: 15px;

  transition:
    border-radius 500ms cubic-bezier(0.25, 0.8, 0.25, 1);
  
  &:hover {
    border-radius: 0%;
  }

  @media print {
    display: none;
  }
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${media.query.print} {
    margin: 10px 15px;
  }
  ${media.query.maxSm} {
    text-align: center;
  }
`;

const Name = styled.h1`
  font-size: 1.7em;
  margin: 15px 5px;
  ${media.query.maxSm} {
    font-size: 1.4em;
  }
`;

const Info = styled.p`
  display: flex;
  margin: 0;
  flex-wrap: wrap;
  ${media.query.maxSm} {
    justify-content: center;
  }
`;

const Contact = styled.address`
  display: flex;
  margin: 0;
  flex-wrap: wrap;
  ${media.query.maxSm} {
    justify-content: center;
  }
`;

const i18nResources = ["intro"];

const Intro = ({ t, i18n }) => {
  if (isResourceLoaded(i18n, i18nResources)) {
    return (
      <Container>
        <Avatar src={url} alt={t("avatar")} />
        <Data>
          <Name>{t("name")}</Name>
          <Info>
            <Badge icon={Language}>{t("nationality")}</Badge>
            <Badge icon={Face}>{t("age", { years: 27 })}</Badge>
            <Badge icon={Home}>{t("reside")}</Badge>
          </Info>
          <Contact>
            <Badge icon={Email} href={`mailto:${t("email")}`}>
              {t("email")}
            </Badge>
            <Badge icon={Phone}>{t("phone")}</Badge>
          </Contact>
        </Data>
      </Container>
    );
  }
  return null;
};

export default translate(i18nResources)(Intro);
