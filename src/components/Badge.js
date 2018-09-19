import React from "react";
import styled from "styled-components";

import Icon from "./Icon";

const Container = styled.span`
  font-style: normal;
  display: flex;
  align-items: center;
  background-color: #ccc;
  border-radius: 25px;
  padding: 8px;
  margin: 5px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const BadgeIcon = styled(Icon)`
  margin-right: 5px;
`;

const BadgeContent = styled.span``;

const Badge = ({ icon, href, children }) => {
  const content = (
    <Container>
      {!!icon && <BadgeIcon icon={icon} />}
      <BadgeContent>{children}</BadgeContent>
    </Container>
  );
  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
};

export default Badge;
