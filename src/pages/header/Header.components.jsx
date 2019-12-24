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
      <HeaderLink to="education">Educations</HeaderLink>
      <HeaderLink to="skills">Skills</HeaderLink>
      <HeaderLink to="contact">Contact</HeaderLink>
    </HeaderLinkContainer>
  </Header>
);
