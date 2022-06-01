import styled from "styled-components";
import { variant } from "styled-system";

import { ColorVariant, SizeVariant } from "src/utils/types";

const colorVariant = variant({
  variants: {
    primary: {
      borderColor: "primary",
    },
    secondary: {
      borderColor: "secondary",
    },
    success: {
      borderColor: "success",
    },
    danger: {
      borderColor: "danger",
    },
    warning: {
      borderColor: "warning",
    },
    info: {
      borderColor: "info",
    },
    light: {
      borderColor: "light",
    },
    dark: {
      borderColor: "dark",
    },
    neutral: {
      borderColor: "neutral",
    },
  },
});

const sizeVariant = variant({
  prop: "size",
  variants: {
    xs: {
      input: {
        fontSize: "0.75rem",
        lineHeight: "1rem",
      },
    },
    sm: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
    md: {
      "& input": {
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
    },
    lg: {
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
    },
    xl: {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
    },
  },
});

export const InputStyle = styled.input`
  &:focus {
    outline: none;
  }
  border: none;
  font-family: Quicksand, sans-serif;
  color: #455a64;
  flex: 1;
`;

export const TextareaStyle = styled.textarea`
  &:focus {
    outline: none;
  }
  border: none;
  font-family: Quicksand, sans-serif;
  color: #455a64;
  flex: 1;
`;

interface InputWrapperProps {
  block?: boolean;
  size?: SizeVariant;
  variant?: ColorVariant;
  bold?: boolean;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  ${sizeVariant}
  ${colorVariant}
  ${(props) => (props.block ? "flex: 1; width: 100%;" : "")}
  
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;

  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  padding: 1rem 1.25rem;

  input {
    ${(props) => (props.bold ? "font-weight: bold;" : "")}
  }
`;

export const LeftAccessoryWrapper = styled.div`
  position: absolute;
  left: 0;
`;
