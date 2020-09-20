import styled from 'styled-components';

import Background from '../../assets/background.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeBackGround = styled.section`
  height: 100vh;
  padding: 37px;
  background-image: url(${Background});
  background-repeat: no-repeat;
`;

export const Header = styled.header`
  width: 100vw;
  height: 80px;
  padding: 0 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: #ff5844;
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    line-height: 56px;
    text-shadow: 0px 4px 4px rgba(244, 160, 156, 0.8);
  }
`;

export const HeaderNav = styled.div`
  width: 440px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;

    color: #0d0d0d;
  }

  button {
    background: none;
    padding: 10px 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #ff5844;
    border: 2px solid #ff5844;
    border-radius: 8px;
  }
`;

export const LandingBody = styled.body`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px;

  > strong {
    width: 398px;
    font-family: Roboto;
    font-size: 46px;
    font-style: normal;
    font-weight: 700;
    line-height: 54px;
    letter-spacing: 0em;
    text-align: left;
    color: #642099;
  }
`;

export const Plans = styled.section`
  padding: 120px;

  width: 100%;
  height: 100%;
`;

export const Cadastro = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .cadastrar {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    strong {
      font-family: Quicksand;
      font-size: 45px;
      font-style: normal;
      font-weight: 700;
      line-height: 56px;
      letter-spacing: 0em;
      text-align: right;
    }

    button {
      font-family: Roboto;
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 33px;
      letter-spacing: 0em;
      text-align: center;

      width: 350px;
      height: 70px;
      background: #3f3d56;
      border-radius: 10px;
      color: #fff;
      border: 0;
      margin-top: 52px;
    }
  }
`;
