import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

const AppIntro = styled.div`
  color: red;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </BrowserRouter>
    );
  }
}

export default App;
