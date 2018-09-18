import React from "react";
import styled from "styled-components";

const url = "https://avatars0.githubusercontent.com/u/8015037?s=200&v=4";

const Container = styled.div`
  color: blue;
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

const Intro = props => {
  return (
    <Container>
      <Avatar src={url} alt="Avatar" />
    </Container>
  );
};

export default Intro;
