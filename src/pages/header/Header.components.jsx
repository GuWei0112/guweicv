import React from "react";
import {
  Header,
  HeaderLink,
  HeaderLinkContainer,
  HomeContainer
} from "./header.style";
export default () => (
  <Header>
    <HomeContainer>
      <HeaderLink to="/">Home</HeaderLink>
    </HomeContainer>
    <HeaderLinkContainer>
      <HeaderLink to="proj">Projects</HeaderLink>
      <HeaderLink to="skills">Skills</HeaderLink>
      <HeaderLink to="about">About</HeaderLink>
    </HeaderLinkContainer>
  </Header>
);
