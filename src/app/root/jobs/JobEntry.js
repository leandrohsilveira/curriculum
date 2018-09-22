import React from "react";
import styled from "styled-components";
import moment from "moment";
import { translate } from "react-i18next";

import { isResourceLoaded } from "utils/translate";
import EventDate from "components/EventDate";

const JobEntryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:not(:last-child) {

    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #ccc;
  }
`;

const JobPeriod = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const JobData = styled.div`
  display: flex;
  flex-direction: column;
`;

const JobCompanyName = styled.h3`
  margin: 5px 0;
`;
const JobRole = styled.h4`
  margin: 5px 0;
`;
const JobDescription = styled.p`
  margin: 5px 0;
`;

const i18nResources = ["jobs"];

const JobEntry = ({
  t,
  i18n,
  started,
  ended,
  company,
  jobRole,
  description
}) => {
  if (isResourceLoaded(i18n, i18nResources)) {
    const format = t("dateFormat");
    const endType = !!ended ? "ended" : "current";
    const endValue = (ended && moment(ended).format(format)) || t("today");
    return (
      <JobEntryContainer>
        <JobPeriod>
          <EventDate type="started" date={moment(started).format(format)} />
          <EventDate type={endType} date={endValue} />
        </JobPeriod>
        <JobData>
          <JobCompanyName>{company}</JobCompanyName>
          <JobRole>{jobRole}</JobRole>
          <JobDescription>{description}</JobDescription>
        </JobData>
      </JobEntryContainer>
    );
  }
  return null;
};

export default translate(i18nResources)(JobEntry);
