import React, { useCallback } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container, Header, Body, CardsCandidate } from './styles';

const DashBoard: React.FC = () => {
  const { goBack, push } = useHistory();

  const goToCandidates = useCallback(() => {
    push('/candidates');
  }, [push]);

  const signOut = useCallback(() => {
    goBack();
  }, [goBack]);

  const tipos = [1, 2, 3];

  return (
    <Container>
      <Header>
        <FiArrowLeft size={20} onClick={signOut} />

        <button type="button">Cadastrar vaga</button>
        <button type="button">Cadastrar template</button>
      </Header>

      <Body>
        {tipos.map((index) => (
          <CardsCandidate key={index}>
            <strong className="title">Desenvolvedor frontend</strong>
            <span className="subtitle">PJ, remoto</span>
            <span className="bio">
              Atuar como desenvolvedor frontend lidando diretamente com demandas
              que exigem senso de urgência e agilidade. Requisitos básicos para
              a vaga:
            </span>
            <ul className="habilites">
              <li>React</li>
              <li>VueJs</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>
            <footer>
              <span>Disponível</span>
              <button type="button" onClick={goToCandidates}>
                Ver candidatos
              </button>
            </footer>
          </CardsCandidate>
        ))}
        {/* <CardsCandidate>
          <strong className="title">Desenvolvedor frontend</strong>
          <span className="subtitle">PJ, remoto</span>
          <span className="bio">
            Atuar como desenvolvedor frontend lidando diretamente com demandas
            que exigem senso de urgência e agilidade. Requisitos básicos para a
            vaga:
          </span>
          <ul className="habilites">
            <li>React</li>
            <li>VueJs</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
          </ul>
          <footer>
            <span>Disponível</span>
            <button type="button" onClick={goToCandidates}>
              Ver candidatos
            </button>
          </footer>
        </CardsCandidate> */}
      </Body>
    </Container>
  );
};

export default DashBoard;
