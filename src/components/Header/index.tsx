import Image from "next/image";
import Link from "next/link";
import Container from "src/components/Container";
import Flex from "src/components/Flex";

import { HOME } from "src/constants/paths";

import { Wrapper, BrandText, BrandDivider, Logo } from "./HeaderStyles";

function Header() {
  return (
    <Wrapper>
      <Container>
        <Flex justifyContent="space-between">
          <Flex alignItems="center">
            <Link href={HOME}>
              <Logo>
                <Image src="/logo.svg" width={32} height={32} />
              </Logo>
            </Link>
            <BrandDivider
              data-testid="geist-icon"
              fill="none"
              height="32"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              width="32"
            >
              <path d="M16.88 3.549L7.12 20.451" />
            </BrandDivider>
            <BrandText>Showwcase University</BrandText>
          </Flex>
          <a
            href="https://github.com/warmansuganda/showwcase-university"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/images/github.svg" width={32} height={32} />
          </a>
        </Flex>
      </Container>
    </Wrapper>
  );
}

export default Header;
