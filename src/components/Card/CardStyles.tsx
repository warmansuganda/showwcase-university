import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: 6px;
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 24px;
  background-color: #fff;
`;

export const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.light};
  background-color: #fafafa;
  padding: 12px 24px;
`;
