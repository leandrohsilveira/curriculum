import React from "react";
import styled from "styled-components";

const Container = styled.main`
  flex: 1;
  display: flex;

  justify-content: center;
  padding: 30px;

  > * {
    max-width: 1024px;
  }

  @media screen and (max-width: 480px) {
    padding: 12px;
  }
`;

const Paper = styled.article`
  padding: 30px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Layout = ({ children }) => (
  <Container>
    <Paper>{children}</Paper>
  </Container>
);

export default Layout;
