import React from 'react';

import landingImg from '../../assets/landingImg.svg';

import {
  Home,
  Container,
  Header,
  LeftContent,
  LandingBody,
  Plans,
  Vantagens,
  TitlePlans,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Home>
        <Header>
          <strong>Impetus</strong>
        </Header>
        <LandingBody>
          <LeftContent>
            <strong>Por um RH humanizado, rápido e inteligente.</strong>
            <span>Quer fazer parte dessa transformação</span>
            <button type="button">
              <span>Cadastre-se</span>
            </button>
          </LeftContent>
          <img src={landingImg} alt="landingImg" />
        </LandingBody>
      </Home>

      <Plans>
        <Vantagens>
          <div className="vantagem1">Baixo custo</div>
          <div className="vantagem2">
            Controle do processo seletivo a disposição do candidato
          </div>
          <div className="vantagem3">Fácil gerenciamento</div>
          <div className="vantagem4">
            Praticidade tanto para empresa quanto para o candidato
          </div>
        </Vantagens>

        <TitlePlans>Nossos planos</TitlePlans>
      </Plans>
    </Container>
  );
};

export default SignIn;
