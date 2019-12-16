import React from "react";
import { Header, HeaderLink, HeaderLinkContainer } from "./header.style";
export default () => (
  <Header>
    <div style={{ width: "70px" }}></div>
    <HeaderLinkContainer>
      <HeaderLink to="education">Educations</HeaderLink>
      <HeaderLink to="skills">Skills</HeaderLink>
      <HeaderLink to="contact">Contact</HeaderLink>
    </HeaderLinkContainer>
  </Header>
);
