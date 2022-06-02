import React from "react";
import { useTranslation } from "react-i18next";

import { Wrapper, Nav, NavTitle, NavItem } from "./NavigationStyles";

function Navigation() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <NavTitle>{t("Showwcase")}</NavTitle>
      <Nav>
        <NavItem className="active">
          University 1 University 1 University 1
        </NavItem>
        <NavItem>University 2</NavItem>
      </Nav>
    </Wrapper>
  );
}

export default Navigation;
