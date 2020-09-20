import React, { useCallback } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';

import {
  Container,
  Content,
  Header,
  Body,
  CandidatesCard,
  Steps,
} from './styles';

const Status: React.FC = () => {
  const { goBack, push } = useHistory();
  const { id } = useParams();

  const back = useCallback(() => {
    goBack();
  }, [goBack]);

  const candidates = [
    { name: 'Julia Stefano', telephone: '3387234976', index: 1 },
    { name: 'Gabriel Pereira', telephone: '33991389938', index: 2 },
    { name: 'João Vitor', telephone: '3387234976', index: 3 },
    { name: 'Giovany Nogueira', telephone: '3387234976', index: 4 },
  ];
  const steps = [
    {
      title: 'Etapa 1',
      description:
        'Atuar como desenvolvedor frontend lidando diretamente com demandas que exigem senso de urgência e agilidade.',
      date: '29/10/2020',
      index: 1,
    },
    {
      title: 'Etapa 2',
      description:
        'Atuar como desenvolvedor frontend lidando diretamente com demandas que exigem senso de urgência e agilidade.',
      date: '29/10/2020',
      index: 2,
    },
  ];

  return (
    <Container>
      <Header>
        <FiArrowLeft size={20} onClick={back} />
      </Header>

      <Body>
        <Content>
          <strong>Etapas do candidato</strong>
          <ul>
            <CandidatesCard key={candidates[id - 1].index}>
              <li>
                <div className="candidate">
                  <span>{candidates[id - 1].name}</span>
                  <span className="telephone">
                    {candidates[id - 1].telephone}
                  </span>
                </div>
                <span>Dev Frontend</span>
              </li>
            </CandidatesCard>

            {steps.map((step) => (
              <Steps key={step.index}>
                <div className="left">
                  <strong>{step.title}</strong>
                  <span>{step.description}</span>
                </div>
                <span>{step.date}</span>
                <select>
                  <option value="default" selected>
                    Selecione um feedback
                  </option>
                  <option value="feedback1">Feedback 1</option>
                  <option value="feedback2">Feedback 2</option>
                  <option value="feedback3">Feedback 3</option>
                </select>
              </Steps>
            ))}
          </ul>
        </Content>
      </Body>
    </Container>
  );
};

export default Status;
