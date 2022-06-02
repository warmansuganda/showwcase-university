import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ZoomInOut = keyframes`
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.5, 1.5);
  }
  100% {
    transform: scale(1, 1);
  }
`;

export const Animation = styled.div`
  margin: 24px;
  width: 50px;
  height: 50px;
  background: url("/logo.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  animation: ${ZoomInOut} 1s ease infinite;
`;

export const LoadingText = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0.15em;
`;
