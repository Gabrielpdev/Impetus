import React, { useCallback } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import SignInImg from '../../assets/SignInImg.svg';

import { Container, LoginContainer, Input, ImageContainer } from './styles';

const SignIn: React.FC = () => {
  const { goBack, push } = useHistory();

  const back = useCallback(() => {
    goBack();
  }, [goBack]);

  const goToLogin = useCallback(() => {
    push('/login');
  }, [push]);

  return (
    <Container>
      <ImageContainer>
        <img src={SignInImg} alt="loginImg" />
        <strong>Abra a porta para novas possibilidades!</strong>
      </ImageContainer>
      <LoginContainer>
        <div>
          <FiArrowLeft size={20} onClick={back} />
          <strong>Cadastro</strong>
        </div>
        <Input>
          <span>Nome Social da Empresa</span>
          <input placeholder="Empresa XXXX" />
        </Input>
        <Input>
          <span>CNPJ</span>
          <input placeholder="xxx.xxx.xxx/xxxx-xx" />
        </Input>
        <Input>
          <span>Telefone</span>
          <input placeholder="(ddd) xxxxx-xxxx" />
        </Input>
        <Input>
          <span>Email</span>
          <input type="email" placeholder="email@exemplo.com" />
        </Input>
        <Input>
          <span>Senha</span>
          <input type="password" placeholder="***********" />
        </Input>
        <button type="button" onClick={goToLogin}>
          Cadastrar
        </button>
      </LoginContainer>
    </Container>
  );
};

export default SignIn;
