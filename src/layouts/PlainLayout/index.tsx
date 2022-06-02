import React, { ReactNode } from "react";

import Container from "src/components/Container";
import Footer from "src/components/Footer";

import { Wrapper } from "./PlainLayoutStyles";

interface PlainLayoutProps {
  children: ReactNode | ReactNode[];
}

function PlainLayout({ children }: PlainLayoutProps) {
  return (
    <Wrapper>
      <Container>{children}</Container>
      <Footer />
    </Wrapper>
  );
}

export default PlainLayout;
