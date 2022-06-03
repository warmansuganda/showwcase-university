import styled from "styled-components";

export const HeroWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  padding-bottom: 24px;
  @media only screen and (max-width: 576px) {
    flex-direction: column-reverse;
    gap: 0px;
    justify-content: center;
    align-items: center;
  }
`;

export const DecriptionWrapper = styled.div`
  margin-top: 100px;
  @media only screen and (max-width: 576px) {
    margin-top: 0px;
    width: 100%;
    text-align: center;
  }
`;

export const GreetingWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  max-width: 500px;
  margin-bottom: 24px;
`;

export const IlustrationWrapper = styled.div`
  position: relative;
  height: 550px;
  width: 550px;
  @media only screen and (max-width: 576px) {
    height: 400px;
    width: 400px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
`;

export const ButtonEnterWrapper = styled.div`
  width: 160px;
  @media only screen and (max-width: 576px) {
    width: auto;
  }
`;
