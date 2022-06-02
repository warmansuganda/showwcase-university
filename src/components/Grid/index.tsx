import styled from "styled-components";
import { variant } from "styled-system";

import { SizeVariant, DirectionType } from "src/utils/types";

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

interface GridProps {
  gap?: SizeVariant;
  direction?: DirectionType;
  repeat?: number;
}

const Grid = styled.div<GridProps>`
  display: grid;
  ${gapVariant};
  ${(props) =>
    props.direction === "row"
      ? `grid-template-columns: repeat(${props.repeat}, 1fr)`
      : `grid-template-columns: repeat(${props.repeat}, 1fr)`};
`;

Grid.defaultProps = {
  gap: "md",
  direction: "row",
  repeat: 1,
};

export default Grid;
