import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/common";
import Button from "../../styles/common/Button";
import { LeftSection } from "./HeroStyles";
import { myData } from "../../data/info";

const Hero = (props) => {
  let [{ name, jobTitle, lastProject, resume, lastProjectName, summary }] =
    React.useState(myData[0]);

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            <span style={{ fontSize: "1.7rem" }}>Hi i'm {name} </span>
            <br />
            {jobTitle} <br />
          </SectionTitle>
          <SectionText>
            {summary.third}
            {/* i have
            a steady source of motivation that drives me to do my best in
            my last Project<a href={`https://${lastProject}`} target="_blank"> {lastProjectName} </a>, this passion led me to challenge myself
            daily and learn new skills that helped me to do better work */}
          </SectionText>
          <Button onClick={props.handleClick}>
            <a href={resume} download>
              {" "}
              Downlaod Resume
            </a>
          </Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;