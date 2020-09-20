import React, { useCallback } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import SignInImg from '../../assets/SignInImg.svg';

import { Container, Header, Body, CardsCandidate } from './styles';

const Candidates: React.FC = () => {
  // const { goBack, push } = useHistory();

  // const back = useCallback(() => {
  //   goBack();
  // }, [goBack]);

  // const goToLogin = useCallback(() => {
  //   push('/login');
  // }, [push]);

  return (
    <Container>
      <Header>
        <button type="button">Cadastrar vaga</button>
        <button type="button">Cadastrar template</button>
      </Header>

      <Body>
        <CardsCandidate>
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
            <button type="button">Ver candidatos</button>
          </footer>
        </CardsCandidate>
        <CardsCandidate>
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
            <button type="button">Ver candidatos</button>
          </footer>
        </CardsCandidate>
      </Body>
    </Container>
  );
};

export default Candidates;
