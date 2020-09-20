import React, { useCallback } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container, Content, Header, Body, CandidatesCard } from './styles';

const Candidates: React.FC = () => {
  const { goBack } = useHistory();

  const back = useCallback(() => {
    goBack();
  }, [goBack]);

  // const goToLogin = useCallback(() => {
  //   push('/login');
  // }, [push]);

  const candidates = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Container>
      <Header>
        <FiArrowLeft size={20} onClick={back} />
      </Header>

      <Body>
        <Content>
          <strong>Candidatos cadastrados</strong>
          <ul>
            {candidates.map((index) => (
              <CandidatesCard key={index}>
                <li>
                  <div className="candidate">
                    <span>Juia Stefano</span>
                    <span className="telephone">23 - 9231342123</span>
                  </div>
                  <span>Dar Feedback</span>
                </li>
              </CandidatesCard>
            ))}
          </ul>
        </Content>
      </Body>
    </Container>
  );
};

export default Candidates;
