import styled from "styled-components";
import { variant } from "styled-system";

import { ColorVariant, SizeVariant } from "src/utils/types";

const sizeVariant = variant({
  prop: "size",
  variants: {
    xs: {
      fontSize: "0.75rem",
      lineHeight: "1rem",
    },
    sm: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
    md: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
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

interface TextProps {
  variant?: ColorVariant | "link";
  size?: SizeVariant;
  weight?: 500 | 600 | 700 | "bold";
}

const Text = styled.text<TextProps>`
  ${sizeVariant}
  font-weight: ${(props) => props.weight || 500};
  color: ${(props) => props.theme.colors[props.variant || "neutral"]};
`;

interface HeadingProps {
  variant?: ColorVariant | "link";
}

const H1 = styled.h1<HeadingProps>`
  font-size: 3rem;
  line-height: 1;
  color: ${(props) => props.variant};
`;

export default Object.assign(Text, {
  H1,
});
