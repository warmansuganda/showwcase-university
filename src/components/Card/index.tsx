import React, { ReactNode } from "react";

import { Wrapper, Content, Footer } from "./CardStyles";

interface CardProps {
  children: ReactNode | ReactNode[];
  footer?: ReactNode | ReactNode[];
}

function Card({ children, footer }: CardProps) {
  return (
    <Wrapper>
      <Content>{children}</Content>
      {footer && <Footer>{footer}</Footer>}
    </Wrapper>
  );
}

export default Card;
