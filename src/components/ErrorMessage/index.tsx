import { FieldErrors } from "react-hook-form";
import { ErrorMessage as ErrorMessageHookForm } from "@hookform/error-message";

import styled from "styled-components";

const ErrorMessageStyle = styled.p`
  font-size: 0.875rem;
  line-height: 1rem;
  margin: 0;
  padding: 2px 0;
  color: ${({ theme }) => theme.colors.danger};
`;

interface ErrorMessageProps {
  id: string;
  errors: FieldErrors;
  name: string;
}

function ErrorMessage({ id, errors, name }: ErrorMessageProps) {
  return (
    <ErrorMessageHookForm
      errors={errors}
      name={name}
      render={({ message }) => (
        <ErrorMessageStyle id={id}>{message}</ErrorMessageStyle>
      )}
    />
  );
}

export default ErrorMessage;
