import styled from "styled-components";
import { variant } from "styled-system";

import { SizeVariant, FlexAlign, DirectionType } from "src/utils/types";

const gapVariant = variant({
  prop: "gap",
  variants: {
    xs: {
      gap: "4px",
    },
    sm: {
      gap: "8px",
    },
    md: {
      gap: "12px",
    },
    lg: {
      gap: "16px",
    },
    xl: {
      gap: "20px",
    },
  },
});

interface FlexProps {
  gap?: SizeVariant;
  direction?: DirectionType;
  justifyContent?: FlexAlign;
  alignItems?: FlexAlign;
}

const Flex = styled.div<FlexProps>`
  flex: 1;
  display: flex;
  ${gapVariant};
  direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

Flex.defaultProps = {
  gap: "md",
  direction: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
};

export default Flex;
