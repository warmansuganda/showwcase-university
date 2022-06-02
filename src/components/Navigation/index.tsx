import Link from "next/link";
import React from "react";

import { Wrapper, Nav, NavTitle, NavItem } from "./NavigationStyles";

interface NavigationItem {
  id: string;
  label: string;
  url: string;
}

interface NavigationProps {
  title?: string;
  data: NavigationItem[];
}

function Navigation({ title, data }: NavigationProps) {
  return (
    <Wrapper>
      {title && <NavTitle>{title}</NavTitle>}
      <Nav>
        {data.map((item, key) => (
          <Link href={item.url}>
            <NavItem key={key}>{item.label}</NavItem>
          </Link>
        ))}
      </Nav>
    </Wrapper>
  );
}

export default Navigation;
