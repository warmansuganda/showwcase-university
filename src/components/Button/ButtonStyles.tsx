import styled from "styled-components";
import { variant } from "styled-system";

import { ColorVariant, SizeVariant } from "src/utils/types";

const colorVariant = variant({
  variants: {
    primary: {
      borderColor: "primary",
      backgroundColor: "primary",
      color: "#fff",
    },
    secondary: {
      borderColor: "secondary",
      backgroundColor: "secondary",
      color: "#fff",
    },
    success: {
      borderColor: "success",
      backgroundColor: "success",
      color: "#fff",
    },
    danger: {
      borderColor: "danger",
      backgroundColor: "danger",
      color: "#fff",
    },
    warning: {
      borderColor: "warning",
      backgroundColor: "warning",
      color: "#fff",
    },
    info: {
      borderColor: "info",
      backgroundColor: "info",
      color: "#fff",
    },
    light: {
      borderColor: "light",
      backgroundColor: "light",
      color: "black",
    },
    dark: {
      borderColor: "dark",
      backgroundColor: "dark",
      color: "#fff",
    },
    neutral: {
      borderColor: "neutral",
      backgroundColor: "neutral",
      color: "#fff",
    },
  },
});

const sizeVariant = variant({
  prop: "size",
  variants: {
    xs: {
      fontSize: "0.75rem",
      lineHeight: "1rem",
      height: "32px",
      padding: "4px",
    },
    sm: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      height: "36px",
      padding: "6px",
    },
    md: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      height: "40px",
      padding: "12px",
    },
    lg: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      height: "44px",
      padding: "12px",
    },
    xl: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      height: "52px",
      padding: "12px",
    },
  },
});

export const ButtonStyle = styled.button`
  &:focus {
    outline: none;
  }
  border: none;
  color: #455a64;
  background: #fff;
  padding: 0;
  width: 100%;
`;

export const LinkStyle = styled.a`
  &:focus {
    outline: none;
  }
  border: none;
  color: #455a64;
  background: #fff;
  padding: 0;
  width: 100%;
`;

interface ButtonWrapperProps {
  size?: SizeVariant;
  variant?: ColorVariant;
  bold?: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  ${sizeVariant}
  ${colorVariant}
  
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  width: 100%;

  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  font-family: Quicksand, sans-serif;

  ${(props) => (props.bold ? "font-weight: bold;" : "")}
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
