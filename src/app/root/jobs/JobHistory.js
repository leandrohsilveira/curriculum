import React from "react";
import styled from "styled-components";
import { translate } from "react-i18next";
import moment from "moment";

import { isResourceLoaded } from "utils/translate";
import media from "config/media";
import JobEntry from "app/root/jobs/JobEntry";

const JobHistoryContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 24px;

  ${media.query.maxSm} {
    margin: 24px 0;
  }
`;

const i18nResources = ["jobs"];

const parseDate = input => moment(input, "DD/MM/YYYY").toDate();

const JobHistory = ({ t, i18n }) => {
  if (isResourceLoaded(i18n, i18nResources)) {
    return (
      <JobHistoryContainer>
        <JobEntry
          started={parseDate("06/04/2012")}
          ended={parseDate("21/08/2012")}
          company="CPM Braxis Capgemini"
          jobRole="Estagiário"
          description="Codificar e evidenciar testes para aceitação das demandas, atuando na fábrica de software em um processo de com programação na linguagem COBOL LE para o setor financeiro."
        />
        <JobEntry
          started={parseDate("10/09/2012")}
          company="BRy Tecnologia S.A."
          jobRole="Programador Sênior"
          description="Discutir, estimar, codificar e testar novas demandas, prestando suporte nível dois em um processo de desenvolvimento dinâmico e suscetível a mudanças. Atuando no desenvolvimento de serviços na nuvem e fábrica de software na área de certificação e assinatura digital, trabalhando principalmente no front-end com Angular 6, Angular JS e auxiliando no back-end com JEE 6 e Spring Framework."
        />
      </JobHistoryContainer>
    );
  }
  return null;
};

export default translate(i18nResources)(JobHistory);
