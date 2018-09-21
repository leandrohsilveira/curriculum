import React from "react";

import Icon from "components/Icon";
import styled from "styled-components";

const Btn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #333;
  color: #333;
  height: 36px;
  border-radius: 30px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  }
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
