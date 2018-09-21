import React from "react";

import Icon from "components/Icon";
import styled from "styled-components";

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #333;
  height: 36px;

  &:focus,
  &:active {
    outline: none;
  }
`;

const IconBtn = styled(Icon)`
  height: 24px;
  width: 24px;
`;

const Button = ({ icon, children, ...rest }) => (
  <Btn {...rest}>
    {!!icon && <IconBtn icon={icon} />}
    {children}
  </Btn>
);

export default Button;
