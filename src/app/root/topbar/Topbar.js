import React from "react";
import { translate } from "react-i18next";
import styled from "styled-components";

import Button from "components/Button";
import Print from "icons/Print";

import brazilFlag from "./brazil-flag.png";
import euaFlag from "./eua-flag.png";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media print {
    display: none;
  }
`;

const ImageIcon = styled.img`
  height: 24px;
  width: 24px;
`;

const BrazilIcon = props => <ImageIcon {...props} src={brazilFlag} />;
const EuaIcon = props => <ImageIcon {...props} src={euaFlag} />;

class Topbar extends React.Component {
  render() {
    return (
      <Container>
        <Button icon={Print} onClick={this.handlePrintClick} />
        <Button
          value="pt-br"
          icon={BrazilIcon}
          onClick={this.handleFlagClick}
        />
        <Button value="en" icon={EuaIcon} onClick={this.handleFlagClick} />
      </Container>
    );
  }

  handlePrintClick = () => {
    window.print();
  };

  handleFlagClick = event => {
    event.preventDefault();
    const { history } = this.props;
    const { value } = event.currentTarget;
    history.push(`/${value}`);
  };
}

export default translate([])(Topbar);
