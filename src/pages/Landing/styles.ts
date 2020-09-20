import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Home = styled.section`
  height: 100vh;
  padding-top: 37px;
  background: #f5f2f2;
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

export const LandingBody = styled.body`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 50px 100px;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    width: 504px;
    font-family: Ubuntu;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 55px;
    letter-spacing: 0em;
    text-align: left;
    color: #1d2a30, 100%;
  }
  > span {
    margin-top: 10px;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    color: #6c6c80;

    > button {
      background: none;
      border: 0;

      margin-top: 10px;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      line-height: 38px;
      letter-spacing: 0em;
      font-weight: 700;
      color: #583c9f;

      cursor: pointer;
    }
  }

  > button {
    height: 62px;
    width: 250px;
    left: 59px;
    top: 407px;
    border-radius: 8px;
    color: #fff;
    background: #583c9f;
    border: 0;
    margin-top: 22px;

    > span {
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: right;
    }
  }
`;

export const Plans = styled.section`
  width: 100%;
  height: 100%;
`;

export const Vantagens = styled.div`
  padding: 120px 160px;
  display: grid;
  grid-template: 1fr 1fr;
  grid-template-areas:
    'vantagem1 .'
    '. vantagem3'
    'vantagem2 .'
    '. vantagem4';

  div {
    position: relative;
    font-family: Archivo;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 30px;

    width: 370px;
  }

  .vantagem1 {
    grid-area: vantagem1;
    color: #965bc6;

    &::before {
      content: '';
      position: absolute;
      width: 5px;
      height: 150px;
      background: #965bc6;
      margin-left: -30px;
      margin-top: -12%;
      border-radius: 20px;
    }
  }
  .vantagem2 {
    margin-top: 120px;
    grid-area: vantagem2;
    color: #fd6153;

    &::before {
      content: '';
      position: absolute;
      width: 5px;
      height: 150px;
      background: #fd6153;
      margin-left: -30px;
      margin-top: -5%;
      border-radius: 20px;
    }
  }
  .vantagem3 {
    grid-area: vantagem3;
    color: #ddbd00;

    &::before {
      content: '';
      position: absolute;
      width: 5px;
      height: 150px;
      background: #ddbd00;
      margin-left: -30px;
      margin-top: -15%;
      border-radius: 20px;
    }
  }
  .vantagem4 {
    grid-area: vantagem4;
    color: #52a0fa;

    &::before {
      content: '';
      position: absolute;
      width: 5px;
      height: 150px;
      background: #52a0fa;
      margin-left: -30px;
      margin-top: -5%;
      border-radius: 20px;
    }
  }
`;

export const TitlePlans = styled.div`
  height: 100px;
  width: 548px;
  background: #583c9f;
  border-radius: 0px 10px 10px 0px;

  font-family: Quicksand;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: 0em;
  text-align: left;
  color: #fafafa;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardPlans = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 879px;
  margin: 85px auto;
`;

export const Card = styled.div`
  height: 391px;
  width: 267px;
  border-radius: 8px;
  background: #dfd1ea;
  border: 1px solid #765cb4;
  box-sizing: border-box;
  border-radius: 8px;
  color: #6c6c80;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 25px;

  > strong {
    font-family: Ubuntu;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
  }

  > span {
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: center;
  }

  > button {
    width: 201px;
    height: 47px;

    background: #583c9f;
    border-radius: 8px;
    border: none;

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    color: #fff;
  }
`;
