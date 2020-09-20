import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  height: 350px;
  background: #f0f0f5;

  padding: 90px 219px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  > svg {
    background: #fff;
    padding: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;

    margin-right: auto;

    cursor: pointer;
  }

  button {
    height: 40px;
    width: 206px;
    border-radius: 8px;
    background: #8257e5;
    border: 0;
    color: #fff;

    font-family: Ubuntu;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;

    margin-left: 15px;
  }
`;

export const Body = styled.body`
  width: 69%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-top: -80px;
`;

export const CardsCandidate = styled.div`
  display: flex;
  flex-direction: column;

  /* height: 83%; */
  width: 48%;
  border-radius: 8px;

  background: #ffffff;
  border: 1px solid #edebeb;
  box-sizing: border-box;

  margin-top: 20px;

  > strong {
    margin-top: 20px;
    margin-left: 20px;

    font-family: Archivo;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    color: #32264d;
  }

  > span {
    margin: 0 20px;

    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;

    color: #6a6180;
  }

  .subtitle {
    margin-bottom: 10px;
  }

  .habilites {
    margin-top: 10px;
  }

  li {
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;

    margin-left: 40px;

    color: #6a6180;

    &:last-child {
      margin-bottom: 10px;
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: auto;
    height: 65px;
    width: 100%;
    padding: 0 10%;

    background: #fafafc;
    border: 1px solid #e6e6f0;
    box-sizing: border-box;
    border-radius: 0px 0px 8px 8px;

    font-family: Archivo;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    color: #8257e5;

    > button {
      height: 30px;
      width: 125px;
      border: 0;
      background: #8257e5;
      border-radius: 4px;

      font-family: Archivo;
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: 0em;
      color: #fff;
    }
  }
`;
