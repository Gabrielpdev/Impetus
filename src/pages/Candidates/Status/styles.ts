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
  background: #cfbaff;

  padding: 90px 219px;

  display: flex;
  align-items: center;

  > svg {
    background: #fff;
    padding: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;

    margin-right: auto;

    cursor: pointer;
  }
`;

export const Body = styled.body`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 0 220px;
`;

export const Content = styled.div`
  /* width: 100%; */
  background: #fff;
  margin-top: -70px;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-radius: 8px;

  > strong {
    font-family: Archivo;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;

    display: block;
    margin: 20px 0 20px 20px;
  }
`;

export const CandidatesCard = styled.div`
  display: flex;

  li {
    list-style-type: none;
    width: 100%;
    background: #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px;

    > div {
      display: flex;
      align-items: center;
      flex-direction: column;

      span {
        font-family: Archivo;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;

        color: #32264d;
      }

      .telephone {
        font-family: Archivo;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 10px;
        color: rgba(50, 38, 77, 0.6);
      }
    }

    > span {
      font-family: Archivo;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: left;

      border: 0;
      background: none;
      color: #8257e5;
    }

    &:nth-child(2n + 1) {
      background: #fafafa;
    }
  }
`;

export const Steps = styled.div`
  display: flex;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    width: 400px;

    > strong {
      margin-top: 13px;

      font-family: Archivo;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: left;
      color: #32264d;
    }

    > span {
      font-family: Poppins;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 11px;
      letter-spacing: 0em;
      text-align: left;

      color: #6a6180;
    }
  }

  > span {
    margin-left: auto;
    margin-right: 20px;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 11px;
    letter-spacing: 0em;
    color: #6a6180;
  }

  > select {
    height: 25px;
    width: 90px;

    font-family: Archivo;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
