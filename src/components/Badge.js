import styled from "styled-components";

const baseBadge = element => styled(element)`
  font-style: normal;
  text-decoration: none;
  background-color: #ccc;
  border-radius: 25px;
  padding: 8px;
  color: inherit;
  margin: 5px;
`;

const Badge = baseBadge("span");

export const BadgeLink = baseBadge("a");

export default Badge;
