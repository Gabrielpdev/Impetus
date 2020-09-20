import React from 'react';
import { NavLink } from 'react-router-dom';

import landingImg from '../../assets/landingImg.svg';
import plans from '../../assets/plans.svg';

import {
  HomeBackGround,
  Container,
  Header,
  HeaderNav,
  LandingBody,
  Plans,
  Cadastro,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <HomeBackGround>
        <Header>
          <strong>Impetus</strong>
          <HeaderNav>
            <NavLink to="">Home</NavLink>
            <NavLink to="#planos">Planos</NavLink>
            <NavLink to="">Sobre nós</NavLink>
            <button type="button" onClick={() => {}} className="login">
              Entrar
            </button>
          </HeaderNav>
        </Header>
        <LandingBody>
          <strong>Por um RH humanizado, rápido e inteligente.</strong>
          <img src={landingImg} alt="landingImg" />
        </LandingBody>
      </HomeBackGround>

      <Plans>
        <Cadastro>
          <img src={plans} alt="plans" />
          <div className="cadastrar">
            <strong>Quer fazer parte dessa transformação?</strong>
            <button type="button">Cadastre-se</button>
          </div>
        </Cadastro>
      </Plans>
    </Container>
  );
};

export default SignIn;
