import styled from "styled-components";

export const Panel = styled.div`
  flex: 1;
  display: grid;
  gap: 24px;
  grid-template-columns: 220px 1fr;
  margin-top: 47px;
`;

export const Content = styled.div`
  padding: 0px;
`;

export const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
  overflow: hidden;
`;

export const EducationTitle = styled.div`
  font-weight: 700;
  display: flex;
  font-size: 1.25rem;

  div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const EducationSubTitle = styled.div`
  display: flex;
  font-size: 0.875rem;
  margin: 8px 0;
  align-items: center;

  div:not(:first-child):before {
    content: "|";
    font-size: 0.875rem;
    margin-left: 8px;
    margin-right: 8px;
  }
`;

export const EducationPeriod = styled.div`
  display: flex;

  div:not(:first-child):before {
    content: "-";
    font-size: 10px;
    margin-left: 8px;
    margin-right: 8px;
  }
`;

export const EducationDescription = styled.div`
  margin-top: 12px;
`;

export const EducationAction = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px 100px;
  gap: 12px;
`;
