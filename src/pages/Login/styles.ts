import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const LoginContainer = styled.div`
  align-self: center;
  padding: 30px;

  background: #f8f8f8;
  width: 514px;
  height: 70%;
  border-radius: 10px;

  margin-left: 63px;

  div {
    display: flex;
    svg {
      background: #fff;
      padding: 10px;
      width: 50px;
      height: 50px;
      border-radius: 50%;

      cursor: pointer;
    }

    > strong {
      font-family: Roboto;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 42px;
      letter-spacing: 0em;

      display: block;
      margin-left: 30%;
      margin-bottom: 20px;
    }
  }

  > button {
    height: 62px;
    width: 250px;
    margin-top: 11%;

    border-radius: 8px;
    border: 0;
    background: #583c9f;
    border-radius: 8px;

    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    color: #fff;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    margin-top: 30px;
    margin-right: auto;
    color: #6561ad;
  }

  > input {
    outline: none;
    margin-top: 10px;
    height: 40px;
    width: 100%;
    padding: 25px;

    border-radius: 8px;
    border: 0;
    border: 2px solid #6561ad;
    box-sizing: border-box;

    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f5;
`;
