import React, { useCallback } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import loginImg from '../../assets/loginImg.svg';

import { Container, LoginContainer, Input, ImageContainer } from './styles';

const SignIn: React.FC = () => {
  const { goBack, push } = useHistory();

  const back = useCallback(() => {
    goBack();
  }, [goBack]);

  const login = useCallback(() => {
    push('/dashboard');
  }, [push]);

  return (
    <Container>
      <LoginContainer>
        <div>
          <FiArrowLeft size={20} onClick={back} />
          <strong>Login</strong>
        </div>
        <Input>
          <span>Email</span>
          <input type="email" placeholder="email@exemplo.com" />
        </Input>
        <Input>
          <span>Senha</span>
          <input type="password" placeholder="***********" />
        </Input>
        <button type="button" onClick={login}>
          Entrar
        </button>
      </LoginContainer>
      <ImageContainer>
        <img src={loginImg} alt="loginImg" />
      </ImageContainer>
    </Container>
  );
};

export default SignIn;
