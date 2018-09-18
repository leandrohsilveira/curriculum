import React from "react";
import styled from "styled-components";

const url = "https://avatars0.githubusercontent.com/u/8015037?s=200&v=4";

const Container = styled.header`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 15px;
`;

const Name = styled.h1``;

const Intro = props => {
  return (
    <Container>
      <Avatar src={url} alt="Avatar" />
      <Name>Leandro Hinckel Silveira</Name>
    </Container>
  );
};

export default Intro;
