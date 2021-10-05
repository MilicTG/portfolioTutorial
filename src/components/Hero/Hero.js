import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of JavaScript Mastery it to help aspiring and established
        developers to take their development skills to take to the next level
        and build awesome apps.
      </SectionText>
      <Button>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
