import React, { useCallback } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container, Content, Header, Body, CandidatesCard } from './styles';

const Candidates: React.FC = () => {
  const { goBack, push } = useHistory();

  const back = useCallback(() => {
    goBack();
  }, [goBack]);

  const goToCadidate = useCallback(
    (id) => {
      push(`/candidates/${id}`);
    },
    [push],
  );

  const candidates = [
    { name: 'Julia Stefano', telephone: '3387234976', index: 1 },
    { name: 'Gabriel Pereira', telephone: '33991389938', index: 2 },
    { name: 'João Vitor', telephone: '3387234976', index: 3 },
    { name: 'Giovany Nogueira', telephone: '3387234976', index: 4 },
  ];

  return (
    <Container>
      <Header>
        <FiArrowLeft size={20} onClick={back} />
      </Header>

      <Body>
        <Content>
          <strong>Candidatos cadastrados</strong>
          <ul>
            {candidates.map((item) => (
              <CandidatesCard key={item.index}>
                <li>
                  <div className="candidate">
                    <span>{item.name}</span>
                    <span className="telephone">{item.telephone}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => goToCadidate(item.index)}
                  >
                    Dar Feedback
                  </button>
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
