import React from "react";
import styled from "styled-components";
import moment from "moment";
import { translate } from "react-i18next";

import { isResourceLoaded } from "utils/translate";
import EventDate from "components/EventDate";
// moment(date).format("DD/MM/YYYY")

const JobEntryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const EventPeriod = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const EventDescription = styled.div``;

const i18nResources = ["jobs"];

const JobEntry = ({ t, i18n, started, ended, description }) => {
  if (isResourceLoaded(i18n, i18nResources)) {
    const format = t("dateFormat");
    const endType = !!ended ? "ended" : "current";
    const endValue = (ended && moment(ended).format(format)) || t("today");
    return (
      <JobEntryContainer>
        <EventPeriod>
          <EventDate type="started" date={moment(started).format(format)} />
          <EventDate type={endType} date={endValue} />
        </EventPeriod>
        <EventDescription>{description}</EventDescription>
      </JobEntryContainer>
    );
  }
  return null;
};

export default translate(i18nResources)(JobEntry);
