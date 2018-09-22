import React from "react";
import styled from "styled-components";
import CallSplit from "icons/CallSplit";
import MergeType from "icons/MergeType";
import CheckCircle from "icons/CheckCircle";
import Icon from "components/Icon";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Display = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const EventDate = ({ date, type }) => {
  let IconElement = null;
  switch (type) {
    case "started":
      IconElement = MergeType;
      break;
    case "ended":
      IconElement = CallSplit;
      break;
    case "current":
      IconElement = CheckCircle;
      break;
    default:
      break;
  }
  return (
    <Container>
      <Icon icon={IconElement} size={36} />
      <Display>{date}</Display>
    </Container>
  );
};

export default EventDate;
