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
      <HeaderLink to="/guweicv/">Home</HeaderLink>
    </HomeContainer>
    <HeaderLinkContainer>
      <HeaderLink to="/guweicv/proj">Projects</HeaderLink>
      <HeaderLink to="/guweicv/skills">Skills</HeaderLink>
      <HeaderLink to="/guweicv/about">About</HeaderLink>
    </HeaderLinkContainer>
  </Header>
);
