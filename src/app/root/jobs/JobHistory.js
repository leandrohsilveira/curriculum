import React, { Fragment } from "react";
import styled from "styled-components";
import { translate } from "react-i18next";
import moment from "moment";

import { isResourceLoaded } from "utils/translate";
import media from "config/media";
import JobEntry from "app/root/jobs/JobEntry";

const Container = styled.div`
  margin: 24px;

  ${media.query.maxSm} {
    margin: 24px 0;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Title = styled.h2`
  font-size: 1.5em;
  ${media.query.maxSm} {
    font-size: 1.2em;
  }
`;

const i18nResources = ["jobs"];

const parseDate = input => moment(input, "DD/MM/YYYY").toDate();

const JobHistory = ({ t, i18n }) => {
  if (isResourceLoaded(i18n, i18nResources)) {
    return (
      <Container>
        <Title>{t("professionalBackground")}</Title>
        <List>
          <JobEntry
            started={parseDate("06/04/2012")}
            ended={parseDate("21/08/2012")}
            company={t("jobHistory.cpmBraxis.company")}
            jobRole={t("jobHistory.cpmBraxis.role")}
            description={t("jobHistory.cpmBraxis.description")}
          />
          <JobEntry
            started={parseDate("10/09/2012")}
            company={t("jobHistory.bryTecnologia.company")}
            jobRole={t("jobHistory.bryTecnologia.role")}
            description={t("jobHistory.bryTecnologia.description")}
          />
        </List>
      </Container>
    );
  }
  return null;
};

export default translate(i18nResources)(JobHistory);
