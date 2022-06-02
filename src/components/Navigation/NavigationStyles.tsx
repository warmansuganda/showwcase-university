import styled from "styled-components";

export const Wrapper = styled.nav`
  flex: 1;
  background: #fff;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const NavTitle = styled.div`
  padding: 12px;
  font-weight: 700;
`;

export const NavItem = styled.a`
  padding: 12px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  transition: background-color 0.5s ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.light};
    border-radius: 6px;
  }
`;
