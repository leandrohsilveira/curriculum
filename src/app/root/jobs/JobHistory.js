import React from "react";
import styled from "styled-components";
import { translate } from "react-i18next";
import moment from "moment";

import { isResourceLoaded } from "utils/translate";
import media from "config/media";
import JobEntry from "app/root/jobs/JobEntry";

const JobHistoryContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 24px;

  ${media.query.maxSm} {
    margin: 24px 0;
  }
`;

const i18nResources = ["jobs"];

const parseDate = input => moment(input, "DD/MM/YYYY").toDate();

const JobHistory = ({ t, i18n }) => {
  if (isResourceLoaded(i18n, i18nResources)) {
    return (
      <JobHistoryContainer>
        <JobEntry
          started={parseDate("06/04/2012")}
          ended={parseDate("21/08/2012")}
          description="CPM Braxis Capgemini"
        />
        <JobEntry
          started={parseDate("10/09/2012")}
          description="BRy Tecnologia S.A."
        />
      </JobHistoryContainer>
    );
  }
  return null;
};

export default translate(i18nResources)(JobHistory);
