import styled from "styled-components";

export const ModalHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 16px;
`;

export const ModalTitle = styled.div`
  font-weight: bold;
`;

export const ModalContent = styled.div`
  padding: 24px;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ModalClose = styled.svg`
  width: 16px;
  aspect-ratio: 1/1;
  color: ${({ theme }) => theme.colors.info};
  cursor: pointer;
`;
