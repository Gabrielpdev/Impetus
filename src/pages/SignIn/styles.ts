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
  width: 550px;
  height: 90%;
  border-radius: 10px;

  margin-left: 63px;

  div {
    display: flex;
    svg {
      background: #fff;
      padding: 10px;
      width: 40px;
      height: 40px;
      border-radius: 50%;

      cursor: pointer;
    }

    > strong {
      font-family: Roboto;
      font-size: 26px;
      font-style: normal;
      font-weight: 700;
      line-height: 42px;
      letter-spacing: 0em;

      display: block;
      margin-left: 35%;
    }
  }

  > button {
    height: 40px;
    width: 100%;
    margin-top: 35px;

    border-radius: 8px;
    border: 0;
    background: #583c9f;
    border-radius: 8px;

    font-family: Roboto;
    font-size: 16px;
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
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    margin-top: 10px;
    color: #6561ad;
  }

  > input {
    outline: none;
    height: 25px;
    width: 100%;
    padding: 15px;

    border-radius: 8px;
    border: 0;
    border: 2px solid #6561ad;
    box-sizing: border-box;

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
  }
`;

export const ImageContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > strong {
    font-family: Quicksand;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: left;
    width: 429px;
  }
`;
