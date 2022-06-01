import Image from "next/image";
import Container from "src/components/Container";
import Flex from "src/components/Flex";

import { Wrapper, BrandText } from "./HeaderStyles";

function Header() {
  return (
    <Wrapper>
      <Container>
        <Flex alignItems="center">
          <Image src="/logo.svg" width={32} height={32} />
          <BrandText>Showwcase University</BrandText>
        </Flex>
      </Container>
    </Wrapper>
  );
}

export default Header;
