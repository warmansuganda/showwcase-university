import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 64px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  height: 136px;
`;

export const TitlePanel = styled.div`
  flex: 1;
`;
