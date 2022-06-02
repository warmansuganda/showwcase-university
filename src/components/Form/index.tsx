import styled from "styled-components";

import { DirectionType } from "src/utils/types";

interface FormControlProps {
  direction?: DirectionType;
}

export const FormGroup = styled.div<FormControlProps>`
  gap: ${(props) => (props.direction === "row" ? "12px" : 0)};
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  margin-bottom: 8px;
`;

export const FormControl = styled.div`
  flex: 1;
`;

export const FormLabel = styled.label`
  font-weight: 700;
  font-size: 14px;
  padding: 8px 0;
`;
