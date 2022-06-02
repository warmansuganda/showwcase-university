import { ReactNode } from "react";
import Image from "next/image";

import { Wrapper, MessageWrapper } from "./EmptyStyles";

interface EmptyProps {
  message?: string;
  children?: ReactNode | ReactNode[];
  size?: number;
}

function Empty({ message, children, size = 150 }: EmptyProps) {
  return (
    <Wrapper>
      <Image src="/images/empty.svg" width={size} height={size} />
      {message && <MessageWrapper>{message}</MessageWrapper>}
      {children}
    </Wrapper>
  );
}

export default Empty;
