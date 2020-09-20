import axios from 'axios';
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
  const { goBack } = useHistory();
  const { id } = useParams();

  const candidates = [
    { name: 'Julia Stefano', telephone: '5513997747643', index: 1 },
    { name: 'Gabriel Pereira', telephone: '5533991389938', index: 2 },
    { name: 'João Vitor', telephone: '5561982716101', index: 3 },
    { name: 'Giovany Nogueira', telephone: '5535998240998', index: 4 },
  ];
  const steps = [
    {
      title: 'Etapa 1',
      description:
        'Etapa de analise de portefólio e de currículo, sem entrevista.',
      date: '29/10/2020',
      index: 1,
    },
    {
      title: 'Etapa 2',
      description: 'Etapa de entrevista com o gestor na área desejada.',
      date: '29/10/2020',
      index: 2,
    },
  ];

  const back = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleMenssage = useCallback(() => {
    axios
      .post(
        'https://api.zenvia.com/v1/channels/whatsapp/messages',
        {
          from: 'spangled-temperature',
          to: candidates[id - 1].telephone,
          contents: [
            {
              type: 'text',
              text: `Parabéns, você passou para a próxima etapa do processo seletivo da empresa Zenvia.\nVocê está agora na etapa de:\nEntrevista com o gestor e seu status é:\nAguardado candidato.\n\nLembre-se qualquer coisa é só me chamar.`,
            },
          ],
        },
        {
          headers: {
            'X-API-TOKEN': process.env.REACT_APP_KEY_API,
          },
        },
      )
      .then((response) => {
        console.log('Response:', response);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [candidates, id]);

  const sendMenssageAndBack = useCallback(() => {
    handleMenssage();
    goBack();
  }, [handleMenssage, goBack]);

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
          <button
            type="button"
            className="saveButton"
            onClick={sendMenssageAndBack}
          >
            Salvar
          </button>
        </Content>
      </Body>
    </Container>
  );
};

export default Status;
