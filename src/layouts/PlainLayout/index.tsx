import React, { ReactElement } from "react";
import Container from "src/components/Container";
import { Wrapper } from "./PlainLayoutStyles";

interface PlainLayoutProps {
  children: ReactElement | ReactElement[];
}

function PlainLayout({ children }: PlainLayoutProps) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}

export default PlainLayout;
