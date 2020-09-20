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

  const tipos = [
    {
      title: 'Desenvolvedor frontend',
      subtitle: 'PJ, remoto',
      bio:
        'Atuar como desenvolvedor frontend lidando diretamente com demandas que exigem senso de urgência e agilidade. Requisitos básicos par  a vaga',
      habilites: [
        { index: 1, name: 'ReactJs' },
        { index: 1, name: 'VueJs' },
        { index: 1, name: 'CSS' },
        { index: 1, name: 'HTML' },
      ],
      index: 1,
    },
    {
      title: 'Desenvolvedor backend',
      subtitle: 'PJ, remoto',
      bio:
        'Atuar como desenvolvedor backend lidando diretamente com demandas que exigem senso de urgência e agilidade. Requisitos básicos par  a vaga',
      habilites: [
        { index: 1, name: 'JS' },
        { index: 1, name: 'NodeJs' },
        { index: 1, name: 'MongoDB' },
        { index: 1, name: 'Postgres' },
      ],
      index: 2,
    },
    {
      title: 'Desenvolvedor mobile',
      subtitle: 'PJ, remoto',
      bio:
        'Atuar como desenvolvedor mobile lidando diretamente com demandas que exigem senso de urgência e agilidade. Requisitos básicos par  a vaga',
      habilites: [
        { index: 1, name: 'React-Native' },
        { index: 1, name: 'Swift' },
        { index: 1, name: 'JS' },
      ],
      index: 3,
    },
  ];

  return (
    <Container>
      <Header>
        <FiArrowLeft size={20} onClick={signOut} />

        <button type="button">Cadastrar vaga</button>
        <button type="button">Cadastrar template</button>
      </Header>

      <Body>
        {tipos.map((item) => (
          <CardsCandidate key={item.index}>
            <strong className="title">{item.title}</strong>
            <span className="subtitle">{item.subtitle}</span>
            <span className="bio">{item.bio} </span>
            <ul className="habilites">
              {item.habilites.map((hability) => (
                <li key={hability.index}>{hability.name}</li>
              ))}
            </ul>
            <footer>
              <span>Disponível</span>
              <button type="button" onClick={goToCandidates}>
                Ver candidatos
              </button>
            </footer>
          </CardsCandidate>
        ))}
      </Body>
    </Container>
  );
};

export default DashBoard;
