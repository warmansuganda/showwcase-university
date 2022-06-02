import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  gap: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
`;

export const BrandText = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: #0070f3;
`;

export const BrandDivider = styled.svg`
  color: ${({ theme }) => theme.colors.light};
`;
