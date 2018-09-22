import React from "react";
import styled, { css } from "styled-components";

const IconWrapper = styled.span`
  ${({ size = 24 }) => css`
    height: ${size}px;
    width: ${size}px;
  `}
`;

const Icon = ({ icon: IconElement, size, className }) => (
  <IconWrapper className={className} size={size}>
    <IconElement />
  </IconWrapper>
);

export default Icon;
