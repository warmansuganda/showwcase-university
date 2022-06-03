import styled from "styled-components";

export const FormWrapper = styled.form`
  width: 600px;
  @media only screen and (max-width: 576px) {
    width: calc(100vw - 80px);
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 24px;
`;

export const FormAction = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 12px;
`;
