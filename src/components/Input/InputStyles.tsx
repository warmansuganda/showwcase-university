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
      height: "32px",
      padding: "4px",
      "& input": {
        fontSize: "0.75rem",
        lineHeight: "1rem",
      },
    },
    sm: {
      height: "36px",
      padding: "6px",
      "& input": {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      },
    },
    md: {
      height: "40px",
      padding: "12px",
      "& input": {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      },
    },
    lg: {
      height: "44px",
      padding: "12px",
      "& input": {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      },
    },
    xl: {
      height: "52px",
      padding: "12px",
      "& input": {
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
    },
  },
});

const sizeVariantTextarea = variant({
  prop: "size",
  variants: {
    xs: {
      padding: "4px",
      "& input": {
        fontSize: "0.75rem",
        lineHeight: "1rem",
      },
    },
    sm: {
      padding: "6px",
      "& input": {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      },
    },
    md: {
      padding: "12px",
      "& input": {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      },
    },
    lg: {
      padding: "12px",
      "& input": {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      },
    },
    xl: {
      padding: "12px",
      "& input": {
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
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
  background: #fff;
  flex: 1;
  width: 100%;
`;

export const TextareaStyle = styled.textarea`
  &:focus {
    outline: none;
  }
  border: none;
  background: #fff;
  font-family: Quicksand, sans-serif;
  color: #455a64;
  flex: 1;
  width: 100%;
`;

interface InputWrapperProps {
  size?: SizeVariant;
  variant?: ColorVariant;
  bold?: boolean;
  isTextarea?: boolean;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  ${(props) =>
    !props.isTextarea ? sizeVariant(props) : sizeVariantTextarea(props)}
  ${colorVariant}
  
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  width: 100%;

  border-width: 1px;
  border-style: solid;
  border-radius: 6px;

  input {
    ${(props) => (props.bold ? "font-weight: bold;" : "")}
  }
`;

export const LeftAccessoryWrapper = styled.div`
  position: absolute;
  left: 0;
`;
