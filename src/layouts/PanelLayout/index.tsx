import React, { ReactNode } from "react";

import Container from "src/components/Container";
import Text from "src/components/Text";
import Footer from "src/components/Footer";

import {
  Wrapper,
  HeaderPanel,
  TitlePanel,
  HeaderWrapper,
} from "./PanelLayoutStyles";

interface PlainLayoutProps {
  children: ReactNode | ReactNode[];
  title?: string;
  leftAccessory?: ReactNode;
  rightAccessory?: ReactNode;
}

function PlainLayout({
  children,
  title,
  leftAccessory,
  rightAccessory,
}: PlainLayoutProps) {
  return (
    <Wrapper>
      <HeaderPanel>
        <Container>
          <HeaderWrapper>
            {leftAccessory}
            <TitlePanel>{title && <Text.H3>{title}</Text.H3>}</TitlePanel>
            {rightAccessory}
          </HeaderWrapper>
        </Container>
      </HeaderPanel>

      <Container>{children}</Container>
      <Footer />
    </Wrapper>
  );
}

export default PlainLayout;
