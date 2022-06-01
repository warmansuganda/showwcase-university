import Image from "next/image";

import { Wrapper, BrandingText } from "./HeaderStyles";

function Header() {
  return (
    <Wrapper>
      <Image src="/logo.svg" width={32} height={32} />
      <BrandingText>Showwcase University</BrandingText>
    </Wrapper>
  );
}

export default Header;
