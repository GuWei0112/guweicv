import React from "react";
import about from "../../data/about_data";
import { AboutPage } from "./about.styles";
import About from "../../components/about/about.components";
export default () => (
  <AboutPage>
    <About about={about} />
  </AboutPage>
);
