import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import landingImg from '../../assets/landingImg.svg';
import fireIcon from '../../assets/fireIcon.svg';
import freeIcon from '../../assets/freeIcon.svg';
import heartIcon from '../../assets/heartIcon.svg';

import {
  Home,
  Container,
  Header,
  LeftContent,
  LandingBody,
  Plans,
  Vantagens,
  TitlePlans,
  CardPlans,
  Card,
} from './styles';

const SignIn: React.FC = () => {
  const { push } = useHistory();

  const goToLogin = useCallback(() => {
    push('/login');
  }, [push]);

  const goToSign = useCallback(() => {
    push('/cadastro');
  }, [push]);

  return (
    <Container>
      <Home>
        <Header>
          <strong>Impetus</strong>
        </Header>
        <LandingBody>
          <LeftContent>
            <strong>Por um RH humanizado, rápido e inteligente.</strong>
            <span>Quer fazer parte dessa transformação ?</span>
            <button type="button" onClick={goToSign}>
              <span>Cadastre-se</span>
            </button>
            <span>
              Já faz parte ?{' '}
              <button type="button" onClick={goToLogin}>
                Entre
              </button>{' '}
              com seu login.
            </span>
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

        <CardPlans>
          <Card>
            <strong>DEMO</strong>
            <img src={fireIcon} alt="fireIcon" />
            <span>Teste grátis durante 7 dias</span>
            <button type="button">Teste já</button>
          </Card>
          <Card>
            <strong>ENTERPRISE</strong>
            <img src={freeIcon} alt="freeIcon" />
            <span>Contrate o plano e pague apenas quando for usar</span>
            <button type="button">Contratar</button>
          </Card>
          <Card>
            <strong>PREMIUM</strong>
            <img src={heartIcon} alt="heartIcon" />
            <span>Feche um plano personalizado</span>
            <button type="button">Contratar</button>
          </Card>
        </CardPlans>
      </Plans>
    </Container>
  );
};

export default SignIn;
